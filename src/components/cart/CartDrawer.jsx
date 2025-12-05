"use client";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  selectItems,
  selectSubtotal,
  selectKdv,
  selectTotal,
  inc,
  dec,
  removeItem,
  clearCart,
} from "@/store/slices/cartSlice";
import Image from "next/image";
import cn from "classnames";
import styles from "./style.module.scss";
import ConfirmDialog from "@/components/ui/ConfirmDialog/ConfirmDialog";

export default function CartDrawer({ open, onClose }) {
  const items = useSelector(selectItems);
  const subtotal = useSelector(selectSubtotal);
  const kdv = useSelector(selectKdv);
  const total = useSelector(selectTotal);
  const dispatch = useDispatch();

  const empty = items.length === 0;

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const router = useRouter();

  // Esc ile kapat
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!mounted) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(styles["cart-drawer__backdrop"], {
          [styles["cart-drawer__backdrop--show"]]: open,
        })}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        className={cn(styles["cart-drawer"], {
          [styles["cart-drawer--open"]]: open,
        })}
        role="dialog"
        aria-modal="true"
        aria-label="Alışveriş Sepeti"
      >
        <div className={styles["cart-drawer__head"]}>
          <strong>ALIŞVERİŞ SEPETİ</strong>
          <button className="btn-close" onClick={onClose} />
        </div>

        <div className={styles["cart-drawer__body"]}>
          {empty ? (
            <div className="text-center text-muted py-5">Sepetiniz boş.</div>
          ) : (
            <ul className="list-unstyled m-0">
              {items.map((it) => (
                <li key={it.id} className={styles["cart-drawer__line"]}>
                  <div className={styles["cart-drawer__thumb"]}>
                    <Image src={it.img || "/vercel.svg"} alt={it.title} fill />
                  </div>

                  <div className={styles["cart-drawer__meta"]}>
                    <div className={styles["cart-drawer__title"]}>
                      {it.title}
                    </div>
                    <div className="small text-muted">{it.brand}</div>

                    <div className={styles["cart-drawer__qty"]}>
                      <button
                        className={cn(
                          "btn btn-sm",
                          styles["cart-drawer__btn"],
                          styles["cart-drawer__btn--outline"]
                        )}
                        onClick={() => dispatch(dec(it.id))}
                        aria-label="Azalt"
                      >
                        −
                      </button>

                      <span className={styles["cart-drawer__qty-value"]}>
                        {it.qty}
                      </span>

                      <button
                        className={cn(
                          "btn btn-sm",
                          styles["cart-drawer__btn"],
                          styles["cart-drawer__btn--outline"]
                        )}
                        onClick={() => dispatch(inc(it.id))}
                        aria-label="Arttır"
                      >
                        +
                      </button>

                      <button
                        className={cn("btn", styles["cart-drawer__remove-btn"])}
                        onClick={() => dispatch(removeItem(it.id))}
                      >
                        Sepetten Sil
                      </button>
                    </div>
                  </div>

                  <div className={styles["cart-drawer__line-total"]}>
                    {(it.price * it.qty).toLocaleString("tr-TR")} TL
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={styles["cart-drawer__totals"]}>
          <div className="d-flex justify-content-between">
            <span>Ara Toplam</span>
            <strong>{subtotal.toLocaleString("tr-TR")} TL</strong>
          </div>
          <div className="d-flex justify-content-between">
            <span>KDV (%20)</span>
            <strong>{kdv.toLocaleString("tr-TR")} TL</strong>
          </div>
          <div className="d-flex justify-content-between fs-5">
            <span>KDV Dahil</span>
            <strong>{total.toLocaleString("tr-TR")} TL</strong>
          </div>
        </div>

        <div className={styles["cart-drawer__foot"]}>
          <button
            className={cn(
              "btn w-100",
              styles["cart-drawer__foot-btn"],
              styles["cart-drawer__foot-btn--outline"]
            )}
            onClick={() => setConfirmOpen(true)}
            disabled={empty}
          >
            Sepeti Boşalt
          </button>

          <ConfirmDialog
            open={confirmOpen}
            title="Sepeti Boşalt"
            message="Sepeti tamamen boşaltmak istiyor musunuz?"
            confirmText="Evet, boşalt"
            cancelText="Vazgeç"
            onConfirm={() => {
              dispatch(clearCart());
              setConfirmOpen(false);
            }}
            onClose={() => setConfirmOpen(false)}
          />

          <button
            className={cn(
              "btn w-100 mt-2",
              styles["cart-drawer__foot-btn"],
              styles["cart-drawer__foot-btn--warning"]
            )}
            disabled={empty}
            onClick={() => !empty && router.push("/sepet")}
          >
            ALIŞVERİŞİ TAMAMLA
          </button>
        </div>
      </aside>
    </>
  );
}
