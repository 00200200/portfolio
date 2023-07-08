import React from 'react';
import ReactDOM from 'react-dom';
import HamburgerMenu from './components/NavBar/HamburgerMenu';
import MainPage from './components/MainPage/MainPage';
import Projects from './components/Projects/Projects';
const App: React.FC = () => {
	return (
		<div id='root' style={{ background: '323232' }}>
			<HamburgerMenu />
			<MainPage></MainPage>

			<Projects></Projects>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
