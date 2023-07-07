import React from 'react';
import ReactDOM from 'react-dom';
import HamburgerMenu from './components/NavBar/HamburgerMenu';
import MainPage from './components/MainPage/MainPage';
const App: React.FC = () => {
	return (
		<div id='root'>
			<HamburgerMenu />
			<MainPage></MainPage>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
