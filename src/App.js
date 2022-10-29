import { useState, React } from 'react';
import './App.css';
import Todoist from './components/Todoist';
import TodoDetails from './components/todoist/todoDetails/TodoDetails';
import { Routes, Route } from 'react-router-dom';
import Contact from './components/contact/Contact';

function App() {
	const [todos, setTodos] = useState([
		{
			_id: '7b813bfa-3c28-4562-8afc-9a8c5319d4c6',
			title: 'Buy Bread',
			isCompleted: true,
		},
		{
			_id: '246bd4dd-657c-4ab2-bfda-5c75b5239277',
			title: 'Buy Milk',
			isCompleted: false,
		},
		{
			_id: 'd89386d1-2c94-4297-aa5c-c38e3aba12d4',
			title: 'Buy Flowers',
			isCompleted: false,
		},
	]);

	console.log('App', todos);
	return (
		<div className='container'>
			<Routes>
				<Route index element={<Todoist todos={todos} settodos={setTodos} />} />
				<Route path=':todo_id' element={<TodoDetails todos={todos} />} />
				<Route path='contact' element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App;
