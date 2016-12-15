import React from 'react'
import {ADD_USER, RECEIVE_USERS} from '../actions/constants';

const initialState = {
    allUsers: [],
    currentUser: {}
}


export default function (state = initialState, action) {
    let newState = Object.assign({}, state)
    switch (action.type) {
        case ADD_USER:
           newState.allUsers = [...newState.allUsers, action.user];
            break;
        case RECEIVE_USERS:
            newState.allUsers = [...newState.allUsers, ...action.allUsers];
            break;
        default:
            return state;
    }
    return newState;
}