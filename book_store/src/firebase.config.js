
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCzNG7T8KuCnBm-8me3sqVvUL5ANIiZIYc",
  authDomain: "bookstore-9f28f.firebaseapp.com",
  projectId: "bookstore-9f28f",
  storageBucket: "bookstore-9f28f.appspot.com",
  messagingSenderId: "388464135539",
  appId: "1:388464135539:web:13cd06a160690fa0b18906"
};


const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


export default app;