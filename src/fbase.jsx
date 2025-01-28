import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth"
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID
  };
  

const app = firebase.initializeApp(firebaseConfig);

export const authService = getAuth(app);
export const dbService = firebase.firestore();
export const storageService = firebase.storage();

