import React from 'react';
import Project from './_Project';
import './Projects.css';
import { ProjectProps } from './_Project';

const giardDesignImage = require('./GiardDesign.png');
const toDoListImage = require('./ToDoList.png');
const portfolioImage = require('./portfolio.png');
const virusSimulationImage = require('./virusSimulator.png');
const weatherAppImage = require('./WeatherApp.png');
const FarmSimulatorImage = require('./FarmSimulator.png');
const Projects: React.FC = () => {
	const virusSimulation: ProjectProps = {
		title: 'Virus Simulation',
		technologies: 'JAVA,JAVAFX,GRADLE',
		icons: ['FaJava', 'SiGradle'],
		description:
			'The project was done during my studies together with my friend to pass the Object-Oriented Programming course. The aim of the project was to simulate the spread of a virus worldwide, considering various factors.The simulation allows the user to interact by choosing the chance of virus infection or the virus fatality rate. The user can also select a starting country where the virus will first appear. During the simulation, the user can monitor the progress of the pandemic in individual countries, observe the number of infected, healthy individuals, and fatalities.',
		sourceCodeLink: 'https://github.com/00200200/PlagueInc',
		liveLink: undefined,
		backgroundImage: virusSimulationImage,
	};
	const toDoList: ProjectProps = {
		title: 'FullStack To Do List ',
		technologies: 'REACT,MYSQL,TYPESCRIPT,EXPRESS,MATERIAL-UI,REACT_QUERY',
		icons: ['FaReact', 'SiMysql', 'SiExpress', 'SiTypescript', 'SiMaterialUi'],
		description:
			"The project was done during udemy course. It's advanced todolist using MySql & Express. I put it in my portfolio because I learned a lot of new things and a lot of things I had to do myself because the course was outdated. This was my first contact with mySql.Live view is available using netlify render and console-clever-cloud.",
		sourceCodeLink: 'https://github.com/00200200/ToDoList',
		liveLink: 'https://todolist00200200.netlify.app/',
		backgroundImage: toDoListImage,
	};

	const giardDesign: ProjectProps = {
		title: 'giardDesign',
		technologies: 'JavaScript,HTML,TailwindCss,MacyJS,Netlify,AOS',
		icons: ['FaHtml5', 'FaJs', 'SiTailwindcss', 'SiNetlify'],
		description:
			'This is the vanilla JavaScript website which i created during the recruitment process for the company adRespect.pl. I used TailwindCss to style the page. I also used MacyJS to create a grid of images. I used AOS to create animations. I used Netlify to deploy the page.',
		sourceCodeLink: 'https://github.com/00200200/glardDesign',
		liveLink: 'https://glarddesign.netlify.app/',
		backgroundImage: giardDesignImage,
	};
	const portfolio: ProjectProps = {
		title: 'Portfolio',
		technologies: 'React, TypeScript, CSS',
		icons: ['FaReact', 'SiTypescript', 'FaCss3'],
		description:
			'This is the website you are currently on, I created it to remind myself the basics of react/typescript and to share my projects and skills',
		sourceCodeLink: 'https://github.com/00200200/portfolio',
		liveLink: 'https://00200200.netlify.app/',
		backgroundImage: portfolioImage,
	};

	const weatherApp: ProjectProps = {
		title: 'Weather App',
		technologies: 'Java, JavaFX, Maven, SQL',
		icons: ['FaJava', 'SiJavafx', 'FaMaven', 'SiMysql'],
		description:
			'Application developed to collect data via API, collect it in a MySql database and the ability to display graphs and selected data.',
		sourceCodeLink: 'https://github.com/00200200/dataViewer',
		liveLink: undefined,
		backgroundImage: weatherAppImage,
	};
	const farmSimulator: ProjectProps = {
		title: 'Farm Simulator App',
		technologies: 'Java, JavaFX, Maven, TCP/IP',
		icons: ['FaJava', 'SiJavafx', 'FaMaven'],
		description:
			'A farm simulator communicating via TCP/IP, planting is done via Seeder, harvesting via Harvest, the application records how many plants are planted and how many harvested. ',
		sourceCodeLink: 'https://github.com/00200200/farmSimulatorTCP_IP',
		liveLink: undefined,
		backgroundImage: FarmSimulatorImage,
	};

	return (
		<section id='projects' className='projects'>
			<h3>PROJECTS</h3>
			<div className='projects-list'>
				<Project {...toDoList} />
				<Project {...giardDesign} />
				<Project {...virusSimulation} />
				<Project {...portfolio} />
				<Project {...weatherApp} />
				<Project {...farmSimulator} />
			</div>
		</section>
	);
};

export default Projects;
