// NPM packages
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Project files
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import MonitoringPicture from "./pages/MonitoringPicture";

export default function App() {

	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="product-detail/:productId" element={<ProductDetail />} />
					<Route path="performance/:slug" element={<MonitoringPicture />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}
