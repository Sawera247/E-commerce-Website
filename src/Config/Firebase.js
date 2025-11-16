import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

const FirebaseConfig = {
  apiKey: "AIzaSyB18kOpJblTND5JKOZXBlQIDulGgJARqec",
  authDomain: "e-commerce-website-22f0e.firebaseapp.com",
  databaseURL: "https://e-commerce-website-22f0e-default-rtdb.firebaseio.com",
  projectId: "e-commerce-website-22f0e",
  storageBucket: "e-commerce-website-22f0e.firebasestorage.app",
  messagingSenderId: "1005714569652",
  appId: "1:1005714569652:web:89ddccb1bbe5d118ba9ae1",
  measurementId: "G-C7SVRCT18X"
};

const app = initializeApp(FirebaseConfig)
export const db = getDatabase(app)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
