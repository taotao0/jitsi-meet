import { FIND_AUTH_ROUTE_PATH } from '../../usee_config'

export const makeTabLink = (tabName, fromPage) => {
    const tabLink =
        fromPage
            ? `${FIND_AUTH_ROUTE_PATH}?tabName=${tabName}&&from=${fromPage}`
            : `${FIND_AUTH_ROUTE_PATH}?tabName=${tabName}`
            
    return tabLink
}