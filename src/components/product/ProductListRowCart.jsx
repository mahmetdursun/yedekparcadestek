"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/slices/cartSlice";
import Price from "../../components/shared/Price";

export default function ProductListRowCart({ product }) {
  const p = product || {};
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  const inStock = Number(p.stock || 0) > 0;

  const priceText = useMemo(() => {
    const n = Number(p.price || 0);
    try { return n.toLocaleString("tr-TR", { style: "currency", currency: p.currency || "TRY" }); }
    catch { return `${n} ${p.currency || "TRY"}`; }
  }, [p.price, p.currency]);

  const dec = () => setQty(q => Math.max(1, q - 1));
  const inc = () => setQty(q => Math.min(999, q + 1));
  const onQty = (e) => {
    const v = e.target.value.replace(/[^\d]/g, "");
    setQty(Math.max(1, Math.min(999, Number(v || 1))));
  };

  const add = () => {
    if (!inStock) return;
    dispatch(addItem({
      id: p.id ?? p.slug,
      title: p.title,
      price: p.price,
      img: p.images?.[0],
      brand: p.brand,
      qty,
    }));
  };

  return (
    <div className="card p-3 mb-3 position-relative">
      {/* tüm satırı tıklatılabilir yapıyoruz ama butonlar çalışsın diye z-index için sadece arka plana */}
      <Link href={`/parca/${p.slug}`} className="stretched-link" aria-label={`${p.title} detay`}></Link>

      <div className="d-flex gap-3 align-items-start">
        {/* Sol: görsel */}
        <div
          style={{ width: 160, height: 120 }}
          className="bg-light rounded d-flex align-items-center justify-content-center overflow-hidden"
        >
          <img
            src={p.images?.[0] || "/img/placeholder.png"}
            alt={p.title || ""}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Orta: başlık ve özellikler */}
        <div className="flex-grow-1">
          <h2 className="h6 mb-1">{p.title}</h2>
          {p.subtitle && <div className="text-muted small">{p.subtitle}</div>}

          <div className="text-muted small mt-1">
            Ürün numarası: <strong>{p.sku}</strong>
          </div>

          {p.attributes?.length ? (
            <div className="text-muted small mt-1">
              {p.attributes.slice(0, 4).map((a, i) => (
                <span key={i}>
                  {a.label}: <strong>{a.value}</strong>{i < Math.min(4, p.attributes.length) - 1 ? " • " : ""}
                </span>
              ))}
            </div>
          ) : null}

          {/* Daha Fazla Göster linki istersen buraya eklenir */}
        </div>

        {/* Sağ: fiyat, stok, qty, sepete ekle */}
        <div style={{ width: 240 }} className="text-end">
          {/* Price bileşenin varsa onu kullan; yoksa fallback metni bırak */}
          {Price ? (
            <div className="fw-bold fs-5"><Price price={p.price} oldPrice={p.oldPrice} /></div>
          ) : (
            <div className="fw-bold fs-5">{priceText}</div>
          )}

          <div className={`small d-inline-flex align-items-center gap-1 ${inStock ? "text-success" : "text-danger"}`}>
            <span style={{ width: 8, height: 8, borderRadius: 999, background: inStock ? "#28a745" : "#dc3545", display: "inline-block" }} />
            {inStock ? "Stokta var" : "Geçici olarak stokta yok"}
          </div>

          <div className="d-flex align-items-center justify-content-end gap-2 mt-2 position-relative" style={{ zIndex: 2 }}>
            <div className="input-group input-group-sm" style={{ width: 120 }}>
              <button className="btn btn-outline-secondary" onClick={dec} aria-label="Azalt" disabled={!inStock}>–</button>
              <input
                type="text"
                inputMode="numeric"
                className="form-control text-center"
                value={qty}
                onChange={onQty}
                aria-label="Adet"
                disabled={!inStock}
              />
              <button className="btn btn-outline-secondary" onClick={inc} aria-label="Arttır" disabled={!inStock}>+</button>
            </div>

            <button
              className="btn btn-warning"
              onClick={add}
              disabled={!inStock}
              style={{ fontWeight: 600 }}
            >
              Sepete Ekle
            </button>
          </div>

          {/* Ürün Detayları linki */}
          <div className="small mt-2 position-relative" style={{ zIndex: 2 }}>
            <Link href={`/parca/${p.slug}`} className="text-decoration-none">Ürün Detayları</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
