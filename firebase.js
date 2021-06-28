import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVdRPFohLkumYBvFUxHgJwJzfdtz_EY-M",
    authDomain: "chitthi-chat.firebaseapp.com",
    projectId: "chitthi-chat",
    storageBucket: "chitthi-chat.appspot.com",
    messagingSenderId: "887773107653",
    appId: "1:887773107653:web:282ebc637e2cc7c1f4a7ac",
    measurementId: "G-43J9ZEJ2LL"
  };

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };