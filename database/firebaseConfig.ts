
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDZxDZJSLB87pn0RIqR0Vwcn01yEiNTX-Q",
    authDomain: "agri-nova-407b1.firebaseapp.com",
    projectId: "agri-nova-407b1",
    storageBucket: "agri-nova-407b1.firebasestorage.app",
    messagingSenderId: "462956319618",
    appId: "1:462956319618:web:e9f19e2bfdb2f669b3759b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)