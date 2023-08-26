import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import HamburgerMenu from './components/NavBar/HamburgerMenu';
import { Route, Routes } from 'react-router-dom';

import MainPage from './components/MainPage/MainPage';
const App: React.FC = () => {
	return (
		<div id='root' style={{ background: '323232' }}>
			<Routes>
				<Route path='/' element={<MainPage />} />
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
