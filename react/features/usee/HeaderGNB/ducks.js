import { ReducerRegistry } from '../../base/redux'

import { appNavigate } from '../../app/actions'

/* Action types */
export const PERSONAL_ROOM_JOIN = 'PERSONAL_ROOM_JOIN'

/* Actions */
export const doPersonalRoomJoin = () => {
    return (dispatch, getState) => {
        const loginUserInfo = getState()['features/usee/Pages/Login']

        return dispatch(appNavigate(`/Room/${loginUserInfo?.loginUserInfo?.personal_room_name}`))
    }
}
/* Default state */

/* Reducer */