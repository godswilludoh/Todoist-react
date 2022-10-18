import React from 'react';
import TodoListCard from '../TodoListCard';
import './ListTodo.css';

const ListTodo = ({ todos }) => {
	return (
		<div>
			<h2>Items</h2>
			<ul id='todo-list-container' className='list-group'>
				{todos.map((todo) => {
					return <TodoListCard key={todo._id} todo={todo} />;
				})}
			</ul>
		</div>
	);
};

export default ListTodo;
