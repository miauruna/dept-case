import React from 'react';
import NotePanel from '../../molecules/note-panel/NotePanel';
import ClientCard from '../../molecules/client-card/ClientCard';
import './ClientNote.css';

const ClientNote = ({ sectionData, direction = '' }) => {
	return (
		<div className={`section-wrapper ${direction}`}>
			<div className='client-container'>
				<ClientCard client={sectionData.singleClient} />
			</div>
			<div className='note-panel-container'>
				{sectionData.notes.map((item, index) => {
					return <NotePanel key={index} notesData={item} />;
				})}
			</div>
		</div>
	);
};

export default ClientNote;
