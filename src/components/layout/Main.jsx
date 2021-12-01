import React from 'react';
import { useLaunches } from '../../hooks/useLaunches';

import { Link } from 'react-router-dom';

import Launch from '../Launch/Launch';
import Error from '../error/Error';
import Loading from '../loading/Loading';

const Main = () => {
	const { error, loading, data } = useLaunches();
	if (loading) return <Loading />;
	if (error) return <Error />;
	return (
		<div className="main">
			{data.launchesPast.map((launch) => {
				const { id } = launch;
				return (
					<Link key={id} to={`/rocketDetails/${launch.rocket.rocket.id}`}>
						<Launch data={launch} />
					</Link>
				);
			})}
		</div>
	);
};

export default Main;
