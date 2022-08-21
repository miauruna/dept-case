import React from 'react';
import './FooterLinks.css';

const FooterLinks = () => {
	return (
		<div>
			<div className='footer-botside'>
				<div className='footer-end-info'>
					<a
						href='http://google.com'
						target='_blank'
						rel='noreferrer'>
						Chamber of Commerce: 63464101
					</a>
					<a
						href='http://google.com'
						target='_blank'
						rel='noreferrer'>
						VAT: NL 8552.47.502.B01
					</a>
					<a
						href='http://google.com'
						target='_blank'
						rel='noreferrer'>
						Terms and conditions
					</a>
					<p>©2022 DEPT Agency</p>
				</div>
			</div>
		</div>
	);
};

export default FooterLinks;
