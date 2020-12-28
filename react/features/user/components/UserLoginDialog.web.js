import React, { Component } from 'react';

import { Dialog } from '../../base/dialog';

/**
 * The pattern used to validate ID.
 * @type {string}
 */
export const USER_ID_VALIDATE_PATTERN_STR = '^([a-zA-Z0-9_]){6,50}$';

/**
 * Implements a React {@link Component} which displays the component
 * {@code VideoQualitySlider} in a dialog.
 *
 * @extends Component
 */
export default class UserLoginDialog extends Component {
    componentDidMount() {
        super.componentDidMount();

        // document.body.classList.add('welcome-page');
    }
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        return (
            <Dialog
                hideCancelButton = { true }
                okKey = 'dialog.done'
                titleKey = 'dialog.loginTitle'
                width = 'small'>
                <form onSubmit = { this._onFormSubmit }>
                    <input
                        aria-disabled = 'false'
                        aria-label = 'ID'
                        autoFocus = { true }
                        className = 'enter-room-input'
                        id = 'user_id_field'
                        onChange = { this._onRoomChange }
                        pattern = { USER_ID_VALIDATE_PATTERN_STR }
                        placeholder = { this.state.roomPlaceholder }
                        ref = { this._setRoomInputRef }
                        title = { t('welcomepage.roomNameAllowedChars') }
                        type = 'text'
                        value = { this.state.room } />
                </form>
            </Dialog>
        );
    }
}
