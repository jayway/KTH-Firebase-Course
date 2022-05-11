// NPM packages
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVial } from "@fortawesome/free-solid-svg-icons";
import { fetchAndActivate, getValue } from "firebase/remote-config";
import { logEvent } from "firebase/analytics";
import { trace } from "firebase/performance";

// Project files
import { remoteConfig } from "../script/services/remoteConfig";
import { analytics } from "../script/services/analytics";
import { perf } from "../script/services/performanceMonitoring";

export default function Home() {
	// Constants
	const { defaultConfig } = remoteConfig;
	const t = trace(perf, "FUNC_PERFORMANCE");

	// Local state
	const [isLoaded, setLoaded] = useState(false);
	const [isBetaMode, setIsBetaMode] = useState(defaultConfig.isBetaMode);
	const [mainHeader, setMainHeader] = useState(defaultConfig.mainHeader);
	const [isNewFeature, seNewFeature] = useState(defaultConfig.newFeature);

	useEffect(() => {
		t.start();
		fetchAndActivate(remoteConfig)
			.then(() => {
				setLoaded(true);
				setIsBetaMode(getValue(remoteConfig, "isBetaMode").asBoolean());
				setMainHeader(getValue(remoteConfig, "mainHeader").asString());
				seNewFeature(getValue(remoteConfig, "newFeature").asBoolean());
			})
			.catch((error) => console.error(error));
		t.stop();
	}, []);

	return (
		<article className="page home">
			<h1>{mainHeader}</h1>

			{isLoaded && (
				<>
					<h2>{`${isBetaMode ? "Beta" : "Default"} mode is applied`}</h2>
					<section className={`buttons ${isBetaMode ? "beta-mode" : ""}`}>
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
					{isNewFeature && (
						<p className="new-feature">
							<FontAwesomeIcon icon={faVial} /> New feature is released
						</p>
					)}
				</>
			)}
		</article>
	);
}
