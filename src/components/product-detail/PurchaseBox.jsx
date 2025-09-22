'use client';
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addItem } from "@/store/slices/cartSlice";
import Price from "@/components/shared/Price";
import { normalizeProduct} from '../../util/product';
import styles from "./product-detail.module.scss";

export default function PurchaseBox({ product: raw }) {
  const product = normalizeProduct(raw);
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  const add = () => {
    dispatch(addItem({
      id: product.id,
      title: product.title,
      price: product.price,   // KDV yok; sepete bırak
      img: product.image,
      brand: product.brand,
      qty,
    }));
  };

  return (
    <aside className={styles["pd-buy"]}>
      <div className={styles["pd-buy__price"]}>
        <Price price={product.price} oldPrice={product.oldPrice} />
      </div>

      <div className={styles["pd-buy__qty"]}>
        <button onClick={() => setQty(q => Math.max(1, q - 1))} className="btn btn-outline-secondary btn-sm">−</button>
        <span className={styles["pd-buy__qty-num"]}>{qty}</span>
        <button onClick={() => setQty(q => q + 1)} className="btn btn-outline-secondary btn-sm">+</button>
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
