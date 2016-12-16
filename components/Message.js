import React, {Component} from 'react';



export default function Message(props){
    console.log("Message props --------------->", props);
        const allMessages = props.allMessages;
        return(
            <div>
                { allMessages.map((message) => {
                        return(<div className="message" key={message.id}>
                            <h3>Message appears below</h3>
                            <h3>To: {message.to}</h3>
                            <h3>From: {message.from}</h3>
                            <h3>Body: {message.body}</h3>
                        </div>)
                    }
                )}
            </div>
        )
}





//
// export default class Message extends Component{
//     constructor(props){
//         super(props)
//     }
//
//     render(props){
//         const allMessages = props.allMessages;
//         return(
//             <div>
//                 { allMessages.map((message) => {
//                         return(<div className="message" key=message.id>
//                             <h3>Message appears below</h3>
//                             <h3>To: {message.to}</h3>
//                             <h3>From: {message.from}</h3>
//                             <h3>Body: {message.body}</h3>
//                         </div>)
//                     }
//                 )}
//             </div>
//         )
//     }
// }




