import React from 'react';
import { useParams } from 'react-router';
import { useRocket } from '../../hooks/useRocket';

const RocketDetails = () => {
	const { id } = useParams();
	const { data, loading, error } = useRocket(id);

	console.log('error: ', error);
	console.log('loading: ', loading);
	console.log('data: ', data);

	if (loading) return <div>loading...</div>;
	if (error) return <div>error</div>;
	return <div>rocket details</div>;
};

export default RocketDetails;
