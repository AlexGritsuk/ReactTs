import React, { useCallback, useEffect, useRef, useState } from "react";
import type { MouseEventHandler } from "react";
import styles from "./modal.module.css";
import { ModalProps } from "./modal.props";
import Portal, { createContainer } from "../portal/portal";

const MODAL_CONTAINER_ID = "modal-container-id";

const Modal = ({ title, children, onClose }: ModalProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    createContainer({ id: MODAL_CONTAINER_ID });
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleWrapperClick = (event: MouseEvent) => {
      const { target } = event;
      if (target instanceof Node && rootRef.current === target) {
        onClose?.();
      }
    };
    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    window.addEventListener("click", handleWrapperClick);
    window.addEventListener("keydown", handleEscapePress);

    return () => {
      window.removeEventListener("click", handleWrapperClick);
      window.removeEventListener("keydown", handleEscapePress);
    };
  }, [onClose]);

  const handleClose: MouseEventHandler<HTMLDivElement | HTMLButtonElement> =
    useCallback(() => {
      onClose?.();
    }, []);

  return isMounted ? (
    <Portal id={MODAL_CONTAINER_ID}>
      <div ref={rootRef} className={styles.wrap}>
        <div className={styles.content}>
          <button
            type="button"
            onClick={handleClose}
            className={styles.closeButton}
          >
            X
          </button>
          <p className={styles.title}>{title}</p>
          {children}
        </div>
      </div>
    </Portal>
  ) : null;
};

export default Modal;
