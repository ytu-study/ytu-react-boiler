import { useState, useTransition } from 'react';
import type { ProfileDataType } from '@/api/fetchProfileData';
import { fetchProfileData } from '@/api/fetchProfileData';

const initResource = fetchProfileData(0);

export default function TransitionUX(): JSX.Element {
  const [resource, setResource] = useState(initResource);
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      const nextUserId = (resource.userId + 1) % 4;
      setResource(fetchProfileData(nextUserId));
    });
  };

  return (
    <div className="w-1/2 p-[10px] border-brown border-[1px]">
      <h1 className="mb-[10px] font-bold">TO-BE: useTransition</h1>
      <button disabled={isPending} onClick={handleClick} className="px-[8px] py-[2px] border-black border-[1px] rounded-[4px]">
        Next
      </button>
      <span className="ml-[10px] text-blue-400">{isPending ? 'Loading now...' : ''}</span>
      <ProfilePage resource={resource} isPending={isPending} />
    </div>
  );
}

interface ResourceProps {
  resource: ProfileDataType;
}

interface TransitionProps {
  isPending: boolean;
}

function ProfilePage({ resource, isPending }: ResourceProps & TransitionProps): JSX.Element {
  return (
    <div className={isPending ? 'opacity-50' : ''}>
      <ProfileName resource={resource} />
      <ProfilePosts resource={resource} />
    </div>
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
