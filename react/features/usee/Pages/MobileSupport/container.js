import React, { useCallback } from 'react'

import MobileSupportPresenter from './presenter'

import {
    USEE_APP_STORE_LINK,
    USEE_PLAY_STORE_LINK
} from '../../usee_config'

const MobileSupportContainer = () => {

    const _handleStoreBtnClicked = useCallback((event) => {
        event.currentTarget.name === 'appStore'
            ? window.open(USEE_APP_STORE_LINK)
            : window.open(USEE_PLAY_STORE_LINK)
    }, [])

    return (
        <MobileSupportPresenter handleStoreBtnClicked = { _handleStoreBtnClicked } />
    )
}

export default MobileSupportContainer