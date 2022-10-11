import type { ReactPortal } from 'react';
import React from 'react';
import { createPortal } from 'react-dom';

export function ModalContainer({ children }: { children: React.ReactNode }): ReactPortal {
  const modal = document.getElementById('modal') as HTMLElement;
  return createPortal(<>{children}</>, modal);
}
