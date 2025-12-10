"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import SortSelect from "@/components/search/SortSelect";
import ViewSelect from "@/components/search/ViewSelect";
import CheckboxFilter from "@/components/filters/CheckboxFilter";
import ProductListRowCart from "@/components/product/ProductListRowCart";
import ProductCard from "@/components/product/ProductCard";

import { useUrlFilter } from "@/hooks/useUrlFilter";
import { derivePartBrandOptions } from "@/util/filters";
import { filterProductsByFitment } from "@/util/fitment";

import Pagination from "@/components/common/Pagination";

import styles from "./style.module.scss";

const PAGE_SIZE_LIST = 8;
const PAGE_SIZE_GALERI = 16;

export default function BrandModelPage({
  brand,
  model,
  models,
  products,
  total,
  facets,
  initialFilters,
}) {
  const { get, getArray, update } = useUrlFilter();
  const [showFilters, setShowFilters] = useState(false);
  const sp = useSearchParams();

  // Görünüm: liste / galeri (varsayılan: liste)
  const viewParam = sp.get("gorunum") || "liste";
  const view = viewParam === "galeri" ? "galeri" : "liste";
  const pageRaw = Number(sp.get("page") || 1);
  const page = pageRaw > 0 ? pageRaw : 1;

  // URL'den filtre değerleri
  const selectedCats = getArray("cat");
  const selectedPartBrands = getArray("partBrand");
  const yearFilter = get("year");
  const stockFilter = get("stock");

  // Ürünleri rota (brand/model) ile fitment üzerinden filtrele
  const fitmentFiltered = useMemo(() => {
    return filterProductsByFitment(products || [], { brand, model });
  }, [products, brand, model]);

  const pageSize = view === "galeri" ? PAGE_SIZE_GALERI : PAGE_SIZE_LIST;
  const totalItems = fitmentFiltered.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const currentPage = Math.min(page, totalPages);

  const start = (currentPage - 1) * pageSize;
  const pageItems = fitmentFiltered.slice(start, start + pageSize);

  // Facetler
  const yearMinMax = facets?.years ?? [1990, new Date().getFullYear()];
  const catOptions = facets?.categories ?? [];

  // Parça markası facet
  const basePartBrands = useMemo(() => {
    if (facets?.partBrands?.length) return facets.partBrands;
    return derivePartBrandOptions(products || []);
  }, [facets?.partBrands, products]);

  // Seçili olup facet'te olmayan markaları da göster (count:0)
  const partBrandOptions = useMemo(() => {
    const extras = selectedPartBrands
      .filter((b) => !basePartBrands.some((o) => o.value === b))
      .map((b) => ({ value: b, label: b, count: 0 }));
    return [...basePartBrands, ...extras];
  }, [basePartBrands, selectedPartBrands]);

  // Chip label map’leri
  const catLabel = useMemo(() => {
    const m = new Map();
    (catOptions || []).forEach((o) => m.set(o.value, o.label));
    return m;
  }, [catOptions]);

  const brandLabel = useMemo(() => {
    const m = new Map();
    (partBrandOptions || []).forEach((o) => m.set(o.value, o.label));
    return m;
  }, [partBrandOptions]);

  const hasAnyFilter =
    selectedCats.length > 0 ||
    selectedPartBrands.length > 0 ||
    !!yearFilter ||
    stockFilter === "1";

  const clearAll = () => {
    update({ cat: null, partBrand: null, year: null, stock: null });
  };

  const currentTotal =
    Number(total || fitmentFiltered.length || 0).toLocaleString("tr-TR");

  return (
    <div className="container-fluid my-3">
      {/* breadcrumb */}
      <nav className="small text-muted mb-2">
        <Link href="/">Anasayfa</Link> &nbsp;/&nbsp;
        <Link href={`/marka/${brand}`}>{brand?.toUpperCase()}</Link>
        {model && <> / <strong>{model.toUpperCase()}</strong></>}
      </nav>

      {/* üst toolbar */}
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
        <strong>Toplam {currentTotal} ürün</strong>

        <div className="d-flex align-items-center gap-2">
          <span className="small text-muted d-none d-md-inline">Görünüm:</span>
          <ViewSelect view={view} param="gorunum" />

          <button
            className="btn btn-outline-secondary btn-sm d-md-none ms-2"
            onClick={() => setShowFilters(true)}
            aria-label="Filtreleri Aç"
          >
            Filtreler
          </button>

          <span className="small text-muted ms-3 d-none d-md-inline">
            Sırala:
          </span>
          <SortSelect order={initialFilters?.sort ?? "rec"} param="sort" />
        </div>
      </div>

      {/* seçili filtreler (chip) */}
      {hasAnyFilter && (
        <div className={styles["filter-chips"]}>
          {selectedCats.map((v) => (
            <button
              key={`c-${v}`}
              className={styles["filter-chips__chip"]}
              onClick={() =>
                update({ cat: selectedCats.filter((x) => x !== v) })
              }
              title="Kaldır"
            >
              {catLabel.get(v) || v}
              <span className={styles["filter-chips__x"]}>×</span>
            </button>
          ))}

          {selectedPartBrands.map((v) => (
            <button
              key={`pb-${v}`}
              className={styles["filter-chips__chip"]}
              onClick={() =>
                update({
                  partBrand: selectedPartBrands.filter((x) => x !== v),
                })
              }
              title="Kaldır"
            >
              {brandLabel.get(v) || v}
              <span className={styles["filter-chips__x"]}>×</span>
            </button>
          ))}

          {yearFilter && (
            <button
              className={styles["filter-chips__chip"]}
              onClick={() => update({ year: null })}
              title="Kaldır"
            >
              Yıl: {yearFilter}
              <span className={styles["filter-chips__x"]}>×</span>
            </button>
          )}

          {stockFilter === "1" && (
            <button
              className={styles["filter-chips__chip"]}
              onClick={() => update({ stock: null })}
              title="Kaldır"
            >
              Stokta
              <span className={styles["filter-chips__x"]}>×</span>
            </button>
          )}

          <button
            className={styles["filter-chips__clear"]}
            onClick={clearAll}
            title="Tüm filtreleri temizle"
          >
            Temizle
          </button>
        </div>
      )}

      <div className="d-flex gap-3">
        {/* SOL: model listesi + facet filtreler */}
        <aside
          className={[
            styles["brand-sidebar"],
            showFilters ? styles["brand-sidebar--open"] : "",
          ].join(" ")}
        >
          <button
            className={styles["brand-sidebar__close"]}
            onClick={() => setShowFilters(false)}
            aria-label="Filtreleri Kapat"
          >
            ×
          </button>

          {/* Marka sayfasında model listesi */}
          {!model && models?.length > 0 && (
            <section className={styles["brand-sidebar__section"]}>
              <div className={styles["brand-sidebar__title"]}>
                Araç Modelleri
              </div>
              <div className={styles["brand-sidebar__list"]}>
                {models.map((m) => (
                  <Link
                    key={m.slug}
                    href={`/marka/${brand}/${m.slug}`}
                    className={[
                      styles["brand-sidebar__item"],
                      model === m.slug
                        ? styles["brand-sidebar__item--active"]
                        : "",
                    ].join(" ")}
                  >
                    {m.name}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Model sayfasında geri link */}
          {model && (
            <div className="mb-2">
              <Link href={`/marka/${brand}`} className="small">
                ← {brand.toUpperCase()} için tüm modeller
              </Link>
            </div>
          )}

          {/* KATEGORİ FİLTRESİ */}
          <section className={styles["brand-sidebar__section"]}>
            {catOptions?.length ? (
              <CheckboxFilter
                title="Kategoriler"
                paramKey="cat"
                options={catOptions}
                searchable={false}
              />
            ) : (
              <div className="text-muted small">
                Bu araç için kategori bulunamadı.
              </div>
            )}
          </section>

          {/* PARÇA MARKASI FİLTRESİ */}
          <section className={styles["brand-sidebar__section"]}>
            {partBrandOptions?.length ? (
              <CheckboxFilter
                title="Markalar"
                paramKey="partBrand"
                options={partBrandOptions}
                searchable={false}
              />
            ) : (
              <div className="text-muted small">
                Bu araç için parça markası bulunamadı.
              </div>
            )}
          </section>

          {/* YIL + STOK FİLTRESİ */}
          <section className={styles["brand-sidebar__section"]}>
            <div className={styles["brand-sidebar__title"]}>Model Yılı</div>
            <YearRange
              minMax={yearMinMax}
              value={yearFilter ?? ""}
              onChange={(range) => update({ year: range })}
            />
            <label className="d-flex align-items-center gap-2 mt-2">
              <input
                type="checkbox"
                defaultChecked={stockFilter === "1"}
                onChange={(e) =>
                  update({ stock: e.target.checked ? "1" : null })
                }
              />
              Stoktaki ürünler
            </label>
          </section>
        </aside>

        {/* SAĞ: ürün listesi (liste / galeri) */}
        <main className="flex-fill">
          {!fitmentFiltered || fitmentFiltered.length === 0 ? (
            <div className={styles["empty"]}>Bu filtrelerde ürün bulunamadı.</div>
          ) : view === "liste" ? (
            <>
              <div className="d-flex flex-column">
                {pageItems.map((p) => (
                  <ProductListRowCart key={p.id || p.slug} product={p} />
                ))}
              </div>
              <Pagination
                totalItems={totalItems}
                page={currentPage}
                pageSize={pageSize}
              />
            </>
          ) : (
            <>
              <div className="row g-3">
                {pageItems.map((p) => (
                  <div
                    key={p.id || p.slug}
                    className="col-6 col-md-4 col-lg-3 d-flex"
                  >
                    <ProductCard p={p} />
                  </div>
                ))}
              </div>
              <Pagination
                totalItems={totalItems}
                page={currentPage}
                pageSize={pageSize}
              />
            </>
          )}
        </main>
      </div>
    </div>
  );
}

/* — küçük yardımcı — */
function YearRange({ minMax, value, onChange }) {
  const [min, max] = Array.isArray(minMax)
    ? minMax
    : [1990, new Date().getFullYear()];
  const [a, b] = (value || "")
    .split("-")
    .map((n) => Number(n) || "");

  return (
    <div className={styles["year"]}>
      <input
        className="form-control form-control-sm"
        placeholder={String(min)}
        defaultValue={a}
        onBlur={(e) => onChange(`${e.target.value || min}-${b || max}`)}
      />
      <span className={styles["year__dash"]}>–</span>
      <input
        className="form-control form-control-sm"
        placeholder={String(max)}
        defaultValue={b}
        onBlur={(e) => onChange(`${a || min}-${e.target.value || max}`)}
      />
    </div>
  );
}
