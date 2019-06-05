import React from 'react';
import './Skills.css';

function Skills () {

	const expertise = {
		skills: "Python - React.js - JavaScript (ES6) - HTML / CSS - Django - Postgres SQL - Bash - Git - Pipenv - React Router - FlexBox & Grid - BEM - MVC - OOP - API engineering - ORM - OOP - Static Site Generation - SPA (Single Page Apps) - Webpack - Test Driven Development - Bootstrap - Agile"
    }
    
    return (
        <div>
        {expertise.skills}
        </div>

        
    )

};

export default Skills;