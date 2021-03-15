import React, { useCallback } from 'react'

import MobilePresenter from './presenter'

import {
    USEE_APP_STORE_LINK,
    USEE_PLAY_STORE_LINK
} from '../../constants'

const MobileContainer = () => {

    const _handleStoreBtnClicked = useCallback((event) => {
        event.currentTarget.name === 'appStore'
            ? window.open(USEE_APP_STORE_LINK)
            : window.open(USEE_PLAY_STORE_LINK)
    }, [])

    return (
        <MobilePresenter handleStoreBtnClicked = { _handleStoreBtnClicked } />
    )
}

export default MobileContainer