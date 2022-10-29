import React from 'react';
import Header from './header/Header';
import TodoListContainer from './todoist/todoListBody/TodoListContainer';

const Todoist = ({ todos, settodos }) => {
	return (
		<>
			<Header id='item-lister' text='Item Lister' />
			<TodoListContainer todos={todos} settodos={settodos} />
		</>
	);
};

export default Todoist;
