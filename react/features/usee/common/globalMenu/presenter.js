import React from 'react'
import { Link } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

const GlobalMenuPresenter = (props) => {
    const { t } = useTranslation()

    return (
        <header className = 'gm-header'>
            <nav className = 'gm-navbar'>
                <Link to = '/'>
                    <img
                        src = '../../../../images/usee-logo.png'
                        alt = 'usee-logo' />
                </Link>
                <ul className = 'gm-menu'>
                    <li>
                        <Link
                            className = 'gm-menu-item'
                            to = '/login'>
                            { t('usee.globalMenu.login') }    
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default GlobalMenuPresenter