import React from 'react'

import FooterMenuArea from './components/footer-menu-area'
import FooterInfoArea from './components/footer-info-area'

const FooterPresenter = (props) => {
    const {
        langSelect,
        handleSelectChanged,
    } = props

    return(
        <footer className = 'footer-container'>
            <FooterMenuArea />
            <FooterInfoArea 
                langSelect = { langSelect }
                handleSelectChanged = { handleSelectChanged } />
        </footer>
    )
}

export default FooterPresenter