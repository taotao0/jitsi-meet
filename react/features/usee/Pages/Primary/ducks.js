import axios from 'axios'

import { appNavigate } from '../../../app/actions'

import { RoomValidStatus, CheckRoomOwner, LANG_PREFIX} from './constants'

export const isValidRoomName = (roomName, t) => {
    return(dispatch, getState) => {
        let url = '/api/v1/Room/exist/'
        url = url.concat(roomName)

        axios({
            method: 'get',
            url: url,
        }).then(res => {
            const { status } = res.data

            if (status === RoomValidStatus.SUCCESSED) {
                dispatch(appNavigate(`/room/${roomName}`))
            } else if (status === RoomValidStatus.FAILED) {
                alert(t(`${LANG_PREFIX}.alertMsg`))
            }
        }).catch(err => {
            console.log('Valid Room Error', err)
        })
    }
}
