import React, { Component } from 'react';

import { translate } from '../../base/i18n';
import { connect } from '../../base/redux';

import { Dialog } from '../../base/dialog';

import { userResetPasswordAction } from '../actions';

/**
 * The pattern used to validate ID, password
 * @type {string}
 */

type Props = {
    dispatch: Function,
    t: Function
};


/**
 * Implements a React {@link Component} which displays the login dialog
  *
 * @extends Component
 */
class UserResetDialog extends Component {
    constructor(props) {
        super(props);

        this._onEmailChange = this._onEmailChange.bind(this);
        this._onFormSubmit = this._onFormSubmit.bind(this);
    }

    state = {
        email: '',
        emailPlaceholder: ''
    };

    _onEmailChange(event) {
        this.setState({
            email: event.target.value
        });
    }

    _onFormSubmit(event) {
        const { dispatch } = this.props;
        // FIXME : _onFormSubmet is called from two path
        // Dialog.onSubmit
        // form onSubmit
        // one of two path -> event is undefined
        // following check is not good, so fix this problem
        if(event) {
            event.preventDefault();
        }

        const email = this.state.email;
        console.log(email);

        dispatch(userResetPasswordAction(email));

        return true;
    }

    componentDidMount() {
        document.body.classList.add('welcome-page');
    }

    componentWillUnmount() {
        document.body.classList.remove('welcome-page');
    }
    
    //FIXME : UI/UX, layout, css
    render() {
        const { t } = this.props;

        return (
            <Dialog
                hideCancelButton = { false }
                submitDisabled = { false }
                onSubmit = { this._onFormSubmit }
                okKey = 'dialog.done'
                titleKey = 'dialog.resetTitle'
                width = 'small'>
                <form onSubmit = { this._onFormSubmit }>
                    <div>Email:        </div>
                    <input
                        aria-disabled = 'false'
                        aria-label = 'Email'
                        autoFocus = { true }
                        className = 'enter-room-input'
                        id = 'user_email_field'
                        onChange = { this._onEmailChange }
                        placeholder = { this.state.emailPlaceholder }
                        title = { t('welcomepage.emailAllowedChars') }
                        type = 'email'
                        value = { this.state.email } />
                    <br/>
                </form>
            </Dialog>
        );
    }
}

export default translate(connect()(UserResetDialog));