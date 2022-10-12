import { Suspense, useState, useTransition } from 'react';
import type { ProfileDataType } from '@/api/fetchProfileData';
import { fetchProfileData } from '@/api/fetchProfileData';

const initResource = fetchProfileData(0);

export default function SuspenseUX(): JSX.Element {
  const [resource, setResource] = useState(initResource);

  const handleClick = () => {
    const nextUserId = (resource.userId + 1) % 4;
    setResource(fetchProfileData(nextUserId));
  };

  return (
    <div className="w-1/2 p-[10px] border-purple border-[1px]">
      <h1 className="mb-[10px] font-bold">AS-IS: Suspense</h1>
      <button className="px-[8px] py-[2px] border-black border-[1px] rounded-[4px]" onClick={handleClick}>
        Next
      </button>
      <ProfilePage resource={resource} />
    </div>
  );
}

interface ResourceProps {
  resource: ProfileDataType;
}

function ProfilePage({ resource }: ResourceProps): JSX.Element {
  return (
    <Suspense fallback={<h2>Loading Profile...</h2>}>
      <ProfileName resource={resource} />
      <Suspense fallback={<h2>Loading Posts...</h2>}>
        <ProfilePosts resource={resource} />
      </Suspense>
    </Suspense>
  );
}

function ProfileName({ resource }: ResourceProps): JSX.Element {
  const user = resource.user.read();
  return <h1 className="text-[20px]">{user?.name}</h1>;
}

function ProfilePosts({ resource }: ResourceProps): JSX.Element {
  const posts = resource.posts.read();
  return (
    <ul>
      {posts?.map(post => (
        <li key={post.id}>{post.text}</li>
      ))}
    </ul>
  );
}
