// src/app/(storefront)/arama/page.jsx
import SortSelect from "@/components/search/SortSelect";
import ViewSelect from "@/components/search/ViewSelect";

import { searchProducts } from "@/data/mockProducts";
import {
  derivePartBrandOptions,
  deriveVehicleBrandOptions,
  deriveCategoryOptions,
} from "../../../util/filters";

import ProductListRowCart from "../../../components/product/ProductListRowCart";
import ProductCard from "../../../components/product/ProductCard";

import CheckboxFilter from "@/components/filters/CheckboxFilter";

import Pagination from "@/components/common/Pagination";

export const dynamic = "force-dynamic";

const PAGE_SIZE_LIST = 8;
const PAGE_SIZE_GALERI = 16;

const decodeParam = (v) => {
  try {
    return decodeURIComponent(String(v ?? ""));
  } catch {
    return String(v ?? "");
  }
};

export default async function SearchPage({ searchParams }) {
  const sp = await searchParams;

  const pageRaw = Number(sp?.page || 1);
  const page = pageRaw > 0 ? pageRaw : 1;

  const q = String(sp?.q ?? "").trim();
  const rawOrder = sp?.sort ?? sp?.sirala ?? "";
  const order = String(rawOrder || "");

  // görünüm: liste | galeri (default: liste)
  const viewParam = String(sp?.gorunum ?? "");
  const view = viewParam === "galeri" ? "galeri" : "liste";

  // --- URL'den filtreleri oku ---

  // parça markası (BOSCH,BANDO,...)
  const partBrandRaw = String(sp?.partBrand ?? "");
  const selectedPartBrands = partBrandRaw
    .split(",")
    .map(decodeParam)
    .filter(Boolean);

  // araç markası (fitment.brand → Renault, Volkswagen...)
  const vehicleBrandRaw = String(sp?.vehicleBrand ?? "");
  const selectedVehicleBrands = vehicleBrandRaw
    .split(",")
    .map(decodeParam)
    .filter(Boolean);

  // kategori (Tahrik / V Kayışları, Arka Takım ve Süspansiyon...)
  const catRaw = String(sp?.cat ?? "");
  const selectedCats = catRaw.split(",").map(decodeParam).filter(Boolean);

  // 1) sadece metin araması
  const baseResults = q ? searchProducts(q) : [];

  // 2) soldaki kutuların seçenekleri – her zaman baseResults üzerinden
  const brandOptions = derivePartBrandOptions(baseResults);
  const vehicleOptions = deriveVehicleBrandOptions(baseResults);
  const categoryOptions = deriveCategoryOptions(baseResults);

  // 3) filtreleme (araç → kategori → parça markası)
  let filtered = baseResults;

  if (selectedVehicleBrands.length) {
    filtered = filtered.filter((p) =>
      (p.fitment || []).some((f) =>
        selectedVehicleBrands.includes(String(f.brand).trim())
      )
    );
  }

  if (selectedCats.length) {
    filtered = filtered.filter((p) =>
      (p.categories || []).some((c) =>
        selectedCats.includes(String(c.label).trim())
      )
    );
  }

  if (selectedPartBrands.length) {
    filtered = filtered.filter((p) =>
      selectedPartBrands.includes(String(p.brand).trim())
    );
  }

  // 4) sıralama
  const sorted = [...filtered];
  if (order === "price-asc") sorted.sort((a, b) => a.price - b.price);
  else if (order === "price-desc") sorted.sort((a, b) => b.price - a.price);
  else if (order === "name-asc")
    sorted.sort((a, b) => a.title.localeCompare(b.title));

  // 5) sayfalama
  const pageSize = view === "galeri" ? PAGE_SIZE_GALERI : PAGE_SIZE_LIST;
  const totalItems = sorted.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const currentPage = Math.min(page, totalPages);

  const start = (currentPage - 1) * pageSize;
  const pageItems = sorted.slice(start, start + pageSize);

  return (
    <div className="container py-4">
      {/* Üst bar: başlık + Görünüm + Sırala */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="h5 mb-0">
          “{q}” için {sorted.length} sonuç
        </h1>

        <div className="d-flex align-items-center gap-2">
          <span className="small text-muted">Görünüm:</span>
          <ViewSelect view={view} />

          <span className="small text-muted ms-3">Sırala:</span>
          <SortSelect q={q} order={order} param="sort" />
        </div>
      </div>

      <div className="row g-3">
        {/* Sol filtre kolon */}
        <div className="col-12 col-lg-3">
          <CheckboxFilter
            title="Araçlar"
            paramKey="vehicleBrand"
            options={vehicleOptions}
            searchable={true}
          />

          <CheckboxFilter
            title="Kategori"
            paramKey="cat"
            options={categoryOptions}
            searchable={true}
          />

          <CheckboxFilter
            title="Marka"
            paramKey="partBrand"
            options={brandOptions}
            // Marka listesi çok uzunsa burayı true yapıp arama da açabilirsin
            searchable={false}
          />
          {/* Arama kelimesi + fiyat kutularını sonra ekleyeceğiz */}
        </div>

        {/* Sağ taraf: sonuçlar (liste / galeri) */}
        <div className="col-12 col-lg-9">
          {totalItems === 0 && (
            <div className="text-muted">Hiç sonuç bulunamadı.</div>
          )}

          {totalItems > 0 && view === "liste" && (
            <>
              {pageItems.map((p) => (
                <ProductListRowCart key={p.slug} product={p} />
              ))}
            </>
          )}

          {totalItems > 0 && view === "galeri" && (
            <div className="row g-3">
              {pageItems.map((p) => (
                <div key={p.slug} className="col-6 col-lg-3 d-flex">
                  <ProductCard p={p} />
                </div>
              ))}
            </div>
          )}

          {totalItems > 0 && (
            <Pagination
              totalItems={totalItems}
              page={currentPage}
              pageSize={pageSize}
            />
          )}
        </div>
      </div>
    </div>
  );
}
