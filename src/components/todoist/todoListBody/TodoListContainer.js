import React from 'react';
import Button from '../../Button';
import Input from '../../Input';
import ListTodo from '../listTodo/ListTodo';

import './TodoListContainer.css';

const TodoListContainer = ({ todos }) => {
	return (
		<div className='content'>
			<h2 id='display-item'>Add Items</h2>
			<Input
				type='text'
				id='todo-input'
				placeholder='What do you want to do?'
			/>
			<Button classname='btn add-btn' label='Add' />
			{/* <button className='btn add-btn'>Add</button>
			<button className='btn edit-btn'>Update</button> */}

			<ListTodo todos={todos} />
		</div>
	);
};

export default TodoListContainer;
