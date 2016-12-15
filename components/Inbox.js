import React, {Component} from 'react';
import { connect } from 'react-redux';
import Message from './Message';


class Inbox extends Component{
    constructor(props){
        super(props);
    }



    render(){
        return (
            <div>
            <div> You are in Inbox </div>
            <Message/>
            </div>
                )

    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        allMessages: state.allMessages
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

export default connect(mapStateToProps, mapDispatchToProps)(Inbox);



