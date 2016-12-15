import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
// import Signup from './Signup';
import SignupContainer from './containers/SignupContainer';
import {App} from './App';
import Login from './Login';
import UserDisplay from './UserDisplay';
import {Provider} from 'react-redux';
import store from '../store';
import {addUtoDb} from '../actions/addUser';
import axios from 'axios';
import {receiveUsers} from '../actions/users';

const onAppEnter = function () {
    axios.get('/api/users')
        .then(response => response.data)
        .then(users => store.dispatch(receiveUsers(users)));

    // Promise.all([
    //     axios.get('/api/users')
    // ])
    //     .then(responses => responses.map(r => r.data))
    //     .then(([users]) => {
    //         store.dispatch(receiveUsers(users));
    //     });

};

const onUserDisplayEnter = function(nextRouterState) {
    console.log("onUserDisplayEnter nextRouterState", nextRouterState);
    // store.dispatch(addUtoDb(nextRouterState.selectedUser));
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={App} onEnter={onAppEnter}>
                <IndexRoute component={SignupContainer}/>
                <Route path ='/login' component = {Login}/>
                <Route path = '/user' component = {UserDisplay} onEnter={onUserDisplayEnter}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);

