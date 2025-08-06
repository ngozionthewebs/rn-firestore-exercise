
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLu2cjy06dxffHwqCzU3byHqyExw7zYaU",
  authDomain: "ngozi-classproject.firebaseapp.com",
  projectId: "ngozi-classproject",
  storageBucket: "ngozi-classproject.firebasestorage.app",
  messagingSenderId: "238606796547",
  appId: "1:238606796547:web:228af560ad2d3acb854b36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Cloudfirestore and get refrence to the service
export const db = getFirestore(app);