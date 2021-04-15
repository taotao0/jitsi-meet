import { MiddlewareRegistry } from '../../../base/redux'
import { jitsiLocalStorage } from '@jitsi/js-utils';

import { LOGIN_SUCCESSED } from './ducks'

import { PRIMARY_ROUTE_PATH } from '../../usee_config'

MiddlewareRegistry.register(store => next => action => {
    const result = next(action)

    switch (action.type) {
        case LOGIN_SUCCESSED: {
            const { history, query: { from } } = action.pageInfo

            from
                ? history.push(from)
                : history.push(PRIMARY_ROUTE_PATH)
            
            const { loginUserInfo: { session_token, autoLogin } } = store.getState()['features/usee/Pages/Login']

            if (autoLogin) {
                jitsiLocalStorage.setItem('UseeLoginInfo', JSON.stringify({ session_token, autoLogin }))
            }

            break
        }
    }

    return result
})