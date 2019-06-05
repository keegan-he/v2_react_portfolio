import React from 'react';
import './Header.css';

function Header() {

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