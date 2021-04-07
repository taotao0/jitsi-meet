import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { LANG_PREFIX } from './constants'
import {
    INTRO_PRODUCTION_ROUTE_PATH,
    INTRO_FUNCTION_ROUTE_PATH,
    PRICES_POLICY_ROUTE_PATH,
    MY_PAGE_ROUTE_PATH
} from '../usee_config'

const NavigationPresenter = (props) => {
    const { t } = useTranslation()

    return (
        <nav className = 'nav-wrapper'>
            <ul className = 'nav-menu'>
                <li>
                    <NavLink
                        activeClassName = 'nav-menu-active'
                        to = {INTRO_PRODUCTION_ROUTE_PATH}>
                        { t(`${LANG_PREFIX}.introProduction`) }
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        activeClassName = 'nav-menu-active'
                        to = {INTRO_FUNCTION_ROUTE_PATH}>
                        { t(`${LANG_PREFIX}.introFunction`) }
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        activeClassName = 'nav-menu-active'
                        to = {PRICES_POLICY_ROUTE_PATH}>
                        { t(`${LANG_PREFIX}.pricesPolicy`) }
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        activeClassName = 'nav-menu-active'
                        to = {MY_PAGE_ROUTE_PATH}>
                        { t(`${LANG_PREFIX}.myPage`) }
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavigationPresenter