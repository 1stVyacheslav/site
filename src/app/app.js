import React from 'react';

import './app.css';

export default function App() {

	const name = "World";
	const hi = `Hello ${name}`;

	return (
		<div id='app'>{hi}</div>
	)
}