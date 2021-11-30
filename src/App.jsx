// styles
import './Sass/app.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//components
import Main from './components/layout/Main';
import Header from './components/layout/Header';
import Loading from './components/loading/Loading';

function App() {
	// https://api.spacex.land/graphql/

	return (
		<div className="bom">
			<Row className="justify-content-center">
				<Col>
					<Header />
				</Col>
			</Row>
			<Container>
				<Row>
					<Col>
						<Main />
					</Col>
				</Row>
				<Loading />
			</Container>
		</div>
	);
}

export default App;
