// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxsIzU6VgcrZJ9znUh1MNJErlwQ_I8s4Y",
  authDomain: "farmacia-fv-6fa3c.firebaseapp.com",
  projectId: "farmacia-fv-6fa3c",
  storageBucket: "farmacia-fv-6fa3c.appspot.com",
  messagingSenderId: "390589800369",
  appId: "1:390589800369:web:16ec9784ccb096b142e790"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app)
