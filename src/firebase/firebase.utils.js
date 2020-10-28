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

export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch (e) {
            console.log('error creating by user',e.message)
        }
    }

    return userRef;
}

firebase.initializeApp(Config);

export const addCollectionAndDocument = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
      // console.log(newDocRef)
  });
  return await batch.commit();
};

export const convertCollctionsSnapShotToMap = collections =>{
  const transfromCollection = collections.docs.map(doc =>{
      const {title,items} = doc.data();


      return{
          routeName:encodeURI(title.toLowerCase()),
          id:doc.id,
          title,
          items
      }
  });
  return transfromCollection.reduce((accumulator,collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
  }, {})
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle =  () => auth.signInWithPopup(googleProvider);

export default firebase;

