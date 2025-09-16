"use client";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addItem } from "@/store/slices/cartSlice";
import styles from "./product-detail.module.scss";

export default function PurchaseBox({ product }) {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  const price = Number(product.price || 0);
  const kdv = Math.round(price * 0.20 * 100) / 100;
  const total = Math.round((price + kdv) * 100) / 100;

  const add = () => {
    dispatch(addItem({
      id: product.id,
      title: product.title,
      price: total,
      img: product.images?.[0],
      brand: product.brand,
      qty,
    }));
  };

  return (
    <aside className={styles["pd-buy"]}>
      <div className={styles["pd-buy__price"]}>
        {product.oldPrice && (
          <div className={styles["pd-buy__old"]}>
            {product.oldPrice.toLocaleString("tr-TR")} TL
          </div>
        )}
        <div className={styles["pd-buy__now"]}>
          {total.toLocaleString("tr-TR")} TL
        </div>
        <div className="small text-muted">KDV dahil (~%20)</div>
      </div>

      <div className={styles["pd-buy__qty"]}>
        <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="btn btn-outline-secondary btn-sm">−</button>
        <span className={styles["pd-buy__qty-num"]}>{qty}</span>
        <button onClick={() => setQty((q) => q + 1)} className="btn btn-outline-secondary btn-sm">+</button>
      </div>

      <button
        className="btn btn-warning w-100"
        disabled={product.stock <= 0}
        onClick={add}
      >
        Sepete Ekle
      </button>

      <div className="d-flex gap-2 mt-2">
        <button className="btn btn-light border w-100">Favorilere Ekle</button>
        <button className="btn btn-light border w-100">Karşılaştır</button>
      </div>

      <div className="small text-muted mt-2">
        11:00’a kadar verilen siparişler aynı gün kargoda.
      </div>
    </aside>
  );
}
