import React from 'react'
import ReactDOM from 'react-dom'

import AppTwo from './app/';

import './style.css'

const App = ( {name} ) => {
	return ( 
		<div>
			<div className='hello'>Hello {name} !</div>
			<AppTwo />
		</div>
	)
}

ReactDOM.render( <App name="world" />, document.getElementById("root") )

