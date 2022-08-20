import React from 'react';
import './NotePanel.css';
import { Link } from 'react-router-dom';
import readMoreIcon from '../../../icons/readMoreIcon.svg';

const NotePanel = ({ notesData }) => {
	return (
		<div className='note-panel-wrapper'>
			<h2 className='note-name'>{notesData.clientName}</h2>
			<p className='note-text'>{notesData.description}</p>
			<Link
				to={`${notesData.readMorePath}${notesData.clientName}`}
				className='client-card-link'>
				<img src={readMoreIcon} alt='read more' />
				Read More
			</Link>
		</div>
	);
};

export default NotePanel;
