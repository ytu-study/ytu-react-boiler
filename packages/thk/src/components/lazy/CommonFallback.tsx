interface PropsType {
  color?: string;
}

export default function CommonFallback({ color = 'bg-red-400' }: PropsType): JSX.Element {
  return <div className={`min-w-[200px] min-h-[200px] font-bold ${color}`}>Loading..</div>;
}
