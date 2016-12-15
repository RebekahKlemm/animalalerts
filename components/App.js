import React, {Component} from 'react';
import { connect } from 'react-redux';

import Nav from './Nav';
import SignupContainer from './containers/SignupContainer';

import {addUser, addUToDb} from '../actions/addUser'


export const App = function(props){
    return (
        <div id="main" className="container-fluid">
            <div>
                <Nav />
            </div>
            <div>
                {
                    props.children && React.cloneElement(props.children, props)
                }
            </div>
        </div>
    );
}



//
// const mapStateToProps = (state, ownProps) => {
//     return {
//         users: state.users
//     };
// }
//
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         addUser: function(user) {
//             dispatch(addUser(user));
//         },
//         addUToDb: function(user){
//             dispatch(addUToDb(user));
//         }




