import React from 'react';
import './Header.css';

function Header() {

	const name = {
		first: 'keegan',
		last: 'helmbrecht',
	};
	return (
			<h1>
				Hello, <br ></br>
				I'm {name.first}{" " + name.last}.
        </h1>
	);
}
export default Header;