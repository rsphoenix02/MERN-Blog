// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-39bcd.firebaseapp.com",
  projectId: "mern-blog-39bcd",
  storageBucket: "mern-blog-39bcd.appspot.com",
  messagingSenderId: "658712721343",
  appId: "1:658712721343:web:a2c63dc84f91211883930a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);