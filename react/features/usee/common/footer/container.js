import React, { useState, useCallback } from 'react'

import { useDispatch } from 'react-redux'

import { setContents } from '../../contents/ducks'

import FooterPresenter from './presenter'
import MobileContainer from '../../contents/mobile'

const FooterContainer = () => {
    const dispatch = useDispatch()

    const [ langSelect, setLangSelect ] = useState()

    const _handleSelectChanged = useCallback((event) => {
        setLangSelect(event.target.value)
    }, [])

    const _handleMobileSupportClicked = useCallback(() => {
        dispatch(setContents(MobileContainer))
    }, [])

    return (
        <FooterPresenter
            langSelect = { langSelect }
            handleSelectChanged = { _handleSelectChanged } 
            handleMobileSupportClicked = { _handleMobileSupportClicked }/>
    )
}

export default FooterContainer