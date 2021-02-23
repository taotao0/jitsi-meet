// @flow

import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { ColorSchemeRegistry } from '../../base/color-scheme';
import { BottomSheet, hideDialog, isDialogOpen } from '../../base/dialog';
import { type Item } from '../../base/react/Types';
import { connect } from '../../base/redux';
import { StyleType } from '../../base/styles';
import { translate } from '../../base/i18n';
import { ColorPalette } from '../../base/styles'

import { deleteRecentListEntry } from '../actions';
import { setActiveModalId } from '../../base/modal';
import { DIAL_IN_SUMMARY_VIEW_ID } from '../../invite/constants';

import DeleteItemButton from './DeleteItemButton.native';
import ShowDialInInfoButton from './ShowDialInInfoButton.native';
import styles from './styles';

type Props = {

    /**
     * The Redux dispatch function.
     */
    dispatch: Function,

    /**
     * Item being rendered in this menu.
     */
    item: Item,

    /**
     * The color-schemed stylesheet of the BottomSheet.
     */
    _bottomSheetStyles: StyleType,

    /**
     * True if the menu is currently open, false otherwise.
     */
    _isOpen: boolean,
    t: Function
}

// eslint-disable-next-line prefer-const
let RecentListItemMenu_;

/**
 * Class to implement a popup menu that opens upon long pressing a recent list item.
 */
class RecentListItemMenu extends PureComponent<Props> {
    /**
     * Constructor of the component.
     *
     * @inheritdoc
     */
    constructor(props: Props) {
        super(props);

        this._onCancel = this._onCancel.bind(this);
        this._renderMenuHeader = this._renderMenuHeader.bind(this);
    }

    /**
     * Implements {@code Component#render}.
     *
     * @inheritdoc
     */
    render() {
        const { _bottomSheetStyles, item, t, dispatch } = this.props;
        const buttonProps = {
            afterClick: this._onCancel,
            itemId: item.id,
            showLabel: true,
            styles: _bottomSheetStyles.buttons
        };

        return (
            <BottomSheet
                onCancel = { this._onCancel }
                renderHeader = { this._renderMenuHeader }>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        accessibilityLabel={t('welcomepage.recentListDelete')}
                        style={[styles.buttonStyle, { backgroundColor: ColorPalette.blue }]}
                        onPress={() => {
                            dispatch(deleteRecentListEntry(item.id))
                            this._onCancel()
                        }}>
                        <Text style={{ color: 'white' }}>{t('welcomepage.recentListDelete')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        disabled
                        accessibilityLabel={t('welcomepage.info')}
                        style={[styles.buttonStyle, { backgroundColor: ColorPalette.blue, opacity: 0.8 }]}
                        onPress={() => {
                            dispatch(setActiveModalId(DIAL_IN_SUMMARY_VIEW_ID, { summaryUrl: item.id.url }));
                            this._onCancel()
                        }}>
                        <Text style={{ color: 'white' }}>{t('welcomepage.info')}</Text>
                    </TouchableOpacity>
                    {/* <DeleteItemButton { ...buttonProps } />
                    <ShowDialInInfoButton { ...buttonProps } /> */}
                </View>
            </BottomSheet>
        );
    }

    _onCancel: () => boolean;

    /**
     * Callback to hide this menu.
     *
     * @private
     * @returns {boolean}
     */
    _onCancel() {
        if (this.props._isOpen) {
            this.props.dispatch(hideDialog(RecentListItemMenu_));

            return true;
        }

        return false;
    }

    _renderMenuHeader: () => React$Element<any>;

    /**
     * Function to render the menu's header.
     *
     * @returns {React$Element}
     */
    _renderMenuHeader() {
        const { _bottomSheetStyles, item } = this.props;

        return (
            <View
                style = { [
                    _bottomSheetStyles.sheet,
                    styles.entryNameContainer,
                ] }>
                <Text
                    ellipsizeMode = { 'middle' }
                    numberOfLines = { 1 }
                    style = { styles.entryNameLabel }>
                    { item.title }
                </Text>
            </View>
        );
    }
}

/**
 * Function that maps parts of Redux state tree into component props.
 *
 * @param {Object} state - Redux state.
 * @private
 * @returns {Props}
 */
function _mapStateToProps(state) {
    return {
        _bottomSheetStyles: ColorSchemeRegistry.get(state, 'BottomSheet'),
        _isOpen: isDialogOpen(state, RecentListItemMenu_)
    };
}

RecentListItemMenu_ = translate(connect(_mapStateToProps)(RecentListItemMenu));

export default RecentListItemMenu_;
