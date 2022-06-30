import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRbH5gxmEJ5RYw0IvD2zsFia_LK8hxlNc",
  authDomain: "raven-db.firebaseapp.com",
  projectId: "raven-db",
  storageBucket: "raven-db.appspot.com",
  messagingSenderId: "528688081754",
  appId: "1:528688081754:web:06aad0d983807247ace163",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
