import { LOGIN_ROUTE_PATH } from '../usee_config'

export const compareCurrentPathToLoginPath = (curPath) => {
    return curPath && curPath.startsWith(LOGIN_ROUTE_PATH)
}