import React from 'react';
import HeaderLink from '../HeaderLink';
import './Header.css';

const Header = ({ id, text }) => {
	return (
		<>
			<section className='title-container header'>
				<h1 id={id}>{text}</h1>
			</section>
			<HeaderLink />
		</>
	);
};

export default Header;
