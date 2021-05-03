// @flow
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { translate } from '../../../i18n';
import { connect } from '../../../redux';
import { _abstractMapStateToProps } from '../../functions';

import { StyleType } from '../../../styles';

import { type Props as BaseProps } from './BaseDialog';
import BaseSubmitDialog from './BaseSubmitDialog';
import { brandedDialog } from './styles';

type Props = BaseProps & {
    _dialogStyles: StyleType,

    t: Function
}

/**
 * Implements a submit dialog component that can have free content.
 */
class CustomSubmitDialog extends BaseSubmitDialog<Props, *> {
    /**
     * Implements {@code BaseSubmitDialog._renderSubmittable}.
     *
     * @inheritdoc
     */
    _renderSubmittable() {
        return this.props.children;
    }

    _renderAdditionalButtons() {
        const { _dialogStyles, t } = this.props;

        return (
            <TouchableOpacity
                onPress={ this._onCancel }
                style={[
                    _dialogStyles.button,
                    brandedDialog.buttonFarRight,
                    { borderLeftWidth: 2, borderLeftColor: 'rgba(0, 0, 0, 0.8)' }
                ]}>
                <Text style = { _dialogStyles.buttonLabel }>
                    { t('dialog.Cancel') }
                </Text>
            </TouchableOpacity>
        )
    }
}

export default translate(
    connect(_abstractMapStateToProps)(CustomSubmitDialog));
