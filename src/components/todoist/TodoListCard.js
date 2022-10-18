import React from 'react';
import { FaCheck, FaEdit, FaEye } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai';
import TodoActionButton from './TodoActionButton';
import { Link } from 'react-router-dom';

const TodoListCard = (props) => {
	const { todo } = props;
	const { id, title, isCompleted } = todo;
	return (
		<li className={isCompleted ? 'checked' : undefined}>
			{title}
			<Link to='/details' className='view-icon utility-btn'>
				<FaEye />
			</Link>

			<TodoActionButton
				classname='btn-complete utility-btn'
				id='btn-complete'
				icon=<FaCheck />
			/>
			<TodoActionButton classname='edit-icon utility-btn' icon=<FaEdit /> />
			<TodoActionButton
				classname='btn-delete utility-btn'
				icon=<AiOutlineDelete />
			/>
		</li>
	);
};

export default TodoListCard;
