import React, { useState, useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaNode, FaReact } from 'react-icons/fa';
import { AiFillDatabase } from 'react-icons/ai';
import { SiTypescript, SiMongodb, SiSass, SiMysql, SiJavascript } from 'react-icons/si';
import './Skills.css';

const SkillsCarousel: React.FC = () => {
	const skills = [
		{ icon: <FaHtml5 className='skill-icon' />, name: 'HTML' },
		{ icon: <FaCss3Alt className='skill-icon' />, name: 'CSS' },
		{ icon: <FaNode className='skill-icon' />, name: 'Node.js' },
		{ icon: <FaReact className='skill-icon' />, name: 'React' },
		{ icon: <SiJavascript className='skill-icon' />, name: 'JavaScript' },
		{ icon: <SiTypescript className='skill-icon' />, name: 'TypeScript' },
		{ icon: <SiMongodb className='skill-icon' />, name: 'MongoDB' },
		// { icon: <SiSass className='skill-icon' />, name: 'SCSS' },
		// { icon: <SiMysql className='skill-icon' />, name: 'MySQL' },
		// { icon: <AiFillDatabase className='skill-icon' />, name: 'SQL' },
	];

	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide(prevSlide => (prevSlide + 1) % (skills.length - 2));
		}, 5000);

		return () => clearInterval(interval);
	}, [skills.length]);

	const goToNextSlide = () => {
		const nextSlide = (currentSlide + 1) % (skills.length - 2);
		setCurrentSlide(nextSlide);
		const carouselItems = document.querySelectorAll('.carousel-item');
		carouselItems.forEach((item, index) => {
			if (index === nextSlide) {
				item.classList.add('slide-in');
			} else {
				item.classList.remove('slide-in');
			}
		});
	};

	const goToPreviousSlide = () => {
		const previousSlide = (currentSlide - 1 + (skills.length - 2)) % (skills.length - 2);
		setCurrentSlide(previousSlide);
		const carouselItems = document.querySelectorAll('.carousel-item');
		carouselItems.forEach((item, index) => {
			if (index === previousSlide) {
				item.classList.add('slide-in');
			} else {
				item.classList.remove('slide-in');
			}
		});
	};

	return (
		<div className='skills-carousel'>
			<button className='carousel-button' onClick={goToPreviousSlide}>
				{'<'}
			</button>
			{skills.slice(currentSlide, currentSlide + 5).map((skill, index) => (
				<div key={index} className='carousel-item'>
					{skill.icon}
					{/* <p>{skill.name}</p> */}
				</div>
			))}
			<button className='carousel-button' onClick={goToNextSlide}>
				{'>'}
			</button>
		</div>
	);
};

export default SkillsCarousel;
