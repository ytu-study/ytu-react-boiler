import classNames from 'classnames';
import { useState, useMemo } from 'react';

export default function NonDeferBox(): JSX.Element {
  const [input, setInput] = useState('');

  const boxes = useMemo(() => {
    return (
      <div className="flex flex-wrap w-[200px]">
        {new Array(10000).fill(null).map(() => {
          const x = Math.floor(Math.random() * 256);
          const y = Math.floor(Math.random() * 256);
          const z = Math.floor(Math.random() * 256);
          const backgroundColor = 'bg-color-[rgb(' + x + ',' + y + ',' + z + ')]';
          return <div className={classNames(`w-[2px] h-[2px]`)} style={{ backgroundColor }} />;
        })}
      </div>
    );
  }, [input]);

  return (
    <div>
      <input onChange={e => setInput(e.target.value)} />
      {boxes}
    </div>
  );
}
