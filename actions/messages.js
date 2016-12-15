import {RECEIVE_MESSAGES} from './constants';



export const receiveMessages = function (allMessages) {
    return {
        type: RECEIVE_MESSAGES,
        allMessages: allMessages
    };
};
