import React from 'react';

const Input = ({ type, id, placeholder, todoText, setTodoText }) => {
	return (
		<input
			value={todoText}
			onChange={(e) => setTodoText(e.target.value)}
			type={type}
			id={id}
			placeholder={placeholder}
		/>
	);
};

export default Input;
