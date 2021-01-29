import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBh8azr-1JerPV7XWzhc5-O8B6xPWMRhSY",
  authDomain: "abriendo-el-juego.firebaseapp.com",
  projectId: "abriendo-el-juego",
  storageBucket: "abriendo-el-juego.appspot.com",
  messagingSenderId: "312894269035",
  appId: "1:312894269035:web:b976c6c855884d07d9b32e",
  measurementId: "G-0N3ZDC1BZQ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export default {
  firebase,
  db,
};
