import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import WelcomeUser from './components/WelcomeUser'

import { LANG_PREFIX } from './constants'
import { UserStatus } from '../Pages/Login/constants'
import {
    PRIMARY_ROUTE_PATH,
    INTRO_PRODUCTION_ROUTE_PATH,
    INTRO_FUNCTION_ROUTE_PATH,
    PRICES_POLICY_ROUTE_PATH,
    MY_PAGE_ROUTE_PATH,
    MEMBER_JOIN_ROUTE_PATH,
    LOGIN_ROUTE_PATH,
    COMPANY_LOGO_ALT
} from '../usee_config'

const HeaderPresenter = (props) => {
    const {
        loginState : { userStatus, loginUserInfo },
        showMenu,
        logoutBtnClicked
    } = props
    const { t } = useTranslation()

    const isAuth = userStatus === UserStatus.MEMBER

    return (
        <header className = 'hd-wrapper'>
            <nav>
                <ul className = 'nav-menu'>
                    <li>
                        <Link to = { PRIMARY_ROUTE_PATH }>
                            <img
                                src = './images/logo.png'
                                srcSet = './images/logo@2x.png 2x, ./images/logo@3x.png 3x'
                                alt = { COMPANY_LOGO_ALT } />
                        </Link>  
                    </li>
                    {/* <li>
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
                    </li> */}
                    <li>
                        <NavLink
                            activeClassName = 'nav-menu-active'
                            to = {MY_PAGE_ROUTE_PATH}>
                            { t(`${LANG_PREFIX}.myPage`) }
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <ul className = 'account-menu'>
                <li className = { isAuth && 'account-menu-visible' }>
                    <WelcomeUser loginUserInfo = { loginUserInfo } />
                </li>
                <li className = { showMenu && 'account-menu-visible' }>
                    {
                        isAuth
                            ? (
                                <a onClick = { logoutBtnClicked }>
                                    { t(`${LANG_PREFIX}.logout`) }
                                </a>
                            )
                            : (
                                <NavLink
                                    activeClassName = 'account-menu-active'
                                    to = { LOGIN_ROUTE_PATH }>
                                    { t(`${LANG_PREFIX}.login`) }
                                </NavLink>
                            )
                    }
                </li>
                <li className = { showMenu && !isAuth && 'account-menu-visible' }>
                    <NavLink
                        activeClassName = 'account-menu-active'
                        to = { MEMBER_JOIN_ROUTE_PATH }>
                        { t(`${LANG_PREFIX}.memberJoin`)}
                    </NavLink>
                </li>
            </ul>
        </header>
    )
}

export default HeaderPresenter