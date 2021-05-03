import axios from 'axios'

import { appNavigate } from '../../../app/actions'
import { updateSettings } from '../../../base/settings/actions'

import InputModal from '../../Modal/components/InputModal'

import {
    openModal,
    closeModal
} from '../../Modal/ducks'

import { RoomValidStatus, LANG_PREFIX } from './constants'

/* Action types */
export const PERSONAL_ROOM_JOIN = 'PERSONAL_ROOM_JOIN'

/* Actions */
export const isValidRoomName = (roomName, t) => {
    return(dispatch, getState) => {
        const url = '/api/v1/Room/exist/' + roomName

        axios({
            method: 'get',
            url: url,
        }).then(res => {
            const { status } = res.data

            if (status === RoomValidStatus.SUCCESSED) {
                const onSubmit = (nickName) => {
                    dispatch(updateSettings({ displayName: nickName }))
                    dispatch(closeModal())
                    dispatch(appNavigate(`/room/${roomName}`))
                }

                const onCancel = () => {
                    dispatch(closeModal())
                }

                dispatch(openModal(InputModal, { title: t(`${LANG_PREFIX}.nickNameMsg`), onSubmit, onCancel }))
            } else if (status === RoomValidStatus.FAILED) {
                alert(t(`${LANG_PREFIX}.alertMsg`))
            }
        }).catch(err => {
            console.log('Valid Room Error', err)
        })
    }
}

/* Default state */

/* Reducer */