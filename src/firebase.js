// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCVPWNHJPEoIfdCKzbzU1K0iAjOvA1iqrk",
    authDomain: "shopplusplus-2f91d.firebaseapp.com",
    projectId: "shopplusplus-2f91d",
    storageBucket: "shopplusplus-2f91d.appspot.com",
    messagingSenderId: "470203064143",
    appId: "1:470203064143:web:52bb892ff94cda28f0ef3a",
    measurementId: "G-QB6YTVE387"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();


  export {db, auth};