import {RECEIVE_ALERTS, UPDATE_CURRENT_ALERTS, ADD_ALERT} from './constants';
import axios from 'axios';



export const receiveAlerts = function (allAlerts) {
    console.log('here is allAlerts in the alerts Action', allAlerts)
    return {
        type: RECEIVE_ALERTS,
        allAlerts: allAlerts
    };
};

export const updateCurrentAlerts = function (alerts) {
    console.log('got into updateCurrentAlerts, here is alerts', alerts)
    return {
        type: UPDATE_CURRENT_ALERTS,
        currentAlerts: alerts
    };
};


export const addAlert = function (alert) {
    // console.log("inside addAlert action, here is alert", alert)
    return {
        type: ADD_ALERT,
        alert: alert
    };
};


//asynch action creator (thunk)
export function addAToDb(alert, interests){
    // console.log('AAAAAAAACtion alert', alert);
    return function (dispatch){
        return axios.post('/api/alerts/newAlert', [alert, interests])
            .then(function(response){
                // console.log('RRRRRRRResponse', response)
                return response
            })
            .then(response => response.data)
            .then(function(newAlert){
                dispatch(addAlert(newAlert))
            })
    }
}