import React from 'react';
import { useLaunches } from '../../hooks/useLaunches';
import Launch from '../Launch/Launch';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Main = () => {
	const { error, loading, data } = useLaunches();
	console.log('error: ', error);
	console.log('loading: ', loading);
	console.log('data: ', data);
	if (loading) return <div>loading...</div>;
	if (error) return <div>error</div>;
	return (
		<div className="main">
			{data.launchesPast.map((launch) => {
				const { id } = launch;
				return (
					<Link key={id} to={`/${launch.rocket.rocket.id}`}>
						<Launch data={launch} />
					</Link>
				);
			})}
		</div>
	);
};

export default Main;
