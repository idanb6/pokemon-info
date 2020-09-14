import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASRURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket:process.env.REACT_APP_STORAGE,
  messagingSenderId: process.env.REACT_APP_MESSAG,
 });

export const db = firebaseApp.firestore();

export const auth = firebase.auth();

