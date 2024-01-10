import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD2GirHuHpwCi-R6hocY90le6hy_tq2MOA",
  authDomain: "netflix-clone-c7efc.firebaseapp.com",
  projectId: "netflix-clone-c7efc",
  storageBucket: "netflix-clone-c7efc.appspot.com",
  messagingSenderId: "272899635330",
  appId: "1:272899635330:web:e0f63f7180a9542bc95c9b",
  measurementId: "G-M1K69J3B5P",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
};
export default db;
