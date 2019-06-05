import React from 'react';
import './App.css';
import Header from './components/Header/Header.js'
import Skills from './components/Skills/Skills.js'

function App() {
	return (
		<div>
			<Header />
			<div className="header">
				<Skills />
			</div>
		</div>
	);
}

export default App;
