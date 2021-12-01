// apollo
import { useQuery, gql } from '@apollo/client';

const GET_ROCKET = gql`
	query Rocket($id: ID!) {
		rocket(id: $id) {
			active
			boosters
			country
			id
			mass {
				kg
				lb
			}
			name
			height {
				meters
				feet
			}
			description
			diameter {
				feet
				meters
			}
			company
			cost_per_launch
			engines {
				number
				layout
				version
			}
			landing_legs {
				material
				number
			}
			wikipedia
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
		error,
		loading,
		data,
	};
};
