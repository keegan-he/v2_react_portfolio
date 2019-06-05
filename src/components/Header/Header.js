import React from 'react';
import './Header.css';

function Header() {

	const name = {
		first: 'keegan',
		last: 'helmbrecht',
	};

	return (
		<header className="header">
			<h1>
				Hello, <br ></br>
				I'm {name.first}{" " + name.last}.
        </h1>
			<div className="sub">
				I'm a full stack developer living in the Bay Area.
        </div>
			<a
				className="link"
				href="https://www.linkedin.com/in/keegan-helmbrecht/"
				target="_blank"
				rel="noopener noreferrer"
			>
				LinkedIn
        </a>
		</header>
	);
}
export default Header;