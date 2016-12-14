import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Signup from './Signup';
import App from './App';
import Login from './Login';
import UserDisplay from './UserDisplay';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Signup}/>
            <Route path ='/login' component = {Login}/>
            <Route path = '/user' component = {UserDisplay}/>
        </Route>
    </Router>,
    document.getElementById('app')
);

