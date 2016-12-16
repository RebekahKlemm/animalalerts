import React, {Component} from 'react';
import { connect } from 'react-redux';
import Message from './Message';


export default function Inbox(props){
    console.log("Inbox props --------------->", props);
    const allMessages = props.allMessages;
    return(
        <div>

                <Message allMessages={allMessages} />

        </div>
    )
}



//
// class Inbox extends Component{
//     constructor(props){
//         super(props);
//     }
//
//
//     render(){
//         console.log('Inbox allmessages with this --------->', this.allMessages)
//         console.log('Inbox allmessages without this--------->', allMessages)
//         return (
//             <div>
//             <div> You are in Inbox </div>
//             <Message allMessages={this.allMessages}/>
//             </div>
//                 )
//
//     }
//
// }
//
// const mapStateToProps = (state, ownProps) => {
//     return {
//         allMessages: state.messages.allMessages
//     };
// }
//
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//             changeView: function(view){
//                 dispatch(changeView(view));
//             }
//     }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Inbox);
//
//
//
