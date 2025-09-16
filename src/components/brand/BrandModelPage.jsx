"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import ProductCard from "@/components/product/ProductCard";
import styles from "./style.module.scss"; // BEM'li SCSS Module

export default function BrandModelPage({
  brand,
  model,
  models,
  products,
  total,
  facets,
  initialFilters,
}) {
  const pathname = usePathname();
  const router = useRouter();
  const sp = useSearchParams();

  const [showFilters, setShowFilters] = useState(false); // xs/sm için aç-kapa

  const updateQuery = (patch) => {
    const q = new URLSearchParams(sp.toString());
    Object.entries(patch).forEach(([k, v]) => {
      if (v == null || v === "" || (Array.isArray(v) && v.length === 0)) q.delete(k);
      else q.set(k, Array.isArray(v) ? v.join(",") : String(v));
    });
    router.push(`${pathname}?${q.toString()}`, { scroll: false });
  };

  const selectedCats =
    (initialFilters?.cat?.toString().split(",") ?? []).filter(Boolean);
  const selectedPartBrands =
    (initialFilters?.partBrand?.toString().split(",") ?? []).filter(Boolean);

  const catOptions = facets?.categories ?? [];
  const partBrandOptions = facets?.partBrands ?? [];
  const yearMinMax = facets?.years ?? [1990, new Date().getFullYear()];

  // label map (chip’lerde isim göstermek için)
  const catLabel = useMemo(() => {
    const m = new Map();
    catOptions.forEach((o) => m.set(o.value, o.label));
    return m;
  }, [catOptions]);

  const brandLabel = useMemo(() => {
    const m = new Map();
    partBrandOptions.forEach((o) => m.set(o.value, o.label));
    return m;
  }, [partBrandOptions]);

  const hasAnyFilter =
    selectedCats.length > 0 ||
    selectedPartBrands.length > 0 ||
    !!initialFilters?.year ||
    initialFilters?.stock === "1";

  const clearAll = () => {
    updateQuery({ cat: null, partBrand: null, year: null, stock: null, page: 1 });
  };

  return (
    <div className="container-fluid my-3">
      {/* breadcrumb */}
      <nav className="small text-muted mb-2">
        <Link href="/">Anasayfa</Link> &nbsp;/&nbsp;
        <Link href={`/marka/${brand}`}>{brand?.toUpperCase()}</Link>
        {model && <> / <strong>{model.toUpperCase()}</strong></>}
      </nav>

      {/* üst toolbar */}
      <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
        <strong>Toplam {Number(total || 0).toLocaleString("tr-TR")} ürün</strong>

        <div className="d-flex align-items-center gap-2">
          <button
            className="btn btn-outline-secondary btn-sm d-md-none"
            onClick={() => setShowFilters(true)}
            aria-label="Filtreleri Aç"
          >
            Filtreler
          </button>
          <select
            defaultValue={initialFilters?.sort ?? "rec"}
            className="form-select form-select-sm w-auto"
            onChange={(e) => updateQuery({ sort: e.target.value, page: 1 })}
          >
            <option value="rec">Önerilen sıralama</option>
            <option value="price_asc">Fiyat (Artan)</option>
            <option value="price_desc">Fiyat (Azalan)</option>
            <option value="new">En yeni</option>
          </select>
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
                updateQuery({ cat: selectedCats.filter((x) => x !== v), page: 1 })
              }
              title="Kaldır"
            >
              {catLabel.get(v) || v} <span className={styles["filter-chips__x"]}>×</span>
            </button>
          ))}
          {selectedPartBrands.map((v) => (
            <button
              key={`pb-${v}`}
              className={styles["filter-chips__chip"]}
              onClick={() =>
                updateQuery({
                  partBrand: selectedPartBrands.filter((x) => x !== v),
                  page: 1,
                })
              }
              title="Kaldır"
            >
              {brandLabel.get(v) || v} <span className={styles["filter-chips__x"]}>×</span>
            </button>
          ))}
          {initialFilters?.year && (
            <button
              className={styles["filter-chips__chip"]}
              onClick={() => updateQuery({ year: null, page: 1 })}
              title="Kaldır"
            >
              Yıl: {initialFilters.year}{" "}
              <span className={styles["filter-chips__x"]}>×</span>
            </button>
          )}
          {initialFilters?.stock === "1" && (
            <button
              className={styles["filter-chips__chip"]}
              onClick={() => updateQuery({ stock: null, page: 1 })}
              title="Kaldır"
            >
              Stokta <span className={styles["filter-chips__x"]}>×</span>
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
          {/* mobil kapat */}
          <button
            className={styles["brand-sidebar__close"]}
            onClick={() => setShowFilters(false)}
            aria-label="Filtreleri Kapat"
          >
            ×
          </button>

          {/* sadece marka sayfasında (model yokken) göster */}
          {!model && models?.length > 0 && (
            <section className={styles["brand-sidebar__section"]}>
              <div className={styles["brand-sidebar__title"]}>Araç Modelleri</div>
              <div className={styles["brand-sidebar__list"]}>
                {models.map((m) => (
                  <Link
                    key={m.slug}
                    href={`/marka/${brand}/${m.slug}`}
                    className={[
                      styles["brand-sidebar__item"],
                      model === m.slug ? styles["brand-sidebar__item--active"] : "",
                    ].join(" ")}
                  >
                    {m.name}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* model sayfasında geri link */}
          {model && (
            <div className="mb-2">
              <Link href={`/marka/${brand}`} className="small">
                ← {brand.toUpperCase()} için tüm modeller
              </Link>
            </div>
          )}

          <section className={styles["brand-sidebar__section"]}>
            <div className={styles["brand-sidebar__title"]}>Kategoriler</div>
            <FacetCheckboxes
              values={selectedCats}
              options={catOptions}
              onChange={(vals) => updateQuery({ cat: vals, page: 1 })}
            />
          </section>

          <section className={styles["brand-sidebar__section"]}>
            <div className={styles["brand-sidebar__title"]}>Parça Markaları</div>
            <FacetCheckboxes
              values={selectedPartBrands}
              options={partBrandOptions}
              onChange={(vals) => updateQuery({ partBrand: vals, page: 1 })}
            />
          </section>

          <section className={styles["brand-sidebar__section"]}>
            <div className={styles["brand-sidebar__title"]}>Model Yılı</div>
            <YearRange
              minMax={yearMinMax}
              value={initialFilters?.year?.toString() ?? ""}
              onChange={(range) => updateQuery({ year: range, page: 1 })}
            />
            <label className="d-flex align-items-center gap-2 mt-2">
              <input
                type="checkbox"
                defaultChecked={initialFilters?.stock === "1"}
                onChange={(e) =>
                  updateQuery({ stock: e.target.checked ? "1" : null, page: 1 })
                }
              />
              Stoktaki ürünler
            </label>
          </section>
        </aside>

        {/* SAĞ: ürün grid */}
        <main className="flex-fill">
          {!products || products.length === 0 ? (
            <div className={styles["empty"]}>Bu filtrelerde ürün bulunamadı.</div>
          ) : (
            <div className="row g-3">
              {products.map((p) => (
                <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

/* — küçük yardımcılar — */

function FacetCheckboxes({ values, options, onChange }) {
  const toggle = (v, checked) => {
    const set = new Set(values);
    checked ? set.add(v) : set.delete(v);
    onChange(Array.from(set));
  };
  return (
    <div className={styles["facet"]}>
      {options.map((o) => (
        <label key={o.value} className={styles["facet__row"]}>
          <input
            type="checkbox"
            className={styles["facet__check"]}
            defaultChecked={values.includes(o.value)}
            onChange={(e) => toggle(o.value, e.target.checked)}
          />
          <span className={styles["facet__label"]}>{o.label}</span>
          <span className={styles["facet__count"]}>{o.count}</span>
        </label>
      ))}
    </div>
  );
}

function YearRange({ minMax, value, onChange }) {
  const [min, max] = Array.isArray(minMax)
    ? minMax
    : [1990, new Date().getFullYear()];
  const [a, b] = (value || "").split("-").map((n) => Number(n) || "");
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
