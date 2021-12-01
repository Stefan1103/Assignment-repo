import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Main from './Main';
import Head from './Head';

const LandingPage = () => {
	return (
		<React.Fragment>
			<Container fluid>
				<Row>
					<Head />
				</Row>
			</Container>
			<Container>
				<Row>
					<Main />
				</Row>
			</Container>
		</React.Fragment>
	);
};

export default LandingPage;
