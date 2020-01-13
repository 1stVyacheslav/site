import React from 'react'
import ReactDOM from 'react-dom'

import './style.css'

const App = ( {name} ) => <div className='hello'>Hello {name} !</div>

ReactDOM.render( <App name="world" />, document.getElementById("root") )

// import Calc from './calc'
// import Log from './log'

// import icon from './reactjs.png'

// const calc = new Calc(),
// 			log = new Log()

// log.print(calc.sum(1, 8, 40, 5))

// const rootEl = document.getElementById('root');
// const img = document.createElement('img');
// img.src = `dist/${icon}`;

// rootEl.appendChild(img)
