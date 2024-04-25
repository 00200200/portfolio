import React, { useState, useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
// SiMongodb
import { SiTypescript, SiMysql, SiJavascript, SiGithub, SiNetlify, SiTailwindcss, SiPython } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

import './Skills.css';

const SkillsCarousel: React.FC = () => {
	const skills = [
		{ icon: <FaHtml5 className='skill-icon' />, name: 'HTML' },
		{ icon: <FaCss3Alt className='skill-icon' />, name: 'CSS' },
		{ icon: <FaJava className='skill-icon' />, name: 'Java' },
		{ icon: <FaReact className='skill-icon' />, name: 'React' },
		{ icon: <SiJavascript className='skill-icon' />, name: 'JavaScript' },
		{ icon: <SiTypescript className='skill-icon' />, name: 'TypeScript' },
		{ icon: <SiPython className='skill-icon' />, name: 'Python' },
		{ icon: <SiMysql className='skill-icon' />, name: 'MySQL' },
		{ icon: <SiGithub className='skill-icon' />, name: 'Git' },
		{ icon: <SiNetlify className='skill-icon' />, name: 'Netlify' },
		{ icon: <SiTailwindcss className='skill-icon' />, name: 'Tailwindcss' },
	];
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide(prevSlide => (prevSlide + 1) % (skills.length - 2));
		}, 2000);

		return () => clearInterval(interval);
	}, [skills.length]);

	return (
		<div className='skills-carousel'>
			{skills.slice(currentSlide, currentSlide + 3).map((skill, index) => (
				<div key={index} className='carousel-item'>
					{skill.icon}
				</div>
			))}
		</div>
	);
};

export default SkillsCarousel;
