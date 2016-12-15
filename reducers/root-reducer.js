import React from 'react';
import { combineReducers } from 'redux'
import users from './user-reducer';
import messages from './message-reducer';
import currentView from './currentView-reducer';


export default combineReducers({users, messages, currentView});