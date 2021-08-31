// @flow

import _ from 'lodash';
import React from 'react';

import VideoLayout from '../../../../../modules/UI/videolayout/VideoLayout';
import { getConferenceNameForTitle } from '../../../base/conference';
import { connect, disconnect } from '../../../base/connection';
import { translate } from '../../../base/i18n';
import { connect as reactReduxConnect } from '../../../base/redux';
import { Chat } from '../../../chat';
import { Filmstrip } from '../../../filmstrip';
import { CalleeInfoContainer } from '../../../invite';
import { LargeVideo } from '../../../large-video';
import { KnockingParticipantList, LobbyScreen } from '../../../lobby';
import { Prejoin, isPrejoinPageVisible } from '../../../prejoin';
import { fullScreenChanged, showToolbox } from '../../../toolbox/actions.web';
import { Toolbox } from '../../../toolbox/components/web';
import { LAYOUTS, getCurrentLayout } from '../../../video-layout';
import { maybeShowSuboptimalExperienceNotification } from '../../functions';
import {
    AbstractConference,
    abstractMapStateToProps
} from '../AbstractConference';
import type { AbstractProps } from '../AbstractConference';
import {
    isParticipantModerator,
    PARTICIPANT_ROLE,
} from '../../../base/participants';

import Labels from './Labels';
import { default as Notice } from './Notice';


import { changeConferenceMode } from '../../ducks'
import axios from 'axios'
import { jitsiLocalStorage } from '@jitsi/js-utils';

declare var APP: Object;
declare var interfaceConfig: Object;

/**
 * DOM events for when full screen mode has changed. Different browsers need
 * different vendor prefixes.
 *
 * @private
 * @type {Array<string>}
 */
const FULL_SCREEN_EVENTS = [
    'webkitfullscreenchange',
    'mozfullscreenchange',
    'fullscreenchange'
];

/**
 * The CSS class to apply to the root element of the conference so CSS can
 * modify the app layout.
 *
 * @private
 * @type {Object}
 */
const LAYOUT_CLASSNAMES = {
    [LAYOUTS.HORIZONTAL_FILMSTRIP_VIEW]: 'horizontal-filmstrip',
    [LAYOUTS.TILE_VIEW]: 'tile-view',
    [LAYOUTS.VERTICAL_FILMSTRIP_VIEW]: 'vertical-filmstrip'
};

/**
 * The type of the React {@code Component} props of {@link Conference}.
 */
type Props = AbstractProps & {

    /**
     * Whether the local participant is recording the conference.
     */
    _iAmRecorder: boolean,

    /**
     * Returns true if the 'lobby screen' is visible.
     */
    _isLobbyScreenVisible: boolean,

    /**
     * The CSS class to apply to the root of {@link Conference} to modify the
     * application layout.
     */
    _layoutClassName: string,

    /**
     * Name for this conference room.
     */
    _roomName: string,

    /**
     * If prejoin page is visible or not.
     */
    _showPrejoin: boolean,
    _isWebinar:boolean,
    _isHost:Boolean,
    dispatch: Function,
    t: Function
}

/**
 * The conference page of the Web application.
 */
class Conference extends AbstractConference<Props, *> {
    _onFullScreenChange: Function;
    _onShowToolbar: Function;
    _originalOnShowToolbar: Function;

    /**
     * Initializes a new Conference instance.
     *
     * @param {Object} props - The read-only properties with which the new
     * instance is to be initialized.
     */
    constructor(props) {
        super(props);

        // Throttle and bind this component's mousemove handler to prevent it
        // from firing too often.
        this._originalOnShowToolbar = this._onShowToolbar;
        //this.props._isWebinar = true;
        
        this._onShowToolbar = _.throttle(
            () => this._originalOnShowToolbar(),
            100,
            {
                leading: true,
                trailing: false
            });

        // Bind event handler so it is only bound once for every instance.
        this._onFullScreenChange = this._onFullScreenChange.bind(this);
    }

    /**
     * Start the connection and get the UI ready for the conference.
     *
     * @inheritdoc
     */
    componentDidMount() {
        document.title = `${this.props._roomName} | ${interfaceConfig.APP_NAME}`;
        
        this._start();
    }

    /**
     * Calls into legacy UI to update the application layout, if necessary.
     *
     * @inheritdoc
     * returns {void}
     */
    componentDidUpdate(prevProps) {
        if (this.props._shouldDisplayTileView
            === prevProps._shouldDisplayTileView) {
            return;
        }

        // TODO: For now VideoLayout is being called as LargeVideo and Filmstrip
        // sizing logic is still handled outside of React. Once all components
        // are in react they should calculate size on their own as much as
        // possible and pass down sizings.
        VideoLayout.refreshLayout();
    }

    /**
     * Disconnect from the conference when component will be
     * unmounted.
     *
     * @inheritdoc
     */
    componentWillUnmount() {
        APP.UI.unbindEvents();

        FULL_SCREEN_EVENTS.forEach(name =>
            document.removeEventListener(name, this._onFullScreenChange));

        APP.conference.isJoined() && this.props.dispatch(disconnect());
    }

    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        const {
            _iAmRecorder,
            _isLobbyScreenVisible,
            _layoutClassName,
            _showPrejoin
        } = this.props;
        const hideLabels = _iAmRecorder;

