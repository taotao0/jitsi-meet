import { MiddlewareRegistry } from '../../../base/redux'
import { jitsiLocalStorage } from '@jitsi/js-utils';

import {
    USER_LOGOUT,
    LOGIN_SUCCESSED
} from './ducks'

import {
    PRIMARY_ROUTE_PATH,
    USEE_LS_LOGIN_KEY
} from '../../usee_config'

MiddlewareRegistry.register(store => next => action => {
    const result = next(action)

    switch (action.type) {
        case LOGIN_SUCCESSED: {
            if (action.pageInfo) {
                const { history, query: { from } } = action.pageInfo

                from
                    ? history.push(from)
                    : history.push(PRIMARY_ROUTE_PATH)
            }

            break
        }

        case USER_LOGOUT: {
            jitsiLocalStorage.removeItem(USEE_LS_LOGIN_KEY)

            break
        }
    }

    return result
})