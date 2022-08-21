import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {
	return (
		<div className='home-hero-wrapper'>
			<div className='home-hero'>
				<div className='home-hero-text'>
					<h1 className='work-hero-title'>Hello!</h1>
					<h2 className='work-hero-description'>
						Thank you for reviewing my code. I hope you find
						everything in order. Have fun! -Miruna
					</h2>
					<Link to='/work' className='home-hero-link'>
						Start Here
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
