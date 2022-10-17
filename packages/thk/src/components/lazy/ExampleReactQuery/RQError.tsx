import { useQuery } from '@tanstack/react-query';
import { fetchError } from '@/api/fetchSimple';

export default function RQError(): JSX.Element {
  const { data, isError, error } = useQuery(['query-error'], () => fetchError(true, 'Query Error!'));

  // if (isError) return <h2>Error Occured! - {error}</h2>;

  return <div>RQError</div>;
}
