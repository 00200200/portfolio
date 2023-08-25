import React, { useState, useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaNode, FaReact } from 'react-icons/fa';
// SiMongodb
import { SiTypescript, SiSass, SiMysql, SiJavascript, SiGithub, SiNetlify, SiTailwindcss } from 'react-icons/si';

import './Skills.css';

const SkillsCarousel: React.FC = () => {
	const skills = [
		{ icon: <FaHtml5 className='skill-icon' />, name: 'HTML' },
		{ icon: <FaCss3Alt className='skill-icon' />, name: 'CSS' },
		{ icon: <FaNode className='skill-icon' />, name: 'Node.js' },
		{ icon: <FaReact className='skill-icon' />, name: 'React' },
		{ icon: <SiJavascript className='skill-icon' />, name: 'JavaScript' },
		{ icon: <SiTypescript className='skill-icon' />, name: 'TypeScript' },
		{ icon: <SiSass className='skill-icon' />, name: 'SCSS' },
		// { icon: <SiMongodb className='skill-icon' />, name: 'MongoDB' },
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
