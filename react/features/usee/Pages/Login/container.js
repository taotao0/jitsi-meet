import React, { useState, useCallback, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setLoginInfo } from './ducks'

import { useTranslation } from 'react-i18next'

import LoginPresenter from './presenter'
import logininfo from '../../Pages/Login/constants'

import { LANG_PREFIX } from './constants'

const LoginContainer = () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()

    const value = useSelector(state => state['features/usee/contents/login'], [])

    const [ inputs, setInputs ] = useState({
        id: "",
        pwd: ""
    })

    const idInput = useRef()
    const pwdInput = useRef()

    const [ altmsg, setAltMsg ] = useState('')
    const [ isLoginStateSaved, setLoginStateSaved ] = useState(false)
    const [ modalVisible, setModalVisible ] = useState({
        findId: false,
        findPwd: false
    })

    const { id, pwd } = inputs

    const onChange = useCallback((event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value,
        })
    }, [inputs])

    const _handleLoginStateSaved = useCallback((isLoginStateSaved) => {
        setLoginStateSaved(isLoginStateSaved)
    }, [isLoginStateSaved])

    const _handleLoginBtnClicked = useCallback((event) => {
        if ((id === '') || (pwd === '')) {
            id === '' ? idInput.current.focus() : pwdInput.current.focus()
            setAltMsg('')
        } else {
            const _obj = logininfo.find((elem) => {
                return elem.id === id
            })
    
            _obj === undefined
                ? setAltMsg(t(`${LANG_PREFIX}.errMsg`))
                : _obj.pwd === pwd
                    ? setAltMsg("")
                    : setAltMsg(t(`${LANG_PREFIX}.errMsg`))

            dispatch(setLoginInfo(id, pwd, isLoginStateSaved))
        }

        event.preventDefault()
    }, [id, pwd, isLoginStateSaved])

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
            loginBtnClicked = { _handleLoginBtnClicked }
            LoginInputResetBtnClicked = { _handleLoginInputResetBtnClicked }
            handleLoginStateSaved = { _handleLoginStateSaved }
            isLoginStateSaved = { isLoginStateSaved }
            onChange = { onChange }
            id = { id }
            pwd = { pwd }
            altmsg = { altmsg }
            modalVisible = { modalVisible }
            idInput = { idInput }
            pwdInput = { pwdInput }
            modalOpen = { _modalOpen }
            modalClose = { _modalClose } />
    )
}

export default LoginContainer