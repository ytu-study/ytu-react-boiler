import { useState, useMemo, useDeferredValue } from 'react';

export default function DeferBox(): JSX.Element {
  const [input, setInput] = useState('');
  const deferredInput = useDeferredValue(input);

  const boxes = useMemo(() => {
    return (
      <>
        <div className="border-slate-300 border-[1px] flex flex-wrap w-[505px] h-[505px]">
          {new Array(2500).fill(null).map(() => {
            return <span className="w-[10px] h-[10px] text-[5px] text-center text-green-800">{Math.floor(Math.random() * 100)}</span>;
          })}
        </div>
      </>
    );
  }, [deferredInput]);

  return (
    <div>
      <h2 className="mb-[6px] font-bold">TO-BE: Defer update</h2>
      <input className="mb-[10px] border-black border-[1px]" onChange={e => setInput(e.target.value)} />
      {boxes}
    </div>
  );
}
