import React from 'react';
import './FooterLinks.css';
import Instagram from '../../../icons/instagram.svg';
import Facebook from '../../../icons/facebook.svg';
import Twitter from '../../../icons/twitter.svg';

const FooterLinks = () => {
	return (
		<div>
			<div className='footer-botside'>
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
				<div className='footer-end-info'>
					<a
						href='http://google.com'
						target='_blank'
						rel='noreferrer'>
						Privacy Policy
					</a>
					<a
						href='http://google.com'
						target='_blank'
						rel='noreferrer'>
						Terms and Conditions
					</a>
					<a
						href='http://google.com'
						target='_blank'
						rel='noreferrer'>
						Cookies
					</a>
					<p>© 2022 DEPT®</p>
				</div>
			</div>
		</div>
	);
};

export default FooterLinks;
