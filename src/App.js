import React, { useState } from "react";
import ReactModal from "react-modal";
import "./App.css";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  ReactModal.setAppElement("#root");

  return (
    <>
      <button onClick={() => setShowModal(true)}>Trigger Modal</button>
      <ReactModal
        isOpen={showModal}
        contentLabel="Minimal Modal Example"
        overlayClassName={{
          base: "base",
          afterOpen: "OverlayAfterOpen",
          beforeClose: "OverlayBeforeClose"
        }}
        className={{
          base: "base",
          afterOpen: "ModalAfterOpen",
          beforeClose: "ModalBeforeClose"
        }}
        closeTimeoutMS={1000}
        shouldCloseOnOverlayClick
        onRequestClose={() => setShowModal(false)}
      >
        <iframe
          title="ModalIframeTest"
          src={"https://wikipedia.org"}
          style={{
            border: "0px",
            width: "100%",
            height: "100%",
            visibility: showModal ? "visible" : "none"
          }}
        />
        <button
          onClick={() => setShowModal(false)}
          style={{ position: "absolute", top: "0px", right: "0px" }}
        >
          Close Modal
        </button>
      </ReactModal>
      <iframe
        title="IframeLoad"
        src={"https://wikipedia.org"}
        style={{ width: "0", height: "0", display: "none" }}
      />
    </>
  );
};

export default App;
