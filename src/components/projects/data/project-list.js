import todo from './media/todo.jpg';
import starDB from './media/star-DB.jpg';
import reStore from './media/Re-store.jpg';

const projectList = [
	{
		title: 'Todo',
		img: todo,
		description: 'Простенький todo лист, выполненый на React',
		git: 'https://github.com/1stVyacheslav/Todo'
	},
	{
		title: 'Star-DB',
		img: starDB,
		description: 'База данных мира Star Wars. SPA на React с использованием API swapi.co.',
		git: 'https://github.com/1stVyacheslav/star-db'
	},
	{
		title: 'reStore',
		img: reStore,
		description: 'Реализация функций сайта-магазина: добавления товара в корзину и удаления из корзины. React и Redux.',
		git: 'https://github.com/1stVyacheslav/re-store'
	}
]

export default projectList