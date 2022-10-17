interface Props {
  time: number;
}

export default function SuspenseBaby({ time }: Props): JSX.Element {
  return <div className="text-center w-[196px] h-full">Content({time / 1000}s)</div>;
}
