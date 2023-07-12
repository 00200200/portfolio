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
		icons: ['FaJava','SiGradle'],
		description:
			'The project was done during my studies together with my friend to pass the Object-Oriented Programming course. The aim of the project was to simulate the spread of a virus worldwide, considering various factors.',
		sourceCodeLink: 'https://github.com/00200200/PlagueInc',
		liveLink: undefined,
	};
	const templateProjectData: ProjectProps = {
		title: 'Project Title',
		technologies: 'Technologies Used',
		icons: ['SiJavascript'],
		description: 'Project Description',
		sourceCodeLink: 'Project Source Code Link',
		liveLink: 'xd',
	};

	return (
		<section id='projects' className='projects'>
			<h3>PROJECTS</h3>
			<div className='projects-list'>
				<Project {...projectData} />
				<Project {...templateProjectData} />
				<Project {...templateProjectData} />
				<Project {...templateProjectData} />
			</div>

		</section>
	);
};

export default Projects;
