// @flow

import { generateRoomWithoutSeparator } from '@jitsi/js-utils/random';
import { Component } from 'react';
import type { Dispatch } from 'redux';

import { openDialog } from '../../base/dialog';
import { UserLoginDialog, UserResetDialog } from '../../user/components';
import { userLogoutSuccess, userGNBConference, userGNBAdmin } from '../../user/actions';
import { getRoomNameId } from '../../user/functions';

import { createWelcomePageEvent, sendAnalytics } from '../../analytics';
import { appNavigate } from '../../app/actions';
import isInsecureRoomName from '../../base/util/isInsecureRoomName';
import { isCalendarEnabled } from '../../calendar-sync';
import { isRecentListEnabled } from '../../recent-list/functions';

/*
import { redirectToStaticPage } from '../../app/actions';
*/

/**
 * {@code AbstractWelcomePage}'s React {@code Component} prop types.
 */
type Props = {

    /**
     * Whether the calendar functionality is enabled or not.
     */
    _calendarEnabled: boolean,

    /**
     * Whether the insecure room name functionality is enabled or not.
     */
    _enableInsecureRoomNameWarning: boolean,

    /**
     * URL for the moderated rooms microservice, if available.
     */
    _moderatedRoomServiceUrl: ?string,

    /**
     * Whether the recent list is enabled
     */
    _recentListEnabled: Boolean,

    /**
     * Room name to join to.
     */
    _room: string,

    /**
     * The current settings.
     */
    _settings: Object,

    /**
     * Whether the user log in.
     */
    _user: Object,

    /**
     * The Redux dispatch Function.
     */
    dispatch: Dispatch<any>
};

/**
 * Base (abstract) class for container component rendering the welcome page.
 *
 * @abstract
 */
export class AbstractWelcomePage extends Component<Props, *> {
    _mounted: ?boolean;

    /**
     * Implements React's {@link Component#getDerivedStateFromProps()}.
     *
     * @inheritdoc
     */
    static getDerivedStateFromProps(props: Props, state: Object) {
        // console.log('-----------> getDerivedStateFromProps start');
        let loginStateTemp = state.loginState;
        let defaultRoomNameIdTemp = state.defaultRoomNameId;
        let gnbTabNumberTemp = 0;
        /* if loginState in props exist, apply it */
        if(typeof(props._user.loginState) != 'undefined') {
            loginStateTemp = props._user.loginState;
        }
        if(typeof(props._user.defaultRoomNameId) != 'undefined') {
            defaultRoomNameIdTemp = props._user.defaultRoomNameId;
        }
        if(typeof(props._user.gnbTabNumber) != 'undefined') {
            gnbTabNumberTemp = props._user.gnbTabNumber;
        }
        // console.log(loginStateTemp);
        // console.log(defaultRoomNameIdTemp);
        // console.log(gnbTabNumberTemp);
        // console.log('-----------> getDerivedStateFromProps end');
        return {
            room: props._room || state.room,
            loginState: loginStateTemp,
            defaultRoomNameId: defaultRoomNameIdTemp,
            gnbTabNumber: gnbTabNumberTemp
        };
    }

    /**
     * Save room name into component's local state.
     *
     * @type {Object}
     * @property {number|null} animateTimeoutId - Identifier of the letter
     * animation timeout.
     * @property {string} generatedRoomname - Automatically generated room name.
     * @property {string} room - Room name.
     * @property {string} roomPlaceholder - Room placeholder that's used as a
     * placeholder for input.
     * @property {nubmer|null} updateTimeoutId - Identifier of the timeout
     * updating the generated room name.
     */
    state = {
        animateTimeoutId: undefined,
        generatedRoomname: '',
        insecureRoomName: false,
        joining: false,
        room: '',
        roomPlaceholder: '',
        updateTimeoutId: undefined,
        loginState: false,
        defaultRoomNameId: '',
        gnbTabNumber: 0
    };

    /**
     * Initializes a new {@code AbstractWelcomePage} instance.
     *
     * @param {Props} props - The React {@code Component} props to initialize
     * the new {@code AbstractWelcomePage} instance with.
     */
    constructor(props: Props) {
        super(props);

        // Bind event handlers so they are only bound once per instance.
        this._animateRoomnameChanging
            = this._animateRoomnameChanging.bind(this);
        this._onJoin = this._onJoin.bind(this);
        this._onJoinUsee = this._onJoinUsee.bind(this);
        this._gnbConference = this._gnbConference.bind(this);
        this._gnbAdmin = this._gnbAdmin.bind(this);
        this._login = this._login.bind(this);
        this._logout = this._logout.bind(this);
        this._register = this._register.bind(this);
        this._reset = this._reset.bind(this);
        this._onCreate = this._onCreate.bind(this);
        this._onRoomChange = this._onRoomChange.bind(this);
        this._renderInsecureRoomNameWarning = this._renderInsecureRoomNameWarning.bind(this);
        this._updateRoomname = this._updateRoomname.bind(this);
    }

