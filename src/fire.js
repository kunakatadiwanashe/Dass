
// import firebase from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCO70IoI2CKRjPyyLeogr5gAUeg_fQNI9o",
  authDomain: "events-app-login.firebaseapp.com",
  projectId: "events-app-login",
  storageBucket: "events-app-login.appspot.com",
  messagingSenderId: "1050691157662",
  appId: "1:1050691157662:web:7c6505a628673b22be858f"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
