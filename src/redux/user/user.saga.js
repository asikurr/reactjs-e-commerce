import {takeLatest,put,call,all} from "redux-saga/effects";
import {auth, googleProvider,createUserProfileDocument} from "../../firebase/firebase.utils";
import userActionType from "./user.type";

import {googleSignInSuccess,googleSignInFailur,emailSignInFailur,emailSignInSuccess} from "../../redux/user/user.action"

export function* signInWithGoogle(){
    try{
        const {user} = yield auth.signInWithPopup(googleProvider);
        const userRef = yield call(createUserProfileDocument,user);
        const userSnapShot =yield userRef.get();
        yield put(
            googleSignInSuccess({id:userSnapShot.id, ...userSnapShot.data()})
        );

    }catch (e) {
        yield put(googleSignInFailur(e.message))
    }
}

export function* onGoogleSigninStart() {
    yield takeLatest(userActionType.GOOGLE_SIGNIN_START,signInWithGoogle)
}

export function* emailSignIn({payload: {email, password}}){
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        const userRef = yield call(createUserProfileDocument,user);
        const userSnapShot =yield userRef.get();
        yield put(
            emailSignInSuccess({id:userSnapShot.id, ...userSnapShot.data()})
        );
    }catch (e) {
        yield put(emailSignInFailur(e.message))
    }
}

export function* onEmailSigninStart(){
    yield takeLatest(userActionType.EMAIL_SIGNIN_START, emailSignIn)
}

export function* userSaga() {
    yield all([
        call(onGoogleSigninStart),
        call(onEmailSigninStart),
    ])
}