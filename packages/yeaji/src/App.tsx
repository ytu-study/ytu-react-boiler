import { useState } from 'react';
import { Modal } from '../components/Modal/Modal';
import reactLogo from './assets/react.svg';
import './App.css';

export default function App(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => {
    setIsOpen(true);
  };

  return (
    <div className="App">
      <button onClick={onClickHandler}>open modal</button>
      {isOpen ? <Modal open={isOpen} onClose={() => setIsOpen(false)} /> : null}
    </div>
  );
}
