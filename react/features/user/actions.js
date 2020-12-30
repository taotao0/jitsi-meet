// @flow

import { USER_LOGIN_SUCCESS } from './actionTypes';
import { callUserLoginService } from './functions';
import logger from './logger';

/**
* Signals user login success.
*
* @param {boolean} enabled - If true enables video blur, false otherwise.
* @returns {Promise}
*/
export function userLoginAction(id: string, password: string) {
    logger.log('--------> userLoginAction start');
    logger.log(id);
    logger.log(password);
    logger.log('--------> userLoginAction end');
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
 * Signals the local participant that log-in process was successful.
 *
 * @returns {{
 *      type: USER_LOGIN_SUCCESS
 * }}
 */
export function userLoginSuccess() {
    logger.log('**************** userLoginSuccess called');
    return {
        type: USER_LOGIN_SUCCESS
    };
}
