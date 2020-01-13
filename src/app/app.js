import React from 'react';

import './app.css';

export default function App() {

	const name = "Vyacheslav";
	const hi = `Hey you, ${name}`;

	return (
		<div id='app'>{hi}</div>
	)
}