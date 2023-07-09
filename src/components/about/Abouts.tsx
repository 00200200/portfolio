import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
const About: React.FC = () => {
	return (
		<section className='container'>
			<div className='leftSide'>
				<h1>About Me</h1>
				<div>
					<p>
						Hello, my name is Michał. I am a second-year Computer Science student at the University of Science and
						Technology Wroclaw. I am interested in programming, especially in web development. I am looking for an
						internship or a job as a junior front-end developer. I am a hard-working person who is not afraid of new
						challenges. I am constantly developing my skills and gaining new knowledge. I am a communicative person who
						can work in a team.
					</p>
				</div>
				<Link to='/#contact'>Contact</Link>
			</div>
			<div className='rightSide'>
				<div className='skills'>
					<h1>Skills</h1>
					<div className='skillsList'>
						<ul>
							<li>HTML</li>
							<li>CSS</li>
							<li>JavaScript</li>
							<li>React</li>
							<li>Git</li>
							<li>TypeScript</li>
						</ul>
					</div>
				</div>
				<div className='education'>
					<h1>Education</h1>
					<div className='educationList'>
						<ul>
							<li>2022 - present</li>
						</ul>
						<ul>
							<li>
								Computer Science Bachelor at{' '}
								<a href='https://pwr.edu.pl/'> University of Science and Technology Wroclaw</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
