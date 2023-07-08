import React from 'react';
import './Project.css';

const Project: React.FC = () => {
	return (
		<div className='project'>
			<h1 className='project-title'>TypeScript & React</h1>
			<p className='project-name'>Project Name</p>
			<p className='project-description'>Project Description</p>
			<div className='project-links'></div>
		</div>
	);
};

export default Project;
