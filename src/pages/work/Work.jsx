import React from 'react';
import './Work.css';
const Work = () => {
	return (
		<div className='main-content'>
			<div
				className='work-hero'
				style={{
					backgroundImage: `url("/assets/images/image-1.png")`,
				}}>
				<div className='work-hero-text'>
					<p className='work-hero-title'>Work</p>
					<p className='work-hero-description'>
						A selection of projects that
						<strong> pioneer tech </strong>
						and
						<strong> marketing </strong> to help brands stay ahead.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Work;
