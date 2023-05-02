// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNC73PQ1xcUdlHs7kLmimzAHxey8SRhQ8",
  authDomain: "nutsaki-restaurant.firebaseapp.com",
  projectId: "nutsaki-restaurant",
  storageBucket: "nutsaki-restaurant.appspot.com",
  messagingSenderId: "629163257281",
  appId: "1:629163257281:web:f42f9f86df2fe88502d340"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;