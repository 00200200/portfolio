import React from 'react';
import Project from './Project';
import './Projects.css';
const Projects: React.FC = () => {
	return (
		<div className='projects'>
			<h1 className='projects-title'>Projects</h1>
			<div className='projects-list'>
				<div className='projects-left-content'>
					<Project />
					<Project />
				</div>
				<div className='projects-right-content'>
					<Project />
					<Project />
				</div>
			</div>
		</div>
	);
};

export default Projects;
