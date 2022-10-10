import { useState, useMemo, useTransition } from 'react';

const fib = (num: number): number => {
  if (num <= 2) return 1;
  else return fib(num - 2) + fib(num - 1);
};

export default function ExampleTransition(): JSX.Element {
  const [num, setNum] = useState(1);
  const [fibNum, setFibNum] = useState(1);
  const [pending, startTransition] = useTransition();
  const result = useMemo(() => fib(fibNum), [fibNum]);

  return (
    <div className="w-[1000px] py-[20px] text-center">
      <p className="flex justify-center items-center">
        <button
          className="p-[5px] bg-slate-100 border-slate-500 border-[1px] rounded-[4px]"
          onClick={() => {
            setNum(i => i - 1);
            startTransition(() => setFibNum(i => i - 1));
          }}>
          -
        </button>
        <span className="mx-[10px] py-[5px] px-[20px] border-slate-500 border-[1px] rounded-[4px]">{num}</span>
        <button
          className="p-[5px] bg-slate-100 border-slate-500 border-[1px] rounded-[4px]"
          onClick={() => {
            setNum(i => i + 1);
            startTransition(() => setFibNum(i => i + 1));
          }}>
          +
        </button>
      </p>
      <p className="h-[30px]">{pending && '업데이트 중...'}</p>
      <p>
        피보나치 수열의 {fibNum}번째 수는 {result}입니다.
      </p>
    </div>
  );
}
