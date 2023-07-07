import React from 'react';
import './MainPage.css';

const MainPage: React.FC = () => {
	const handleContactClick = () => {};
	const handleArrowClick = () => {};
	return (
		<div className='main-page'>
			<div className='content'>
				<div className='leftContent'>
					<h1>Hey, I am Michal</h1>
					<h2>Welcome to my Website</h2>
					<button className='contact-button' onClick={handleContactClick}>
						Contact
					</button>
				</div>
				<div className='rightContent'></div>
			</div>
			<div className='scroll-down-arrow' onClick={handleArrowClick}>
				<span className='arrow'>&#8595;</span>
			</div>
		</div>
	);
};

export default MainPage;
