import React, { useState } from 'react';
import { IconType } from 'react-icons';
import { FaJava, FaReact, FaCss3, FaSass,FaHtml5,FaJs, } from 'react-icons/fa';
import { SiGradle, SiMysql, SiExpress, SiTypescript, SiFirebase ,SiTailwindcss,SiNetlify} from 'react-icons/si';
import ProjectInfo from '../ProjectInfo/ProjectInfo';
import './Project.css';

const iconComponents: { [key: string]: IconType } = {
	FaJava: FaJava,
	SiGradle: SiGradle,
	FaReact: FaReact,
	SiMysql: SiMysql,
	SiExpress: SiExpress,
	SiTypescript: SiTypescript,
	FaCss3: FaCss3,
	FaSass: FaSass,
	SiFirebase: SiFirebase,
	FaHtml5: FaHtml5,
	FaJs: FaJs,
	SiTailwindcss: SiTailwindcss,
	SiNetlify: SiNetlify,

};

export interface ProjectProps {
	title: string;
	technologies: string;
	icons: string[];
	description: string;
	sourceCodeLink: string | undefined;
	liveLink?: string | undefined;
}

const Project: React.FC<ProjectProps> = props => {
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
				<div className='project-technologies'>
					{icons.map((icon, index) => {
						const IconComponent = iconComponents[icon];
						if (IconComponent) {
							return <IconComponent key={index} className='project-icon' />;
						} else {
							return null; // Jeśli przekazano nieznany typ ikony, można zwrócić null lub dodać odpowiednią obsługę
						}
					})}
				</div>
				{!showInfo && (
					<button className='button' onClick={() => setShowInfo(true)}>
						More Info
					</button>
				)}
				{showInfo && (
					<div className='project-info-overlay'>
						<div className='project-info-container'>
							<div className='project-info-close' onClick={handleCloseInfo}>
								X
							</div>
							<ProjectInfo
								sourceCode={sourceCodeLink}
								props={props}
								description={description}
								technologies={technologies}
								liveLink={liveLink}
							/>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Project;
