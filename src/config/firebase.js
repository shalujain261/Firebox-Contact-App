import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAbumwxfaNuQD4RyI0yt7vRgxbXCExtssM",
  authDomain: "vite-contact-2639c.firebaseapp.com",
  projectId: "vite-contact-2639c",
  storageBucket: "vite-contact-2639c.appspot.com",
  messagingSenderId: "400004987539",
  appId: "1:400004987539:web:67728b194b67e85d5deb66"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)