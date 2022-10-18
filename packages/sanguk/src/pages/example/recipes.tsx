import { Div } from '@/components/common';
import { button, stack } from '@/styles/example/recipes.css';

export default function Recipes(): JSX.Element {
  return (
    <Div className={stack()}>
      <button className={button()}>Standard calm button</button>
      <button className={button({ size: 'small' })}>Small calm button</button>
      <button className={button({ tone: 'angry' })}>Standard angry button</button>
      <button
        className={button({
          size: 'small',
          tone: 'angry',
          bold: true,
        })}>
        Small angry button
      </button>
    </Div>
  );
}
