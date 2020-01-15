import React from 'react';

import './info.css';
import foto from './img/foto.png';


export default function Info() {
	return (
		<section className='jumbotron' >
			<div id='info' className='container text-center'>
				<div className='row'>
					<NameInfo />
					<div className='col-sm'>
						<div className='row'>
							<ProffSkillsInfo />
							<EducationInfo />
						</div>
						<div className='row'>
							<InstrumentsInfo />
						</div>
						
					</div>
				</div>
			</div>
		</section>
	
	)
}

function NameInfo() {
	return (
			<div className='col-sm-3 bio'>
				<img src={foto} className='img-fluid ' alt='foto' />
				<h5>Комаров Вячеслав</h5>
				<p>Frontend-Разработчик</p>
			</div>
	)
}

function ProffSkillsInfo() {
	return (
			<div className='col-sm-6 proff-skills'>
				<h5>Ключевые навыки</h5>
				<ul className='text-left'>
					<li>Адаптивная и кроссбраузерная верстка (Bootstrap v4, CSS Grid)</li>
					<li>Знание React (ver.16.8), Redux, React Router</li>
					<li>Основы работы с Photoshop</li>
					<li>Работа с Web API</li>
					<li>Знание основ SQL, PHP</li>							
				</ul>
			</div>
	)
}

function EducationInfo() {
	return (
				<div className='col-sm-6 text-right education'>
					<h5 className='text-center'>Образование</h5>
					<p className='m-0'>ПНИПУ, г.Пермь</p>
					<p className='m-0'>Электротехнический факультет</p>
					<p className='m-0'>Высшее образование</p>
					<svg className="separate" width='100%' height='10' >
						<line x1='0' y1='0' x2='100%' y='0' stroke='black'/>
					</svg>
					<h6 className='text-center'>Udemy:</h6>
					<p><a href='https://www.udemy.com/course/javascript_full/' target='blank'>Полный курс по JavaScript - с нуля до результата.</a> Автор: Иван Петриченко</p>
					<p><a href='https://www.udemy.com/course/pro-react-redux/' target='blank'>React + Redux - Профессиональная Разработка.</a> Автор: Juriy Bura</p>
				</div>
	)
}

function InstrumentsInfo() {
	return (		
			<div className="col text-center instruments">							
				<h5>Владение инструментами:</h5>
				<div className="col icon_1 icon_html"></div>
				<div className="col icon_2 icon_html"></div>
				<div className="col icon_3 icon_html"></div>		
			</div>
	)
}