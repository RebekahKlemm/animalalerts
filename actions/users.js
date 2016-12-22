import axios from 'axios';
import {ADD_USER, RECEIVE_USERS, UPDATE_CURRENT_USER, UPDATE_USER} from './constants';

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


export const updateUser = function (updatedUser) {
    return {
        type: UPDATE_USER,
        user: updatedUser
    };
};


//asynch action creator (thunk)
export function addUserRoleToDb(user){
    return function (dispatch){
        return axios.post('/api/users/changeUserRole', user)
            // .then(function(response){
            //     // console.log('RRRRRRRResponse', response)
            //     return response
            // })
            .then(response => response.data)
            .then(function(updatedUser){
                dispatch(updateUser(updatedUser))
            })
    }
}


// //asynch action creator (thunk)
// export function addAToDb(alert){
//     // console.log('AAAAAAAACtion alert', alert);
//     return function (dispatch){
//         return axios.post('/api/alerts/newAlert', alert)
//             .then(function(response){
//                 // console.log('RRRRRRRResponse', response)
//                 return response
//             })
//             .then(response => response.data)
//             .then(function(newAlert){
//                 dispatch(addAlert(newAlert))
//             })
//     }
// }




