import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactModal from 'react-modal';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const x = undefined;

  console.log(x?.y);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Trigger Modal</button>
      <ReactModal
        isOpen={showModal}
        contentLabel="Minimal Modal Example"
        overlayClassName="Overlay"
        className={{ afterOpen: "Modal"}}
      >
        <iframe src={"https://wikipedia.org"} style={{ border: "0px", width: "100%", height: "100%", visibility: showModal ? 'visible' : 'none' }} />
        <button onClick={() => setShowModal(false)} style={{ position: 'absolute', top: '0px', right: '0px'}}>Close Modal</button>
      </ReactModal>
      <iframe src={"https://wikipedia.org"} style={{ width: '0', height: '0', display: 'none' }} />
    </>
  );
}

export default App;
