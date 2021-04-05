import React, { useState, useCallback, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'
import queryString from 'query-string'

import { doUserLogin } from './ducks'
import LoginPresenter from './presenter'


const LoginContainer = (props) => {
    const dispatch = useDispatch()

    const query = queryString.parse(useLocation().search)
    const history = useHistory()
    const { failReason } = useSelector(state => state['features/usee/Pages/Login'], [])

    const [ inputs, setInputs ] = useState({
        id: "",
        pwd: ""
    })

    const [ autoLogin, setAutoLogin ] = useState(false)
    const [ modalVisible, setModalVisible ] = useState({
        findId: false,
        findPwd: false
    })

    const idInput = useRef()
    const pwdInput = useRef()

    const { id, pwd } = inputs

    const onChange = useCallback((event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value,
        })
    }, [inputs])

    const _handleSwitchClicked = useCallback((value) => {
        setAutoLogin(value)
    }, [])

    const _handleLoginBtnClicked = useCallback((event) => {
        if ((id === '') || (pwd === '')) {
            id === '' ? idInput.current.focus() : pwdInput.current.focus()
        } else {
            dispatch(
                doUserLogin({ id, pwd, autoLogin }, { history, query }))
        }

        event.preventDefault()
    }, [id, pwd, autoLogin])

    const _handleLoginInputResetBtnClicked = useCallback((event) => {
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
    }, [id, pwd, inputs])

    const _modalOpen = useCallback((event) => {
        setModalVisible({
            ...modalVisible,
            [event.currentTarget.name]: true,
        })
    }, [modalVisible])

    const _modalClose = useCallback((event) => {
        setModalVisible({
            ...modalVisible,
            [event.currentTarget.name]: false,
        })

        event.preventDefault()
    }, [modalVisible])

    return (
        <LoginPresenter
            id = { id }
            pwd = { pwd }
            autoLogin = { autoLogin }
            failReason = { failReason }
            modalVisible = { modalVisible }
            idInput = { idInput }
            pwdInput = { pwdInput }
            loginBtnClicked = { _handleLoginBtnClicked }
            LoginInputResetBtnClicked = { _handleLoginInputResetBtnClicked }
            handleSwitchClicked = { _handleSwitchClicked }
            onChange = { onChange }
            modalOpen = { _modalOpen }
            modalClose = { _modalClose } />
    )
}

export default LoginContainer