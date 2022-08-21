import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LOCATIONS from '../../../../store/LOCATIONS';
import MENU_LINKS from '../../../../store/MENU_LINKS';
import NAVBAR_LINKS from '../../../../store/NAVBAR_LINKS';
import DEPTLogoWhite from '../../../icons/DEPTLogoWhite.svg';
import MenuIcon from '../../../icons/MenuIcon.svg';
import MenuExit from '../../../icons/Vector-1.svg';
import './Navbar.css';

const Navbar = () => {
	const [toggleNavbar, setToggleNavbar] = useState(true);
	const [y, setY] = useState(window.scrollY);
	const [toggleMenu, setToggleMenu] = useState(true);

	//Hides Navbar when scrolling down
	//And shows it when scrolling up
	//I added a small delay to prevent jagging
	const handleNavigation = useCallback(
		(e) => {
			const window = e.currentTarget;
			if (y > window.scrollY) {
				setTimeout(() => {
					setToggleNavbar(true);
				}, 300);
			} else if (y < window.scrollY) {
				!toggleMenu && setToggleNavbar(false);
			}
			setY(window.scrollY);
		},
		[y, toggleMenu]
	);

	useEffect(() => {
		setY(window.scrollY);
		window.addEventListener('scroll', handleNavigation);

		return () => {
			window.removeEventListener('scroll', handleNavigation);
		};
	}, [handleNavigation]);

	const handleMenuToggle = () => {
		setToggleMenu((prev) => !prev);
		document.body.style.overflow = toggleMenu ? 'hidden' : '';
	};

	return (
		<div>
			{' '}
			<nav>
				<div
					className={`navbar-wrapper ${
						!toggleNavbar && 'hidden-nav'
					}`}>
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
								className={`navbar-link ${
									item.label === 'Work' ? 'work' : ''
								}`}>
								{item.label}
							</Link>
						);
					})}
					<div className='navbar-menu' onClick={handleMenuToggle}>
						<img
							src={toggleMenu ? MenuIcon : MenuExit}
							alt='menu'
							className='navbar-menu-icon'
						/>
					</div>

					<div
						className={`menu-overlay ${
							!toggleMenu && 'menu-open'
						}`}>
						<img
							src={DEPTLogoWhite}
							alt='Dept'
							className='navbar-logo in-menu'
						/>
						<ul className='in-menu location-group'>
							<p>Landen</p>
							{LOCATIONS.map((item) => {
								return (
									<li
										key={item.id}
										className='menu-location-item'>
										{item.label}
									</li>
								);
							})}
						</ul>
						<ul className='menu-item-group'>
							{MENU_LINKS.map((item) => {
								return (
									<Link
										className='menu-item'
										key={item.id}
										to={item.label}
										onClick={!toggleMenu}>
										<span className='item-span'>
											{item.label}
										</span>
									</Link>
								);
							})}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
