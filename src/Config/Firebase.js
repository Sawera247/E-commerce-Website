// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB18kOpJblTND5JKOZXBlQIDulGgJARqec",
  authDomain: "e-commerce-website-22f0e.firebaseapp.com",
  databaseURL: "https://e-commerce-website-22f0e-default-rtdb.firebaseio.com",
  projectId: "e-commerce-website-22f0e",
  storageBucket: "e-commerce-website-22f0e.firebasestorage.app",
  messagingSenderId: "1005714569652",
  appId: "1:1005714569652:web:89ddccb1bbe5d118ba9ae1",
  measurementId: "G-C7SVRCT18X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);