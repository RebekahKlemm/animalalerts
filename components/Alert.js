import React, {Component} from 'react';



export default function Alert(props){
        let currentAlerts = [...props.currentAlerts];
            currentAlerts.reverse();
        const currentUser = props.currentUser;

    let header;
        if (currentUser.role === 'admin'){
            header = <h3>Admin Outbox</h3>
        }
            else header = <h3>Alert Inbox</h3>

    let emptyInbox;


    if(currentAlerts.length === 0){
       emptyInbox =
           <div className='container'>
                <div className='row'>
                    <div className="col-sm-6">
                        <img className='inboxImage' src='/inbox.jpg'/>
                    </div>
                    <div className="col-sm-6">
                        <h3 className='helperText'>Hint: Click on the Admin Link in the Nav bar to send a message to the group you signed up for (wildlife, farm animals, domestic pets)</h3>
                        <h4>Clicking the admin link will log you in as an admin, so after you send the message, you will need to login as yourself to check your messages</h4>
                    </div>
                </div>
            </div>

    }



        return(
            <div>
                {header}
                {emptyInbox}

                { currentAlerts.map((alert) => {
                        return(
                            <div className="alert" key={alert.id}>
                                <p>To: {alert.to}</p>
                                <p>From: {alert.from}</p>
                                <p>Body: {alert.body}</p>
                                <hr/>
                            </div>
                        )
                    }
                )}
            </div>
        )
}





