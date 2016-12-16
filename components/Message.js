import React, {Component} from 'react';



export default function Message(props){
    console.log("Message props --------------->", props);
        const allMessages = props.allMessages;
        return(
            <div>
                { allMessages.map((message) => {
                        return(
                            <div className="message" key={message.id}>
                                <p>To: {message.to}</p>
                                <p>From: {message.from}</p>
                                <p>Body: {message.body}</p>
                                <hr/>
                            </div>
                        )
                    }
                )}
            </div>
        )
}





