import React, { useRef } from 'react';
import './MainPage.css';
const MainPage: React.FC = () => {
	const contactRef = useRef<HTMLDivElement>(null);

	const handleContactClick = () => {
		contactRef.current?.scrollIntoView({ behavior: 'smooth' });
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
							Jestem studentem informatyki na <a href='#'>Politechnice Wrocławskiej</a>, gdzie zdobywam wiedzę z zakresu
							bleblebleble <a href='#'>tetetee</a>, dasddasda, Lorem, ipsum dolor. Lorem, ipsum dolor sit amet
							consectetur adipisicing elit. Quos, mollitia! Lorem ipsum dolor sit. <a href='#'>Lorem, ipsum.</a> Lorem
							ipsum dolor sit amet consectetur adipisicing elit.s
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
