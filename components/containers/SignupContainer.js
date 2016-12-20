import React, {Component} from 'react';
import { connect } from 'react-redux';

import Signup from '../Signup';
import {addUser, addUToDb} from '../../actions/users'
import {changeView} from '../../actions/view';
import {addLatLongToDb} from '../../actions/addressDetails'

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

    handleInputChange(e){
        //handle interest check boxes
        if(e.target.name === 'interests'){
            //check to see if the interest is already in the array
            if(this.state.interests.length > 0){
                function matches(element){
                    return element === e.target.value;
                }
                  const index = this.state.interests.findIndex(matches);

                    //if the interest is in the array, remove it and update the State
                  if (index >= 0 ){
                      const newState = this.state.interests.slice(0, index).concat(this.state.interests.slice(index+1))
                      this.setState({interests: [...newState]});
                  }

                  //if the interest is not in the array, add it to the State
              else{
                  this.setState({interests: [...this.state.interests, e.target.value] })
              }
            }

            //if there is nothing in the State interest array yet, add this interest
            else {
                this.setState({interests: [...this.state.interests, e.target.value] })
            }
        }

        //handle the normal input fields
        else{
            this.setState({[e.target.name]:e.target.value});
        }
    }

    render(){
        return (<Signup allInterests={this.props.allInterests} handleInputChange={this.handleInputChange} signUpUser={this.signUpUser} {...this.state}/>)
    }

    signUpUser(e){
        e.preventDefault();
        console.log('...........this.state.interests', this.state.interests)
        const user = {
            first: e.target.first.value,
            last: e.target.last.value,
            address: e.target.address.value,
            phone: e.target.phone.value,
            password: e.target.password.value,
            interests: this.state.interests
        }
        this.props.addUToDb(user);
        console.log("Signup Container between addUToDb and addLatLongToDb")
        this.props.addLatLongToDb(user);
        this.props.router.push('user/'+user.phone);
        this.setState({
            first: '',
            last: '',
            address: '',
            phone: '',
            password: '',
            interests: []
        })
    }

}


const mapStateToProps = (state, ownProps) => {
    console.log('-----------> Signup Container state', state)
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
            },
            addLatLongToDb: function(user, lat, long){
                dispatch(addLatLongToDb(user, lat, long))
            }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);




