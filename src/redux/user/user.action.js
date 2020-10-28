import userActionType from "./user.type"
export const setCurrentUser = user =>({
    type:userActionType.SET_CURRENT_USER,
    payload: user
});

export const googleSignInStart = () =>({
    type : userActionType.GOOGLE_SIGNIN_START
});

export const googleSignInSuccess = (user) =>({
    type : userActionType.GOOGLE_SIGNIN_SUCCESS,
    payload:user
});

export const googleSignInFailur = (error) =>({
    type : userActionType.GOOGLE_SIGNIN_FAILUR,
    payload:error
});

export const emailSignInStart = (emailAndPassword) =>({
    type : userActionType.EMAIL_SIGNIN_START,
    payload: emailAndPassword
});

export const emailSignInSuccess = (user) =>({
    type : userActionType.EMAIL_SIGNIN_SUCCESS,
    payload:user
});

export const emailSignInFailur = (error) =>({
    type : userActionType.EMAIL_SIGNIN_FAILUR,
    payload:error
});