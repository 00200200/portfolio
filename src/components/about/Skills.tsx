import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaGitAlt, FaJava } from 'react-icons/fa';
import { SiTypescript, SiPython, SiMysql,SiTailwindcss } from 'react-icons/si';


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
							<FaJava className='about-skill-icon' />
							Java
						</li>
						<li className='about-skill-item'>
							<SiPython className='about-skill-icon' />
							Python
						</li>
						<li className='about-skill-item'>
							<SiTailwindcss className='about-skill-icon' />
							TailwindCSS
						</li>
						<li className='about-skill-item'>
							<SiMysql className='about-skill-icon' />
							SQL
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Skills;
