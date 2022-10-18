import { useState, React } from 'react';
import './App.css';
import Todoist from './components/Todoist';
import TodoDetails from './components/todoist/todoDetails/TodoDetails';
import { Routes, Route } from 'react-router-dom';
import Contact from './components/contact/Contact';

function App() {
	const [todos, setTodos] = useState([
		{
			_id: crypto.randomUUID(),
			title: 'Buy Bread',
			isCompleted: true,
		},
		{
			_id: crypto.randomUUID(),
			title: 'Buy Milk',
			isCompleted: false,
		},
	]);

	console.log('App', todos);
	return (
		<div className='container'>
			<Routes>
				<Route index element={<Todoist todos={todos} />} />
				<Route path='details' element={<TodoDetails />} />
				<Route path='contact' element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App;
