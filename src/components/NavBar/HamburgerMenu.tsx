import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './HamburgerMenu.css';

const Navigation: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const navigationRef = useRef<HTMLDivElement>(null); // Referencja do elementu nawigacji

	const toggleMenu = (): void => {
		setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
	};

	const handleMenuItemClick = (): void => {
		setIsMenuOpen(false);
	};

	const handleScrollToSection = (id: string): void => {
		if (id === 'home') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		} else if (id === 'contact') {
			window.scrollTo({ top: 10000, behavior: 'smooth' });
		} else {
			const section = document.getElementById(id) as HTMLDivElement;
			if (section) {
				const navigationHeight = navigationRef.current?.offsetHeight || 0;
				const sectionTopOffset = section.offsetTop - navigationHeight;
				window.scrollTo({ top: sectionTopOffset, behavior: 'smooth' });
			}
		}
		setIsMenuOpen(false);
	};

	return (
		<div className={`navigation ${isMenuOpen ? 'open' : ''}`} ref={navigationRef}>
			<button className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
				<span className='line' />
				<span className='line' />
				<span className='line' />
			</button>
			<ul className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
				<li onMouseDown={handleMenuItemClick}>
					<Link onClick={() => handleScrollToSection('home')} to='/'>
						Home
					</Link>
				</li>
				<li onMouseDown={handleMenuItemClick}>
					<Link onClick={() => handleScrollToSection('projects')} to='/#projects'>
						Projects
					</Link>
				</li>

				<li onMouseDown={handleMenuItemClick}>
					<Link onClick={() => handleScrollToSection('contact')} to='/#contact'>
						Contact
					</Link>
				</li>
				<li onMouseDown={handleMenuItemClick}>
					<Link to='/About' onClick={() => handleScrollToSection('contact')}>
						About
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navigation;
