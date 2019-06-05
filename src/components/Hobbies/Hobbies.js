import React from 'react';
import './Hobbies.css';

function Header() {

	const aboutme = {
		hobbies: "music production, synthesizers, cyberpunk movies"
	};

	return (

			<div className="p">
				Current Hobbies include:<br />
				{aboutme.hobbies}
			</div>

	);
}
export default Header;