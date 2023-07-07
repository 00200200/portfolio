import React, { useState } from 'react';
import './HamburgerMenu.css';

const Navigation: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className='navigation'>
			<button className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
				<span className='line' />
				<span className='line' />
				<span className='line' />
			</button>
			<ul className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
				<li>Home</li>
				<li>Projects</li>
				<li>Contact</li>
				<li>About</li>
			</ul>
		</div>
	);
};

export default Navigation;
