// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-SBHh4M1j4N-hzq57H5nd7ygZUT7AJdY",
  authDomain: "digitalphones-e1f95.firebaseapp.com",
  projectId: "digitalphones-e1f95",
  storageBucket: "digitalphones-e1f95.appspot.com",
  messagingSenderId: "711733702284",
  appId: "1:711733702284:web:80ba646ac8317ec4b255a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

console.log(db);