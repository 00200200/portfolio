import React from 'react';
import Project from './Project';
import './Projects.css';

const Projects: React.FC = () => {
	const projectData = {
		title: 'Project Title',
		name: 'Project Name',
		description: 'Project Description',
		image: 'Project Image',
	};
	const handleArrowClick = (): void => {
		window.scrollTo({ top: window.innerHeight * 0.9, behavior: 'smooth' });
	};
	return (
		<section id='projects' className='projects'>
			<h1 className='projects-title'>Projects</h1>
			<div className='projects-list'>
				<Project {...projectData} />
				<Project {...projectData} />
				<Project {...projectData} />
				<Project {...projectData} />
			</div>
			<div className='scroll-down-arrow' onClick={handleArrowClick}>
				<span className='arrow'>&#8595;</span>
			</div>
		</section>
	);
};

export default Projects;
