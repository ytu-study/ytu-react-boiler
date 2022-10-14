import { useState, useMemo } from 'react';

export default function NonDeferBox(): JSX.Element {
  const [input, setInput] = useState('');

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
  }, [input]);

  return (
    <div>
      <h2 className="mb-[6px] font-bold">AS-IS: Just update</h2>
      <input className="mb-[10px] border-black border-[1px]" onChange={e => setInput(e.target.value)} />
      {boxes}
    </div>
  );
}
