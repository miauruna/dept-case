import React from 'react';
import './Layout.css';
import { Link, Outlet } from 'react-router-dom';
import { NAVBAR_LINKS } from '../../store/NAVBAR_LINKS';
import DEPTLogoWhite from '../../assets/icons/DEPTLogoWhite.svg';

const Layout = () => {
	return (
		<div>
			<div className='navbar-wrapper'>
				<nav>
					<Link to='/'>
						<img src={DEPTLogoWhite} alt='Dept' />
					</Link>
					{NAVBAR_LINKS.map((item) => {
						return (
							<Link
								key={item.id}
								to={item.path}
								className='navbar-link'>
								{item.label}
							</Link>
						);
					})}
				</nav>
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
