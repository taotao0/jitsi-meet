import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link, NavLink } from 'react-router-dom'

import WelcomeUser from './components/WelcomeUser'

import {
    LANG_PREFIX,
    LOGO_HEIGHT
} from './constants'
import {
    COMPANY_LOGO_ALT,
    LOGIN_ROUTE_PATH,
    MEMBER_JOIN_ROUTE_PATH,
} from '../usee_config'
import { UserStatus } from '../Pages/Login/constants'

const HeaderGNBPresenter = (props) => {
    const {
        showMenu,
        loginUserInfo : { userStatus, loginUserInfo },
        logoutBtnClicked
    } = props
    const { t } = useTranslation()

    const isAuth = userStatus === UserStatus.MEMBER

    return (
        <header className = 'gnb-wrapper'>
            <Link to = '/'>
                <img
                    src = './images/usee-logo.png'
                    alt = { COMPANY_LOGO_ALT }
                    height = { LOGO_HEIGHT } />
            </Link>            
            <ul className = 'gnb-menu'>
                <li className = { isAuth && 'gnb-menu-visible' }>
                    <WelcomeUser loginUserInfo = { loginUserInfo } />
                </li>
                <li className = { isAuth && 'gnb-menu-visible' }>
                    <a>
                        { t(`${LANG_PREFIX}.personalRoomJoin`) }
                    </a>
                </li>
                <li className = { showMenu && 'gnb-menu-visible' }>
                    {
                        isAuth
                            ? (
                                <a onClick = {logoutBtnClicked}>
                                    { t(`${LANG_PREFIX}.logout`) }
                                </a>
                            )
                            : (
                                <NavLink
                                    activeClassName = 'gnb-menu-active'
                                    to = { LOGIN_ROUTE_PATH }>
                                    { t(`${LANG_PREFIX}.login`) }
                                </NavLink>
                            )
                    }
                </li>
                <li className = { showMenu && !isAuth && 'gnb-menu-visible' }>
                    <NavLink
                        activeClassName = 'gnb-menu-active'
                        to = { MEMBER_JOIN_ROUTE_PATH }>
                        { t(`${LANG_PREFIX}.memberJoin`)}
                    </NavLink>
                </li>
            </ul>
        </header>
    );
};

export default HeaderGNBPresenter