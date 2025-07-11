// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Paste your Firebase config here after creating the web app
const firebaseConfig = {
  apiKey: "AIzaSyBlFB81kmluD2A6D6vT-wduM1-e7TZuUKU",
  authDomain: "trueweather-e2d43.firebaseapp.com",
  projectId: "trueweather-e2d43",
  storageBucket: "trueweather-e2d43.appspot.com",
  messagingSenderId: "528324492098",
  appId: "1:528324492098:web:fb33f74dd745b40ecae6db",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
