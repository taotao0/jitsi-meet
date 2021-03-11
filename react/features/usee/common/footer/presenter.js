import React from 'react'

import FooterMenuArea from './components/footer-menu-area'
import FooterInfoArea from './components/footer-info-area'

const FooterPresenter = (props) => {
    return(
        <footer className = 'footer-container'>
            <FooterMenuArea />
            <FooterInfoArea { ...props } />
        </footer>
    )
}

export default FooterPresenter