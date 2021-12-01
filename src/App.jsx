// styles
import './Sass/app.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//react-router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//components
import LandingPage from './components/layout/LandingPage';
import RocketDetails from './components/rocketDetails/RocketDetails';
import Loading from './components/loading/Loading';

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<LandingPage />} />
				<Route exact path="/:id" element={<RocketDetails />} />
			</Routes>
		</Router>
	);
}

export default App;
