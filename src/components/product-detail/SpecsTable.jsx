import styles from "./product-detail.module.scss";

export default function SpecsTable({ attributes = [], compact = false }) {
  if (!attributes.length) return null;
  return (
    <div className={`${styles["pd-specs"]} ${compact ? styles["pd-specs--compact"] : ""}`}>
      <div className={styles["pd-specs__title"]}>Teknik Özellikler</div>
      <ul className={styles["pd-specs__list"]}>
        {attributes.map((a, i) => (
          <li key={i} className={styles["pd-specs__row"]}>
            <span className={styles["pd-specs__k"]}>{a.label}</span>
            <span className={styles["pd-specs__v"]}>{a.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
