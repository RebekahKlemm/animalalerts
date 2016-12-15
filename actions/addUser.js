import axios from 'axios';
import {ADD_USER, ADD_U_TO_DB} from './constants';

export const addUser = function (user) {
    return {
        type: ADD_USER,
        user: user
    };
};


//asynch action creator (thunk)
export function addUToDb(user){
    console.log("got to addUToDb")
    return function (dispatch){
        return axios.post('/api/signup', user)
            .then(response => response.data)
            .then(function(newUser){
              dispatch(addUser(newUser))
            })
    }
}

//
// addUser(user){
//     const nextState = Object.assign({}, this.state)
//     nextState.users.push({user})
//     this.setState(nextState);
// }