    /**
     * Implements React's {@link Component#componentDidMount()}. Invoked
     * immediately after mounting occurs.
     *
     * @inheritdoc
     */
    componentDidMount() {
        this._mounted = true;
        sendAnalytics(createWelcomePageEvent('viewed', undefined, { value: 1 }));
    }

    /**
     * Implements React's {@link Component#componentWillUnmount()}. Invoked
     * immediately before this component is unmounted and destroyed.
     *
     * @inheritdoc
     */
    componentWillUnmount() {
        this._clearTimeouts();
        this._mounted = false;
    }

    _animateRoomnameChanging: (string) => void;

    /**
     * Animates the changing of the room name.
     *
     * @param {string} word - The part of room name that should be added to
     * placeholder.
     * @private
     * @returns {void}
     */
    _animateRoomnameChanging(word: string) {
        let animateTimeoutId;
        const roomPlaceholder = this.state.roomPlaceholder + word.substr(0, 1);

        if (word.length > 1) {
            animateTimeoutId
                = setTimeout(
                    () => {
                        this._animateRoomnameChanging(
                            word.substring(1, word.length));
                    },
                    70);
        }
        this.setState({
            animateTimeoutId,
            roomPlaceholder
        });
    }

    /**
     * Method that clears timeouts for animations and updates of room name.
     *
     * @private
     * @returns {void}
     */
    _clearTimeouts() {
        clearTimeout(this.state.animateTimeoutId);
        clearTimeout(this.state.updateTimeoutId);
    }

    /**
     * Renders the insecure room name warning.
     *
     * @returns {ReactElement}
     */
    _doRenderInsecureRoomNameWarning: () => React$Component<any>;

    _onJoin: () => void;

    /**
     * Handles joining. Either by clicking on 'Join' button
     * or by pressing 'Enter' in room name input field.
     *
     * @protected
     * @returns {void}
     */
    _onJoin() {
        const room = this.state.room || this.state.generatedRoomname;

        sendAnalytics(
            createWelcomePageEvent('clicked', 'joinButton', {
                isGenerated: !this.state.room,
                room
            }));

        if (room) {
            this.setState({ joining: true });

            // By the time the Promise of appNavigate settles, this component
            // may have already been unmounted.
            const onAppNavigateSettled
                = () => this._mounted && this.setState({ joining: false });

            this.props.dispatch(appNavigate(room))
                .then(onAppNavigateSettled, onAppNavigateSettled);
        }
    }

    _onJoinUsee: () => void;

    async _onJoinUsee() {
        const roomName = this.state.room;

        /* check roonName */
        if(!roomName) {
            return;
        }

        let serviceSuccess = false;
        let joinPossible = false;
        let result = null;
        let room = null;

        /* get RoonNameId using back-end service */
        try {
            result = await getRoomNameId(roomName);
            // console.log('-------> getRoomNameId start');
            // console.log(result);
            // console.log('-------> getRoomNameId end');
            serviceSuccess = true;
        } catch (error) {
            console.log('error in getRoomNameId', error);
        }

        /* get result of back-end service */
        if(serviceSuccess) {
            console.log(result);
            /* check status */
            if(result.state === 'success') {
                room = result.roomName;
                joinPossible = true;
            } else {
                alert(`error in joining room(${roomName})`);
            }
        } else {
            /* show error popup */
            alert(`error in joining room(${roomName})`);
        }

        console.log('---------> _onJoin middle start');
        console.log(joinPossible);
        console.log(room);
        console.log('---------> _onJoin middle end');

        /*
        sendAnalytics(
            createWelcomePageEvent('clicked', 'joinButton', {
                isGenerated: !this.state.room,
                room
            }));
        */

        if (joinPossible) {
            this.setState({ joining: true });

            // By the time the Promise of appNavigate settles, this component
            // may have already been unmounted.
            const onAppNavigateSettled
                = () => this._mounted && this.setState({ joining: false });

            this.props.dispatch(appNavigate(room))
                .then(onAppNavigateSettled, onAppNavigateSettled);
        }
    }

