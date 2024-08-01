import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuvAQ9_APuskNvx11dd7ZfzFjj0rS7VZ0",
  authDomain: "fir-project-3f3e7.firebaseapp.com",
  projectId: "fir-project-3f3e7",
  storageBucket: "fir-project-3f3e7.appspot.com",
  messagingSenderId: "142014500994",
  appId: "1:142014500994:web:58f6d9899dbac48beba49b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;