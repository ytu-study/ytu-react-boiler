import SuspenseChild from '@/components/lazy/SuspenseChild';

export default function ExampleErrorBoundary(): JSX.Element {
  return (
    <div className="flex gap-[20px]">
      <SuspenseChild isError={true} />
    </div>
  );
}
