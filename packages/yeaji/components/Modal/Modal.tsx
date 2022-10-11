import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useOutSideClick } from '../../hooks/useOutSideClick';
import { ModalContainer } from './ModalContainer';

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 400px;
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  > button {
    position: absolute;
    left: 3px;
    top: 3px;
  }
`;

type ModalProps = {
  open: boolean;
  onClose(): void;
};

export function Modal(props: ModalProps): JSX.Element {
  const modalRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  function onClickHandler(): void {
    props.onClose();
  }

  useOutSideClick({ ref: modalRef, callback: onClickHandler });

  useEffect(() => {
    const body = document.querySelector('body') as HTMLElement;
    body!.style.overflow = 'hidden';
    return () => {
      body!.style.overflow = 'auto';
    };
  }, []);

  return (
    <ModalContainer>
      <Overlay>
        <ModalWrapper ref={modalRef}>
          <div>모달입니다</div>
          <button onClick={onClickHandler}>X</button>
        </ModalWrapper>
      </Overlay>
    </ModalContainer>
  );
}
