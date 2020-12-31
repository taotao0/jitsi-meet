// @flow

import axios from 'axios'
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

    const form = new FormData();
    form.append('userId', id);
    form.append('password', password);

    const config = {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }

    return axios.post('https://10.0.0.10:8080/Auth/SignIn', form, config);

    /*
    return axios({
        method: 'post',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        url: 'https://10.0.0.16:8080/Auth/SignIn',
        data: { userId : 'admin', password: '1234' }
    });
    */
}
