import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBak6E2RrvvSzCc79pPOTlDyraG6X_mhVA",
    authDomain: "chat-cb550.firebaseapp.com",
    projectId: "chat-cb550",
    storageBucket: "chat-cb550.appspot.com",
    messagingSenderId: "234011543039",
    appId: "1:234011543039:web:6420a1e580f3c8562993ca"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();