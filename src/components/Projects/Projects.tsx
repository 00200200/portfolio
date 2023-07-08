import React from 'react';
import Project from './Project';
import './Projects.css';

const Projects: React.FC = () => {
	return (
		<div id='projects' className='projects'>
			<h1 className='projects-title'>Projects</h1>
			<div className='projects-list'>
				<Project />
				<Project />
				<Project />
				<Project />
			</div>
		</div>
	);
};

export default Projects;
