import React, { useState, useCallback, useRef, useLayoutEffect, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import AuthEmailPresenter from './presenter'

import withAuth from '../withAuth'
import {
    findAuthByEmail,
    authFailReasonInitialize
} from '../../ducks'


const AuthEmailContainer = (props) => {
    const {
        activeTab,
        fromPage,
        failReason } = props

    const history = useHistory()
    const { t } = useTranslation()

    const [ input, setInput ] = useState('')

    const inputRef = useRef()
    const dispatch = useDispatch()

    const _handleInputChanged = useCallback((event) => {
        setInput(event.target.value)
    }, [])

    const _handleSubmitBtnClicked = useCallback((event) => {
        dispatch(findAuthByEmail(input, activeTab, fromPage, history, t))

        event.preventDefault()
    }, [input, activeTab, fromPage, history, t, inputRef])

    useEffect(() => {
        return () => {
            dispatch(authFailReasonInitialize())
        }
    }, [])

    useLayoutEffect(() => {
        failReason && inputRef.current.focus()
    }, [failReason, inputRef])

    return (
        <AuthEmailPresenter
            { ...props }
            input = { input }
            inputRef = { inputRef }
            handleInputChanged = { _handleInputChanged }
            handleSubmitBtnClicked = { _handleSubmitBtnClicked } />
    )
}

export default withAuth(AuthEmailContainer)