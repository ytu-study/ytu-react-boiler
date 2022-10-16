import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchDrink } from '@/api/fetchSimple';

export default function RQChild(): JSX.Element {
  const { data, refetch } = useQuery(['simple'], fetchDrink, {
    suspense: true,
  });

  useEffect(() => {
    console.log('data: ', data);
  }, [data]);

  return (
    <>
      <p>title: {data.data.title}</p>
      <p>completed: {data.data.completed ? 'done' : 'yet'}</p>
      <button onClick={() => refetch()}>refetch</button>
    </>
  );
}
