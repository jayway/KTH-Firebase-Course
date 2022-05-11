// NPM packages
import { getPerformance } from "firebase/performance";

// Project files
import { firebaseApp } from "../firebase";

// Initialize Performance Monitoring and get a reference to the service
const perf = getPerformance(firebaseApp);

export { perf };
