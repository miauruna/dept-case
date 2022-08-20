import React from 'react';
import { Link } from 'react-router-dom';
import readMoreIcon from '../../../icons/readMoreIcon.svg';
import './ClientCard.css';

const ClientCard = ({ client }) => {
	return (
		<div
			key={client.id}
			className='client-card'
			style={{
				backgroundImage: `url(${client.imageUrl})`,
			}}>
			<div className='card-overlay'>
				<div className='client-card-text'>
					<p className='client-card-name'>{client.clientName}</p>
					<h1 className='client-card-title'>{client.title}</h1>
					<Link
						to={`${client.readMorePath}${client.clientName}`}
						className='client-card-link'>
						<img src={readMoreIcon} alt='read more' />
						Read More
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ClientCard;
