import classnames from 'classnames';

interface PropsType {
  color?: string;
}

export default function CommonFallback({ color = 'red' }: PropsType): JSX.Element {
  return <div className={classnames(`w-full h-full font-bold`, { [`bg-${color}-500`]: true })}>Loading..</div>;
}
