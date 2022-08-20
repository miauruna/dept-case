import React from 'react';
import './ClientQuote.css';

const ClientQuote = ({ quoteData, index }) => {
	return (
		<div className='client-quote-wrapper'>
			<h1 className='client-quote-message'>
				"{quoteData.displayObjects[index].message}"
			</h1>
			<p className='client-quote-signature'>
				- {quoteData.displayObjects[index].signature}
			</p>
		</div>
	);
};

export default ClientQuote;
