import {userActionType} from "./user.type";

const INNITIAL_STATE = {
    current_user: null
};

const userReducer = (state = INNITIAL_STATE,action) =>{
    switch(action.type){
        case userActionType.SET_CURRENT_USER:
            return {
                ...state,
                current_user: action.payload
            };

        default:
            return state;
    }
};

export default userReducer;