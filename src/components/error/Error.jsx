import { Link } from 'react-router-dom';
import React from 'react';
import WarningIcon from '@mui/icons-material/Warning';

const Error = () => {
	return (
		<div className="error">
			<h1>
				<span>
					<WarningIcon fontSize="large" />
				</span>Something went wrong error...
			</h1>
			<Link to="/" className="link-home">
				Go back to home page.
			</Link>
		</div>
	);
};

export default Error;
