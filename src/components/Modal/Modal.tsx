import React, { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import css from "./Modal.module.css";

interface ModalProps {
  children: React.ReactNode;
  close: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, close }) => {
  
  const closeModal = useCallback(
    ({ target, currentTarget, code }: KeyboardEvent) => {
      if (target === currentTarget || code === "Escape") {
        close();
      }
    },
    [close]
  );
  

  useEffect(() => {
    document.addEventListener("keydown", closeModal);
    return () => document.removeEventListener("keydown", closeModal);
  }, [closeModal]);

  if (typeof window === "undefined") return null; 

  const rootDiv = document.querySelector("#root");

  if (!rootDiv) return null; 

  return createPortal(
    <div className={css.overlay} onClick={close}>
      <div className={css.modal} onClick={(event) => event.stopPropagation()}>{children}</div>
    </div>,
    rootDiv
  );
};

export default Modal;
