// @flow

import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

import { Icon } from '../../icons';

import AbstractToolboxItem from './AbstractToolboxItem';
import type { Props } from './AbstractToolboxItem';

/**
 * Native implementation of {@code AbstractToolboxItem}.
 */
export default class ToolboxItem extends AbstractToolboxItem<Props> {
    /**
     * Renders the {@code Icon} part of this {@code ToolboxItem}.
     *
     * @private
     * @returns {ReactElement}
     */
    _renderIcon() {
        const { styles } = this.props;

        if (this.props.icon === null) {
            return null;
        }
        
        return (
            <Icon
                src = { this.props.icon }
                style = { styles && styles.iconStyle } />
        );
    }

    /**
     * Renders this {@code ToolboxItem}. Invoked by {@link AbstractToolboxItem}.
     *
     * @override
     * @protected
     * @returns {ReactElement}
     */
    _renderItem() {
        const {
            disabled,
            elementAfter,
            onClick,
            showLabel,
            styles,
            toggled
        } = this.props;

        let children = this._renderIcon();

        // XXX When using a wrapper View, apply the style to it instead of
        // applying it to the TouchableHighlight.
        let style = styles && styles.style;

        if (showLabel) {
            // XXX TouchableHighlight requires 1 child. If there's a need to
            // show both the icon and the label, then these two need to be
            // wrapped in a View.
            children = children !== null ? (
                <View style = {style}>
                    { children }
                    <Text style = { [styles && styles.labelStyle, { color: '#2c2c54', fontWeight: 'bold' }] }>
                        { this.label }
                    </Text>
                    { elementAfter }
                </View>
            ) : (
                <View style={style}>
                    <Text style = {[ styles && styles.labelStyle, { marginLeft: 0, color: '#2c2c54', fontWeight: 'bold' } ]}>
                            { this.label }
                        </Text>
                    { elementAfter }
                </View>
            )

            // XXX As stated earlier, the style was applied to the wrapper View
            // (above).
            style = undefined;
        }

        return (
            <TouchableHighlight
                accessibilityLabel = { this.accessibilityLabel }
                accessibilityRole = 'button'
                accessibilityState = {{ 'selected': toggled }}
                disabled = { disabled }
                onPress = { onClick }
                style = {[ style, { justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, borderColor: 'rgba(0, 0, 0, 0.1)' } ]}
                underlayColor = { styles && styles.underlayColor } >
                { children }
            </TouchableHighlight>
        );
    }
}
