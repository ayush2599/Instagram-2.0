// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYTE3amZueEc-GwZ0PaRBXf9zFsiNPSLM",
  authDomain: "insta-2-469d4.firebaseapp.com",
  projectId: "insta-2-469d4",
  storageBucket: "insta-2-469d4.appspot.com",
  messagingSenderId: "592916750023",
  appId: "1:592916750023:web:81adbb1aa56298a438e8e2",
  measurementId: "G-RGPCGQYECJ"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);
const db=getFirestore();
const storage=getStorage();

export {app, db, storage};