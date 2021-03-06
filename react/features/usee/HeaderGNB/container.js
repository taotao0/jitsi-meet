import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import HeaderGNBPresenter from './presenter'

import { compareCurrentPathToLoginPath } from '../Header/functions'

import { doPersonalRoomJoin } from '../Header/ducks'
import { doUserLogout } from '../Pages/Login/ducks'

const HeaderGNBContainer = () => {
    const dispatch = useDispatch()
    const loginUserInfo = useSelector(state => state['features/usee/Pages/Login'], [])
    const isLoginPath = compareCurrentPathToLoginPath(useLocation().pathname)

    const _logoutBtnClicked = useCallback(() => {
        dispatch(doUserLogout())
    }, [])

    const _personalRoomJoinBtnClicked = useCallback(() => {
        dispatch(doPersonalRoomJoin())
    }, [])

    return (
        <HeaderGNBPresenter
            loginUserInfo = { loginUserInfo }
            showMenu = { !isLoginPath }
            logoutBtnClicked = { _logoutBtnClicked }
            personalRoomJoinBtnClicked = { _personalRoomJoinBtnClicked }/>
    )
}

export default HeaderGNBContainer