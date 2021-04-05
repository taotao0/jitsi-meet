import { ReducerRegistry } from '../../../base/redux'

import TestUser, { UserStatus, LoginFailReason } from './constants'

/* Action Type */
export const LOGIN_SUCCESSED = 'LOGIN_SUCCESSED'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const USER_LOGOUT = 'USER_LOGOUT'

/* Actions */
export const doUserLogin = (userInfo, pageInfo) => {
    return (dispatch, getState) => {
        //FIXME: Backend API call

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
    //FIXME: Backend API call

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