import React from 'react'

import './form.css'

export default function Form() {

	return (
		
			<form autoComplete='off' onSubmit={ (e) => submitForm(e) }>
				<div className="form-group">
					<label htmlFor="name">Ваше имя:</label>
					<input name='name' type="text" className="form-control" id='name' placeholder="Введите ваше имя" />
				</div>
				<div className="form-group">
					<label htmlFor="email">Email адрес:</label>
					<input name='email' type="email" className="form-control" id='email' placeholder="Введите email" />
				</div>
				<div className="form-group">
					<label htmlFor="comment">Ваш комментарий:</label>
					<textarea name="comment" id="comment" cols="30" rows="10" className="form-control" placeholder='Комментарий...' ></textarea>
				</div>
				<button type='submit' className="btn btn-primary">Отправить</button>
			</form>
		
	)
}

function submitForm(event) {
	event.preventDefault()

	console.log(event.target);
}