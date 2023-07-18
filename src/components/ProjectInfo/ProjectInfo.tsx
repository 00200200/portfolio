import React from 'react';
import { ProjectProps } from '../Projects/Project';
interface ProjectInfoProps {
	props: ProjectProps;
	description: string;
	technologies: string;
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({ props, description, technologies }) => {
	return (
		<div className='project-info'>
			<h2>Project Information</h2>
			<h1>{props.title}</h1>
			<p>Description: {description}</p>
			<p>Technologies: {technologies}</p>
			<div className='buttons'>
				<a href='#' className='button'>
					Source Code
				</a>
				<a href='#' className='button disabled'>
					Live View
				</a>
			</div>
		</div>
	);
};

export default ProjectInfo;
