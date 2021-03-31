import React from 'react'
import { Link } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

const NavigationPresenter = (props) => {
    const { t } = useTranslation()

    return (
        <nav className = 'nav-wrapper'>
            <Link to = '/'>
                <img
                    src = '../../../../images/usee-logo.png'
                    alt = 'usee-logo' />
            </Link>
            <ul className = 'nav-menu'>
                <li>
                    <Link
                        className = 'nav-menu-item'
                        to = '/login'>
                        { t('usee.globalMenu.login') }    
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavigationPresenter