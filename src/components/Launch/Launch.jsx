import React from 'react';

const Launch = ({ data }) => {
	const { rocket, mission_name, links, launch_site, launch_date_local } = data;
	return <div>{launch_date_local}</div>;
};

export default Launch;
