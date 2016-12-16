import {RECEIVE_ALERTS, UPDATE_CURRENT_ALERTS} from './constants';



export const receiveAlerts = function (allAlerts) {
    return {
        type: RECEIVE_ALERTS,
        allAlerts: allAlerts
    };
};

export const updateCurrentAlerts = function (alerts) {
    return {
        type: UPDATE_CURRENT_ALERTS,
        currentAlerts: alerts
    };
};
