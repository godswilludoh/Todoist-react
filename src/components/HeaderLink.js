import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLink = () => {
	return (
		<ul className='header-link-container'>
			<li>
				<Link to='/' className='header-links'>
					Home
				</Link>

				<Link to='/contact' className='header-links'>
					Contact
				</Link>
			</li>
		</ul>
	);
};

export default HeaderLink;
