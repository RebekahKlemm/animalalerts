import React, {Component} from 'react';



export default function Alert(props){
    // console.log("Alert props --------------->", props);
        const allAlerts = props.allAlerts;
        let currentAlerts = [...props.currentAlerts];
            currentAlerts.reverse();
        const currentUser = props.currentUser;

    // if(currentUser.role === 'admin'){
    //     currentAlerts = allAlerts
    // }

        return(
            <div>
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





