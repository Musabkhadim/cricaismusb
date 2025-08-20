// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0TwW0bYt2B4PIiEYpbF5OpGRigzr79QU",
  authDomain: "muft-d9a5e.firebaseapp.com",
  projectId: "muft-d9a5e",
  storageBucket: "muft-d9a5e.firebasestorage.app",
  messagingSenderId: "457576107148",
  appId: "1:457576107148:web:191f41ca5b4d442a3dbfa9",
  measurementId: "G-WQHSZ172H8"
};


const provider = new GoogleAuthProvider();

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Firestore connection
const auth = getAuth(app);
export { auth, provider, db };
