import React, { Component } from 'react';

import { translate } from '../../base/i18n';
import { connect } from '../../base/redux';

import { Dialog } from '../../base/dialog';

/**
 * The pattern used to validate ID.
 * @type {string}
 */
export const USER_ID_VALIDATE_PATTERN_STR = '^([a-zA-Z0-9_]){6,50}$';
export const USER_PASSWORD_VALIDATE_PATTERN_STR = '(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*+`~=?\|<>/]).{8,50}$';

/**
 * Implements a React {@link Component} which displays the component
 * {@code VideoQualitySlider} in a dialog.
 *
 * @extends Component
 */
class UserLoginDialog extends Component {
    constructor(props) {
        super(props);

        this._onIdChange = this._onIdChange.bind(this);
        this._onPasswordChange = this._onPasswordChange.bind(this);
    }

    state = {
        id: '',
        password: '',
        idPlaceholder: '',
        passwordPlaceHolder: ''
    };

    _onIdChange(event) {
        console.log(event.target.value);
        this.setState({
            id: event.target.value
        });
    }

    _onPasswordChange(event) {
        console.log(event.target.value);
        this.setState({
            password: event.target.value
        });
    }

    componentDidMount() {
        document.body.classList.add('welcome-page');
    }

    componentWillUnmount() {
        document.body.classList.remove('welcome-page');
    }
    
    render() {
        const { t } = this.props;

        return (
            <Dialog
                hideCancelButton = { true }
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
                        autoFocus = { true }
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