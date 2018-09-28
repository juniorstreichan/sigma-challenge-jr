import React from "react";

import "./Modal.css";
import { Button } from "../Button/Button";

export const Modal = ({
  handleClose,
  show,
  children,
  closeBgClick = false
}) => {
  const showHideClassName = show ? "modal" : "modal hidden";

  return (
    <div
      id="fundo"
      onClick={e => {
        if (closeBgClick && e.target.id === "fundo") {
          handleClose();
        }
      }}
      className={showHideClassName}
    >
      <section className="modal-main">
        <div className="body">
          {children}
        </div>
        <div className="modal-footer">
          <Button onClick={handleClose} label="OK" />
        </div>
      </section>
    </div>
  );
};
