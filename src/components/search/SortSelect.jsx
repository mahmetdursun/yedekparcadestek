"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SortSelect({ q, brand, order, param = "sort" }) {
  const pathname = usePathname();
  const router = useRouter();
  const sp = useSearchParams();

  const update = (v) => {
    const u = new URLSearchParams(sp.toString());

    if (v) u.set(param, v);
    else u.delete(param);

    if (q != null) u.set("q", q);

    if (brand) u.set("brand", brand);
    else u.delete("brand");

    router.push(`${pathname}?${u.toString()}`, { scroll: false });
  };

  const current = order || sp.get(param) || "rec";

  return (
    <select
      defaultValue={current}
      className="form-select form-select-sm w-auto"
      onChange={(e) => update(e.target.value)}
      aria-label="Sırala"
    >
      <option value="rec">Önerilen</option>
      <option value="price-asc">Fiyat (Artan)</option>
      <option value="price-desc">Fiyat (Azalan)</option>
      <option value="name-asc">İsim (A→Z)</option>
      <option value="new">En Yeni</option>
    </select>
  );
}
