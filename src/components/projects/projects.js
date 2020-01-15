import React from 'react';

import './projects.css';

//import projects
import projectList from './data/project-list.js'

export default function Projects() {

	return (
		<div className='container text-center'>
			<div id="carousel" className="carousel slide" data-ride="carousel" data-interval={false}>
				
				<ol className="carousel-indicators">

					{
						projectList.map( (_, idx) => {

							return <CarouselIndicator index={idx} key={idx} />
						} )
					}

				</ol>
				<div className="carousel-inner">

					{
						projectList.map( (item, idx) => {

							return <ProjectItem item={item} isActive={idx === 0} key={idx} />
						} )
					}

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

function ProjectItem( {item, isActive} ) {

	return (
		<div className={`carousel-item ${isActive && "active"}`}>
			<img className="img-fluid" src={item.img} alt={item.title} />
			<a href={item.git} className="carousel-caption" target='blank'>{item.description}</a>
		</div>
	)
}

function CarouselIndicator( {index} ) {

	return <li 	data-target="#carousel" 
							data-slide-to={index}
							className={`${(index===0) && "active"}`}
					></li>
}