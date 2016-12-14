export default addUser = function (user) {
    return {
        type: 'ADD_USER',
        user: user
    };
};