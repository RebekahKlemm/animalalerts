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
            password: '',
            interests: []
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.signUpUser = this.signUpUser.bind(this);

    }

//
//     function isBigEnough(element) {
//     return element >= 15;
// }
//
//     [12, 5, 8, 130, 44].findIndex(isBigEnough); // 3




    handleInputChange(e){
        if(e.target.name === 'interests'){
            if(this.state.interests.length > 0){
                function matches(element){
                    return element === e.target.value;
                }
                  const index = this.state.interests.findIndex(matches);
                  if (index >= 0 ){
                      const newState = this.state.interests.slice(0, index).concat(this.state.interests.slice(index+1))
                      this.setState({interests: [...newState]});
                  }
              else{
                  //this adds the category to the array
                  this.setState({interests: [...this.state.interests, e.target.value] })
              }
            }

            //this adds the category to the array
            else {
                this.setState({interests: [...this.state.interests, e.target.value] })
            }
        }
        else{
            this.setState({[e.target.name]:e.target.value});
        }
    }

    render(){
        console.log('signupContainer props', this.props)
        return (<Signup allInterests={this.props.allInterests} handleInputChange={this.handleInputChange} signUpUser={this.signUpUser} {...this.state}/>)
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
        // this.props.changeView('user')
        // console.log('signupcontainer user.phone', user.phone)
        this.props.router.push('user/'+user.phone);
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
        currentView: state.currentView,
        allInterests: state.interests.allInterests
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




