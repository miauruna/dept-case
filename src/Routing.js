import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/home/Home';
import Work from './pages/work/Work';

const Routing = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='' element={<Home />} />
					<Route path='/work' element={<Work />} />
					<Route path='*' element={<h1>404 Page not Found</h1>} />
				</Route>
			</Routes>
		</>
	);
};

export default Routing;
