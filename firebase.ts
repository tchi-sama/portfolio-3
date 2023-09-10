// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection
} from "firebase/firestore"
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuMMVPogjvVjPsRG5HkBPBbckxfHbBD78",
  authDomain: "tchisama-1cc2f.firebaseapp.com",
  projectId: "tchisama-1cc2f",
  storageBucket: "tchisama-1cc2f.appspot.com",
  messagingSenderId: "349408767918",
  appId: "1:349408767918:web:9914c8550aa2cdc32e623f",
  measurementId: "G-Q2WBLJ9QY4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const colRef = collection(db,"projects")
