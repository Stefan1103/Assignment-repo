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
			links {
				article_link
				video_link
			}
			rocket {
				rocket {
					id
					name
				}
			}
			id
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
