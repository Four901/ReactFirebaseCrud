import firebase from 'firebase/compat/app'

import { getFirestore } from 'firebase/firestore';


  // Initialize Firebase
  const app = firebase.initializeApp({
    apiKey: "AIzaSyA6gk0swXxZaxjZVoYXzNoPJhXpdrHWFFU",
    authDomain: "react-crudapp-ff5d5.firebaseapp.com",
    projectId: "react-crudapp-ff5d5",
    storageBucket: "react-crudapp-ff5d5.appspot.com",
    messagingSenderId: "151024179733",
    appId: "1:151024179733:web:86c3cda4d0e58f5abfcc1c",
    measurementId: "G-K9Q4S9MSQC"
  });


  export  const db=getFirestore(app)