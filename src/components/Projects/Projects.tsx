import React from 'react';
import Project from './Project';
import './Projects.css';
import { ProjectProps } from './Project';
interface ProjectsProps {
	projects: ProjectProps[];
}

const Projects: React.FC = () => {
	const projectData: ProjectProps = {
		title: 'Virus Simulation',
		technologies: 'JAVA,JAVAFX,GRADLE',
		icons: ['FaJava'],
		description:
			'The project was done during my studies together with my friend to pass the Object-Oriented Programming course. The aim of the project was to simulate the spread of a virus worldwide, considering various factors.',
		sourceCodeLink: 'https://github.com/00200200/PlagueInc',
	};
	const templateProjectData: ProjectProps = {
		title: 'Project Title',
		technologies: 'Technologies Used',
		icons: ['SiJavascript'],
		description: 'Project Description',
		sourceCodeLink: 'Project Source Code Link',
	};

	const handleArrowClick = (): void => {
		window.scrollTo({ top: window.innerHeight * 0.9, behavior: 'smooth' });
	};
	return (
		<section id='projects' className='projects'>
			<h1 className='projects-title'>Projects</h1>
			<div className='projects-list'>
				<Project {...projectData} />
				<Project {...templateProjectData} />
				<Project {...templateProjectData} />
				<Project {...templateProjectData} />
			</div>
			<div className='scroll-down-arrow' onClick={handleArrowClick}>
				<span className='arrow'>&#8595;</span>
			</div>
		</section>
	);
};

export default Projects;
