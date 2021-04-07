import { ReducerRegistry } from '../../../base/redux'

import TestUser, { UserStatus, LoginFailReason } from './constants'

/* Action Types */
export const LOGIN_SUCCESSED = 'LOGIN_SUCCESSED'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const USER_LOGOUT = 'USER_LOGOUT'

/* Actions */
export const doUserLogin = (userInfo, pageInfo) => {
    return (dispatch, getState) => {
        /*
            FIXME:
                Backend API call
                SUCCESSED와 FAILED는 Back-end api의 응답 코드로 핸들링 할 것!
                없어질 Enum
        */
        let failReason = ''
        const { testId, testPwd } = TestUser

        if (testId !== userInfo.id) {
            failReason = LoginFailReason.BYID

            return dispatch(loginFailed(failReason))
        } else if (testPwd !== userInfo.pwd) {
            failReason = LoginFailReason.BYPWD

            return dispatch(loginFailed(failReason))
        }

        return dispatch(loginSuccessed(userInfo, pageInfo))
    }
}

export const doUserLogout = () => {
    /*
        FIXME: 
            별도의 Back-end api가 필요없다?
            store에 저장한 session-token을 지워준다.
            Local Storage에 저장된 것도 지워준다.
    */

    return {
        type: USER_LOGOUT
    }
}

const loginSuccessed = (userInfo, pageInfo) => {
    return {
        type: LOGIN_SUCCESSED,
        userInfo,
        pageInfo
    }
}

const loginFailed = (failReason) => {
    return {
        type: LOGIN_FAILED,
        failReason,
    }
}

/* Default State */
const defaultState = {
    userStatus: UserStatus.VISITOR,
}

/* Reducer */
ReducerRegistry.register('features/usee/Pages/Login',
    (state = defaultState, action) => {
        switch (action.type) {
            case LOGIN_SUCCESSED: {
                const { userInfo } = action

                return {
                    ...state,
                    userStatus: UserStatus.MEMBER,
                    userInfo,
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
                    userStatus: UserStatus.VISITOR
                }
            }

            default: {
                return state
            }
        }
    }
)