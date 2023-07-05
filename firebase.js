// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDEpBnfLoZyBlfrYizZDNX4vNC7oMCepg",
  authDomain: "aaraike-nursery.firebaseapp.com",
  projectId: "aaraike-nursery",
  storageBucket: "aaraike-nursery.appspot.com",
  messagingSenderId: "773974142860",
  appId: "1:773974142860:web:e6dc39c2ef6ad79d38b0a9",
  measurementId: "G-KTNN5F17KV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);