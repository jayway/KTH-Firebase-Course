// NPM packages
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

// Project files
import products from "../data/products.json";

export default function ProductDetail() {
	// Derived state
	const { productId } = useParams();

	const currentProduct = products.filter(
		(product) => product.id === productId
	)[0];

	const { features: productFeatures } = currentProduct;

	const FeatureLinks = productFeatures.map(({ id, name, slug }) => {
		const url = `https://firebase.google.com/docs/${slug}`;

		return (
			<li className="link-to-doc" key={id}>
				<a href={url} target="_blank" rel="noreferrer">
					{name} <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
				</a>
			</li>
		);
	});

	return (
		<div className="page product-detail">
			<h1>Product page</h1>
			<ul>{FeatureLinks}</ul>
		</div>
	);
}
