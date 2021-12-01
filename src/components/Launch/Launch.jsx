import React from 'react';
import Card from 'react-bootstrap/Card';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import RocketIcon from '@mui/icons-material/Rocket';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

const Launch = ({ data }) => {
	const { rocket, mission_name, launch_site, launch_year, launch_date_local, launch_success } = data;
	return (
		<div className="box-missions">
			<Card>
				<Card.Body>
					<div className="title">
						<Card.Title>mission: {mission_name}</Card.Title>
					</div>

					<Card.Text>
						<span>
							<RocketIcon color="primary" />
						</span>
						<b>launch site:</b> {launch_site.site_name_long}
					</Card.Text>
					<Card.Text>
						<span>
							<RocketIcon color="primary" />
						</span>
						<b>launch year:</b> {launch_year}
					</Card.Text>
					<Card.Text>
						<span>
							<WatchLaterIcon color="primary" />
						</span>
						<b>launch local date:</b> {launch_date_local}
					</Card.Text>
					<Card.Text>
						<span>
							<RocketIcon color="primary" />
						</span>
						<b>launch successful:</b> {launch_success ? 'Yes' : 'No'}
					</Card.Text>
					<Card.Text>
						<span>
							<RocketLaunchIcon color="secondary" />
						</span>
						<b>Rocket used:</b> {rocket.rocket.name}
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Launch;
