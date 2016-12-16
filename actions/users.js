import axios from 'axios';
import {ADD_USER, RECEIVE_USERS, UPDATE_CURRENT_USER} from './constants';

export const addUser = function (user) {
    return {
        type: ADD_USER,
        user: user
    };
};


//asynch action creator (thunk)
export function addUToDb(user){
    return function (dispatch){
        return axios.post('/api/users/signup', user)
            .then(response => response.data)
            .then(function(newUser){
              dispatch(addUser(newUser))
            })
    }
}

export const receiveUsers = function (allUsers) {
    return {
        type: RECEIVE_USERS,
        allUsers: allUsers
    };
};


export const updateCurrentUser = function (user) {
    return {
        type: UPDATE_CURRENT_USER,
        user: user
    };
};


//asynch action creator (thunk)
// export function findUinDb(user){
//     return function (dispatch){
//         return axios.get('/api/users')
//             .then(response => response.data)
//             .then(function(user){
//                 dispatch(updateCurrentUser(user))
//             })
//     }
// }
