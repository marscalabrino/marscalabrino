// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaw28W2WdIzqj1-oswGry0qCY-w8ff-po",
  authDomain: "coderhouse-879e9.firebaseapp.com",
  projectId: "coderhouse-879e9",
  storageBucket: "coderhouse-879e9.appspot.com",
  messagingSenderId: "1051607181797",
  appId: "1:1051607181797:web:7e540d8bd487acf3ec270c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
