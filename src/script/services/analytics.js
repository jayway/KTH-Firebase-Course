// NPM packages
import { getAnalytics } from "firebase/analytics";

// Project files
import { firebaseApp } from "../firebase";

const analytics = getAnalytics(firebaseApp);

export { analytics };
