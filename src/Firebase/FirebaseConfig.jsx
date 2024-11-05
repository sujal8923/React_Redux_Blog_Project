// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzyi6a4AkWcwMW6NU5LZMJhx5FZoD85fY",
  authDomain: "first-972a9.firebaseapp.com",
  projectId: "first-972a9",
  storageBucket: "first-972a9.firebasestorage.app",
  messagingSenderId: "816676195733",
  appId: "1:816676195733:web:1307563ec36ac5098c3a9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app)