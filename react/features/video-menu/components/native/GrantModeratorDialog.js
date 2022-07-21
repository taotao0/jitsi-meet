// @flow

import React from 'react';

import { ConfirmDialog } from '../../../base/dialog';
import { translate } from '../../../base/i18n';
import { connect } from '../../../base/redux';
import AbstractGrantModeratorDialog, { abstractMapStateToProps }
    from '../AbstractGrantModeratorDialog';

/**
 * Dialog to confirm a remote participant kick action.
 */
class GrantModeratorDialog extends AbstractGrantModeratorDialog {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        return (
            <ConfirmDialog
                title = {this.props.t('dialog.grantModeratorTitle')}
                contentKey = 'dialog.grantModeratorDialog'
                descriptionKey = {
                    `${this.props.t('dialog.grantModeratorDialog',
                        { participantName: this.props.participantName })}`
                }
                onSubmit = { this._onSubmit } />
        );
    }

    _onSubmit: () => boolean;
}

export default translate(connect(abstractMapStateToProps)(GrantModeratorDialog));
