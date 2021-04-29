import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useTranslation } from 'react-i18next'

import PrimaryPresenter from './presenter'

import { doPersonalRoomJoin } from '../../Header/ducks'

import { USEE_LS_LOGIN_KEY } from '../../usee_config'

import {
    isValidRoomName
} from './ducks'

const PrimaryContainer = () => {
    const dispatch = useDispatch()
    const loginState = useSelector(state => state[USEE_LS_LOGIN_KEY], [])

    const { t } = useTranslation()

    const [ roomName, setRoomName ] = useState('')

    const _handleInputChanged = useCallback((event) => {
        setRoomName(event.target.value)
    }, [])

    const _handleJoinMeetingClicked = useCallback((event) => {
        if (roomName !== '') {
            dispatch(isValidRoomName(roomName, t))
        }

        event.preventDefault()
    }, [roomName])

    const _handlePersonalRoomJoinBtnClicked = useCallback((event) => {
        dispatch(doPersonalRoomJoin())

        event.preventDefault()
    }, [])

    return (
        <PrimaryPresenter
            roomName = { roomName }
            loginState = { loginState }
            handleInputChanged = { _handleInputChanged }
            handleJoinMeetingClicked = { _handleJoinMeetingClicked }
            handlePersonalRoomJoinBtnClicked = { _handlePersonalRoomJoinBtnClicked } />
    )
}

export default PrimaryContainer