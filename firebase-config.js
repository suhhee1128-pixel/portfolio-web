// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZsDKjrjnWCv7W2N_ubKjFPsW1oSs3yqk",
  authDomain: "portfolio-mine-9db65.firebaseapp.com",
  projectId: "portfolio-mine-9db65",
  storageBucket: "portfolio-mine-9db65.firebasestorage.app",
  messagingSenderId: "1019266253556",
  appId: "1:1019266253556:web:e7e3d2e2f29c36f59514a1",
  measurementId: "G-NS0T8LC56X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log('Firebase initialized successfully');

