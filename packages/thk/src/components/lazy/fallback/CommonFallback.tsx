import classnames from 'classnames';

interface PropsType {
  color?: string;
}

export default function CommonFallback({ color = 'bg-red-400' }: PropsType): JSX.Element {
  return <div className={classnames(`w-full h-full font-bold`, color)}>Loading..</div>;
}
