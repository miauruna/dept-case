import React from 'react';
import './Layout.css';
import { Link, Outlet } from 'react-router-dom';
import { NAVBAR_LINKS } from '../store/NAVBAR_LINKS';
import DEPTLogoWhite from '../components/icons/DEPTLogoWhite.svg';
import MenuIcon from '../components/icons/MenuIcon.svg';

const Layout = () => {
	return (
		<div>
			<div className='navbar-wrapper'>
				<nav>
					<Link to='/'>
						<img
							src={DEPTLogoWhite}
							alt='Dept'
							className='navbar-logo'
						/>
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
					<div className='navbar-menu'>
						<img
							src={MenuIcon}
							alt='menu'
							className='navbar-menu-icon'
						/>
					</div>
				</nav>
			</div>
			<Outlet />
		</div>
	);
};

export default Layout;
