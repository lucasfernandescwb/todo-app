// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClFJX7msvltyytmqtYgxM5v2AZv1wsZjk",
  authDomain: "test-todo-app-auth-87f12.firebaseapp.com",
  projectId: "test-todo-app-auth-87f12",
  storageBucket: "test-todo-app-auth-87f12.appspot.com",
  messagingSenderId: "294464206095",
  appId: "1:294464206095:web:4ed0ea851acd21695eba7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
