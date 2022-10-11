import { Suspense, useState, useTransition } from 'react';
import type { ProfileDataType } from '@/api/fetchProfileData';
import { fetchProfileData } from '@/api/fetchProfileData';

const initResource = fetchProfileData(0);

export default function SuspenseUX(): JSX.Element {
  const [resource, setResource] = useState(initResource);
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    const nextUserId = (resource.userId + 1) % 4;
    setResource(fetchProfileData(nextUserId));
  };

  return (
    <>
      <button onClick={handleClick}>Next</button>
      <ProfilePage resource={resource} />
    </>
  );
}

interface ResourceProps {
  resource: ProfileDataType;
}

function ProfilePage({ resource }: ResourceProps): JSX.Element {
  return <Suspense fallback={<h2>Loading Profile...</h2>}></Suspense>;
}

function ProfileName({ resource }: ResourceProps): JSX.Element {
  const user = resource.user.read();
  return <h1>{user?.name}</h1>;
}
