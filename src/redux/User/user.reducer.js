import userTypes from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    subscriptionActive: false,
    resetPasswordSuccess: false,
    userErr: []
};
console.log(INITIAL_STATE, 'INITIAL_STATE')

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                userErr: []
            }
        case userTypes.SUBSCRIBE_USER:
            return{
                ...state,
                subscriptionActive: action.payload
            }
        case userTypes.SUBSCRIPTION_STATUS:
            return{
                ...state,
            }
        case userTypes.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                resetPasswordSuccess: action.payload
            }
        case userTypes.USER_ERROR:
            return {
                ...state,
                userErr: action.payload
            }
        case userTypes.RESET_USER_STATE:
        case userTypes.SIGN_OUT_USER_SUCCESS:
            return {
                ...state,
                ...INITIAL_STATE
            }
        default:
            return state;
    }
};

export default userReducer;