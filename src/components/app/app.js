import React from 'react';

import './app.css';

import Info from '../info'
import Projects from '../projects';

export default function App( {name} ) {



	return ( 
		<div className='container' id='app'>

			<div className="row"></div>

			<div className="row m-4">
				<h2 className='d-block text-center'>Немного обо мне:</h2>
			</div>
			<div className="row">
				<Info />
			</div>

			<div className="row m-4">
				<h2 className='d-block text-center'>Мои проекты:</h2>
			</div>
			<div className="row">
				<Projects />
			</div>
			
			<div className="row"></div>
			<div className="row"></div>
			
		</div>
	)
}