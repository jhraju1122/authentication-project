// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8aZAB_DDcOlP9uSZlBntEEtwLQ58NtfE",
  authDomain: "authentication-project-22c00.firebaseapp.com",
  projectId: "authentication-project-22c00",
  storageBucket: "authentication-project-22c00.appspot.com",
  messagingSenderId: "724043292514",
  appId: "1:724043292514:web:70d29005d9624ed9d8d63b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;