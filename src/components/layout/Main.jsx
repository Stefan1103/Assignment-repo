import React from 'react';
import { useLaunches } from '../../hooks/useLaunches';

import ReactPaginate from 'react-paginate';

import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import Launch from '../Launch/Launch';
import Error from '../error/Error';
import Loading from '../loading/Loading';

const Main = () => {
	const [ displayData, setDisplayData ] = useState([]);
	const [ pageNumber, setPageNumber ] = useState(0);

	const missionPerPage = 9;
	const missionsVisited = pageNumber * missionPerPage;

	const { error, loading, data } = useLaunches();

	//wait for data
	useEffect(
		() => {
			if (data) {
				setDisplayData(data.launchesPast);
			}
		},
		[ data ],
	);
	if (loading) return <Loading />;
	if (error) return <Error />;

	const displayMissions = displayData.slice(missionsVisited, missionsVisited + missionPerPage).map((launch) => {
		const { id } = launch;
		return (
			<Link key={id} to={`/rocketDetails/${launch.rocket.rocket.id}`}>
				<Launch data={launch} />
			</Link>
		);
	});
	const pageCount = Math.ceil(displayData.length / missionPerPage);

	const handlePageClick = ({ selected }) => {
		setPageNumber(selected);
	};
	return (
		<div className="main">
			<div className="main-cards">{displayMissions}</div>
			<div className="pagination">
				<ReactPaginate
					breakLabel="..."
					nextLabel="next >"
					onPageChange={handlePageClick}
					pageRangeDisplayed={5}
					pageCount={pageCount}
					previousLabel="< previous"
					renderOnZeroPageCount={null}
					containerClassName={'pagination-btns'}
					previousLinkClassName={'previous-btn'}
					nextLinkClassName={'next-btn'}
					activeClassName={'active-btn'}
				/>
			</div>
		</div>
	);
};

export default Main;
