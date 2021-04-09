import { ReducerRegistry } from '../../../base/redux'

import {
    openModal,
    closeModal
} from '../../Modal/ducks'

import NoticeModal from '../../Modal/components/NoticeModal'

import { LANG_PREFIX } from './constants'
import { LOGIN_ROUTE_PATH } from '../..//usee_config'

/* Action types */

/* Actions */
export const resetPassword = (newPwd, tempToken, t, history) => {
    return (dispatch, getState) => {
        /*
            FIXME:
            Backend-api ResetPwd api call
                params
                    - newPwd : new password by user
                    - tempToken : temp authorization token
            - tempToken은 비밀번호 찾기를 통해 비밀번호 재설정 페이지를 접근하였을 때
            발급되는 것!
            - 이미 로그인한 유저도 비밀번호 재설정 페이지를 마이페이지를 통해 접근 가능하다.
            - 이 경우, tempToken 값을 어떻게 할 것인지 정해야 할듯!

            - 우선, 비밀번호 재설정 backend api를 성공적으로 호출했을 경우, 로직만 구현해두도록 함
        */
        const modalProps = {
            noticeMsg: t(`${LANG_PREFIX}.noticeMsg`),
            onSubmit: () => {
                history.replace(LOGIN_ROUTE_PATH)
                
                dispatch(closeModal())
            }
        }

        return dispatch(openModal(NoticeModal, modalProps))
    }
}

/* Default state */

/* Reduer */