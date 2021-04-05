import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import HeaderGNBPresenter from './presenter'

import { compareCurrentPathToLoginPath } from './functions'

import { doUserLogout } from '../Pages/Login/ducks'

const HeaderGNBContainer = () => {
    const dispatch = useDispatch()
    const loginInfo = useSelector(state => state['features/usee/Pages/Login'], [])
    const isLoginPath = compareCurrentPathToLoginPath(useLocation().pathname)

    const _logoutBtnClicked = useCallback(() => {
        dispatch(doUserLogout())
    }, [])

    return (
        <HeaderGNBPresenter
            loginInfo = { loginInfo }
            showMenu = { !isLoginPath }
            logoutBtnClicked = { _logoutBtnClicked } />
    )
}

export default HeaderGNBContainer