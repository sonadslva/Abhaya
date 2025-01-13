// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoS5kKvy9LkhsNIa_NV6fUxwXp6lYvECw",
  authDomain: "abhayaayur-54f5f.firebaseapp.com",
  projectId: "abhayaayur-54f5f",
  storageBucket: "abhayaayur-54f5f.firebasestorage.app",
  messagingSenderId: "701407308085",
  appId: "1:701407308085:web:99d7f994c3922f7d2b447c",
  databaseURL: "https://abhayaayur-54f5f-default-rtdb.asia-southeast1.firebasedatabase.app",
  measurementId: "G-0EL0C784QR",
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const rtDatabase = getDatabase(app);
const auth = getAuth(app);

export { db, rtDatabase, auth, signInWithEmailAndPassword};