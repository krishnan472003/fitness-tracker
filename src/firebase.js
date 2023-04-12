// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAyt6CtIm54fAuv_oZ6BmLPncW14TK0P58",
  authDomain: "august-emitter-383109.firebaseapp.com",
  projectId: "august-emitter-383109",
  storageBucket: "august-emitter-383109.appspot.com",
  messagingSenderId: "982971543556",
  appId: "1:982971543556:web:32b168a71a342ebbbac551",
  measurementId: "G-MG0V0ZCDP0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)
export {db,auth};