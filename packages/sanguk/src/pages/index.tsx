import { Div } from '@/components/common';
import { flex } from '@/styles/recipe.css';

export default function Index(): JSX.Element {
  return (
    <Div w="full" className={flex({ center: true })}>
      Index
    </Div>
  );
}
