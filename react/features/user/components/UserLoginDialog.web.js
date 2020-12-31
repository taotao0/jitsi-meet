import React, { Component } from 'react';

import { translate } from '../../base/i18n';
import { connect } from '../../base/redux';

import { Dialog } from '../../base/dialog';

import { userLoginAction } from '../actions';

/**
 * The pattern used to validate ID, password
 * @type {string}
 */
// FIXME : USER_ID_VALIDATE_PATTERN_STR
// FIXME : USER_PASSWORD_VALIDATE_PATTERN_STR
export const USER_ID_VALIDATE_PATTERN_STR = '^([a-zA-Z0-9_]){6,50}$';
export const USER_PASSWORD_VALIDATE_PATTERN_STR = '(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*+`~=?\|<>/]).{8,50}$';

type Props = {
    dispatch: Function,
    t: Function
};


/**
 * Implements a React {@link Component} which displays the login dialog
  *
 * @extends Component
 */
class UserLoginDialog extends Component {
    constructor(props) {
        super(props);

        this._onIdChange = this._onIdChange.bind(this);
        this._onPasswordChange = this._onPasswordChange.bind(this);
        this._onFormSubmit = this._onFormSubmit.bind(this);
    }

    state = {
        id: '',
        password: '',
        idPlaceholder: '',
        passwordPlaceHolder: ''
    };

    _onIdChange(event) {
        this.setState({
            id: event.target.value
        });
    }

    _onPasswordChange(event) {
        this.setState({
            password: event.target.value
        });
    }

    _onFormSubmit(event) {
        const { dispatch } = this.props;
        event.preventDefault();

        const id = this.state.id;
        const password = this.state.password;

        dispatch(userLoginAction(id, password));

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
                titleKey = 'dialog.loginTitle'
                width = 'small'>
                <form onSubmit = { this._onFormSubmit }>
                    <div>ID:        </div>
                    <input
                        aria-disabled = 'false'
                        aria-label = 'ID'
                        autoFocus = { true }
                        className = 'enter-room-input'
                        id = 'user_id_field'
                        onChange = { this._onIdChange }
                        pattern = { USER_ID_VALIDATE_PATTERN_STR }
                        placeholder = { this.state.idPlaceholder }
                        title = { t('welcomepage.loginIdAllowedChars') }
                        type = 'text'
                        value = { this.state.id } />
                    <br/>
                    <div>Password:  </div>
                    <input
                        aria-disabled = 'false'
                        aria-label = 'PASSWORD'
                        className = 'enter-room-input'
                        id = 'user_password_field'
                        onChange = { this._onPasswordChange }
                        pattern = { USER_PASSWORD_VALIDATE_PATTERN_STR }
                        placeholder = { this.state.passwordPlaceholder }
                        title = { t('welcomepage.loginPasswordAllowedChars') }
                        type = 'password'
                        value = { this.state.password } />
                </form>
            </Dialog>
        );
    }
}

export default translate(connect()(UserLoginDialog));