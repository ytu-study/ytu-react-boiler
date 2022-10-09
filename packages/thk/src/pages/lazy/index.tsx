import TransitionExample from '@/components/lazy/TransitionExample';
import UXContainer from '@/components/lazy/UXContainer';
import SuspenseChild from '@/components/lazy/SuspenseChild';

export default function LazyPage(): JSX.Element {
  return (
    <div className="flex flex-col gap-[20px] py-[40px] [&>*]:w-full [&>*]:h-[200px]">
      <div className="flex gap-[20px]">
        <SuspenseChild />
        <SuspenseChild width="400px" color="blue" time={1500}>
          <SuspenseChild color="green" time={2000} />
        </SuspenseChild>
      </div>
      <TransitionExample />
      <UXContainer />
    </div>
  );
}
