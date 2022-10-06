import { useState, useMemo, useTransition } from 'react';

const fib = (num: number): number => {
  if (num <= 2) return 1;
  else return fib(num - 2) + fib(num - 1);
};

export default function TransitionExample(): JSX.Element {
  const [num, setNum] = useState(1);
  const [fibNum, setFibNum] = useState(1);
  const [pending, startTransition] = useTransition();
  const result = useMemo(() => fib(fibNum), [fibNum]);

  return (
    <div className="w-[1000px] border-dark-200 border-2">
      <p>
        <button
          onClick={() => {
            setNum(i => i - 1);
            startTransition(() => setFibNum(i => i - 1));
          }}>
          -
        </button>
        {num}
        <button
          onClick={() => {
            setNum(i => i + 1);
            startTransition(() => setFibNum(i => i + 1));
          }}>
          +
        </button>
        {pending && '업데이트 중...'}
      </p>
      <p>
        피보나치 수열의 {fibNum}번째 수는 {result}입니다.
      </p>
    </div>
  );
}
