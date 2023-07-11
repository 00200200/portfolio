import React from 'react';
import LandingPage from '../LandingPage/LandingPage';
import Projects from '../Projects/Projects';
import Contact from '../contact/Contact';
import HamburgerMenu from '../NavBar/HamburgerMenu';
import About from '../about/About';
const MainPage: React.FC = () => {
	return (
		<>
			<HamburgerMenu />
			<div className='mainPageContainer'>
				<LandingPage></LandingPage>
				<Projects></Projects>
				<About></About>
				<Contact></Contact>
			</div>
		</>
	);
};
export default MainPage;
