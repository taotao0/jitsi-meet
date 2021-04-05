import { MiddlewareRegistry } from '../../../base/redux'

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
            
            break
        }
    }

    return result
})