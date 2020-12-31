// @flow

import { USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS } from './actionTypes';
import { callUserLoginService } from './functions';
import logger from './logger';

/**
* Signals user login success.
*
* @param {boolean} id - user ID.
* @param {boolean} password - user password.
* @returns {Promise}
*/
export function userLoginAction(id: string, password: string) {
    return function(dispatch: (Object) => Object, getState: () => any) {
        const state = getState();        

        return callUserLoginService(id, password)
            .then(response => {
                logger.log(response);
                dispatch(userLoginSuccess());
            })
            .catch(error => {
                logger.error('callUserLoginService failed with error:', error);
            });
    };
}

/**
 * Signals the local participant that login process was successful.
 *
 * @returns {{
 *      type: USER_LOGIN_SUCCESS
 * }}
 */
export function userLoginSuccess() {
    return {
        type: USER_LOGIN_SUCCESS
    };
}

/**
 * Signals the local participant that logout process was successful.
 *
 * @returns {{
 *      type: USER_LOGOUT_SUCCESS
 * }}
 */
export function userLogoutSuccess() {
    // logger.log('------------> userLogoutSuccess called');
    return {
        type: USER_LOGOUT_SUCCESS
    };
}