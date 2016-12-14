import React from 'react';
import {connect} from 'react-redux';


//import dumb subcomponents
import Signup from '../Signup';

//import actions
import addUser from '../../actions/addUser';

const mapStateToProps = (state, ownProps) => {
    return {
        // choose relevant slice of the app to pass on as props here
        users: state.users
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        // define methods that dispatch relevant actions here to pass on as props
        handleSubmit: function (e) {
            e.preventDefault();
            dispatch(addUser(ownProps.currentUser));
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Signup);



