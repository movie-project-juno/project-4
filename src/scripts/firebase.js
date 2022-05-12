// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAPR1-6FISuJUDLVoe6Q85taygveYL7x34",
  authDomain: "movie-react-api.firebaseapp.com",
  databaseURL: "https://movie-react-api-default-rtdb.firebaseio.com",
  projectId: "movie-react-api",
  storageBucket: "movie-react-api.appspot.com",
  messagingSenderId: "115254793048",
  appId: "1:115254793048:web:4bb26ad2ea3e011d594b2d",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
