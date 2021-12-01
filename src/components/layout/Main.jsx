import React from 'react';
import { useLaunches } from '../../hooks/useLaunches';
import Launch from '../Launch/Launch';
import { Link } from 'react-router-dom';

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
					<Link to={`/${launch.rocket.rocket.id}`}>
						<Launch key={id} data={launch} />
					</Link>
				);
			})}
		</div>
	);
};

export default Main;
