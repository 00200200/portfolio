import React from 'react';
import ReactDOM from 'react-dom';
import HamburgerMenu from './components/NavBar/HamburgerMenu';
import MainPage from './components/MainPage/MainPage';
const App: React.FC = () => {
	return (
		<div id='root' style={{ background: '323232' }}>
			<HamburgerMenu />
			<MainPage></MainPage>
			<div style={{ height: '100vh', margin: '0', background: '#C0C0C0' }}></div>
			<div style={{ height: '100vh', margin: '0', background: '#212121' }}></div>
			<div style={{ height: '100vh', margin: '0', background: '#C0C0C0' }}></div>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
