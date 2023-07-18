import React from 'react';
import Project from './Project';
import './Projects.css';
import { ProjectProps } from './Project';
interface ProjectsProps {
	projects: ProjectProps[];
}

const Projects: React.FC = () => {
	const virusSimulation: ProjectProps = {
		title: 'Virus Simulation',
		technologies: 'JAVA,JAVAFX,GRADLE',
		icons: ['FaJava', 'SiGradle'],
		description:
			'The project was done during my studies together with my friend to pass the Object-Oriented Programming course. The aim of the project was to simulate the spread of a virus worldwide, considering various factors.',
		sourceCodeLink: 'https://github.com/00200200/PlagueInc',
		liveLink: undefined,
	};
	const toDoList: ProjectProps = {
		title: 'FullStack To Do List ',
		technologies: 'REACT,MYSQL,TYPESCRIPT,EXPRESS,MATERIAL-UI,REACT_QUERY',
		icons: ['FaReact', 'SiMysql', 'SiExpress', 'SiTypescript', 'SiMaterialUi'],
		description: "The project was done during udemy course. It's advaned todolist using databases'",
		sourceCodeLink: 'https://github.com/00200200/ToDoList',
		liveLink: undefined,
	};
	const portfolio: ProjectProps = {
		title: 'Portfolio',
		technologies: 'REACT, TYPESCRIPT,',
		icons: ['FaReact', 'SiTypescript'],
		description: 'The project is current website, i made to show my skills and projects.',
		sourceCodeLink: 'https://github.com/00200200/portfolio',
		liveLink: undefined,
	};
	const templateProjectData: ProjectProps = {
		title: 'Project Title',
		technologies: 'Technologies Used',
		icons: ['SiJavascript'],
		description: 'Project Description',
		sourceCodeLink: 'Project Source Code Link',
		liveLink: undefined,
	};

	return (
		<section id='projects' className='projects'>
			<h3>PROJECTS</h3>
			<div className='projects-list'>
				<Project {...toDoList} />
				<Project {...portfolio} />
				<Project {...templateProjectData} />
				<Project {...virusSimulation} />
			</div>
		</section>
	);
};

export default Projects;
