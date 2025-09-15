"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ProductCard from "@/components/product/ProductCard";

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

  const updateQuery = (patch) => {
    const q = new URLSearchParams(sp.toString());
    Object.entries(patch).forEach(([k, v]) => {
      if (v == null || v === "" || (Array.isArray(v) && v.length === 0))
        q.delete(k);
      else q.set(k, Array.isArray(v) ? v.join(",") : String(v));
    });
    router.push(`${pathname}?${q.toString()}`, { scroll: false });
  };

  const selectedCats = (
    initialFilters?.cat?.toString().split(",") ?? []
  ).filter(Boolean);
  const selectedPartBrands = (
    initialFilters?.partBrand?.toString().split(",") ?? []
  ).filter(Boolean);

  return (
    <div className="container-fluid my-3">
      {/* breadcrumb */}
      <nav className="small text-muted mb-2">
        <Link href="/">Anasayfa</Link> &nbsp;/&nbsp;
        <Link href={`/marka/${brand}`}>{brand?.toUpperCase()}</Link>
        {model && (
          <>
            {" "}
            / <strong>{model.toUpperCase()}</strong>
          </>
        )}
      </nav>

      <div className="d-flex gap-3">
        {/* SOL: model listesi + facet filtreler */}
        <aside className="brand-sidebar">
          {/* sadece marka sayfasında (model yokken) göster */}
          {!model && models?.length > 0 && (
            <>
              <div className="sb-title">Araç Modelleri</div>
              <div className="sb-list">
                {models.map((m) => (
                  <Link
                    key={m.slug}
                    href={`/marka/${brand}/${m.slug}`}
                    className={`sb-item ${model === m.slug ? "active" : ""}`}
                  >
                    {m.name}
                  </Link>
                ))}
              </div>
              <hr />
            </>
          )}

          {/* model sayfasındayken istersen geri linki gösterelim (opsiyonel) */}
          {model && (
            <div className="mb-2">
              <Link href={`/marka/${brand}`} className="small">
                ← {brand.toUpperCase()} için tüm modeller
              </Link>
            </div>
          )}

          <div className="sb-title">Kategoriler</div>
          <FacetCheckboxes
            values={selectedCats}
            options={facets.categories}
            onChange={(vals) => updateQuery({ cat: vals, page: 1 })}
          />

          <div className="sb-title mt-3">Parça Markaları</div>
          <FacetCheckboxes
            values={selectedPartBrands}
            options={facets.partBrands}
            onChange={(vals) => updateQuery({ partBrand: vals, page: 1 })}
          />

          <div className="sb-title mt-3">Model Yılı</div>
          <YearRange
            minMax={facets.years}
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
        </aside>

        {/* SAĞ: toolbar + ürün grid */}
        <main className="flex-fill">
          <div className="toolbar d-flex align-items-center justify-content-between mb-2">
            <strong>
              Toplam {Number(total || 0).toLocaleString("tr-TR")} ürün
            </strong>
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

          {!products || products.length === 0 ? (
            <div className="text-muted py-5">
              Bu filtrelerde ürün bulunamadı.
            </div>
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

      <style jsx>{`
        .brand-sidebar {
          width: 260px;
          min-width: 260px;
          border: 1px solid #eee;
          border-radius: 12px;
          padding: 12px;
          background: #fff;
        }
        .sb-title {
          font-weight: 600;
          margin: 8px 0;
        }
        .sb-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
          max-height: 380px;
          overflow: auto;
        }
        .sb-item {
          display: block;
          padding: 6px 8px;
          border-radius: 8px;
          text-decoration: none;
          color: #222;
        }
        .sb-item.active,
        .sb-item:hover {
          background: #f6f7f9;
        }
      `}</style>
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
    <div className="d-flex flex-column gap-1">
      {options.map((o) => (
        <label key={o.value} className="d-flex align-items-center gap-2">
          <input
            type="checkbox"
            defaultChecked={values.includes(o.value)}
            onChange={(e) => toggle(o.value, e.target.checked)}
          />
          {o.label} <span className="text-muted">({o.count})</span>
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
    <div className="d-flex align-items-center gap-2">
      <input
        className="form-control form-control-sm"
        placeholder={String(min)}
        defaultValue={a}
        onBlur={(e) => onChange(`${e.target.value || min}-${b || max}`)}
      />
      <span>–</span>
      <input
        className="form-control form-control-sm"
        placeholder={String(max)}
        defaultValue={b}
        onBlur={(e) => onChange(`${a || min}-${e.target.value || max}`)}
      />
    </div>
  );
}
