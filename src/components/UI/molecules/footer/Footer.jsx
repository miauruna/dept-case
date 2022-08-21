import React from 'react';
import { Link } from 'react-router-dom';
import NAVBAR_LINKS from '../../../../store/NAVBAR_LINKS';
import DEPTLogoWhite from '../../../icons/DEPTLogoWhite.svg';
import FooterLinks from '../footer-links/FooterLinks';
import Instagram from '../../../icons/instagram.svg';
import Facebook from '../../../icons/facebook.svg';
import Twitter from '../../../icons/twitter.svg';

import './Footer.css';

const Footer = () => {
	return (
		<div>
			<div className='footer-wrapper'>
				<footer>
					<div className='footer-layout'>
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
						<div className='footer-socials'>
							<a
								href='http://linkedin.com/in/miauruna'
								target='_blank'
								rel='noreferrer'>
								<img src={Facebook} alt='facebook' />
							</a>
							<a
								href='http://linkedin.com/in/miauruna'
								target='_blank'
								rel='noreferrer'>
								<img src={Instagram} alt='instagram' />
							</a>
							<a
								href='http://linkedin.com/in/miauruna'
								target='_blank'
								rel='noreferrer'>
								<img src={Twitter} alt='twitter' />
							</a>
						</div>
					</div>
					<FooterLinks />
				</footer>
			</div>
		</div>
	);
};

export default Footer;
