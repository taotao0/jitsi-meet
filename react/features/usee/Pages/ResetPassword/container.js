import React, { useState, useCallback, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'
import queryString from 'query-string'

import ResetPasswordPresenter from './presenter'

import { isEqualPassword } from './functions'

import { resetPassword } from './ducks'

const ResetPasswordContainer = () => {
    const dispatch = useDispatch()
    const modalInfo = useSelector(state => state['features/usee/Modal'], [])

    const { t } = useTranslation()
    const history = useHistory()
    const { token } = queryString.parse(useLocation().search)

    const [ inputValue, setInputValue ] = useState({ newPwd: '', rePwd: '' })
    const [ errMsgVisible, setErrMsgVisible ] = useState(false)

    const newPwdRef = useRef()
    const rePwdRef = useRef()

    const _handleInputChanged = useCallback((event) => {
        setInputValue({
            ...inputValue,
            [event.currentTarget.name]: event.currentTarget.value    
        })
    }, [ inputValue ])

    const _handleXBtnClicked = useCallback((event) => {
        setInputValue({
            ...inputValue,
            [event.currentTarget.name]: ''
        })
        setErrMsgVisible(false)
    }, [ inputValue ])

    const _handleSubmitBtnClicked = useCallback((event) => {
        const { newPwd, rePwd } = inputValue

        const handlePassword = () => {
            if (!isEqualPassword(newPwd, rePwd)) {
                setErrMsgVisible(true)
                setInputValue({ ...inputValue, rePwd: '' })
    
                rePwdRef.current.focus()
            } else {
                dispatch(resetPassword(newPwd, token, t, history))
                setErrMsgVisible(false)
            }        
        }

        !newPwd
            ? newPwdRef.current.focus()
            : !rePwd 
                ? rePwdRef.current.focus()
                : handlePassword()

        event.preventDefault()
    }, [ inputValue ])

    return (
        <ResetPasswordPresenter
            inputValue = { inputValue }
            errMsgVisible = { errMsgVisible }
            newPwdRef = { newPwdRef }
            rePwdRef = { rePwdRef }
            modalInfo = { modalInfo }
            handleInputChanged = { _handleInputChanged }
            handleXBtnClicked = { _handleXBtnClicked }
            handleSubmitBtnClicked = { _handleSubmitBtnClicked } />
    )
}

export default ResetPasswordContainer