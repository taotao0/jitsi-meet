import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import PrimaryPresenter from './presenter'

import { appNavigate } from '../../../app/actions'

const PrimaryContainer = () => {
    const dispatch = useDispatch()

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

    return (
        <PrimaryPresenter
            roomName = { roomName }
            handleInputChanged = { _handleInputChanged }
            handleJoinMeetingClicked = { _handleJoinMeetingClicked } />
    )
}

export default PrimaryContainer