import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import HamburgerMenu from './components/NavBar/HamburgerMenu';
import LandingPage from './components/LandingPage/LandingPage';
import Projects from './components/Projects/Projects';
import Contact from './components/contact/Contact';
import { Route, Routes } from 'react-router-dom';
import About from './components/about/Abouts';
import MainPage from './components/MainPage/MainPage';
const App: React.FC = () => {
	return (
		<div id='root' style={{ background: '323232' }}>
			<HamburgerMenu />
			{/* <LandingPage></LandingPage>
			<Projects></Projects>
			<Contact></Contact> */}
			<Routes>
				<Route path='/' element={<MainPage />} />
				{/* <Route path='/projects' element={<Projects />} /> */}
				{/* <Route path='/contact' element={<Contact />} /> */}
				<Route path='/about' element={<About />} />
			</Routes>
		</div>
	);
};

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
);
