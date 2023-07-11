import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import HamburgerMenu from './components/NavBar/HamburgerMenu';
import { Route, Routes } from 'react-router-dom';
import About from './components/about/About';
import MainPage from './components/MainPage/MainPage';
const App: React.FC = () => {
	return (
		<div id='root' style={{ background: '323232' }}>
			{/* <HamburgerMenu /> */}
			{/* <LandingPage></LandingPage>
			<Projects></Projects>
			<Contact></Contact> */}
			<Routes>
				<Route path='/' element={<MainPage />} />
				{/* <Route path='/projects' element={<Projects />} /> */}
				{/* <Route path='/contact' element={<Contact />} /> */}
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
