// src/components/filters/PartBrandCheckboxes.jsx
"use client";
import styles from "./style.module.scss";

export default function PartBrandCheckboxes({
  values = [],
  options = [],
  onChange = () => {},
}) {
  const toggle = (v, checked) => {
    const set = new Set(values);
    checked ? set.add(v) : set.delete(v);
    onChange(Array.from(set));
  };

  return (
    <div className={styles.partbrand}>
      <div className={styles.partbrand__list}>
        {options.map((o) => (
          <label key={o.value} className={styles.partbrand__row}>
            <input
              type="checkbox"
              className={styles.partbrand__check}
              defaultChecked={values.includes(o.value)}
              onChange={(e) => toggle(o.value, e.target.checked)}
            />
            <span className={styles.partbrand__label}>{o.label}</span>
            {typeof o.count === "number" && (
              <span className={styles.partbrand__count}>({o.count})</span>
            )}
          </label>
        ))}
      </div>
    </div>
  );
}
