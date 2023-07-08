import React from 'react';
import './MainPage.css';

const MainPage: React.FC = () => {
	const handleContactClick = () => {};
	const handleArrowClick = () => {};
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
							programowania i informatyki. Przed maturą uczestniczyłem w bootcampie JavaScript. W czasie przygotowań do
							matury poznałem podstawy języka Python, a na pierwszym roku studiów poznałem podstawy języków
							programowania C/C++ oraz Java. Jestem bardzo zmotywowany, aby rozwijać swoje umiejętności programistyczne
							i poznać nowe technologie.
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
