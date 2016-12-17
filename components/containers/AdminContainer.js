import React, {Component} from 'react';
import UserDisplay from './UserDisplay';
import NewAlertContainer from './NewAlertContainer';

// import Inbox from '../Inbox';
import { connect } from 'react-redux';

class AdminContainer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <NewAlertContainer/>
                <UserDisplay/>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        // allAlerts: state.alerts.allAlerts,
        // currentAlerts: state.alerts.currentAlerts,
        // currentUser: state.users.currentUser
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}



export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);

