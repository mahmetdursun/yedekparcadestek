// src/components/filters/PartBrandFilterClient.jsx
"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import FilterBox from "./FilterBox";
import PartBrandCheckboxes from "./PartBrandCheckboxes";

export default function PartBrandFilterClient({
  title = "Marka",
  options = [],
}) {
  const pathname = usePathname();
  const sp = useSearchParams();
  const router = useRouter();

  const selected = (sp.get("partBrand") || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const onChange = (vals) => {
    const next = new URLSearchParams(sp.toString());
    if (vals.length) next.set("partBrand", vals.join(","));
    else next.delete("partBrand");
    next.set("page", "1");
    router.push(`${pathname}?${next.toString()}`, { scroll: false });
  };

  return (
    <FilterBox title={title}>
      <PartBrandCheckboxes values={selected} options={options} onChange={onChange} />
    </FilterBox>
  );
}
