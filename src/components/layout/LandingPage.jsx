import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Main from './Main';
import Head from './Head';

const LandingPage = () => {
	return (
		<React.Fragment>
			<Row>
				<Head />
			</Row>
			<Container>
				<Row>
					<Col>
						<Main />
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	);
};

export default LandingPage;
