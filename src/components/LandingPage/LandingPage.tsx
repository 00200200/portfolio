import React, { useRef } from 'react';
import './MainPage.css';
import SkillsCarousel from '../SkillsComponent/Skills';

const LandingPage: React.FC = () => {
	const contactRef = useRef<HTMLDivElement>(null); // Referencja do elementu kontaktu

	const handleContactClick = (): void => {
		window.scrollTo({ top: 11213, behavior: 'smooth' });
	};

	const handleArrowClick = (): void => {
		window.scrollTo({ top: window.innerHeight * 0.9, behavior: 'smooth' });
	};

	return (
		<section id='home' className='main-page'>
			<div className='content'>
				<div className='leftContent'>
					<div className='textContainer'>
						<p className='mainPageParagraph'>Hi, my name is</p>
						<h1>Michał Furgała</h1>
						<h2>Full-Stack Developer</h2>
						<p className='mainPageText'>
							I am a computer science student at the{' '}
							<a className='text-link' href='https://pwr.edu.pl'>
								Wrocław University of Technology.
							</a>{' '}
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
