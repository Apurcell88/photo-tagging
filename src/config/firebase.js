// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  GoogleAuthProvider,
  getAuth
} from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsFhBFD8WW2eWmq9VP0qygirDQ2PPJpUc",
  authDomain: "photo-tagging-73ecc.firebaseapp.com",
  projectId: "photo-tagging-73ecc",
  storageBucket: "photo-tagging-73ecc.appspot.com",
  messagingSenderId: "734456455324",
  appId: "1:734456455324:web:ec311623a90cf594688d59",
  measurementId: "G-ZV4K62HVCX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// const analytics = getAnalytics(app)