import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAFb-MOGwhekziw6BwFoW5Jfm2RkGnac5Q",
  authDomain: "portfolio-backend-54ed2.firebaseapp.com",
  projectId: "portfolio-backend-54ed2",
  storageBucket: "portfolio-backend-54ed2.firebasestorage.app",
  messagingSenderId: "160152497420",
  appId: "1:160152497420:web:c755bd750d8d49df51ed29",
  measurementId: "G-VPB6X3BGQB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
