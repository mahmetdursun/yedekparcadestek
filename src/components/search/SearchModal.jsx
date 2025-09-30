"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { searchProducts } from "@/data/mockProducts";
import styles from "./style.module.scss";

export default function SearchModal({ open, onClose }) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const inputRef = useRef(null);

  // Body scroll kilidi
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  // ESC ile kapat
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose?.();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Açılınca input’a fokus
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 0);
    else setQ("");
  }, [open]);

  const results = useMemo(
    () => (q.trim().length >= 2 ? searchProducts(q) : []),
    [q]
  );

  function submitAll(e) {
    e.preventDefault();
    const term = q.trim();
    if (!term) return;
    onClose?.();
    router.push(`/arama?q=${encodeURIComponent(term)}`);
  }

  if (!open) return null;

   return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
        {/* Başlık + Kapat */}
        <div className={styles.header}>
          <div className="fw-bold">Parça Ara</div>
          <button className="btn btn-sm btn-outline-secondary" onClick={onClose}>Kapat</button>
        </div>

        {/* Arama kutusu (asıl yazılan yer burası) */}
        <form onSubmit={submitAll}>
          <input
            ref={inputRef}
            className={styles.searchInput}
            placeholder="OEM / SKU / parça adı (örn. Clio 3 V kayışı)"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </form>

        {/* Mini sonuçlar */}
        <div className={styles.list}>
          {q.trim().length < 2 && (
            <div className="text-muted small">En az 2 karakter yaz.</div>
          )}

          {q.trim().length >= 2 && results.length === 0 && (
            <div className="text-muted">Sonuç bulunamadı.</div>
          )}

          {results.slice(0, 10).map((p) => (
            <Link
              key={p.slug}
              href={`/parca/${p.slug}`}
              className={styles.item}
              onClick={onClose}
            >
              <div className={styles.thumb}>
                <img
                  src={p.images?.[0] || "/img/placeholder.png"}
                  alt=""
                />
              </div>
              <div className={styles.meta}>
                <div className="d-flex align-items-center gap-2">
                  <span className="badge bg-secondary">{p.brand}</span>
                  <span className="fw-semibold">{p.title}</span>
                </div>
                <div className="text-muted small">
                  SKU: <strong>{p.sku}</strong>
                </div>
              </div>
              <div className="ms-auto fw-bold">
                {p.price.toLocaleString("tr-TR", { style: "currency", currency: "TRY" })}
              </div>
            </Link>
          ))}
        </div>

        {/* Tüm sonuçlar butonu */}
        {q.trim().length >= 2 && (
          <button className="btn btn-danger w-100 mt-3" onClick={submitAll}>
            Tüm sonuçları göster ({results.length})
          </button>
        )}
      </div>
    </div>
  );
}
