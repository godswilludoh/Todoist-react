import React, { useState } from 'react';
import Button from '../../Button';
import Input from '../../Input';
import ListTodo from '../listTodo/ListTodo';

import './TodoListContainer.css';

const TodoListContainer = ({ todos, settodos }) => {
	const [todoText, setTodoText] = useState('');
	console.log(todoText);
	//create an addTodo function
	const addTodo = () => {
		console.log(todoText);
		const newTodo = {
			_id: crypto.randomUUID(),
			title: todoText,
			isCompleted: false,
		};
		settodos([...todos, newTodo]);
		console.log(newTodo);
	};
	return (
		<div className='content'>
			<h2 id='display-item'>Add Items</h2>
			<Input
				todos={todos}
				settodos={settodos}
				todoText={todoText}
				setTodoText={setTodoText}
				type='text'
				id='todo-input'
				placeholder='What do you want to do?'
			/>
			<Button classname='btn add-btn' label='Add' cbfunc={addTodo} />
			{/* <button className='btn add-btn'>Add</button>
			<button className='btn edit-btn'>Update</button> */}

			<ListTodo todos={todos} />
		</div>
	);
};

export default TodoListContainer;
