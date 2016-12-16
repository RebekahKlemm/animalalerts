import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
// import Signup from './Signup';
import SignupContainer from './containers/SignupContainer';
import {App} from './App';
import LoginContainer from './containers/LoginContainer';
import UserDisplay from './UserDisplay';
import {Provider} from 'react-redux';
import store from '../store';
import {addUtoDb} from '../actions/users';
import axios from 'axios';
import {receiveUsers} from '../actions/users';
import {receiveMessages} from '../actions/messages';

const onAppEnter = function () {
    // axios.get('/api/users')
    //     .then(response => response.data)
    //     .then(allUsers => store.dispatch(receiveUsers(allUsers)));

    Promise.all([
        axios.get('/api/users'),
        axios.get('/api/messages')
    ])
        .then(responses => responses.map(r => r.data))
        .then(([users, messages]) => {
            store.dispatch(receiveUsers(users));
            store.dispatch(receiveMessages(messages));
        })

};


ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={App} onEnter={onAppEnter}>
                <IndexRoute component={SignupContainer}/>
                <Route path ='/login' component={LoginContainer}/>
                <Route path='/user' component={UserDisplay}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);

