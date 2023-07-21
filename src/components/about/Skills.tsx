import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { DiMongodb, DiMysql, DiSass } from 'react-icons/di';

const Skills: React.FC = () => {
	return (
		<div className='rightSide'>
			<div className='skills'>
				<h4>My Skills</h4>
				<div className='skillsList'>
					<ul className='skill-container'>
						<li className='about-skill-item'>
							<FaHtml5 className='about-skill-icon' />
							HTML
						</li>
						<li className='about-skill-item'>
							<FaCss3 className='about-skill-icon' />
							CSS
						</li>
						<li className='about-skill-item'>
							<FaJs className='about-skill-icon' />
							JavaScript
						</li>
						<li className='about-skill-item'>
							<FaReact className='about-skill-icon' />
							React
						</li>
						<li className='about-skill-item'>
							<FaGitAlt className='about-skill-icon' />
							Git
						</li>
						<li className='about-skill-item'>
							<SiTypescript className='about-skill-icon' />
							TypeScript
						</li>
						<li className='about-skill-item'>
							<FaNodeJs className='about-skill-icon' />
							Node.js
						</li>
						{/* <li className='about-skill-item'>
							<DiMongodb className='about-skill-icon' />
							MongoDB
						</li> */}
						<li className='about-skill-item'>
							<DiMysql className='about-skill-icon' />
							MySQL
						</li>
						<li className='about-skill-item'>
							<DiSass className='about-skill-icon' />
							Sass
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Skills;
