import React, { useRef, useState, useEffect } from 'react';
import './MainPage.css';
import SkillsCarousel from '../SkillsComponent/Skills';

const LandingPage: React.FC = () => {
	const contactRef = useRef<HTMLDivElement>(null); // Referencja do elementu kontaktu
	const [isMobile, setIsMobile] = useState(false);

	const handleContactClick = (): void => {
		window.scrollTo({ top: 11213, behavior: 'smooth' });
	};


	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		window.addEventListener('resize', handleResize);
		handleResize();

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<section id='home' className={`main-page ${isMobile ? 'mobile' : ''}`}>
			<div className='content'>
				<div className='leftContent'>
					<div className='textContainer'>
						<p className='mainPageParagraph'>Hi, my name is</p>
						<h1>Michał Furgała</h1>
						<h2>Full-Stack Developer</h2>
						<p className='mainPageText'>
							I am a computer science student at the
							<br />
							<a className='text-link' href='https://pwr.edu.pl'>
								Wrocław University of Science and Technology.
							</a>{' '}
							<br />
							Due to my interests, I am learning about Programming
						</p>

						<button className='button' onClick={handleContactClick}>
							Contact
						</button>
					</div>
				</div>
			</div>
			<div className='carouselle'>
				<SkillsCarousel></SkillsCarousel>
			</div>
			{/* <div className='scroll-down-arrow' onClick={handleArrowClick}>
				<span className='arrow'>&#8595;</span>
			</div> */}
			<div id='contact' ref={contactRef} />
		</section>
	);
};

export default LandingPage;
