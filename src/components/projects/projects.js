import React, { useReducer } from 'react';

import './projects.css';

//import images
import todo from './data/media/todo.jpg';
import starDB from './data/media/star-DB.jpg';
import reStore from './data/media/Re-store.jpg';

import projectList from './data/project-list.js'

export default function Projects() {

	const [slideIndex, dispatch] = useReducer( (state, action) => {
		switch (action.type) {
			case 'INC':
				return (state + 1) % projectList.length;
			case 'DEC':
				return (state - 1 + projectList.length) % projectList.length;
			case 'SET':
				return action.payload;
			default:
				return state
		}
	}, 0 )

	return (
		<div className='container text-center'>
			<div id="carousel" className="carousel slide" data-ride="carousel">
				
				<ol className="carousel-indicators">
					<li data-target="#carousel" data-slide-to="0" className="active"></li>
					<li data-target="#carousel" data-slide-to="1"></li>
					<li data-target="#carousel" data-slide-to="2"></li>
				</ol>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img className="img-fluid" src={todo} alt="todo" />
					</div>
					<div className="carousel-item">
						<img className="img-fluid" src={starDB} alt="star-db" />
					</div>
					<div className="carousel-item">
						<img className="img-fluid" src={reStore} alt="re-store" />
					</div>
				</div>
				
				<a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="sr-only">Предыдущий</span>
				</a>
				<a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="sr-only">Следующий</span>
				</a>
			</div>
		</div>
		
	)
}