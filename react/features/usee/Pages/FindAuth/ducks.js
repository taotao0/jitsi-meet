import axios from 'axios'
import queryString from 'query-string'

import { ReducerRegistry } from '../../../base/redux'

import {
    AuthEmailStatus,
    AuthFailReason
} from './constants'

/* Action types */
export const AUTH_EMAIL_SUCCESSED = 'AUTH_EMAIL_SUCCESSED'
export const AUTH_EMAIL_FAILED = 'AUTH_EMAIL_FAILED'
export const AUTH_FAIL_REASON_INITIALIZE = 'AUTH_FAIL_REASON_INITIALIZE'

/* Actions */
export const findAuthByEmail = (email, activeTab, fromPage, history, t) => {
    return (dispatch, getState) => {
        dispatch(authFailReasonInitialize())

        axios.post('/api/v1/Auth/Find',
            queryString.stringify({
                type: activeTab,
                email: email,
            })
        ).then(res => {
            const { status } = res.data

            if (status === AuthEmailStatus.SUCCESSED) {
                dispatch(authEmailSuccessed(activeTab, fromPage, history, t))
            } else if (status === AuthEmailStatus.FAILED) {
                const { failReason } = res.data

                dispatch(authEmailFailed(failReason))
            }
        }).catch(err => {
            console.log('AuthEmailError', error)
        })
    }
}

export const authFailReasonInitialize = () => {
    return {
        type: AUTH_FAIL_REASON_INITIALIZE,

    }
}

export const authEmailSuccessed = (activeTab, fromPage, history, t) => {
    return {
        type: AUTH_EMAIL_SUCCESSED,
        modalProps: {
            activeTab,
            fromPage,
            history,
            t
        }
    }
}

export const authEmailFailed = (failReason) => {
    return {
        type: AUTH_EMAIL_FAILED,
        failReason
    }
}

/* Default state */
const defaultState = {
    failReason: AuthFailReason.NONE
}

/* Reducer */
ReducerRegistry.register('features/usee/Pages/FindAuth',
    (state = defaultState, action) => {
        switch (action.type) {
            case AUTH_EMAIL_SUCCESSED: {
                return {
                    ...state,
                    failReason: AuthFailReason.NONE,
                }
            }

            case AUTH_EMAIL_FAILED: {
                const { failReason } = action

                return {
                    ...state,
                    failReason
                }
            }

            case AUTH_FAIL_REASON_INITIALIZE: {
                return {
                    ...state,
                    failReason: AuthFailReason.NONE,
                }
            }

            default: {
                return state
            }
        }
    }
)