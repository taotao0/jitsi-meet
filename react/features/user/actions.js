// @flow

import { USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS, USER_RESET_PASSWORD, USER_GNB_CONFERENCE,
            USER_GNB_ADMIN } from './actionTypes';
import { callUserLoginService, callUserResetPasswordService } from './functions';
import logger from './logger';

const LOGIN_SUCCESS_CODE = 'success';
const RESET_SUCCESS_CODE = 'success';

/**
* Signals user login success.
*
* @param {string} id - user ID.
* @param {string} password - user password.
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
                    dispatch(userLoginSuccess(response.data.default_room_name,
                        response.data.default_room_name_id, response.data.session_token));
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
export function userLoginSuccess(
    default_room_name: string, default_room_name_id: string, session_token: string
) {
    // logger.log(`***** (${default_room_name})(${default_room_name_id})(${session_token}) *****`);
    return {
        type: USER_LOGIN_SUCCESS,
        defaultRoomName: default_room_name,
        defaultRoomNameId: default_room_name_id,
        sessionToken: session_token
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

/**
* Reset user password using user email.
*
* @param {string} email - user email.
* @returns {Promise}
*/
export function userResetPasswordAction(email: string) {
    return function(dispatch: (Object) => Object, getState: () => any) {
        const state = getState();        

        return callUserResetPasswordService(email)
            .then(response => {
                /*
                logger.log('-----------> callUserResetPasswordService result start');
                logger.log(response);
                logger.log('-----------> callUserResetPasswordService result end');
                */
                let success = false;
                // response.data -> {state("fail" | "success"), msg}
                if(response && response.data && response.data.state &&
                    response.data.state === RESET_SUCCESS_CODE) {
                    success = true;
                }
                if(success) {
                    // logger.log('callUserResetPasswordService result : success');
                    alert('Reset password success!');
                } else {
                    // logger.error('callUserResetPasswordService result : fail');
                    alert('Reset password fail!');
                }
            })
            .catch(error => {
                // logger.error('callUserResetPasswordService failed with error:', error);
                alert('Something wrong in reset password!');
            });
    };
}

/**
 * Signals a login user want to see conference view.
 *
 * @returns {{
    *      type: USER_GNB_CONFERENCE
    * }}
    */
   export function userGNBConference() {
       // logger.log('------------> userGNBConference called');
       return {
           type: USER_GNB_CONFERENCE
       };
   }

/**
 * Signals a login user want to see admin view.
 *
 * @returns {{
    *      type: USER_GNB_ADMIN
    * }}
    */
   export function userGNBAdmin() {
       // logger.log('------------> userGNBAdmin called');
       return {
           type: USER_GNB_ADMIN
       };
   }