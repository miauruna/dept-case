import React, { useEffect, useState } from 'react';
import ClientNote from '../../components/UI/organisms/client-note/ClientNote';
import ClientCardGroup from '../../components/UI/organisms/client-card-group/ClientCardGroup';
import './Work.css';
import ClientQuote from '../../components/UI/atoms/client-quote/ClientQuote';

const Work = () => {
	const [pageLayout, setPageLayout] = useState();

	const initial = () => {
		fetch('workPageMockData.json', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setPageLayout(data);
			})
			.catch((err) => {
				throw err;
			});
	};

	useEffect(() => {
		initial();
	}, []);
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
			<div className='hero-break-wrapper'>
				<h1>
					Show me <a href='/work'>all work</a>
				</h1>
				<h1>
					in <a href='/services'>all industries</a>
				</h1>
			</div>
			{pageLayout && (
				<>
					<ClientCardGroup sectionData={pageLayout.firstSection} />
					<ClientCardGroup sectionData={pageLayout.secondSection} />
					<ClientNote sectionData={pageLayout.thirdSection} />
					<ClientCardGroup sectionData={pageLayout.fourthSection} />
					<ClientNote
						sectionData={pageLayout.fifthSection}
						direction='reverse-panel'
					/>

					<ClientCardGroup sectionData={pageLayout.sixthSection} />
					<ClientQuote quoteData={pageLayout.quotes} index='0' />
					<ClientCardGroup sectionData={pageLayout.lastSection} />
					{/* <ClientQuote quoteData={pageLayout.quotes} index='1' /> */}
				</>
			)}
		</div>
	);
};

export default Work;
