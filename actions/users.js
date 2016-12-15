import {ADD_USER, ADD_U_TO_DB, RECEIVE_USERS} from './constants';


export const receiveUsers = function (users) {
    return {
        type: RECEIVE_USERS,
        users: users
    };
};
