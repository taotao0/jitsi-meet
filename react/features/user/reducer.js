// @flow

import { ReducerRegistry } from '../base/redux';

import { USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS } from './actionTypes';

import logger from './logger';


ReducerRegistry.register('features/user', (state = {}, action) => {

    switch (action.type) {
    case USER_LOGIN_SUCCESS: {
        // logger.log('***************** reducer : loginState -> true');
        return {
            ...state,
            loginState: true
        };
    }
    case USER_LOGOUT_SUCCESS: {
        // logger.log('***************** reducer : loginState -> false');
        return {
            ...state,
            loginState: false
        };
    }
    }

    return state;
});
