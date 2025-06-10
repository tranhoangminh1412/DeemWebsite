// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIYeVaaUFBwdJPXZMyT7JRUej90lqOCO4",
  authDomain: "deemcafe-223.firebaseapp.com",
  projectId: "deemcafe-223",
  storageBucket: "deemcafe-223.firebasestorage.app",
  messagingSenderId: "281009771538",
  appId: "1:281009771538:web:deeab3bbcd4f126e9d74cb",
  measurementId: "G-M9G265LZ2J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);