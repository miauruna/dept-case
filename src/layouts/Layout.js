import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/UI/molecules/footer/Footer';
import Navbar from '../components/UI/molecules/navbar/Navbar';
import './Layout.css';

const Layout = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Layout;