        return (
            <div
                className = { _layoutClassName }
                id = 'videoconference_page'
                onMouseMove = { this._onShowToolbar }>

                <Notice />
                <div id = 'videospace'>
                    <LargeVideo />
                    <KnockingParticipantList />
                    <Filmstrip />
                    { hideLabels || <Labels /> }
                </div>

                { _showPrejoin || _isLobbyScreenVisible || <Toolbox /> }
                <Chat />

                { this.renderNotificationsContainer() }

                <CalleeInfoContainer />

                { _showPrejoin && <Prejoin />}
            </div>
        );
    }

    /**
     * Updates the Redux state when full screen mode has been enabled or
     * disabled.
     *
     * @private
     * @returns {void}
     */
    _onFullScreenChange() {
        this.props.dispatch(fullScreenChanged(APP.UI.isFullScreen()));
    }

    /**
     * Displays the toolbar.
     *
     * @private
     * @returns {void}
     */
    _onShowToolbar() {
        this.props.dispatch(showToolbox());
    }

    /**
     * Change conference mode ui
     * 
     */
    _changeConferenceUI(){
        const CONFERENCE_BUTTONS = [
            'microphone', 'camera', 'closedcaptions', 'desktop', 'fullscreen',
            'fodeviceselection', 'hangup', 'profile', 'chat', 'recording',  
            'etherpad', 'sharedvideo', 'settings', 'raisehand',
            'videoquality', 'filmstrip', 'invite', 'feedback', 'stats', 'shortcuts',
            'tileview', 'videobackgroundblur', 'download', 'help', 'mute-everyone', 'security'
        ];       
        const WEBINAR_HOST_BUTTONS = [
            'microphone', 'camera', 'fullscreen',
            'hangup', 'profile', 'chat', 'recording',  
            'settings', 'videoquality', 'invite', 'feedback',
            'videobackgroundblur', 'help', 'security'
        ]  
        const WEBINAR_GUEST_BUTTONS = [
            'hangup', 'profile', 'chat', 'recording',  
            'videoquality', 'feedback',
            'videobackgroundblur', 'help', 'security'              
        ]  

        const loginInfo = JSON.parse(jitsiLocalStorage.getItem('features/usee/Pages/Login'));
        /**
         * Room name get
         * Login check using LocalStorage(is Member? Visitor?)
         * user room name compare with room display name
         *  
         */
        console.log("loginInfo",loginInfo);
        if(this.props._isWebinar&&loginInfo.userStatus==='VISITOR'){//GUEST WEBINAR
            interfaceConfig.TOOLBAR_BUTTONS=WEBINAR_GUEST_BUTTONS;
            console.log("NOT HOST&WEBINAR&VISITOR");
        }else if(this.props._isWebinar&&loginInfo.userStatus==='MEMBER'){//HOST WEBINAR
            if(loginInfo.loginUserInfo.personal_room_name===this.props._roomName.replaceAll(' ','-')){
                interfaceConfig.TOOLBAR_BUTTONS=WEBINAR_HOST_BUTTONS;
                console.log("HOST&WEBINAR");
            }else{
                interfaceConfig.TOOLBAR_BUTTONS=WEBINAR_GUEST_BUTTONS;
                console.log("NOT HOST&WEBINAR");  
            }
        }else{  //CONFERENCE
            interfaceConfig.TOOLBAR_BUTTONS=CONFERENCE_BUTTONS;
            console.log("CONFERENCE");
        }
    }

    async _checkConferenceMode(roomName){
        const dashRoomName = roomName.replaceAll(' ','-');
        const url = '/api/v1/Room/RoomType/'+dashRoomName;//+roomName
        const ret = await axios({
            method: 'get',
            url: url
        });
        
        if(ret.data.result==='WEBINAR')return true;
        else return false;
    }
    /**
     * Until we don't rewrite UI using react components
     * we use UI.start from old app. Also method translates
     * component right after it has been mounted.
     *
     * @inheritdoc
     */
    async _start() {
        
        APP.UI.start();

        APP.UI.registerListeners();
        APP.UI.bindEvents();
        FULL_SCREEN_EVENTS.forEach(name =>
            document.addEventListener(name, this._onFullScreenChange));

        const { dispatch, t } = this.props;
        const ret = await this._checkConferenceMode(this.props._roomName);
        /**
         * Webinar mode check
         * Host check
        */
        dispatch(changeConferenceMode(ret));
        dispatch(connect());
        this._changeConferenceUI();
        maybeShowSuboptimalExperienceNotification(dispatch, t);
    }
    
}

/**
 * Maps (parts of) the Redux state to the associated props for the
 * {@code Conference} component.
 *
 * @param {Object} state - The Redux state.
 * @private
 * @returns {Props}
 */
function _mapStateToProps(state) {
    return {
        ...abstractMapStateToProps(state),
        _isHost: jitsiLocalStorage.getItem('features/usee/Pages/Login'),
        _isWebinar: state['features/conference'].isWebinar,
        _iAmRecorder: state['features/base/config'].iAmRecorder,
        _isLobbyScreenVisible: state['features/base/dialog']?.component === LobbyScreen,
        _layoutClassName: LAYOUT_CLASSNAMES[getCurrentLayout(state)],
        _roomName: getConferenceNameForTitle(state),
        _showPrejoin: isPrejoinPageVisible(state)
    };
}

export default reactReduxConnect(_mapStateToProps)(translate(Conference));
