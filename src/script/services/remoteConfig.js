// NPM packages
import { getRemoteConfig } from "firebase/remote-config";

// Project files
import { app } from "../firebase";

const remoteConfig = getRemoteConfig(app);

//remoteConfig.settings.minimumFetchIntervalMillis = 3600000;
remoteConfig.settings.minimumFetchIntervalMillis = 10; // for testing
remoteConfig.defaultConfig = {
	isBetaMode: false,
	neverChanges: 'KTH Firebase course',
	message: "This is a default config message",
};

export { remoteConfig };
