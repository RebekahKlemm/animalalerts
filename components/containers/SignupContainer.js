import React, {Component} from 'react';
import { connect } from 'react-redux';

import Signup from '../Signup';
import {addUser, addUToDb} from '../../actions/users'
import {changeView} from '../../actions/view';

class SignupContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            first: '',
            last: '',
            address: '',
            phone: '',
            password: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.signUpUser = this.signUpUser.bind(this);

    }

    handleInputChange(e){
            this.setState({[e.target.name]:e.target.value});
    }

    render(){
        return (<Signup handleInputChange={this.handleInputChange} signUpUser={this.signUpUser} {...this.state}/>)
    }

    signUpUser(e){
        e.preventDefault();
        const user = {
            first: e.target.first.value,
            last: e.target.last.value,
            address: e.target.address.value,
            phone: e.target.phone.value,
            password: e.target.password.value
        }
        this.props.addUToDb(user);
        this.props.changeView('user')
        this.setState({
            first: '',
            last: '',
            address: '',
            phone: '',
            password: ''
        })
    }

}


const mapStateToProps = (state, ownProps) => {
    return {
        currentView: state.currentView
    };
}



const mapDispatchToProps = (dispatch, ownProps) => {
    return {
            addUToDb: function(user){
                dispatch(addUToDb(user));
            },
            changeView: function(view){
                dispatch(changeView(view));
            }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);




