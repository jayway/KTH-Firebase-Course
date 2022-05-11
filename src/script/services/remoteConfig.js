// NPM packages
import { getRemoteConfig } from "firebase/remote-config";

// Project files
import { firebaseApp } from "../firebase";

const remoteConfig = getRemoteConfig(firebaseApp);

//  The default and recommended production 
// fetch interval for Remote Config is 12 hours

remoteConfig.settings.minimumFetchIntervalMillis = 1000; // for testing
remoteConfig.defaultConfig = {
	isBetaMode: false,
	newFeature: false,
	mainHeader: "KTH Firebase demo",
};

export { remoteConfig };
