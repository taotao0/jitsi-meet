import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PrimaryPresenter from './presenter'

import { appNavigate } from '../../../app/actions'

import { doPersonalRoomJoin } from '../../Header/ducks'

import { USEE_LS_LOGIN_KEY } from '../../usee_config'

const PrimaryContainer = () => {
    const dispatch = useDispatch()
    const loginState = useSelector(state => state[USEE_LS_LOGIN_KEY], [])

    const [ roomName, setRoomName ] = useState('')

    const _handleInputChanged = useCallback((event) => {
        setRoomName(event.target.value)
    }, [])

    const _handleJoinMeetingClicked = useCallback((event) => {
        if (roomName !== '') {
            // dispatch(appNavigate(`/Room?name=${roomName}`))
            dispatch(appNavigate(`/Room/${roomName}`))
        }

        event.preventDefault()
    }, [roomName])

    const _handlePersonalRoomJoinBtnClicked = useCallback(() => {
        dispatch(doPersonalRoomJoin())
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