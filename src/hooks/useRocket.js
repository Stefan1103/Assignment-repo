// apollo
import { useQuery, gql } from '@apollo/client';

const GET_ROCKET = gql`
	query Rocket($id: ID!) {
		rocket(id: $id) {
			active
			boosters
			country
		}
	}
`;

export const useRocket = (id) => {
	const { error, loading, data } = useQuery(GET_ROCKET, {
		variables: {
			id,
		},
	});

	return {
		data,
		error,
		loading,
	};
};
