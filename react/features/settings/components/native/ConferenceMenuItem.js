import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { translate } from '../../../base/i18n';

type Props = {
    isSeparator: ?boolean,
    iconName: string,
    label: string,
    children: React$Node,
    t: Function
}

const ConferenceMenuItem = (props) => {
    const { isSeparator = false, iconName, label, children, t } = props
    const styles = StyleSheet.create({
        rowContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            minHeight: 65,
            paddingHorizontal: 8,
        },
        iconLabelContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        labelStyle: {
            marginLeft: 10,
            fontWeight: "bold"
        }
    })

    return (
        <View style={[styles.rowContainer, isSeparator && { borderBottomWidth: 1, borderBottomColor: 'rgb(245, 245, 245)' }]}>
            <View style={styles.iconLabelContainer}>
                <Feather name={iconName} size={30} color='gray' />
                <Text style={styles.labelStyle}>{t(label)}</Text>
            </View>
            {children}
        </View>
    )
}

export default translate(ConferenceMenuItem)