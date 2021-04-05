import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { LANG_PREFIX } from './constants'

const NavigationPresenter = (props) => {
    const { t } = useTranslation()

    return (
        <nav className = 'nav-wrapper'>
            <ul className = 'nav-menu'>
                <li>
                    <NavLink
                        activeClassName = 'nav-menu-active'
                        to = '/introProduction'>
                        { t(`${LANG_PREFIX}.introProduction`) }
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        activeClassName = 'nav-menu-active'
                        to = '/introFunction'>
                        { t(`${LANG_PREFIX}.introFunction`) }
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        activeClassName = 'nav-menu-active'
                        to = '/pricesPolicy'>
                        { t(`${LANG_PREFIX}.pricesPolicy`) }
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        activeClassName = 'nav-menu-active'
                        to = '/myPage'>
                        { t(`${LANG_PREFIX}.myPage`) }
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavigationPresenter