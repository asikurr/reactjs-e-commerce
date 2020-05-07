import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const Config = {
    apiKey: "AIzaSyC-mgiBvR1jiIgs2qsRbTLhK9c_SQn4d58",
    authDomain: "ecommerce-project-dbb97.firebaseapp.com",
    databaseURL: "https://ecommerce-project-dbb97.firebaseio.com",
    projectId: "ecommerce-project-dbb97",
    storageBucket: "ecommerce-project-dbb97.appspot.com",
    messagingSenderId: "870379215638",
    appId: "1:870379215638:web:d976dad01ced3e4359ce37",
    measurementId: "G-QQY821DTJ8"
};

firebase.initializeApp(Config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle =  () => auth.signInWithPopup(provider);

export default firebase;

