import React, { useState } from 'react';
import { IconType } from 'react-icons';
import { FaJava } from 'react-icons/fa'; // Przykładowe ikony, należy dodać importy odpowiednich ikon

import './Project.css';

export interface ProjectProps {
	title: string;
	technologies: string;
	icons: string[];
	description: string;
	sourceCodeLink: string | undefined;
}

const getIconComponent = (iconName: string): IconType | null => {
	// Mapowanie nazw ikon na komponenty ikon
	switch (iconName) {
		case 'FaJava':
			return FaJava;
		default:
			return null;
	}
};

const Project: React.FC<ProjectProps> = (props: ProjectProps) => {
	const { title, technologies, icons, description, sourceCodeLink } = props;
	const [hovered, setHovered] = useState(false);
	const [descriptionVisible, setDescriptionVisible] = useState(true);

	const handleClick = (link: string | undefined) => {
		if (link) {
			window.open(link, '_blank');
		}
	};

	return (
		<div
			className={`project ${hovered ? 'hovered' : ''}`}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}>
			<div className={`project-content`}>
				<h1 className='project-title'>{title}</h1>
				<p className='project-technologies'>{technologies}</p>
				<p className={`project-description ${descriptionVisible ? 'visible' : ''}`}>{description}</p>

				<div className='project-icons'>
					{icons.map((iconName, index) => {
						const IconComponent = getIconComponent(iconName);
						return IconComponent ? (
							<IconComponent key={index} className={`project-description ${descriptionVisible ? 'visible' : ''}`} />
						) : null;
					})}
				</div>

				<div className='project-links'>
					<button className='source-button' onClick={() => handleClick(sourceCodeLink)}>
						Source Code
					</button>
					<button className='live-button source-button'>Live</button>
				</div>
			</div>
		</div>
	);
};

export default Project;
