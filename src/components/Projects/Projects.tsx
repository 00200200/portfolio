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
	return (
		<section id='projects' className='projects'>
			<h1 className='projects-title'>Projects</h1>
			<div className='projects-list'>
				<Project {...projectData} />
				<Project {...projectData} />
				<Project {...projectData} />
				<Project {...projectData} />
			</div>
		</section>
	);
};

export default Projects;
