// src/components/filters/VehicleBrandFilterClient.jsx
"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import FilterBox from "./FilterBox";
import styles from "./style.module.scss";

export default function VehicleBrandFilterClient({ options = [] }) {
  const pathname = usePathname();
  const sp = useSearchParams();
  const router = useRouter();

  const [search, setSearch] = useState("");

  const selected = (sp.get("vehicleBrand") || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const filtered = useMemo(() => {
    const s = search.trim().toLowerCase();
    if (!s) return options;
    return options.filter((o) =>
      o.label.toLowerCase().includes(s)
    );
  }, [options, search]);

  const onChange = (vals) => {
    const next = new URLSearchParams(sp.toString());
    if (vals.length) next.set("vehicleBrand", vals.join(","));
    else next.delete("vehicleBrand");
    next.set("page", "1");
    router.push(`${pathname}?${next.toString()}`, { scroll: false });
  };

  const toggle = (v, checked) => {
    const set = new Set(selected);
    checked ? set.add(v) : set.delete(v);
    onChange(Array.from(set));
  };

  return (
    <FilterBox
      title="Araçlar"
      searchValue={search}
      onSearchChange={setSearch}
      searchPlaceholder="Ara.."
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
