import DeferBox from './DeferBox';
import NonDeferBox from './NonDeferBox';

export default function ExampleDeferredValue(): JSX.Element {
  return (
    <div className="flex gap-[20px] !h-[580px]">
      <NonDeferBox />
      <DeferBox />
    </div>
  );
}
