// @flow

import { ReducerRegistry } from '../base/redux';

import { USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS, USER_GNB_CONFERENCE,
            USER_GNB_ADMIN } from './actionTypes';

import logger from './logger';


ReducerRegistry.register('features/user', (state = {}, action) => {

    switch (action.type) {
    case USER_LOGIN_SUCCESS: {
        // logger.log('***************** reducer : loginState -> true');
        return {
            ...state,
            loginState: true,
            defaultRoomName: action.defaultRoomName,
            defaultRoomNameId: action.defaultRoomNameId,
            sessionToken: action.sessionToken
        };
    }
    case USER_LOGOUT_SUCCESS: {
        // logger.log('***************** reducer : loginState -> false');
        return {
            ...state,
            loginState: false,
            defaultRoomName: '',
            defaultRoomNameId: '',
            sessionToken: ''
        };
    }
    case USER_GNB_CONFERENCE: {
        // logger.log('***************** reducer : gnbTabNumber -> 0');
        return {
            ...state,
            gnbTabNumber: 0
        };
    }
    case USER_GNB_ADMIN: {
        // logger.log('***************** reducer : gnbTabNumber -> 1');
        return {
            ...state,
            gnbTabNumber: 1
        };
    }
    }

    return state;
});
