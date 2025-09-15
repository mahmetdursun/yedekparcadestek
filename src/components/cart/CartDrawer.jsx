// src/components/cart/CartDrawer.jsx
"use client";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
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

export default function CartDrawer({ open, onClose }) {
  const items = useSelector(selectItems);
  const subtotal = useSelector(selectSubtotal);
  const kdv = useSelector(selectKdv);
  const total = useSelector(selectTotal);
  const dispatch = useDispatch();

  const empty = items.length === 0;

 
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // 👇 bu hook her zaman çağrılıyor
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // 👇 mounted değilse burada short-circuit
  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* arka plan gölgesi */}
      <div
        className={`offcanvas-backdrop ${open ? "show" : ""}`}
        onClick={onClose}
        style={{ display: open ? "block" : "none" }}
      />
      <aside
        className={`cart-drawer ${open ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Alışveriş Sepeti"
      >
        <div className="cart-drawer__head">
          <strong>ALIŞVERİŞ SEPETİ</strong>
          <button className="btn-close" onClick={onClose} />
        </div>

        <div className="cart-drawer__body">
          {empty ? (
            <div className="text-center text-muted py-5">Sepetiniz boş.</div>
          ) : (
            <ul className="list-unstyled m-0">
              {items.map((it) => (
                <li key={it.id} className="cart-line">
                  <div className="thumb">
                    <Image src={it.img || "/vercel.svg"} alt={it.title} fill />
                  </div>
                  <div className="meta">
                    <div className="title">{it.title}</div>
                    <div className="brand small text-muted">{it.brand}</div>
                    <div className="qty">
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => dispatch(dec(it.id))}
                      >
                        −
                      </button>
                      <span className="mx-2">{it.qty}</span>
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => dispatch(inc(it.id))}
                      >
                        +
                      </button>
                      <button
                        className="btn btn-link text-danger ms-3 p-0"
                        onClick={() => dispatch(removeItem(it.id))}
                      >
                        Sepetten Sil
                      </button>
                    </div>
                  </div>
                  <div className="line-total">
                    {(it.price * it.qty).toLocaleString("tr-TR")} TL
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="cart-drawer__totals">
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

        <div className="cart-drawer__foot">
          <button
            className="btn btn-outline-secondary w-100"
            onClick={() => {
              if (confirm("Sepeti tamamen boşaltmak istiyor musunuz?")) {
                dispatch(clearCart());
              }
            }}
            disabled={empty}
          >
            Sepeti Boşalt
          </button>
          <button className="btn btn-warning w-100 mt-2" disabled={empty}>
            ALIŞVERİŞİ TAMAMLA
          </button>
        </div>
      </aside>

      <style jsx>{`
        .offcanvas-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.35);
          z-index: 1040;
        }
        .cart-drawer {
          position: fixed;
          top: 0;
          right: 0;
          height: 100%;
          width: 420px;
          max-width: 100%;
          background: #fff;
          z-index: 1050;
          transform: translateX(100%);
          transition: transform 0.24s ease;
          display: grid;
          grid-template-rows: auto 1fr auto auto;
          border-left: 1px solid #e5e7eb;
        }
        .cart-drawer.open {
          transform: translateX(0);
        }

        .cart-drawer__head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          border-bottom: 1px solid #eef2f7;
        }
        .cart-drawer__body {
          overflow: auto;
          padding: 8px 12px;
        }
        .cart-drawer__totals {
          padding: 12px 16px;
          border-top: 1px solid #eef2f7;
        }
        .cart-drawer__foot {
          padding: 12px 16px;
          border-top: 1px solid #eef2f7;
        }

        .cart-line {
          display: grid;
          grid-template-columns: 72px 1fr auto;
          gap: 10px;
          align-items: center;
          padding: 10px 4px;
          border-bottom: 1px solid #f3f4f6;
        }
        .cart-line .thumb {
          position: relative;
          width: 72px;
          height: 72px;
          border-radius: 8px;
          overflow: hidden;
          background: #fafafa;
        }
        .cart-line .meta .title {
          font-size: 14px;
          line-height: 1.2;
        }
        .cart-line .line-total {
          font-weight: 600;
          white-space: nowrap;
        }

        .offcanvas-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.35);
          z-index: 1040;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.18s ease;
        }
        .offcanvas-backdrop.show {
          opacity: 1;
          pointer-events: auto;
        }

        @media (prefers-reduced-motion: reduce) {
          .cart-drawer,
          .offcanvas-backdrop {
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
}
