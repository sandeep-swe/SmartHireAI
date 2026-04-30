// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "smarthireai-7d1e3.firebaseapp.com",
  projectId: "smarthireai-7d1e3",
  storageBucket: "smarthireai-7d1e3.firebasestorage.app",
  messagingSenderId: "163011466660",
  appId: "1:163011466660:web:9e90ba213b64445cb01d31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };