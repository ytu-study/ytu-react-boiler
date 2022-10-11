import type React from 'react';
import { useEffect } from 'react';

export function useOutSideClick({ ref, callback }: { ref: React.MutableRefObject<HTMLDivElement>; callback: () => void }): void {
  useEffect(() => {
    const handleClick = (e: { target: Node | null }) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };

    window.addEventListener('mousedown', handleClick as EventListener);

    return () => {
      removeEventListener('mousedown', handleClick as EventListener);
    };
  }, [ref, callback]);
}
