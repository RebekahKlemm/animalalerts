import React, {Component} from 'react';
import { connect } from 'react-redux';
import NewAlert from '../NewAlert';
import {addAToDb, updateCurrentAlerts} from '../../actions/alerts'
// import {changeView} from '../../actions/view';

class NewAlertContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            to: '',
            from: '',
            body: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.addAlert = this.addAlert.bind(this);

    }

    handleInputChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    render(){
        return (<NewAlert handleInputChange={this.handleInputChange} addAlert={this.addAlert} {...this.state}/>)
    }

    addAlert(e){
        e.preventDefault();
        const alert = {
            to: e.target.to.value,
            from: e.target.from.value,
            body: e.target.body.value
        }
        this.props.addAToDb(alert);
        // this.props.updateCurrentAlerts(alert);
        // this.props.changeView('user')
        // console.log('signupcontainer user.phone', user.phone)
        // this.props.router.push('admin/'+ this.props.currentUser.phone);
        this.setState({
            to: '',
            from: '',
            body: ''
        })
    }

}


const mapStateToProps = (state, ownProps) => {
    return {
        // currentView: state.currentView
        currentUser: state.currentUser
    };
}



const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addAToDb: function(alert){
            dispatch(addAToDb(alert));
        },
        updateCurrentAlerts: function(alert){
            dispatch(updateCurrentAlerts(alert));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewAlertContainer);


