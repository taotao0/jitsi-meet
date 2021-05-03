// @flow

import { translate } from '../../../base/i18n';
import { IconMore } from '../../../base/icons';
import { AbstractButton, type AbstractButtonProps } from '../../../base/toolbox/components';


type Props = AbstractButtonProps;

/**
 * An implementation of a button to show more menu options.
 */
class MoreOptionsButton extends AbstractButton<Props, any> {
    accessibilityLabel = 'toolbar.accessibilityLabel.moreOptions';
    icon = IconMore;
    // label = 'toolbar.moreOptions';
    label = null;
    // showLabel = false;
}


export default translate(MoreOptionsButton);
