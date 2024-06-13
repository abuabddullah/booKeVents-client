// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQobKSHqUkd6eCxwr5HbboKcL9T6tuax4",
  authDomain: "bookeventsmern.firebaseapp.com",
  projectId: "bookeventsmern",
  storageBucket: "bookeventsmern.appspot.com",
  messagingSenderId: "215105021789",
  appId: "1:215105021789:web:0a2378ce5073aa12b72ab4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;