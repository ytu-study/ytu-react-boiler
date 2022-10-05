import { useMatches } from 'react-router-dom';

export default function Index(): JSX.Element {
  const matches = useMatches();
  console.log('### matches', matches);
  return <div>Index</div>;
}
