import React from 'react';
import Project from './_Project';
import './Projects.css';
import { ProjectProps } from './_Project';

const Projects: React.FC = () => {
	const virusSimulation: ProjectProps = {
		title: 'Virus Simulation',
		technologies: 'JAVA,JAVAFX,GRADLE',
		icons: ['FaJava', 'SiGradle'],
		description:
			'The project was done during my studies together with my friend to pass the Object-Oriented Programming course. The aim of the project was to simulate the spread of a virus worldwide, considering various factors.The simulation allows the user to interact by choosing the chance of virus infection or the virus fatality rate. The user can also select a starting country where the virus will first appear. During the simulation, the user can monitor the progress of the pandemic in individual countries, observe the number of infected, healthy individuals, and fatalities.',
		sourceCodeLink: 'https://github.com/00200200/PlagueInc',
		liveLink: undefined,
	};
	const toDoList: ProjectProps = {
		title: 'FullStack To Do List ',
		technologies: 'REACT,MYSQL,TYPESCRIPT,EXPRESS,MATERIAL-UI,REACT_QUERY',
		icons: ['FaReact', 'SiMysql', 'SiExpress', 'SiTypescript', 'SiMaterialUi'],
		description:
			"The project was done during udemy course. It's advanced todolist using MySql & Express. I put it in my portfolio because I learned a lot of new things and a lot of things I had to do myself because the course was outdated. This was my first contact with mySql.Live view is available using netlify render and console-clever-cloud.",
		sourceCodeLink: 'https://github.com/00200200/ToDoList',
		liveLink: 'https://todolist00200200.netlify.app/',
	};

	const portfolio: ProjectProps = {
		title: 'Portfolio',
		technologies: 'React, TypeScript, CSS',
		icons: ['FaReact', 'SiTypescript', 'FaCss3'],
		description: 'This is my current website, which I created to showcase my skills and projects.',
		sourceCodeLink: 'https://github.com/00200200/portfolio',
		liveLink: undefined,
	};
	const templateProjectData: ProjectProps = {
		title: 'There will be my next project',
		technologies: 'Technologies Used',
		icons: ['SiTypescript'],
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
				<Project {...virusSimulation} />
				<Project {...templateProjectData} />
			</div>
		</section>
	);
};

export default Projects;
