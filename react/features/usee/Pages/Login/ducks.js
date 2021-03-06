import axios from 'axios'
import queryString from 'query-string'
import { jitsiLocalStorage } from '@jitsi/js-utils';

import { ReducerRegistry, PersistenceRegistry } from '../../../base/redux'

import {
    UserStatus,
    LoginStatus,
    LoginFailReason
} from './constants'

import { USEE_LS_LOGIN_KEY } from '../../usee_config'

/* Action Types */
export const LOGIN_SUCCESSED = 'LOGIN_SUCCESSED'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const USER_LOGOUT = 'USER_LOGOUT'
export const LOGIN_FAIL_REASON_INITIALIZE = 'LOGIN_FAIL_REASON_INITIALIZE'
// export const USER_FORCE_CLOSE = 'USER_FORCE_CLOSE'

/* Actions */
// FIXME: Not Used Action, autologin fix it!
export const doAutoLogin = () => {
    return (dispatch, getState) => {
        const UseeLoginInfo = JSON.parse(jitsiLocalStorage.getItem(USEE_LS_LOGIN_KEY))

        if (UseeLoginInfo && UseeLoginInfo.autoLogin) {
            const { session_token, autoLogin } = UseeLoginInfo

            axios({
                url: '/api/v1/Auth/SignIn/Token',
                method: 'post',
                headers: {
                    'Authorization': session_token,
                }
            }).then(res => {
                const { data } = res

                if (data.status === LoginStatus.SUCCESSED) {
                    const loginUserInfo = {
                        ...data.userInfo,
                        autoLogin,
                    }

                    dispatch(loginSuccessed(loginUserInfo, null))
                }
            }).catch(err => {
                console.log('Auto Login error : ', err)
            })
        }
    }
}

export const doUserLogin = (userInfo, pageInfo) => {
    return (dispatch, getState) => {
        dispatch(loginFailReasonInitialize())

        const { id, pwd, /*autoLogin*/ } = userInfo

        axios.post('/api/v1/Auth/SignIn',
            queryString.stringify({
                userId: id,
                password: pwd
            })
        ).then(res => {
            const { status } = res.data

            if (status === LoginStatus.SUCCESSED) {
                const { userInfo } = res.data
                const loginUserInfo = { ...userInfo, /*autoLogin*/ }

                dispatch(loginSuccessed(loginUserInfo, pageInfo))
            } else if (status === LoginStatus.FAILED) {
                const { failReason } = res.data

                dispatch(loginFailed(failReason))
            }
        }).catch(err => {
            console.log(`Auth Error`, err)
        })
    }
}

export const doUserLogout = () => {
    return {
        type: USER_LOGOUT
    }
}

const loginSuccessed = (loginUserInfo, pageInfo) => {
    return {
        type: LOGIN_SUCCESSED,
        loginUserInfo,
        pageInfo
    }
}

const loginFailed = (failReason) => {
    return {
        type: LOGIN_FAILED,
        failReason,
    }
}

export const loginFailReasonInitialize = () => {
    return {
        type: LOGIN_FAIL_REASON_INITIALIZE,
    }
}

// export const userForceClose = () => {
//     return (dispatch, getState) => {
//         const userState = getState()[USEE_LS_LOGIN_KEY]

//         if (userState.userStatus === UserStatus.MEMBER) {
//             if (userState.loginUserInfo.autoLogin) {
//                 const userInfo = {
//                     ...userState,
//                     userStatus: UserStatus.VISITOR
//                 }

//                 return dispatch({
//                     type: USER_FORCE_CLOSE,
//                     userInfo
//                 })
//             } else {
//                 jitsiLocalStorage.removeItem(USEE_LS_LOGIN_KEY)
//             }
//         }
//     }
// }

/* Default State */
const defaultState = {
    userStatus: UserStatus.VISITOR,
    failReason: LoginFailReason.NONE,
}

PersistenceRegistry.register(USEE_LS_LOGIN_KEY)

/* Reducer */
ReducerRegistry.register(USEE_LS_LOGIN_KEY,
    (state = defaultState, action) => {
        switch (action.type) {
            case LOGIN_SUCCESSED: {
                const { loginUserInfo } = action

                return {
                    ...state,
                    userStatus: UserStatus.MEMBER,
                    failReason: LoginFailReason.NONE,
                    loginUserInfo,
                }
            }

            case LOGIN_FAILED: {
                const { failReason } = action

                return {
                    ...state,
                    failReason,
                }
            }

            case USER_LOGOUT: {
                return {
                    userStatus: UserStatus.VISITOR,
                    failReason: LoginFailReason.NONE,
                }
            }

            case LOGIN_FAIL_REASON_INITIALIZE: {
                return {
                    ...state,
                    failReason: LoginFailReason.NONE,
                }
            }

            // case USER_FORCE_CLOSE: {
            //     const { userInfo } = action

            //     return {
            //         ...state,
            //         userInfo,
            //     }
            // }

            default: {
                return state
            }
        }
    }
)