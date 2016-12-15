import React, { Component } from 'react';
import {Link} from 'react-router';

//
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
//     signUpUser(e){
//         e.preventDefault();
//         const user = {
//             first: e.target.first.value,
//             last: e.target.last.value,
//             address: e.target.address.value,
//             phone: e.target.phone.value,
//             password: e.target.password.value
//     }
//         this.props.addUToDb(user);
//         this.setState={
//             first: '',
//             last: '',
//             address: '',
//             phone: '',
//             password: ''
//         }
//     }

    // render(){
export default function(props) {
    return (
        <form id="new-signup-form" className="form-group" style={{marginTop: '20px'}} onSubmit={e => props.signUpUser(e)}>
            <input
                id="first-name-input"
                name="first"
                className="form-control"
                placeholder="Enter first name"
                onChange={e => props.handleInputChange(e)}
                value={props.first}
            />
            <input
                id="last-name-input"
                name="last"
                className="form-control"
                placeholder="Enter last name"
                onChange={e => props.handleInputChange(e)}
                value={props.last}
            />
            <input
                id="address-input"
                name="address"
                className="form-control"
                placeholder="Enter address"
                onChange={e => props.handleInputChange(e)}
                value={props.address}
            />
            <input
                id="phone-input"
                name="phone"
                className="form-control"
                placeholder="Enter phone number"
                onChange={e => props.handleInputChange(e)}
                value={props.phone}

            />
            <input
                id="password-input"
                name="password"
                className="form-control"
                placeholder="Enter password"
                onChange={e => props.handleInputChange(e)}
                value={props.password}
            />
            <button id="signup-submit" type="submit" form="new-signup-form" value="Submit"
                    className="btn btn-primary btn-block">
                <span className="glyphicon glyphicon-plus"></span> SUBMIT
            </button>
            <div id="alert-warning" hidden="true" className="alert alert-warning">Please enter a valid name</div>
        </form>
    )
}
//     }
// }
//
// value={this.state.phone}
