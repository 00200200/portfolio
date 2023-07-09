import React, { useState } from 'react';
import { IconType } from 'react-icons';
import { FaJava } from 'react-icons/fa';
import ProjectInfo from '../ProjectInfo/ProjectInfo';
import './Project.css';

export interface ProjectProps {
	title: string;
	technologies: string;
	icons: string[];
	description: string;
	sourceCodeLink: string | undefined;
	liveLink?: string | undefined;
}

const getIconComponent = (iconName: string): IconType | null => {
	switch (iconName) {
		case 'FaJava':
			return FaJava;
		default:
			return null;
	}
};

const Project: React.FC<ProjectProps> = (props: ProjectProps) => {
	const { title, technologies, icons, description, sourceCodeLink, liveLink } = props;
	const [showInfo, setShowInfo] = useState(false);
	const [isPageLocked, setIsPageLocked] = useState(false);

	const handleCloseInfo = () => {
		setShowInfo(false);
		setIsPageLocked(false);
	};

	return (
		<div className={`project ${isPageLocked ? 'disabled' : ''}`}>
			<div className={`project-content ${showInfo ? 'project-info-open' : ''}`}>
				<h1 className='project-title'>{title}</h1>
				<p className='project-technologies'>{technologies}</p>
				{!showInfo && (
					<button className='source-button' onClick={() => setShowInfo(true)}>
						More Info
					</button>
				)}
				{showInfo && (
					<div className='project-info-overlay'>
						<div className='project-info-container'>
							<div className='project-info-close' onClick={handleCloseInfo}>
								X
							</div>
							<ProjectInfo description={description} technologies={technologies} />
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Project;
