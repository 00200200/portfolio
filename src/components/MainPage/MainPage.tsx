import React from 'react';
import './MainPage.css';

const MainPage: React.FC = () => {
	const handleContactClick = () => {
		const contact = document.getElementById('contact') as HTMLDivElement;
		contact?.scrollIntoView({ behavior: 'smooth' });
	};
	const handleArrowClick = (): void => {};
	return (
		<div id='home' className='main-page'>
			<div className='content'>
				<div className='leftContent'>
					<h1>Michał Furgała</h1>
					<h2>Witaj na mojej stronie</h2>
					<button className='contact-button' onClick={handleContactClick}>
						Contact
					</button>
				</div>
				<div className='rightContent'>
					<h1>About me</h1>
					<div className='rightTextContent'>
						<p>
							Jestem studentem informatyki na <a>Politechnice Wrocławskiej</a>, gdzie zdobywam wiedzę z zakresu
							bleblebleble <a>tetetee</a>, dasddasda, Lorem, ipsum dolor. Lorem, ipsum dolor sit amet consectetur
							adipisicing elit. Quos, mollitia! Lorem ipsum dolor sit. <a>Lorem, ipsum.</a> Lorem ipsum dolor sit amet
							consectetur adipisicing elit.s
						</p>
					</div>
				</div>
			</div>
			<div className='scroll-down-arrow' onClick={handleArrowClick}>
				<span className='arrow'>&#8595;</span>
			</div>
		</div>
	);
};

export default MainPage;
