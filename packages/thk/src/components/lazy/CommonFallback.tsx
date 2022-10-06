interface PropsType {
  color?: string;
}

export default function CommonFallback({ color = 'bg-red-400' }: PropsType): JSX.Element {
  return <div className={`w-full h-full min-w-[200px] min-h-[200px] font-bold ${color}`}>Loading..</div>;
}
