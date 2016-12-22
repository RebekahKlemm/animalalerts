import React, {Component} from 'react';
import Inbox from '../Inbox';
import LegislatorsContainer from './LegislatorsContainer';
import { connect } from 'react-redux';

class UserDisplay extends Component{
    constructor(props){
        super(props);

    }

    render(){
        // if (this.props.currentAlerts) {
            return (
                <div className="container">
                <LegislatorsContainer/>
                <Inbox allAlerts={this.props.allAlerts} currentAlerts={this.props.currentAlerts}
                       currentUser={this.props.currentUser}/>
                </div>
            )
        // }
        // else return (
        //     <div>Congratulations on signing up</div>
        // )
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




