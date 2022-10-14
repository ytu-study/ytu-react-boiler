import SuspenseChild from '@/components/lazy/SuspenseChild';

export default function ExampleSuspenseBasic(): JSX.Element {
  return (
    <div className="flex gap-[20px]">
      <SuspenseChild />
      <SuspenseChild width="w-[400px]" color="bg-blue-500" time={1500}>
        <SuspenseChild color="bg-green-500" time={2000} />
      </SuspenseChild>
    </div>
  );
}
