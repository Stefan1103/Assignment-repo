// apollo
import { useQuery, gql } from '@apollo/client';

const GET_LAUNCHES = gql`
	query Query {
		launchesPast(limit: 30) {
			mission_name
			launch_date_local
			launch_site {
				site_name_long
			}
			rocket {
				rocket {
					id
					name
				}
			}
			id
			launch_year
			launch_success
		}
	}
`;

export const useLaunches = () => {
	const { error, loading, data } = useQuery(GET_LAUNCHES);

	return {
		error,
		data,
		loading,
	};
};
