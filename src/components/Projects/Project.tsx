import React from 'react';
import './Project.css';

interface ProjectProps {
	title: string;
	name: string;
	description: string;
	image: string | undefined;
}

const Project: React.FC<ProjectProps> = (props: ProjectProps) => {
	const { title, name, description, image } = props;

	const projectStyle = {
		backgroundImage: `url(${image})`,
	};

	return (
		<div className='project' style={projectStyle}>
			<div className='project-content'>
				<h1 className='project-title'>{title}</h1>
				<p className='project-name'>{name}</p>
				<p className='project-description'>{description}</p>
			</div>
			<div className='project-links'></div>
		</div>
	);
};

export default Project;
