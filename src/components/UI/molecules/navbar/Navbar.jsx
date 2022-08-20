import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NAVBAR_LINKS from '../../../../store/NAVBAR_LINKS';
import DEPTLogoWhite from '../../../icons/DEPTLogoWhite.svg';
import MenuIcon from '../../../icons/MenuIcon.svg';
import './Navbar.css';

const Navbar = () => {
	const [toggleNavbar, setToggleNavbar] = useState(true);
	const [y, setY] = useState(window.scrollY);
	//Hides Navbar when scrolling down
	//And shows it when scrolling up
	//I added a 1s delay to prevent clipping
	const handleNavigation = useCallback(
		(e) => {
			const window = e.currentTarget;
			if (y > window.scrollY) {
				setTimeout(() => {
					setToggleNavbar(true);
				}, 1000);
			} else if (y < window.scrollY) {
				setToggleNavbar(false);
			}
			setY(window.scrollY);
		},
		[y]
	);

	useEffect(() => {
		setY(window.scrollY);
		window.addEventListener('scroll', handleNavigation);

		return () => {
			window.removeEventListener('scroll', handleNavigation);
		};
	}, [handleNavigation]);

	return (
		<div>
			{' '}
			<div className={`navbar-wrapper ${!toggleNavbar && 'hidden-nav'}`}>
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
		</div>
	);
};

export default Navbar;
