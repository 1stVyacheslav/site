import React from 'react';

import './app.css';

import Info from '../info'
import Projects from '../projects';

export default function App( {name} ) {



	return ( 
		<div className='container' id='app'>

			<div className="row"></div>
			<div className="row"></div>

			<div className="row">
				<Info />
			</div>

			<div className="row">
				<Projects />
			</div>
			<div className="row"></div>
			<div className="row"></div>
			
		</div>
	)
}