"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./product-detail.module.scss";

export default function ProductGallery({ product }) {
  const imgs = product.images?.length ? product.images : ["/vercel.svg"];
  const [idx, setIdx] = useState(0);

  return (
    <div className={styles["pd-gallery"]}>
      <div className={styles["pd-gallery__thumbs"]}>
        {imgs.map((src, i) => (
          <button
            key={src}
            type="button"
            aria-label={`Görsel ${i + 1}`}
            className={`${styles["pd-gallery__thumb"]} ${i === idx ? styles["pd-gallery__thumb--active"] : ""}`}
            onClick={() => setIdx(i)}
          >
            <Image src={src} alt="" fill sizes="96px" />
          </button>
        ))}
      </div>

      <div className={styles["pd-gallery__main"]}>
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
