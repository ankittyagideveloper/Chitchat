// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, RecaptchaVerifier } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPvCN4eQkSywHuBjn1EwAlyiUG0ojXwU0",
  authDomain: "chitchat-7f943.firebaseapp.com",
  projectId: "chitchat-7f943",
  storageBucket: "chitchat-7f943.appspot.com",
  messagingSenderId: "406205251033",
  appId: "1:406205251033:web:a6b39f93b6ec2363e66dc8",
  measurementId: "G-9X0E6N112C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);
const auth = getAuth(app);
auth.languageCode = "it";

export { auth, provider };
