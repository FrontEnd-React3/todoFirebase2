import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBucKamsIBBhFxqs8XqpqwQJWokJVnqWTk",
  authDomain: "todo-app-cp-a5667.firebaseapp.com",
  projectId: "todo-app-cp-a5667",
  storageBucket: "todo-app-cp-a5667.appspot.com",
  messagingSenderId: "879380139493",
  appId: "1:879380139493:web:947702c0ac593af4cd330c",
  measurementId: "G-E5QVKYV7VQ"
});
const db = firebaseApp.firestore();

// export {db};
export default db;
