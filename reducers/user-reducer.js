import React from 'react'
import {ADD_USER, RECEIVE_USERS, UPDATE_CURRENT_USER, UPDATE_USER} from '../actions/constants';

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
        case UPDATE_CURRENT_USER:
            newState.currentUser= Object.assign({}, action.user)
            break;
        case UPDATE_USER:
            newState.allUsers[action.user.phone]= Object.assign({}, action.user)
            break;
        default:
            return state;
    }
    return newState;
}