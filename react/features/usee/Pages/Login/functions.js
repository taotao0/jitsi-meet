import { isEmptyObject } from '../../functions'

import { FIND_AUTH_ROUTE_PATH } from '../../usee_config'

export const makeFindAuthLink = (tabName, fromPage) => {
    const link = isEmptyObject(fromPage)
            ? `${FIND_AUTH_ROUTE_PATH}?tabName=${tabName}`
            : `${FIND_AUTH_ROUTE_PATH}?tabName=${tabName}&&from=${fromPage.from}`
            
    return link
}