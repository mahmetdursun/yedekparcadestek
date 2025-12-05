// src/components/filters/FilterBox.jsx
"use client";

import { FiChevronDown } from "react-icons/fi";
import styles from "./style.module.scss";

export default function FilterBox({
  title,
  children,
  showSearch = true,
  searchPlaceholder = "Ara..",
  searchValue = "",
  onSearchChange,
}) {
  return (
    <div className={styles.filterBox}>
      <div className={styles.filterBox__header}>
        <span className={styles.filterBox__title}>{title}</span>
        <FiChevronDown className={styles.filterBox__chevron} />
      </div>

      <div className={styles.filterBox__body}>
        {showSearch && (
          <div className={styles.filterBox__search}>
            <input
              type="text"
              className={styles.filterBox__searchInput}
              placeholder={searchPlaceholder}
              value={searchValue}
              onChange={(e) => onSearchChange?.(e.target.value)}
            />
          </div>
        )}

        <div className={styles.filterBox__scroll}>{children}</div>
      </div>
    </div>
  );
}
