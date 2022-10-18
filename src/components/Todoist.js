import React from 'react';
import Header from './header/Header';
import TodoListContainer from './todoist/todoListBody/TodoListContainer';

const Todoist = ({ todos }) => {
	return (
		<>
			<Header id='item-lister' text='Item Lister' />
			<TodoListContainer todos={todos} />
		</>
	);
};

export default Todoist;
