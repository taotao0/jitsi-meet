import React, { useState, useCallback } from 'react'

import FooterPresenter from './presenter'
import FooterInfoArea from './components/footer-info-area'

const FooterContainer = () => {
    const [ langSelect, setLangSelect ] = useState()

    const _handleSelectChanged = useCallback((event) => {
        setLangSelect(event.target.value)
    }, [])

    return (
        <FooterPresenter
            langSelect={ langSelect }
            handleSelectChanged={ _handleSelectChanged }/>
    )
}

export default FooterContainer