"use client";
import { useEffect, useRef } from "react";
import styles from "./style.module.scss";

export default function ConfirmDialog({
  open,
  title = "Onay",
  message = "Emin misiniz?",
  confirmText = "Onayla",
  cancelText = "Vazgeç",
  onConfirm,
  onClose,
}) {
  const firstBtnRef = useRef(null);

  // body scroll kilidi + ESC
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "Enter") onConfirm?.();
    };
    window.addEventListener("keydown", onKey);

    // açıldığında ilk butona odak
    setTimeout(() => firstBtnRef.current?.focus(), 0);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, onConfirm]);

  if (!open) return null;

  return (
    <>
      <div className={styles["confirm__backdrop"]} onClick={onClose} />
      <div
        className={styles["confirm"]}
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-title"
      >
        <div className={styles["confirm__panel"]}>
          <div className={styles["confirm__header"]}>
            <h3 id="confirm-title" className={styles["confirm__title"]}>
              {title}
            </h3>
            <button className={styles["confirm__close"]} onClick={onClose} aria-label="Kapat">
              ×
            </button>
          </div>

          <div className={styles["confirm__body"]}>{message}</div>

          <div className={styles["confirm__actions"]}>
            <button
              ref={firstBtnRef}
              className={`${styles["confirm__btn"]} ${styles["confirm__btn--danger"]}`}
              onClick={onConfirm}
            >
              {confirmText}
            </button>
            <button
              className={`${styles["confirm__btn"]} ${styles["confirm__btn--ghost"]}`}
              onClick={onClose}
            >
              {cancelText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
