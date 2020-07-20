import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

 var firebaseConfig = {
    apiKey: "AIzaSyBsTKmK4jpqSfAskJO7AF5kRrJRHD1PWxY",
    authDomain: "fir-4004f.firebaseapp.com",
    databaseURL: "https://fir-4004f.firebaseio.com",
    projectId: "fir-4004f",
    storageBucket: "fir-4004f.appspot.com",
    messagingSenderId: "583954778289",
    appId: "1:583954778289:web:a767bf0d549dc5226dfa90",
    measurementId: "G-H4XMFD597R"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;