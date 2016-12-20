import axios from 'axios';
import {UPDATE_CURRENT_ADDRESS_DETAILS} from './constants';

// export const addUser = function (user) {
//     return {
//         type: ADD_USER,
//         user: user
//     };
// };
//
//
// //asynch action creator (thunk)
// export function addUToDb(user){
//     return function (dispatch){
//         return axios.post('/api/users/signup', user)
//             .then(response => response.data)
//             .then(function(newUser){
//                 dispatch(addUser(newUser))
//             })
//     }
// }

// export const receiveUsers = function (allUsers) {
//     return {
//         type: RECEIVE_USERS,
//         allUsers: allUsers
//     };
// };
//

export const updateCurrentAddressDetails = function (latLong) {
    return {
        type: UPDATE_CURRENT_ADDRESS_DETAILS,
        latLong: latLong
    };
};

