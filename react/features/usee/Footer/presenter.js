import React from 'react'

import FooterMenuArea from './components/FooterMenuArea'
import FooterInfoArea from './components/FooterInfoArea'

const FooterPresenter = (props) => {
    const {
        langSelect,
        handleSelectChanged,
    } = props

    return(
        <footer className = 'ft-wrapper'>
            <FooterMenuArea />
            <FooterInfoArea 
                langSelect = { langSelect }
                handleSelectChanged = { handleSelectChanged } />
        </footer>
    )
}

export default FooterPresenter