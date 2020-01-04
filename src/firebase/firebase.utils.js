import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAr3CkylCEuxrGiI0gaH8N95TZiVQRB0YE",
  authDomain: "cloth-db-b10c3.firebaseapp.com",
  databaseURL: "https://cloth-db-b10c3.firebaseio.com",
  projectId: "cloth-db-b10c3",
  storageBucket: "cloth-db-b10c3.appspot.com",
  messagingSenderId: "629575517927",
  appId: "1:629575517927:web:beed72b10553889d88c442",
  measurementId: "G-WZMCPT60Q6"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;