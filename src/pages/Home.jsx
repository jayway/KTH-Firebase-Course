// NPM packages
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAndActivate, getValue } from "firebase/remote-config";
import { logEvent } from "firebase/analytics";

// Project files
import { remoteConfig } from "../script/services/remoteConfig";
import { analytics } from "../script/services/analytics";

export default function Home() {
	// Constants
	const { defaultConfig } = remoteConfig;

	// Local state
	const [isLoaded, setLoaded] = useState(false);
	const [isBetaMode, setIsBetaMode] = useState(defaultConfig.isBetaMode);
	const [message, setMessage] = useState(defaultConfig.message);

	useEffect(() => {
		fetchAndActivate(remoteConfig)
			.then(() => {
				setLoaded(true);
				setIsBetaMode(getValue(remoteConfig, "isBetaMode").asBoolean());
				setMessage(getValue(remoteConfig, "message").asString());
			})
			.catch((error) => console.error(error));
	}, []);

	return (
		<article className="page home">
			<h1 title="This header is not chaanged by Remote config since `in-app default` value">{defaultConfig.neverChanges}</h1>

			{isLoaded && (
				<>
				<h2 title={message}>{`${isBetaMode ? 'Beta' : 'Default'} mode is applied`}</h2>
				<section className={`buttons ${isBetaMode && "beta-mode"}`}>
				
					<Link
						className="btn"
						to="product-detail/engage"
						onClick={() => logEvent(analytics, "click_engage_btn_web")}
					>
						Engage
					</Link>
					<Link
						className="btn"
						to="product-detail/monitor"
						onClick={() => logEvent(analytics, "click_monitor_btn_web")}
					>
						Monitor
					</Link>
				</section>
				</>
			)}
		</article>
	);
}
