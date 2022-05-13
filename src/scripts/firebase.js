// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDgdy3uEFmzi_a7UgM2oQfsMY6pYSuhaPI",
  authDomain: "quick-flick-picker-8efef.firebaseapp.com",
  databaseURL: "https://quick-flick-picker-8efef-default-rtdb.firebaseio.com",
  projectId: "quick-flick-picker-8efef",
  storageBucket: "quick-flick-picker-8efef.appspot.com",
  messagingSenderId: "461695642490",
  appId: "1:461695642490:web:8a4bf5ee889027b21f44c3",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
