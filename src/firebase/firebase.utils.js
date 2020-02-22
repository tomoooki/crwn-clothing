import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCfgduX8UJEoajHzhiVlJOZXwdqNtEuxEM",
  authDomain: "crown-db-74e2a.firebaseapp.com",
  databaseURL: "https://crown-db-74e2a.firebaseio.com",
  projectId: "crown-db-74e2a",
  storageBucket: "crown-db-74e2a.appspot.com",
  messagingSenderId: "452231944910",
  appId: "1:452231944910:web:3932349bf7034e9ac3ce9f"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;