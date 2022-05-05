// NPM packages
import { getAnalytics } from "firebase/analytics";

// Project files
import { app } from "../firebase";

const analytics = getAnalytics(app);

export { analytics };
