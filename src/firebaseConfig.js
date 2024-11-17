// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmU6JnG0BUs_QXJL90NOsPPOgIAxblqNg",
  authDomain: "coastal-homes-9e7e8.firebaseapp.com",
  projectId: "coastal-homes-9e7e8",
  storageBucket: "coastal-homes-9e7e8.firebasestorage.app",
  messagingSenderId: "487124020556",
  appId: "1:487124020556:web:7088f5a4e9ec47989033e9",
  measurementId: "G-FGN330C6E9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and export it for use in other files
const auth = getAuth(app); // Fixed here

export { auth };