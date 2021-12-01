import React from 'react';
import WarningIcon from '@mui/icons-material/Warning';

const Error = () => {
	return (
		<div className="error">
			<h1>
				<span>
					<WarningIcon fontSize="large" />
				</span>{' '}
				 ERROR!
			</h1>
			<h2>Something went wrong...</h2>
		</div>
	);
};

export default Error;
