// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO_0-ofUHnqzBCNpMUCHMMmZQparoKbxw",
  authDomain: "cleanmybg-52553.firebaseapp.com",
  projectId: "cleanmybg-52553",
  storageBucket: "cleanmybg-52553.firebasestorage.app",
  messagingSenderId: "486870175783",
  appId: "1:486870175783:web:c2777ad2141d8d3dfc3e02",
  measurementId: "G-HVNQV1FPX7"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

export { app, analytics };