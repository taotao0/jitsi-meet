import React, { useState, useCallback, useRef, useLayoutEffect, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'
import queryString from 'query-string'

import {
    doUserLogin,
    loginFailReasonInitialize
} from './ducks'
import LoginPresenter from './presenter'

import { LoginFailReason } from './constants'


const LoginContainer = (props) => {
    const dispatch = useDispatch()

    const query = queryString.parse(useLocation().search)
    const history = useHistory()
    const { failReason } = useSelector(state => state['features/usee/Pages/Login'], [])

    const [ inputs, setInputs ] = useState({
        id: '',
        pwd: ''
    })
    // const [ autoLogin, setAutoLogin ] = useState(false)

    const idInput = useRef()
    const pwdInput = useRef()

    const onChange = useCallback((event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value,
        })
    }, [inputs])

    // const _handleSwitchClicked = useCallback((value) => {
    //     setAutoLogin(value)
    // }, [])

    const _handleLoginBtnClicked = useCallback((event) => {
        const { id, pwd } = inputs

        if ((id === '') || (pwd === '')) {
            id === '' ? idInput.current.focus() : pwdInput.current.focus()
        } else {
            dispatch(
                doUserLogin({ id, pwd, /*autoLogin*/ }, { history, query }))
        }

        event.preventDefault()
    }, [inputs, /*autoLogin*/])

    const _handleLoginInputResetBtnClicked = useCallback((event) => {
        const { id, pwd } = inputs

        if ( id && id.length > 0 && event.currentTarget.name === 'id') {
            setInputs({
                ...inputs,
                id: ''
            })
        } else if ( pwd && pwd.length > 0 && event.currentTarget.name === 'pwd') {
            setInputs({
                ...inputs,
                pwd: ''
            })
        }

        event.preventDefault()
    }, [inputs])

    useEffect(() => {
        return () => {
            dispatch(loginFailReasonInitialize())
        }
    }, [])

    useLayoutEffect(() => {
        failReason &&
            failReason === LoginFailReason.BYID
                ? idInput.current.focus()
                : failReason === LoginFailReason.BYPW
                    ? pwdInput.current.focus()
                    : null
    }, [failReason, idInput, pwdInput])

    console.log('LoginContainer call')

    return (
        <LoginPresenter
            id = { inputs.id }
            pwd = { inputs.pwd }
            //autoLogin = { autoLogin }
            query = { query }
            failReason = { failReason }
            idInput = { idInput }
            pwdInput = { pwdInput }
            loginBtnClicked = { _handleLoginBtnClicked }
            LoginInputResetBtnClicked = { _handleLoginInputResetBtnClicked }
            // handleSwitchClicked = { _handleSwitchClicked }
            onChange = { onChange } />
    )
}

export default LoginContainer