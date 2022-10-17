import SuspenseChild from '@/components/lazy/SuspenseChild';

export default function ExampleSuspenseBasic(): JSX.Element {
  return (
    <div className="flex gap-[20px]">
      <SuspenseChild />
      <SuspenseChild width="w-[400px]" color="bg-blue-400" time={1500}>
        <SuspenseChild color="bg-green-400" time={2000} />
      </SuspenseChild>
    </div>
  );
}
