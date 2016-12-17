import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
// import Signup from './Signup';
import SignupContainer from './containers/SignupContainer';
import {App} from './App';
import LoginContainer from './containers/LoginContainer';
import UserDisplay from './containers/UserDisplay';
import AdminContainer from './containers/AdminContainer';
import {Provider} from 'react-redux';
import store from '../store';
import {addUtoDb} from '../actions/users';
import axios from 'axios';
import {receiveUsers, updateCurrentUser} from '../actions/users';
import {receiveAlerts, updateCurrentAlerts} from '../actions/alerts';

const onAppEnter = function () {
    Promise.all([
        axios.get('/api/users'),
        axios.get('/api/alerts')
    ])
        .then(responses => responses.map(r => r.data))
        .then(([users, alerts]) => {
            store.dispatch(receiveUsers(users));
            store.dispatch(receiveAlerts(alerts));
        })

};

const onUserDisplayEnter = function (props) {
    Promise.all([
        axios.get('/api/users/' + props.params.id),
        axios.get('/api/alerts/' + props.params.id)
    ])
        .then(responses => responses.map(r => r.data))
        .then(([user, alerts]) => {
            console.log('in index.js, onUserDisplayEnter, user ---->', user);
            console.log('in index.js, onUserDisplayEnter, alerts ---->', alerts);
            store.dispatch(updateCurrentUser(user));
            store.dispatch(updateCurrentAlerts(alerts));
        })

};

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={App} onEnter={onAppEnter}>
                <IndexRoute component={SignupContainer}/>
                <Route path ='/login' component={LoginContainer}/>
                <Route path='/user/:id' component={UserDisplay} onEnter={onUserDisplayEnter}/>
                <Route path='/admin/:id' component={AdminContainer} onEnter={onUserDisplayEnter}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);

//{/*<Route path='/user' component={UserDisplay}/>*/}
