import React from 'react'
import {RECEIVE_MESSAGES} from '../actions/constants';

const initialState = {
    allMessages: [],
    currentMessage: {}
}


export default function (state = initialState, action) {
    let newState = Object.assign({}, state)
    switch (action.type) {
        // case ADD_USER:
        //     newState.users = [...newState.users, action.user];
        //     break;
        case RECEIVE_MESSAGES:
            newState.allMessages = [...newState.allMessages, ...action.allMessages];
            break;
        default:
            return state;
    }
    return newState;

}
