import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClmh_ph9VKx9HtdXzbMVMw-rnyU7vOYUs",
  authDomain: "crwn-clothing-db-384b2.firebaseapp.com",
  projectId: "crwn-clothing-db-384b2",
  storageBucket: "crwn-clothing-db-384b2.appspot.com",
  messagingSenderId: "30620286384",
  appId: "1:30620286384:web:13be78c44c3c0070e26a75",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
};
