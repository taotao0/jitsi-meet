// @flow

/* global interfaceConfig */

import axios from 'axios';
import qs from 'qs';
import logger from './logger';

/**
 * Returns promise that resolves with the axios.
 *
 * @returns {Promise<>} - Resolves with the axios.
 */
export function callUserLoginService(id, password) {
    /*
    logger.log('--------> callUserLoginService start');
    logger.log(id);
    logger.log(password);
    logger.log('--------> callUserLoginService end');
    */
    const urlData = interfaceConfig.USEE_ADMIN_URL + '/Auth/SignIn';
    logger.log(`--------> url ${urlData}`);

    const data = qs.stringify({
        'userId': id,
        'password': password
    });
    const config = {
        method: 'post',
        url: urlData,
        headers: { 
          'content-type': 'application/x-www-form-urlencoded'
        },
        data : data
    };

    return axios(config);
}