    _gnbConference: () => void;

    _gnbConference() {
        // console.log('_gnbConference start ----------------------');
        this.props.dispatch(userGNBConference());
        // console.log('_gnbConference end ----------------------');
    }

    _gnbAdmin: () => void;

    _gnbAdmin() {
        // console.log('_gnbAdmin start ----------------------');
        this.props.dispatch(userGNBAdmin());
        // console.log('_gnbAdmin end ----------------------');
    }

    _login: () => void;

    _login() {
        // console.log('_login start ----------------------');
        this.props.dispatch(openDialog(UserLoginDialog));
        // console.log('_login end ----------------------');
    }

    _logout: () => void;

    _logout() {
        // console.log('_logout start ----------------------');
        this.props.dispatch(userLogoutSuccess());
        // console.log('_logout end ----------------------');
    }

    _register: () => void;

    _register() {
        console.log('_register start ----------------------');
        /*
        this.props.dispatch(redirectToStaticPage(`static/authError.html`));
        */
        console.log('_register end ----------------------');
    }

    _reset: () => void;

    _reset() {
        // console.log('_reset start ----------------------');
        this.props.dispatch(openDialog(UserResetDialog));
        // console.log('_reset end ----------------------');
    }

    _onCreate: () => void;

    /**
     * Create room
     */
    _onCreate() {
        const defaultRoomNameId = this.state.defaultRoomNameId;
        console.log(`----> defaultRoomNameId(${defaultRoomNameId})`);

        console.log('_createRoom start ----------------------');
        console.log(`loginState : ${this.state.loginState}`);

        if(this.state.loginState) {
            const room = defaultRoomNameId;

            /*
            sendAnalytics(
                createWelcomePageEvent('clicked', 'joinButton', {
                    isGenerated: !this.state.room,
                    room
                }));
            */

            if (room) {
                this.setState({ joining: true });

                // By the time the Promise of appNavigate settles, this component
                // may have already been unmounted.
                const onAppNavigateSettled
                    = () => this._mounted && this.setState({ joining: false });

                this.props.dispatch(appNavigate(room))
                    .then(onAppNavigateSettled, onAppNavigateSettled);
            }
        } else {
            /* popup information */
            alert('Please log in to create a conference');
        }
        console.log('_createRoom end   ----------------------');
    }

    _onRoomChange: (string) => void;

    /**
     * Handles 'change' event for the room name text input field.
     *
     * @param {string} value - The text typed into the respective text input
     * field.
     * @protected
     * @returns {void}
     */
    _onRoomChange(value: string) {
        this.setState({
            room: value,
            insecureRoomName: this.props._enableInsecureRoomNameWarning && value && isInsecureRoomName(value)
        });
    }

    _renderInsecureRoomNameWarning: () => React$Component<any>;;

    /**
     * Renders the insecure room name warning if needed.
     *
     * @returns {ReactElement}
     */
    _renderInsecureRoomNameWarning() {
        if (this.props._enableInsecureRoomNameWarning && this.state.insecureRoomName) {
            return this._doRenderInsecureRoomNameWarning();
        }

        return null;
    }

    _updateRoomname: () => void;

    /**
     * Triggers the generation of a new room name and initiates an animation of
     * its changing.
     *
     * @protected
     * @returns {void}
     */
    _updateRoomname() {
        //const generatedRoomname = generateRoomWithoutSeparator();
        //FIXME: to demo
        const generatedRoomname = 'MeetingName';
        const roomPlaceholder = '';
        const updateTimeoutId = setTimeout(this._updateRoomname, 10000);

        this._clearTimeouts();
        this.setState(
            {
                generatedRoomname,
                roomPlaceholder,
                updateTimeoutId
            },
            () => this._animateRoomnameChanging(generatedRoomname));
    }
}

/**
 * Maps (parts of) the redux state to the React {@code Component} props of
 * {@code AbstractWelcomePage}.
 *
 * @param {Object} state - The redux state.
 * @protected
 * @returns {Props}
 */
export function _mapStateToProps(state: Object) {
    return {
        _calendarEnabled: isCalendarEnabled(state),
        _enableInsecureRoomNameWarning: state['features/base/config'].enableInsecureRoomNameWarning || false,
        _moderatedRoomServiceUrl: state['features/base/config'].moderatedRoomServiceUrl,
        _recentListEnabled: isRecentListEnabled(),
        _room: state['features/base/conference'].room,
        _settings: state['features/base/settings'],
        _user: state['features/user']
    };
}
