import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { LANG_PREFIX } from './constants'
import { COMPANY_LOGO_ALT } from '../usee_config'

const NavigationPresenter = (props) => {
    const { t } = useTranslation()

    return (
        <nav className = 'nav-wrapper'>
            <Link to = '/'>
                <img
                    src = '../../../../images/usee-logo.png'
                    alt = { COMPANY_LOGO_ALT } />
            </Link>
            <ul className = 'nav-menu'>
                <li>
                    <Link
                        className = 'nav-menu-item'
                        to = '/myPage'>
                        { t(`${LANG_PREFIX}.myPage`) }
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavigationPresenter