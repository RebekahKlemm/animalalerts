import React, {Component} from 'react';
import { connect } from 'react-redux';

import Signup from '../Signup';
import {addUser, addUToDb} from '../../actions/addUser'
import store from '../../store';

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
        console.log('handleinputChange name and value', e.target.name, e.target.value)
            this.setState({[e.target.name]:e.target.value});
    }

    render(){
        return (<Signup handleInputChange={this.handleInputChange} signUpUser={this.signUpUser} {...this.state}/>)
    }

    signUpUser(e){
        e.preventDefault();
        console.log('hitting signUpUser in SignupContainer')
        const user = {
            first: e.target.first.value,
            last: e.target.last.value,
            address: e.target.address.value,
            phone: e.target.phone.value,
            password: e.target.password.value
        }
        this.props.addUToDb(user);
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
    return {};
}



const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        //     addUser: function(user) {
        //         dispatch(addUser(user));
        //     },
            addUToDb: function(user){
                dispatch(addUToDb(user));
            },

        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);





////////////////////

// export default class Signup extends Component{
//     constructor(props){
//         console.log(props);
//         super(props);
//         this.state = {
//             first: '',
//             last: '',
//             address: '',
//             phone: '',
//             password: ''
//         }
//     }
//
//     handleInputChange(e){
//         const nextState = Object.assign({}, this.state)
//         nextState[e.target.name] = e.target.value;
//         this.setState(nextState);
//     }
//

//
//
// }
//
//
//
//
