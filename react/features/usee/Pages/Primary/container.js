import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useTranslation } from 'react-i18next'

import PrimaryPresenter from './presenter'

import { USEE_LS_LOGIN_KEY } from '../../usee_config'

import {
    isValidRoomName
} from './ducks'

const PrimaryContainer = () => {
    const dispatch = useDispatch()
    const loginState = useSelector(state => state[USEE_LS_LOGIN_KEY], [])
    const modalInfo = useSelector(state => state['features/usee/Modal'], [])

    const { t } = useTranslation()

    const [ roomName, setRoomName ] = useState('')

    const _handleInputChanged = useCallback((event) => {
        setRoomName(event.target.value)
    }, [])

    const _handleBtnClicked = useCallback((event) => {
        const target = event.target
        let _roomName = roomName

        if (target.name === 'pmRoomBtn') {
            _roomName = loginState?.loginUserInfo?.personal_room_name
        }

        dispatch(isValidRoomName(_roomName, t))
    }, [roomName, loginState])

    return (
        <PrimaryPresenter
            roomName = { roomName }
            loginState = { loginState }
            ModalInfo = { modalInfo }
            handleInputChanged = { _handleInputChanged }
            handleBtnClicked = { _handleBtnClicked } />
    )
}

export default PrimaryContainer