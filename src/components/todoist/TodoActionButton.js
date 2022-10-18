import React from 'react';

const TodoActionButton = ({ classname, id, icon }) => {
	return (
		<span className={classname} id={id}>
			{icon}
		</span>
	);
};

export default TodoActionButton;
