import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyC1V91QSLATpyXK2nvHtgXQybvOYzXda-o",
  authDomain: "clone-6decd.firebaseapp.com",
  projectId: "clone-6decd",
  storageBucket: "clone-6decd.appspot.com",
  messagingSenderId: "395702000401",
  appId: "1:395702000401:web:b77a585435b7fc04f00ab0",
  measurementId: "G-09JNG69KX5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };