// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwUQFsKHOUp_YahXmEPxQUmFxrkiPffpI",
  authDomain: "taskhive-eefcd.firebaseapp.com",
  projectId: "taskhive-eefcd",
  storageBucket: "taskhive-eefcd.appspot.com",
  messagingSenderId: "414774897949",
  appId: "1:414774897949:web:e7619b4f9eb707204585f4",
  measurementId: "G-B27W2HBQF2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();
export { auth, db, googleProvider, storage };
