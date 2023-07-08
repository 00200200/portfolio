import React, { useState } from 'react';
import './HamburgerMenu.css';

const Navigation: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () : void=> {
		setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
	};

	const handleMenuItemClick = () : void => {
		setIsMenuOpen(false);
	};

	const handleScrollToSection = (id: string) : void => {
		if (id === 'home') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		} else {
			const section = document.getElementById(id);
			if (section) {
				section.scrollIntoView({ behavior: 'smooth' });
			}
		}
		setIsMenuOpen(false);
	};

	return (
		<div className={`navigation ${isMenuOpen ? 'open' : ''}`}>
			<button className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
				<span className='line' />
				<span className='line' />
				<span className='line' />
			</button>
			<ul className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
				<li onClick={() => handleScrollToSection('home')} onMouseDown={handleMenuItemClick}>
					Home
				</li>
				<li onClick={() => handleScrollToSection('projects')} onMouseDown={handleMenuItemClick}>
					Projects
				</li>
				<li onClick={() => handleScrollToSection('contact')} onMouseDown={handleMenuItemClick}>
					Contact
				</li>
				<li onClick={() => handleScrollToSection('about')} onMouseDown={handleMenuItemClick}>
					About
				</li>
			</ul>
		</div>
	);
};

export default Navigation;
