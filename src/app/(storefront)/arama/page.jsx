// src/app/(storefront)/arama/page.jsx
import Link from "next/link";
import SortSelect from "@/components/search/SortSelect";
import { searchProducts } from "@/data/mockProducts";
import { derivePartBrandOptions } from "../../../util/filters"; // ✅ alias düzeltildi
import ProductListRowCart from "../../../components/product/ProductListRowCart";
import PartBrandFilterClient from "../../../components/filters/PartBrandFilterClient";

export const dynamic = "force-dynamic";

const decodeParam = (v) => {
  try {
    return decodeURIComponent(String(v ?? ""));
  } catch {
    return String(v ?? "");
  }
};

export default async function SearchPage({ searchParams }) {
  // Next 15: Promise → await
  const sp = await searchParams;

  const q = String(sp?.q ?? "").trim();
  const order = String(sp?.sirala ?? "");

  // partBrand çoklu paramı (A,B,C)
  const partBrandRaw = String(sp?.partBrand ?? "");
  const selectedPartBrands = partBrandRaw
    .split(",")
    .map(decodeParam)
    .filter(Boolean);

  // (opsiyonel) eski tekil brand paramını da desteklemek istersen:
  const legacyBrand = decodeParam(sp?.brand);
  if (!selectedPartBrands.length && legacyBrand) {
    selectedPartBrands.push(legacyBrand);
  }

  // 1) Arama sonuçları
  const results = q ? searchProducts(q) : [];

  // 2) Marka filtresi (çoklu)
  const filtered = selectedPartBrands.length
    ? results.filter((p) => selectedPartBrands.includes(p.brand))
    : results;

  // 3) Sıralama
  const sorted = [...filtered];
  if (order === "price-asc") sorted.sort((a, b) => a.price - b.price);
  else if (order === "price-desc") sorted.sort((a, b) => b.price - a.price);
  else if (order === "name-asc")
    sorted.sort((a, b) => a.title.localeCompare(b.title));

  // 4) Checkbox için seçenekler (filtered varsa ondan, yoksa results’tan türet)
  // Her zaman tüm arama sonuçlarından üret
  const baseOptions = derivePartBrandOptions(results);

  // URL’den gelen seçili markalar options'ta yoksa da kaybolmasın (count=0 ile ekle)
  const extraSelected = selectedPartBrands
    .filter((b) => !baseOptions.some((o) => o.value === b))
    .map((b) => ({ value: b, label: b, count: 0 }));

  const brandOptions = [...baseOptions, ...extraSelected];

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="h5 mb-0">
          “{q}” için {sorted.length} sonuç
        </h1>
        {/* brand prop’unu artık vermiyoruz; sırf sıralama */}
        <SortSelect q={q} order={order} />
      </div>

      <div className="row g-3">
        {/* Sol filtre sütunu */}
        <div className="col-12 col-lg-3">
          {/* ✅ Link listesi gitti; ortak checkbox wrapper geldi */}
          <PartBrandFilterClient title="Markalar" options={brandOptions} />
        </div>

        {/* Sonuç listesi */}
        <div className="col-12 col-lg-9">
          {sorted.map((p) => (
            <ProductListRowCart key={p.slug} product={p} />
          ))}
          {sorted.length === 0 && (
            <div className="text-muted">Hiç sonuç bulunamadı.</div>
          )}
        </div>
      </div>
    </div>
  );
}
