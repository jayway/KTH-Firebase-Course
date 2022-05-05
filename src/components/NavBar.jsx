// NPM packages
import { NavLink } from "react-router-dom";

// Project files
import Logo from "../assets/images/logo.png";
import products from "../data/products.json";

export default function NavBar() {
	const NavLinks = products.map(({ id, name }) => (
		<li key={id} className="nav-link">
			<NavLink to={`product-detail/${id}`}>{name}</NavLink>
		</li>
	));

	return (
		<nav className="navigation-bar">
			<div className="logo-container">
				<NavLink to="/">
					<img src={Logo} alt="Demo logo" />
				</NavLink>
			</div>
			<ul className="nav-links flex-center">{NavLinks}</ul>
		</nav>
	);
}
