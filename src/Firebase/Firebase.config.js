// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZExARFQ4K-s1BTKDzvITLBQZyikBcGpQ",
  authDomain: "coffee-server-a34ad.firebaseapp.com",
  projectId: "coffee-server-a34ad",
  storageBucket: "coffee-server-a34ad.appspot.com",
  messagingSenderId: "996341718780",
  appId: "1:996341718780:web:853060a7d9414cd9f50179"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export  const auth = getAuth(app);