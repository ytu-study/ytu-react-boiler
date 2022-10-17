import { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchBeer } from '@/api/fetchSimple';

export default function RQChild(): JSX.Element {
  const { data, refetch } = useQuery(['beer'], fetchBeer, {
    suspense: true,
  });
  const queryClient = useQueryClient();

  const prefetchBeer = () => queryClient.prefetchQuery(['beer'], fetchBeer);

  return (
    <div>
      <p>ID: {data?.id}</p>
      <p>name: {data?.name}</p>
      <p>yeast: {data?.yeast}</p>
      <button className="p-[4px] border-black border-[1px] rounded-[4px]" onClick={() => refetch()}>
        refetch
      </button>
      <button className="p-[4px] border-black border-[1px] rounded-[4px]" onClick={prefetchBeer}>
        prefetch
      </button>
    </div>
  );
}
