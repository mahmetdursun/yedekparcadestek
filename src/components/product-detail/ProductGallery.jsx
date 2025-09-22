"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import styles from "./product-detail.module.scss";

export default function ProductGallery({ product }) {
  const imgs = product?.images?.length ? product.images : ["/vercel.svg"];
  const [idx, setIdx] = useState(0);

  // zoom origin için CSS değişkeni
  const mainRef = useRef(null);
  const onMove = (e) => {
    const el = mainRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--ox", `${x}%`);
    el.style.setProperty("--oy", `${y}%`);
  };

  return (
    <div className={styles["pd-gallery"]}>
      {/* thumbs */}
      <div className={styles["pd-gallery__thumbs"]}>
        {imgs.map((src, i) => (
          <button
            key={src + i}
            type="button"
            aria-label={`Görsel ${i + 1}`}
            className={`${styles["pd-gallery__thumb"]} ${i === idx ? styles["pd-gallery__thumb--active"] : ""}`}
            onClick={() => setIdx(i)}
          >
            <Image src={src} alt="" fill sizes="96px" />
          </button>
        ))}
      </div>

      {/* main with hover-zoom */}
      <div
        ref={mainRef}
        className={styles["pd-gallery__main"]}
        onMouseMove={onMove}
      >
        <Image
          key={imgs[idx]}
          src={imgs[idx]}
          alt={product.title}
          fill
          sizes="640px"
          className={styles["pd-gallery__img"]}
        />
      </div>
    </div>
  );
}
