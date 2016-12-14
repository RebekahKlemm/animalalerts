import React from 'react'
// import addUser from '../actions/addUser';
import {ADD_USER} from '../actions/constants';


const initialState = {
    users: [],
    currentUser: {},
    messages: []
}


export default function (state = initialState, action) {
    switch (action.type) {

        case ADD_USER:
            return Object.assign({}, state, {users: action.user});
            break;
        default:
            return state;
    }
}