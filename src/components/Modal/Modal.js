
import React from "react";
import ReactDom from "react-dom";
function Modal({ setIsModalOpen, children }) {
  return ReactDom.createPortal(
      <div className="Modal container mx-auto">
          <button className="btn__close" onClick={() => setIsModalOpen(false)}>x</button>
          {children}
          <div className="overlay"></div>
      </div>,
    document.getElementById("modal_root")
  );
}

export default Modal;
