import React from 'react';
import { ProjectProps } from '../Projects/_Project';
import './ProjectInfo.css';

interface ProjectInfoProps {
	props: ProjectProps;
	description: string;
	technologies: string;
	sourceCode: string | undefined;
	liveLink: string | undefined;
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({ props, description, technologies, liveLink, sourceCode }) => {
	const technologyArray = technologies.split(',').map(tech => tech.trim());

	return (
		<div className='project-info'>
			<div className='headers'>
				<h1>{props.title}</h1>
				<h2>Project Information</h2>
			</div>
			<div className='project-info-content'>
				<div className='project-info-description'>
					<h4>Description</h4>
					<p>{description}</p>
				</div>
				<div className='project-info-technologies'>
					<h4>Technologies</h4>
					<ul className='project-info-technologies-list'>
						{technologyArray.map((technology, index) => (
							<li className='project-info-technologies-list-element' key={index}>
								{technology}
							</li>
						))}
					</ul>
				</div>
			</div>
			<h4>Links</h4>
			<div className='buttons'>
				<a href={sourceCode} className='button source-code'>
					Source Code
				</a>
				{liveLink && (
					<a href={liveLink} className='button live-view'>
						Live View
					</a>
				)}
			</div>
		</div>
	);
};

export default ProjectInfo;
