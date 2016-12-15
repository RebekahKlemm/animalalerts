import React from 'react'
// import addUser from '../actions/addUser';
import {ADD_USER, RECEIVE_USERS} from '../actions/constants';

const initialState = {
    users: [],
    currentUser: {},
    messages: []
}


export default function (state = initialState, action) {
    let newState = Object.assign({}, state)
    switch (action.type) {
        case ADD_USER:
           newState.users = [...newState.users, action.user];
            break;
        case RECEIVE_USERS:
            newState.users = [...newState.users, ...action.users];
            break;
        default:
            return state;
    }
    return newState;
}