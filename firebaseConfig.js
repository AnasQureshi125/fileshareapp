// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC77R-rWEfCay9tGOKdupS1QUpbq7Kakn4",
  authDomain: "learn-apps-3f292.firebaseapp.com",
  projectId: "learn-apps-3f292",
  storageBucket: "learn-apps-3f292.appspot.com",
  messagingSenderId: "786052576425",
  appId: "1:786052576425:web:f46182842d983502dbe5b8",
  measurementId: "G-8T3RZKSH1M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);