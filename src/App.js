import React from 'react';
import './App.css';
import Header from './components/Header/Header.js'
import Skills from './components/Skills/Skills.js'
import Hobbies from './components/Hobbies/Hobbies.js'

function App() {
	return (
		<div>
			<Header />
			<div className="header">
			<Hobbies />
				<Skills />
			</div>
		</div>
	);
}

export default App;
