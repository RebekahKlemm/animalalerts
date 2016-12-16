import React, {Component} from 'react';
import Inbox from './Inbox';
import { connect } from 'react-redux';
import {changeView} from '../actions/view';


class UserDisplay extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return (<Inbox allMessages={this.props.allMessages}/>)
    }

}

const mapStateToProps = (state, ownProps) => {
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




