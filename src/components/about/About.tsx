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
						<h4>Learn about me</h4>
						<div className='about-me-text-container'>
							<p>
								Hello, my name is Michał. I am a second-year Computer Science student at the University of Science and
								Technology Wroclaw. I am interested in programming, especially in web development. In the future, I
								aspire to become a Full Stack developer, proficient in both front-end and back-end development.
								<br></br>
								<br></br>I am looking for an internship or a job as a junior front-end developer to kickstart my career
								in the web development field. I am a hard-working person who is not afraid of new challenges and is
								dedicated to honing my skills.
								<br></br>
								<br></br>I am constantly developing my skills and gaining new knowledge. My goal is to have a
								comprehensive understanding of both front-end and back-end technologies, I believe that being a Full
								Stack developer will allow me to work on diverse projects and contribute to every aspect of the
								development process.
							</p>
							<div className='buttonContainer'>
								<Link className='button' to='/#contact'>
									Contact
								</Link>
							</div>
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
										Computer Science Bachelor of Engineering at{' '}
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
