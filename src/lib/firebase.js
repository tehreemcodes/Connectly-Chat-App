import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "connectly-24b83.firebaseapp.com",
  projectId: "connectly-24b83",
  storageBucket: "connectly-24b83.appspot.com",
  messagingSenderId: "966594826699",
  appId: "1:966594826699:web:70bd7923c5de0f6fd0264e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()