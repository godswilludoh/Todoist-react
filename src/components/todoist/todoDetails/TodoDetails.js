import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../header/Header';
import './todo-details.css';

const TodoDetails = ({ todos }) => {
	const { todo_id } = useParams();
	// const todo = todos.filter((todo) => todo._id === todo_id); returns an array []
	// const { title, _id, isCompleted } = todo[0];
	const todo = todos.find((todo) => todo._id === todo_id);
	const { title, _id, isCompleted } = todo;
	return (
		<>
			<Header id='item-lister' text='Item Lister' />
			<header className='header'>
				<h2>{title}</h2>
				<h3>{_id}</h3>
				<p>{isCompleted ? 'Done' : 'pending'}</p>
			</header>
		</>
	);
};

export default TodoDetails;
