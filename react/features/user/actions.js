// @flow

import { USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS } from './actionTypes';
import { callUserLoginService } from './functions';
import logger from './logger';

const LOGIN_SUCCESS_CODE = 'success';

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
                /*
                logger.log('-----------> callUserLoginService result start');
                logger.log(response);
                logger.log('-----------> callUserLoginService result end');
                */
                let success = false;
                // response.data -> {state("fail" | "success"), msg}
                if(response && response.data && response.data.state &&
                    response.data.state === LOGIN_SUCCESS_CODE) {
                    success = true;
                }
                if(success) {
                    // logger.log('callUserLoginService result : success');
                    dispatch(userLoginSuccess());
                    alert('Login success!');
                } else {
                    // logger.error('callUserLoginService result : fail');
                    alert('Login fail!');
                }
            })
            .catch(error => {
                // logger.error('callUserLoginService failed with error:', error);
                alert('Login fail!');
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