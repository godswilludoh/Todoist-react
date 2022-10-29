import React from 'react';

const Button = ({ label, classname, cbfunc }) => {
	return (
		<button onClick={() => cbfunc()} className={classname}>
			{label}
		</button>
	);
};

export default Button;
