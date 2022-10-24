// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvrEGpujvllWnfw2hClm6amZG0-rcTveE",
  authDomain: "aks-todo.firebaseapp.com",
  projectId: "aks-todo",
  storageBucket: "aks-todo.appspot.com",
  messagingSenderId: "655601257361",
  appId: "1:655601257361:web:c8e83bdccf79dcde4de830",
  measurementId: "G-Z2Y8H9030Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);