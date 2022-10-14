import { Suspense } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchData } from '@/api/fetchSimple';
import CommonFallback from '@/components/lazy/fallback/CommonFallback';

export default function SuspenseReactQuery(): JSX.Element {
  const { data, refetch } = useQuery(['simple'], () => fetchData(false), {
    suspense: true,
  });

  // if (isLoading) return <h2>Loading</h2>;

  return (
    <Suspense fallback={<CommonFallback />}>
      <p>SuspenseReactQuery: {data}</p>
      <button onClick={refetch}>refetch</button>
    </Suspense>
  );
}
