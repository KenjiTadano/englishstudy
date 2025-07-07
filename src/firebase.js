// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTia_9EMxXFyPa50pYcXB-ttPIKwVVRq4",
  authDomain: "englishstudy-8403c.firebaseapp.com",
  projectId: "englishstudy-8403c",
  storageBucket: "englishstudy-8403c.firebasestorage.app",
  messagingSenderId: "902319147072",
  appId: "1:902319147072:web:1a2b05088cf02b7ca677a5",
  measurementId: "G-L3MQHC3YRT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
