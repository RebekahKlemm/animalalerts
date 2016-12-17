import React, {Component} from 'react';
import Inbox from '../Inbox';
import { connect } from 'react-redux';

class UserDisplay extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return (<Inbox allAlerts={this.props.allAlerts} currentAlerts={this.props.currentAlerts} currentUser={this.props.currentUser}/>)
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        allAlerts: state.alerts.allAlerts,
        currentAlerts: state.alerts.currentAlerts,
        currentUser: state.users.currentUser
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}



export default connect(mapStateToProps, mapDispatchToProps)(UserDisplay);




