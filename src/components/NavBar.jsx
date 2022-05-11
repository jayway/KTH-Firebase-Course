// NPM packages
import { useState } from "react";
import { NavLink } from "react-router-dom";

// Project files

import Hamburger from "./Hamburger";
import Logo from "../assets/images/logo.png";
import menuLinks from "../data/menuLinks.json";

export default function NavBar() {
	// Local state
	const [hamburgerOpen, setHamburgerOpen] = useState(false);

	// Methods
	const toggleHamburger = () => {
		setHamburgerOpen(!hamburgerOpen);
	};

	const NavLinks = menuLinks.map(({ id, name, path }) => (
		<li key={id} className="nav-link">
			<NavLink to={path} onClick={() => setHamburgerOpen(false)}>
				{name}
			</NavLink>
		</li>
	));

	return (
		<nav className="navigation-bar">
			<div className="logo-container">
				<NavLink to="/">
					<img src={Logo} alt="Demo logo" />
				</NavLink>
			</div>
			<ul className={`nav-links flex-center ${hamburgerOpen ? "open" : ""}`}>
				{NavLinks}
			</ul>
			<div className="hamburger-wrapper" onClick={toggleHamburger}>
				<Hamburger isOpen={hamburgerOpen} />
			</div>
		</nav>
	);
}
