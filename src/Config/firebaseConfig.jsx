import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAIN6uKQ2r5zA4IY6wmPwgbgRh-c4i2E9M",
  authDomain: "event-management-assignm-4ed25.firebaseapp.com",
  projectId: "event-management-assignm-4ed25",
  storageBucket: "event-management-assignm-4ed25.appspot.com",
  messagingSenderId: "868772674500",
  appId: "1:868772674500:web:0e735497725f3865c0c291"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);