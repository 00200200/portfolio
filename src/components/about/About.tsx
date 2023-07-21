import React from 'react';
import './About.css'; // Use CSS Modules

import AboutMe from './AboutMe';
import Skills from './Skills';
import Education from './Education';

const About: React.FC = () => {
	return (
		<section id='about'>
			<h3>ABOUT ME</h3>
			<div className='aboutContainer'>
				<div className='container'>
					<AboutMe />
					<div className='rightSide'>
						<Skills />
						<Education />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
