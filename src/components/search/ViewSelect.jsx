// src/components/search/ViewSelect.jsx
"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function ViewSelect({ view = "liste", param = "gorunum" }) {
  const pathname = usePathname();
  const router = useRouter();
  const sp = useSearchParams();

  const current = sp.get(param) || view || "liste";

  const update = (v) => {
    const u = new URLSearchParams(sp.toString());

    // varsayılan liste olduğu için, liste seçilirse paramı silelim
    if (v && v !== "liste") u.set(param, v);
    else u.delete(param);

    router.push(`${pathname}?${u.toString()}`, { scroll: false });
  };

  return (
    <select
      className="form-select form-select-sm w-auto"
      value={current}
      onChange={(e) => update(e.target.value)}
      aria-label="Görünüm"
    >
      <option value="galeri">Galeri</option>
      <option value="liste">Liste</option>
    </select>
  );
}
