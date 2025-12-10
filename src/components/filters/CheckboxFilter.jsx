"use client";

import { useMemo, useState } from "react";
import { useUrlFilter } from "@/hooks/useUrlFilter";
import FilterBox from "./FilterBox";
import styles from "./style.module.scss";

/**
 * Generic checkbox filtre
 * - URL param anahtarı: paramKey (ör: "cat", "partBrand", "vehicleBrand")
 * - options: [{ value, label, count }]
 */
export default function CheckboxFilter({
  title,
  paramKey,
  options = [],
  searchable = true,
}) {
  const { getArray, update } = useUrlFilter();
  const [search, setSearch] = useState("");

  const selected = getArray(paramKey);

  const filtered = useMemo(() => {
    const s = search.trim().toLowerCase();
    if (!s) return options;
    return options.filter((o) =>
      o.label.toLowerCase().includes(s)
    );
  }, [options, search]);

  const toggle = (value, checked) => {
    const set = new Set(selected);
    checked ? set.add(value) : set.delete(value);
    update({ [paramKey]: Array.from(set) });
  };

  return (
    <FilterBox
      title={title}
      searchValue={searchable ? search : undefined}
      onSearchChange={searchable ? setSearch : undefined}
      searchPlaceholder={searchable ? "Ara.." : undefined}
    >
      <div className={styles.partbrand__list}>
        {filtered.map((o) => (
          <label key={o.value} className={styles.partbrand__row}>
            <input
              type="checkbox"
              className={styles.partbrand__check}
              defaultChecked={selected.includes(o.value)}
              onChange={(e) => toggle(o.value, e.target.checked)}
            />
            <span className={styles.partbrand__label}>{o.label}</span>
            {typeof o.count === "number" && (
              <span className={styles.partbrand__count}>({o.count})</span>
            )}
          </label>
        ))}
      </div>
    </FilterBox>
  );
}
