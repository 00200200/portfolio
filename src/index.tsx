import React from 'react';
import ReactDOM from 'react-dom';
import HamburgerMenu from './components/NavBar/HamburgerMenu';
import MainPage from './components/MainPage/MainPage';
import Projects from './components/Projects/Projects';
import Contact from './components/contact/Contact';
import { createRoot } from 'react-dom/client';

const App: React.FC = () => {
	return (
		<div id='root' style={{ background: '323232' }}>
			<HamburgerMenu />
			<MainPage></MainPage>
			<Projects></Projects>
			<Contact></Contact>
		</div>
	);
};

const container = document.getElementById('root');
if (container) {
	const rootElement = createRoot(container);
	rootElement.render(<App />);
}
