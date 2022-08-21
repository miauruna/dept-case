import React from 'react';
import ClientCard from '../../molecules/client-card/ClientCard';
import './ClientCardGroup.css';

const ClientCardGroup = ({ sectionData }) => {
	return (
		<div className='card-group-wrapper'>
			<ClientCard client={sectionData.displayObjects[0]} />
			<ClientCard client={sectionData.displayObjects[1]} />
		</div>
	);
};

export default ClientCardGroup;
