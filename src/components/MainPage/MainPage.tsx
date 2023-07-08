import React from 'react';
import LandingPage from '../LandingPage/LandingPage';
import Projects from '../Projects/Projects';
import Contact from '../contact/Contact';

const MainPage: React.FC = () => {
	return (
		<>
			<LandingPage></LandingPage>
			<Projects></Projects>
			<Contact></Contact>
		</>
	);
};
export default MainPage;
