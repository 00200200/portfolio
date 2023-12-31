import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiCode, FiMail, FiUser } from 'react-icons/fi';
import './HamburgerMenu.css';

const Navigation: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const navigationRef = useRef<HTMLDivElement>(null);
	const toggleMenu = (): void => {
		setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
	};
	const handleScrollToSection = (id: string): void => {
		if (id === 'home') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		} else if (id === 'contact' || id === '#contact') {
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
			<button className={`hamburger-icon open `} onClick={toggleMenu}>
				<span className='line' />
				<span className='line' />
				<span className='line' />
			</button>
			<ul className={`menu-items ${isMenuOpen ? 'open' : 'display-none'}`}>
				<Link className='link-item' onClick={() => handleScrollToSection('home')} to='/'>
					<FiHome className='link-item' />
				</Link>
				<Link className='link-item' onClick={() => handleScrollToSection('projects')} to='/#projects'>
					<FiCode className='link-item' />
				</Link>
				<Link className='link-item' onClick={() => handleScrollToSection('about')} to='/#about'>
					<FiUser className='link-item' />
				</Link>
				<Link className='link-item' onClick={() => handleScrollToSection('contact')} to='/#contact'>
					<FiMail className='link-item' />
				</Link>
			</ul>
		</div>
	);
};

export default Navigation;
