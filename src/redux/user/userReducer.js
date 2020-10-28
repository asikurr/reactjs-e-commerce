import userActionType from "./user.type";

const INNITIAL_STATE = {
    current_user: null,
    error:null
};

const userReducer = (state = INNITIAL_STATE,action) =>{
    switch(action.type){
        case userActionType.GOOGLE_SIGNIN_SUCCESS:
        case userActionType.EMAIL_SIGNIN_SUCCESS:
            return {
                ...state,
                current_user: action.payload,
                error:null
            };
        case userActionType.GOOGLE_SIGNIN_FAILUR:
        case userActionType.EMAIL_SIGNIN_FAILUR:
            return{
                ...state,
                error:action.payload
            };

        default:
            return state;
    }
};

export default userReducer;