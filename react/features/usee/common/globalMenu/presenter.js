import React from 'react'
import { Link } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

const GlobalMenuPresenter = (props) => {
    const {
        handleBtnClicked
    } = props

    const { t } = useTranslation()

    return (
        <header className = 'gm-header'>
            <nav className = 'gm-navbar'>
                <Link to = '/'>
                    <img
                        src = '../../../../images/usee-logo.png'
                        alt = 'usee-logo' />
                </Link>
                {/* <a
                    name = 'logo'
                    onClick = { handleBtnClicked }>
                    <img
                        src = '../../../../images/usee-logo.png'
                        alt = 'usee-logo' />
                </a> */}
                <ul className = 'gm-menu'>
                    <li>
                        <Link to = '/login'>
                            { t('usee.globalMenu.login') }    
                        </Link>
                        {/* <a
                            name = 'login'
                            onClick = { handleBtnClicked }>
                            { t('usee.globalMenu.login') }
                        </a> */}
                    </li>
                    {/* <li>
                        <a>
                            { t('usee.globalMenu.login') }
                        </a>
                    </li> */}
                </ul>
            </nav>
        </header>
    )
}

export default GlobalMenuPresenter