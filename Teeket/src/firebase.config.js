// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDIKN1ahny86HqwOvu44Hcx3F6HOhXlY6Q",
  authDomain: "teeket-team2.firebaseapp.com",
  projectId: "teeket-team2",
  storageBucket: "teeket-team2.appspot.com",
  messagingSenderId: "566449419950",
  appId: "1:566449419950:web:f581521808c4b36e489f3f",
  measurementId: "G-SX2SMFWQMP",
};

//signInWithEmailAndPassword,
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
export const firebaseSetup = getFirestore();
