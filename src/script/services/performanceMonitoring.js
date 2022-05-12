// NPM packages
import { getPerformance } from "firebase/performance";

// Project files
import { firebaseApp } from "../firebase";

// Initialize Performance Monitoring and get a reference to the service
const perf = getPerformance(firebaseApp);

export { perf };
const firebaseConfig = {
	apiKey: "<API_KEY>",
	authDomain: "<PROJECT_ID>.firebaseapp.com",
	projectId: "<PROJECT_ID>",
	storageBucket: "<BUCKET>.appspot.com",
	messagingSenderId: "<MEASUREMENT_SENDER_ID>",
	appId: "<APP_ID>",
	measurementId: "<MEASUREMENT_ID>",
};