import firebase from 'firebase-admin';

firebase.initializeApp({
  credential: firebase.credential.applicationDefault(),
});

const db = firebase.firestore();

export default db;
