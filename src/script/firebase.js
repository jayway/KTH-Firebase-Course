// NPM packages
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCoYQUzGq-N9F7lYr_u8iYcUwoilcwl0dM",
  authDomain: "kth-firebase-course.firebaseapp.com",
  projectId: "kth-firebase-course",
  storageBucket: "kth-firebase-course.appspot.com",
  messagingSenderId: "891788964114",
  appId: "1:891788964114:web:af6d973de11dec4fc1c3cb",
  measurementId: "G-0FV0ZKZ53X",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export { firebaseApp };
