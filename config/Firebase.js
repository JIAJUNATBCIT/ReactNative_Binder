import * as firebase from "firebase";
import "@firebase/firestore";
import "@firebase/storage";


var firebaseConfig = {
  apiKey: "AIzaSyARJZPCpMaWjQcguU5PMTzBzlukO19px-g",
  authDomain: "binderatbcit.firebaseapp.com",
  databaseURL: "https://binderatbcit.firebaseio.com",
  projectId: "binderatbcit",
  storageBucket: "binderatbcit.appspot.com",
  messagingSenderId: "449388075606",
  appId: "1:449388075606:web:b0aa4d28a52e35d51f79f7"
};

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
