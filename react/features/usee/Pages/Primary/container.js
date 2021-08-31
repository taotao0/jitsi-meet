import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useTranslation } from 'react-i18next'

import PrimaryPresenter from './presenter'

import { USEE_LS_LOGIN_KEY } from '../../usee_config'
import axios from 'axios'
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

    const _setRoomType=(async (mode)=>{
        const url = '/api/v1/Room/RoomType/';
        const ret = await axios({
            method: 'patch',
            url: url + mode,
            headers: {
                'Authorization': loginState?.loginUserInfo?.session_token,
            }
        });
        if(ret.data.status==='SUCCESSED')return true;
        return false;
    })

    const _handleBtnClicked = useCallback(async (event) => {
        const target = event.target
        let _roomName = roomName

        if (target.name === 'pmRoomBtn') {
            _roomName = loginState?.loginUserInfo?.personal_room_name
            const ret = await _setRoomType('DEFAULT');
            if(ret){
                dispatch(isValidRoomName(_roomName, t))
            }
        }else if(target.name === 'pmWebinarBtn'){
            _roomName = loginState?.loginUserInfo?.personal_room_name
            const ret = await _setRoomType('WEBINAR');
            if(ret){
                dispatch(isValidRoomName(_roomName, t))
            }
        }

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