import axios from 'axios'
import queryString from 'query-string'

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
export const resetPassword = (newPwd, token, t, history) => {
    return (dispatch, getState) => {

        axios.post('/api/v1/Auth/Reset/Verify',
            queryString.stringify({
                token: token,
                newPwd: newPwd
            })
        ).then(res => {
            const modalProps = {
                noticeMsg: t(`${LANG_PREFIX}.noticeMsg`),
                onSubmit: () => {
                    history.replace(LOGIN_ROUTE_PATH)
                    
                    dispatch(closeModal())
                }
            }
    
            return dispatch(openModal(NoticeModal, modalProps))    
        }).catch(err => {
            console.log('ResetPassword Error : ', err)
        })
    }
}

/* Default state */

/* Reduer */