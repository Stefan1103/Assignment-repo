import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Loading from '../loading/Loading';
import Error from '../error/Error';

import { Link } from 'react-router-dom';

import { useParams } from 'react-router';
import { useRocket } from '../../hooks/useRocket';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SettingsIcon from '@mui/icons-material/Settings';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import InfoIcon from '@mui/icons-material/Info';
import DescriptionIcon from '@mui/icons-material/Description';

const RocketDetails = () => {
	const { id } = useParams();
	const { data, loading, error } = useRocket(id);

	if (loading) return <Loading />;
	if (error || data.rocket === null || data === null) return <Error />;
	const {
		active,
		boosters,
		country,
		company,
		description,
		diameter,
		engines,
		mass,
		landing_legs,
		height,
		name,
		cost_per_launch,
		wikipedia,
	} = data.rocket;
	return (
		<React.Fragment>
			<Container className="border-bottom rocket-details">
				<Row className="border-bottom">
					<Col className="d-flex justify-content-center mb-4 mt-5">
						<h2 className="text-secondary">Rocket specifications</h2>
					</Col>
				</Row>
				<Row className="mt-3">
					<Col className="d-flex flex-column align-items-sm-center" sm={12} md={4}>
						<h4>
							<InfoIcon className="clear-blue" />General info
						</h4>
						<ul>
							<li>
								<b>Name:</b> <span>{name}</span>
							</li>
							<li>
								<b>Country:</b> <span>{country}</span>
							</li>
							<li>
								<b>Company:</b> <span>{company}</span>
							</li>
							<li>
								<b>Currently active:</b> <span>{active ? 'Yes' : 'No'}</span>
							</li>
							<li>
								<b>Cost per launch:</b> <span>{cost_per_launch}$</span>
							</li>
						</ul>
					</Col>
					<Col className="d-flex  flex-column align-items-sm-center" sm={12} md={4}>
						<h4>
							<SquareFootIcon className="clear-blue" />Dimensions
						</h4>
						<ul>
							<li>
								<b>Diameter:</b>
								<span>
									{diameter.feet.toFixed(1)} - feet or {diameter.meters.toFixed(1)} - meters
								</span>
							</li>
							<li>
								<b>Height:</b>
								<span>
									{height.feet.toFixed(1)} - feet or {height.meters.toFixed(1)} - meters
								</span>
							</li>
							<li>
								<b>Mass:</b>
								<span>
									{mass.kg.toFixed(1)} - kgs or {mass.lb.toFixed(1)} - lbs
								</span>
							</li>
						</ul>
					</Col>
					<Col className="d-flex flex-column align-items-sm-center" sm={12} md={4}>
						<h4>
							<SettingsIcon className="clear-blue" />Parts
						</h4>
						<ul>
							<li>
								<b>Engine layout:</b>
								<span>{engines.layout}</span>
							</li>
							<li>
								<b>Number of engines:</b>
								<span>{engines.number}</span>
							</li>
							<li>
								<b>Number of landing legs:</b>
								<span>{landing_legs.number}</span>
							</li>
							<li>
								<b>Material: </b>
								<span>{landing_legs.material !== null ? landing_legs.material : 'N/A'}</span>
							</li>
							<li>
								<b>Number of boosters: </b>
								<span>{boosters}</span>
							</li>
						</ul>
					</Col>
				</Row>
				<Row className="border-top pt-2 border-bottom">
					<Col className="d-flex flex-column">
						<h3>
							Description<DescriptionIcon className="clear-blue" />
						</h3>
						<p>{description}</p>
					</Col>
				</Row>
				<Row className="pb-3 pt-3">
					<Col className="d-flex justify-content-center">
						<a className="btn btn-outline-info" href={wikipedia}>
							Link to wiki
						</a>
					</Col>
					<Col className="d-flex justify-content-center">
						<Link className="btn btn-outline-dark" to="/">
							<span>
								<ArrowBackIcon />
							</span>Back
						</Link>
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	);
};

export default RocketDetails;
