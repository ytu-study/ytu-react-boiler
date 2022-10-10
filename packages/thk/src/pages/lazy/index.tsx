import ExampleSuspenseList from '@/components/lazy/ExampleSuspenseList';
import ExampleTransition from '@/components/lazy/ExampleTransition';
import ExampleUXs from '@/components/lazy/ExampleUXs';
import SuspenseChild from '@/components/lazy/SuspenseChild';

export default function LazyPage(): JSX.Element {
  return (
    <div className="flex flex-col gap-[20px] p-[40px] [&>*]:w-full [&>*]:h-[200px] [&>*]:border-dark-200 [&>*]:border-2">
      <div className="flex gap-[20px]">
        <SuspenseChild isError={true} />
        <SuspenseChild width="w-[400px]" color="bg-blue-500" time={1500}>
          <SuspenseChild color="bg-green-500" time={2000} />
        </SuspenseChild>
      </div>
      <ExampleSuspenseList />
      <ExampleTransition />
      <ExampleUXs />
    </div>
  );
}
