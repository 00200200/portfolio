import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import { FaHtml5, FaCss3, FaJs, FaReact, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { DiMongodb, DiMysql, DiSass } from 'react-icons/di';

const About: React.FC = () => {
	return (
		<section id='about'>
			{/* <Link className='link-item' to='/'>
        <FiHome className='link-item' />
      </Link> */}

			<h3>ABOUT ME</h3>
			


				<div className='aboutContainer'>
					<div className='container'>
						<div className='leftSide'>
							<div>
								<p>
									Hello, my name is Michał. I am a second-year Computer Science student at the{' '}
									<a>University of Science and Technology Wroclaw</a>.<br></br>
									<br></br>I am interested in programming, especially in web development. I am looking for an internship
									or a job as a junior front-end developer. I am a hard-working person who is not afraid of new
									challenges.
									<br></br>
									<br></br>I am constantly developing my skills and gaining new knowledge.
								</p>
								<Link className='button' to='/#contact'>
									Contact
								</Link>
							</div>
						</div>
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
										<li className='about-skill-item'>
											<DiMongodb className='about-skill-icon' />
											MongoDB
										</li>
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
							<div className='education'>
								<h4>Education</h4>
								<div className='educationList'>
									<ul>
										<li>2022 - present</li>
										<li>
											Computer Science Bachelor at{' '}
											<a href='https://pwr.edu.pl/'>University of Science and Technology Wroclaw</a>
										</li>
									</ul>
								</div>
							</div>

					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
