import React from 'react'
import ReactDOM from 'react-dom'

const App = ( {name} ) => {
	return ( 
		<div>
			<div className='hello'>Hello {name} !</div>			
		</div>
	)
}

ReactDOM.render( <App name="world" />, document.getElementById("root") )

