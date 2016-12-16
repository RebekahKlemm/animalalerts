import React, {Component} from 'react';
import Inbox from './Inbox';
import { connect } from 'react-redux';
import {changeView} from '../actions/view';


class UserDisplay extends Component{
    constructor(props){
        super(props);

    }

    render(props){
        // console.log("UserDisplay this.props", this.props)
        return (<Inbox allMessages={this.props.allMessages}/>)
    }

}

const mapStateToProps = (state, ownProps) => {
    console.log("mstp state", state)
    return {
        allMessages: state.messages.allMessages
    };
}



const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeView: function(view){
            dispatch(changeView(view));
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(UserDisplay);




