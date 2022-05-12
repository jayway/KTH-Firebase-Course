// NPM packages
import { initializeApp } from "firebase/app";


const firebaseConfig = {
	apiKey: "<API_KEY>",
	authDomain: "<PROJECT_ID>.firebaseapp.com",
	projectId: "<PROJECT_ID>",
	storageBucket: "<BUCKET>.appspot.com",
	messagingSenderId: "<MEASUREMENT_SENDER_ID>",
	appId: "<APP_ID>",
	measurementId: "<MEASUREMENT_ID>",
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export { firebaseApp };
