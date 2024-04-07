// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOFhN-YQoiP1bHPvbUhDpnpzaxCJtN-wc",
  authDomain: "c1-authentication.firebaseapp.com",
  projectId: "c1-authentication",
  storageBucket: "c1-authentication.appspot.com",
  messagingSenderId: "46601040448",
  appId: "1:46601040448:web:1a8d5812bd6f33a2e825a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export default auth