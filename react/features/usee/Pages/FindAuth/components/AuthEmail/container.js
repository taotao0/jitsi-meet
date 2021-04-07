import React, { useState, useCallback, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import AuthEmailPresenter from './presenter'

import withAuth from '../withAuth'
import {
    findAuthByEmail,
    emailStatusInitialize
} from '../../ducks'


const AuthEmailContainer = (props) => {
    const { activeTab } = props
    const [ input, setInput ] = useState('')

    const inputRef = useRef()
    const dispatch = useDispatch()
    const { status } = useSelector(state => state['features/usee/Pages/FindAuth'], [])

    const _handleInputChanged = useCallback((event) => {
        setInput(event.target.value)
    }, [])

    const _handleSubmitBtnClicked = useCallback((event) => {
        dispatch(findAuthByEmail(input, activeTab, inputRef))

        event.preventDefault()
    }, [input, activeTab, inputRef])

    useEffect(() => {
        dispatch(emailStatusInitialize())
    }, [])

    return (
        <AuthEmailPresenter
            { ...props }
            input = { input }
            inputRef = { inputRef }
            status = { status }
            handleInputChanged = { _handleInputChanged }
            handleSubmitBtnClicked = { _handleSubmitBtnClicked } />
    )
}

export default withAuth(AuthEmailContainer)