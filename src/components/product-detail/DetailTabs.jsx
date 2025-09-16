"use client";
import { useState } from "react";
import styles from "./product-detail.module.scss";

export default function DetailTabs({ description, attributes = [], fitment = [] }) {
  const [tab, setTab] = useState("desc");

  return (
    <div className={styles["pd-tabs"]}>
      <div className={styles["pd-tabs__nav"]}>
        <button className={`${styles["pd-tabs__btn"]} ${tab === "desc" ? styles["pd-tabs__btn--active"] : ""}`} onClick={() => setTab("desc")}>Ürün Açıklaması</button>
        <button className={`${styles["pd-tabs__btn"]} ${tab === "fit" ? styles["pd-tabs__btn--active"] : ""}`} onClick={() => setTab("fit")}>Uyumluluk</button>
        <button className={`${styles["pd-tabs__btn"]} ${tab === "spec" ? styles["pd-tabs__btn--active"] : ""}`} onClick={() => setTab("spec")}>Teknik Özellikler</button>
      </div>

      {tab === "desc" && (
        <div className={styles["pd-tabs__pane"]}>
          <p className="mb-0">{description || "Bu ürün için açıklama henüz eklenmedi."}</p>
        </div>
      )}

      {tab === "fit" && (
        <div className={styles["pd-tabs__pane"]}>
          {!fitment.length ? (
            <div className="text-muted">Uyumluluk bilgisi yok.</div>
          ) : (
            <ul className={styles["pd-fit"]}>
              {fitment.map((f, i) => (
                <li key={i} className={styles["pd-fit__row"]}>
                  <span className={styles["pd-fit__brand"]}>{f.brand}</span>
                  <span className={styles["pd-fit__model"]}>{f.model}</span>
                  {f.years && <span className={styles["pd-fit__years"]}>{f.years}</span>}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {tab === "spec" && (
        <div className={styles["pd-tabs__pane"]}>
          {!attributes.length ? (
            <div className="text-muted">Teknik özellik bulunamadı.</div>
          ) : (
            <ul className={styles["pd-specs__list"]}>
              {attributes.map((a, i) => (
                <li key={i} className={styles["pd-specs__row"]}>
                  <span className={styles["pd-specs__k"]}>{a.label}</span>
                  <span className={styles["pd-specs__v"]}>{a.value}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
