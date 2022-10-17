import { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchTodo, fetchBeer } from '@/api/fetchSimple';

export default function RQTodo(): JSX.Element {
  const [id, setId] = useState<number>(1);
  const { data } = useQuery(['simple', id], () => fetchTodo(id), {
    suspense: true,
  });

  const refetchById = () => {
    setId(prev => prev + 1);
  };

  return (
    <div>
      <p>ID: {data?.id}</p>
      <p>title: {data?.title}</p>
      <p>completed: {data?.completed ? 'done' : 'yet'}</p>
      <button className="p-[4px] border-black border-[1px] rounded-[4px]" onClick={refetchById}>
        refetch
      </button>
    </div>
  );
}
