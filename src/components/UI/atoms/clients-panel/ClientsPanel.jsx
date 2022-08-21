import React from 'react';
import Logos from '../../../logos/Logos';
import './ClientsPanel.css';

const ClientsPanel = () => {
	return (
		<div className='clients-panel-wrapper'>
			<h1>Clients</h1>
			<h2>
				We value a great working relationship with our clients above all
				else. It’s why they often come to our parties. It’s also why
				we’re able to challenge and inspire them to reach for the stars.
			</h2>
			<div className='logo-panel-wrapper'>
				{' '}
				{Logos.map((item, index) => {
					return <img src={item} alt='logo' key={index} />;
				})}
			</div>
		</div>
	);
};

export default ClientsPanel;
