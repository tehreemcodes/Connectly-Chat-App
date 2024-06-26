import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "YOUR-DOMAIN",
  projectId: "YOUR-DOMAIN",
  storageBucket: "YOUR-DOMAIN",
  messagingSenderId: "YOUR-DOMAIN",
  appId: "YOUR-DOMAIN"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
