// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "uit-estate.firebaseapp.com",
  projectId: "uit-estate",
  storageBucket: "uit-estate.appspot.com",
  messagingSenderId: "613656762573",
  appId: "1:613656762573:web:22df4836b30f097168b184"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);