import React from 'react';
import './Header.css';

function Header() {

	const expertise = {
		skills: "Python - React.js - JavaScript (ES6) - HTML / CSS - Django - Postgres SQL - Bash - Git - Pipenv - React Router - FlexBox & Grid - BEM - MVC - OOP - API engineering - ORM - OOP - Static Site Generation - SPA (Single Page Apps) - Webpack - Test Driven Development - Bootstrap - Agile"
	};

	const name = {
		first: 'keegan',
		last: 'helmbrecht',
	};

	const aboutme = {
		hobbies: "music production, synthesizers, cyberpunk movies"
	};

    return (
<header className="header">
				<div className="part">
				</div>
				<h1>
					Hello, <br ></br>
					I'm {name.first}{" " + name.last}.
        </h1>
				<div className="sub">
					I'm a full stack developer living in the Bay Area.
        </div>
				<div className="p">
					Technical Expertise: 		<br />
					{expertise.skills} 			<br />
					<br />
					Current Hobbies include:<br />
					{aboutme.hobbies}
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