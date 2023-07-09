import React from 'react';

interface ProjectInfoProps {
	description: string;
	technologies: string;
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({ description, technologies }) => {
	return (
		<div className='project-info'>
			<h2>Project Information</h2>
			<p>Description: {description}</p>
			<p>Technologies: {technologies}</p>
		</div>
	);
};

export default ProjectInfo;
