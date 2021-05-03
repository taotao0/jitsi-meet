// @flow

import React from 'react';
import { View, Text } from 'react-native';

import { ColorSchemeRegistry } from '../../../base/color-scheme';
import { ConfirmDialog } from '../../../base/dialog';
import { translate } from '../../../base/i18n';
import { connect } from '../../../base/redux';
import { StyleType } from '../../../base/styles';
import AbstractMuteEveryoneDialog, {
    abstractMapStateToProps,
    type Props as AbstractProps } from '../AbstractMuteEveryoneDialog';

type Props = AbstractProps & {

    /**
     * The color-schemed stylesheet of the base/dialog feature.
     */
    _dialogStyles: StyleType,
}

/**
 * A React Component with the contents for a dialog that asks for confirmation
 * from the user before muting all remote participants.
 *
 * @extends AbstractMuteEveryoneDialog
 */
class MuteEveryoneDialog extends AbstractMuteEveryoneDialog<Props> {

    /**
     * Implements {@code Component#render}.
     *
     * @inheritdoc
     */
    render() {
        return (
            <ConfirmDialog
                okKey = 'dialog.Yes'
                onSubmit = { this._onSubmit } >
                <View>
                    <View style={{ marginTop: 5, marginBottom: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center', color: '#2c2c54' }}>{this.props.t('toolbar.muteEveryone')}</Text>
                    </View>
                    <Text style = { this.props._dialogStyles.text }>
                        { `${this.props.title} \n ${this.props.content}` }
                    </Text>
                </View>
            </ConfirmDialog>
        );
    }

    _onSubmit: () => boolean;
}

/**
 * Maps part of the Redux state to the props of this component.
 *
 * @param {Object} state - The Redux state.
 * @param {Props} ownProps - The own props of the component.
 * @returns {{
    *     _dialogStyles: StyleType
    * }}
 */
function _mapStateToProps(state: Object, ownProps: Props) {
    return {
        ...abstractMapStateToProps(state, ownProps),
        _dialogStyles: ColorSchemeRegistry.get(state, 'Dialog')
    };
}

export default translate(connect(_mapStateToProps)(MuteEveryoneDialog));
