// styles
import './Sass/app.scss';
//react-router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//components
import LandingPage from './components/layout/LandingPage';
import RocketDetails from './components/rocketDetails/RocketDetails';
import Error from './components/error/Error';

function App() {
	return (
		<Router>
			<Routes>
				<Route strict exact path="/" element={<LandingPage />} />
				<Route strict exact path="/rocketDetails/:id" element={<RocketDetails />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</Router>
	);
}

export default App;
