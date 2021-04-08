import { isEmptyObject } from '../../functions'
import { FIND_AUTH_ROUTE_PATH } from '../../usee_config'

import { TestUserEmail } from './constants'

export const isValidEmail = (email) => {
    return TestUserEmail === email
}

export const makeTabLink = (tabName, fromPage) => {
    const tabLink =
        fromPage
            ? `${FIND_AUTH_ROUTE_PATH}?tabName=${tabName}&&from=${fromPage}`
            : `${FIND_AUTH_ROUTE_PATH}?tabName=${tabName}`
            
    return tabLink
}