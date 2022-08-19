import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import { NAVBAR_LINKS } from './store/NAVBAR_LINKS';
function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					{NAVBAR_LINKS.map((item) => {
						return (
							<Route
								path={item.path}
								key={item.id}
								element={
									<div className='placeholder-nav-element'>
										{item.label} works!!
									</div>
								}
							/>
						);
					})}
				</Route>
			</Routes>
		</>
	);
}

export default App;
