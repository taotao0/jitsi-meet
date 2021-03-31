import { ReducerRegistry } from '../../../base/redux'

export const SET_LOGIN_INFO = 'SET_LOGIN_INFO'

export function setLoginInfo(id, pwd, isLoginStateSaved) {
    return {
        type: SET_LOGIN_INFO,
        id: id,
        pwd: pwd,
        isLoginStateSaved: isLoginStateSaved
    }
}

const defaultState = {
    id: '',
    pwd: '',
    isLoginStateSaved: false
}

ReducerRegistry.register('features/usee/contents/login',
    (state = defaultState, action) => {
        switch (action.type) {
            case SET_LOGIN_INFO : {
                return {
                    ...state,
                    id: action.id,
                    pwd: action.pwd,
                    isLoginStateSaved: action.isLoginStateSaved
                }
            }
        }

        return state
    }
)