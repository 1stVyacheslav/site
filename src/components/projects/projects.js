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

			<div className="card">
				<div className="row no-gutters">
					<div className="col-md-4">
						<img src={item.img} alt={item.title}/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">
								{item.title}
							</h5>
							<p className="card-text mb-5">
								{item.description}
							</p>
						</div>
					</div>
				</div>
				
			</div>

			{/* <img className="d-block w-100" src={item.img} alt={item.title} />
			<a href={item.git} className="carousel-caption" target='blank'>{item.description}</a> */}

		</div>
	)
}

function CarouselIndicator( {index} ) {

	return <li 	data-target="#carousel" 
							data-slide-to={index}
							className={`${(index===0) && "active"}`}
					></li>
}


// //test

{/* <div className="card h-100 project_item">
					
	<img className='card-img-top project_image' src={item.img}  alt={item.title}/>
		
	<div className='card-body bg-primary text-white p-2'>
								
		<h5 className='card-header pt-0'>
			<a href={item.git}  target='blank'>{item.title}</a>
		</h5>
		
		<div className='card-text text-left project_item_description'>
			{item.description}
		</div>
		
	</div>
		
</div> */}

// function ProjectItemTwo( {video, poster, title, dispatch , description, link} ) {
	
// 	return (
// 		<div 	className='col-md-4 pb-3 pt-3' 
// 					onClick={ () => dispatch( {type: 'SET_VIDEO', payload: video} ) } 
// 					>

// 			<div className="card h-100 project_item">
					
// 				<video className='card-img-top project_image' src={video} poster={poster} alt='project_image'/>

// 				<div className='card-body bg-primary text-white p-2'>
						
// 					<h5 className='card-header pt-0'>
// 						<a href={link}  target='blank'>{title}</a>
// 					</h5>

// 					<div className='card-text text-left project_item_description'>
// 						{description}
// 					</div>

// 				</div>

// 			</div>
// 		</div>
// 	)
// }
