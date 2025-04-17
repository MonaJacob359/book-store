// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD3TndONYFdLakRfSCyFS-bndc1Mo37iU",
  authDomain: "book-store-6d4c9.firebaseapp.com",
  projectId: "book-store-6d4c9",
  storageBucket: "book-store-6d4c9.firebasestorage.app",
  messagingSenderId: "195617621644",
  appId: "1:195617621644:web:76d7de88e3a332a8215da9",
  measurementId: "G-6VNM06SLDG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;

