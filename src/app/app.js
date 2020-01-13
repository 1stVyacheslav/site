import React from 'react';

import './app.css';

export default function App() {

	const name = "Vyachrslav";
	const hi = `Hello ${name}`;

	return (
		<div id='app'>{hi}</div>
	)
}