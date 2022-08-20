import React from 'react';
import { Link } from 'react-router-dom';
import NAVBAR_LINKS from '../../../../store/NAVBAR_LINKS';
import DEPTLogoWhite from '../../../icons/DEPTLogoWhite.svg';
import FooterLinks from '../../atoms/footer-links/FooterLinks';

import './Footer.css';

const Footer = () => {
	return (
		<div>
			<div className='footer-wrapper'>
				<footer>
					<div className='footer-topside'>
						<Link to='/'>
							<img
								src={DEPTLogoWhite}
								alt='Dept'
								className='footer-logo'
							/>
						</Link>
						{NAVBAR_LINKS.map((item) => {
							return (
								<Link
									key={item.id}
									to={item.path}
									className='footer-link'>
									{item.label}
								</Link>
							);
						})}
					</div>
					<FooterLinks />
				</footer>
			</div>
		</div>
	);
};

export default Footer;
