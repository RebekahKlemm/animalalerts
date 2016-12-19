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
            from: this.props.currentUser.phone,
            body: e.target.body.value
        }
        this.props.addAToDb(alert);
        this.setState({
            to: '',
            from: '',
            body: ''
        })
    }

}


const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.users.currentUser
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


