// NPM packages
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { listAll, getDownloadURL } from "firebase/storage";

// Project files
import { imagesRef } from "../script/services/storage";

export default function MonitoringPicture() {
	//Local state
	const [files, setFiles] = useState([]);

	// Derived state
	const { slug } = useParams();

	// Constants
	const currentPicture = files.filter((file) => file.includes(slug))[0];

	useEffect(() => {
		const fetchImages = async () => {
			const result = await listAll(imagesRef);
			let urlPromises = result.items.map((imageRef) =>
				getDownloadURL(imageRef)
			);

			return Promise.all(urlPromises);
		};

		const loadImages = async () => {
			const urls = await fetchImages();
			setFiles(urls);
		};

		loadImages();
	}, []);

	return (
		<section className="page monitoring-picture">
			<h1 className="monitoring-header">{slug} loading</h1>
			{currentPicture && (
				<img key={slug} src={currentPicture} alt="Performance test" />
			)}
		</section>
	);
}
