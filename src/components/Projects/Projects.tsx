import React from 'react';
import Project from './_Project';
import './Projects.css';
import { ProjectProps } from './_Project';

const giardDesignImage = require('./GiardDesign.png');

const Projects: React.FC = () => {
	const virusSimulation: ProjectProps = {
		title: 'Virus Simulation',
		technologies: 'JAVA,JAVAFX,GRADLE',
		icons: ['FaJava', 'SiGradle'],
		description:
			'The project was done during my studies together with my friend to pass the Object-Oriented Programming course. The aim of the project was to simulate the spread of a virus worldwide, considering various factors.The simulation allows the user to interact by choosing the chance of virus infection or the virus fatality rate. The user can also select a starting country where the virus will first appear. During the simulation, the user can monitor the progress of the pandemic in individual countries, observe the number of infected, healthy individuals, and fatalities.',
		sourceCodeLink: 'https://github.com/00200200/PlagueInc',
		liveLink: undefined,
		backgroundImage:undefined,
	};
	const toDoList: ProjectProps = {
		title: 'FullStack To Do List ',
		technologies: 'REACT,MYSQL,TYPESCRIPT,EXPRESS,MATERIAL-UI,REACT_QUERY',
		icons: ['FaReact', 'SiMysql', 'SiExpress', 'SiTypescript', 'SiMaterialUi'],
		description:
			"The project was done during udemy course. It's advanced todolist using MySql & Express. I put it in my portfolio because I learned a lot of new things and a lot of things I had to do myself because the course was outdated. This was my first contact with mySql.Live view is available using netlify render and console-clever-cloud.",
		sourceCodeLink: 'https://github.com/00200200/ToDoList',
		liveLink: 'https://todolist00200200.netlify.app/',
		backgroundImage:undefined,
	};

	const giardDesign: ProjectProps = {
		title: 'giardDesign',
		technologies: 'JavaScript,HTML,TailwindCss,MacyJS,Netlify,AOS',
		icons: ['FaHtml5', 'FaJs', 'SiTailwindcss', 'SiNetlify'],
		description:
			'This is the vanilla JavaScript website which i created during the recruitment process for the company adRespect.pl. I used TailwindCss to style the page. I also used MacyJS to create a grid of images. I used AOS to create animations. I used Netlify to deploy the page.',
		sourceCodeLink: 'https://github.com/00200200/glardDesign',
		liveLink: 'https://glarddesign.netlify.app/',
		backgroundImage:giardDesignImage

	};
	const jobBoard: ProjectProps = {
		title: 'Job Board',
		technologies: 'React,Typescript,FireBase,Express,NodeMailer',
		icons: ['FaReact', 'SiTypescript', 'SiFirebase', 'SiExpress'],
		description:
			'I have developed a small application to better understand the workings of nodemailer, firebase, and express, which will be beneficial for my upcoming project. Before diving into my main project, I wanted to gain hands-on experience with nodemailer and firebase in a smaller, more manageable project.',
		sourceCodeLink: 'https://github.com/00200200/Job_Agency_Template_Firebase',
		liveLink: undefined,
		backgroundImage:undefined,
	};

	return (
		<section id='projects' className='projects'>
			<h3>PROJECTS</h3>
			<div className='projects-list'>
				<Project {...toDoList} />
				<Project {...giardDesign} />
				<Project {...virusSimulation} />
				<Project {...jobBoard} />
			</div>
			
		</section>
	);
};

export default Projects;
