import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { compareCurrentPathToLoginPath } from './functions'

import HeaderPresenter from './presenter'

import { doPersonalRoomJoin } from './ducks'
import { doUserLogout } from '../Pages/Login/ducks'

import { USEE_LS_LOGIN_KEY } from '../usee_config'

const HeaderContainer = (props) => {
    const loginState = useSelector(state => state[USEE_LS_LOGIN_KEY], [])
    const dispatch = useDispatch()
    const isLoginPath = compareCurrentPathToLoginPath(useLocation().pathname)

    const _logoutBtnClicked = useCallback(() => {
        dispatch(doUserLogout())
    }, [])

    const _personalRoomJoinBtnClicked = useCallback(() => {
        dispatch(doPersonalRoomJoin())
    }, [])

    return (
        <HeaderPresenter
            loginState = { loginState }
            showMenu = { !isLoginPath }
            logoutBtnClicked = { _logoutBtnClicked }
            personalRoomJoinBtnClicked = { _personalRoomJoinBtnClicked } />
    )
}

export default HeaderContainer