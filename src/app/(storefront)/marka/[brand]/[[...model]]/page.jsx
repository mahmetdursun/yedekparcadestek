// src/app/(storefront)/marka/[...]/page.jsx
import BrandModelPage from "@/components/brand/BrandModelPage";
import { BRANDS, MODELS, brandKey } from "@/data/brandsModels";

// ✅ yeni importlar
import { MOCK_PRODUCTS } from "@/data/mockProducts";
import { filterProductsByFitment } from "@/util/fitment";
import { derivePartBrandOptions } from "@/util/filters";

export default async function Page({ params, searchParams }) {
  // ⬇️ ÖNCE await!
  const { brand, model } = await params;
  const sp = await searchParams;

  const brandParam = decodeURIComponent(brand || "");
  const modelParam = model?.[0] ?? null;

  const key = brandKey(brandParam);
  const exists = BRANDS.some((b) => brandKey(b.slug || b.name) === key);
  if (!exists) {
    return <div className="container py-5">Bu marka bulunamadı.</div>;
  }

  const models = MODELS[key] ?? [];

  const filters = parseFilters(sp);
  const { products, facets, total } = await fetchBrandData({
    brand: key,
    model: modelParam,
    filters,
  });

  return (
    <BrandModelPage
      brand={key}
      model={modelParam}
      models={models}
      products={products}
      total={total}
      facets={facets}
      initialFilters={sp}
    />
  );
}

/* ---- yardımcılar ---- */
function parseFilters(sp = {}) {
  const one = (k) => {
    const v = sp[k];
    return Array.isArray(v) ? v[0] : v ?? "";
  };
  return {
    cat: (one("cat") || "").split(",").filter(Boolean),
    partBrand: (one("partBrand") || "").split(",").filter(Boolean),
    year: one("year"),
    stock: one("stock") === "1",
    sort: one("sort") || "rec",
    page: Number(one("page") || 1),
    pageSize: 24,
  };
}

// ---- yıl aralığı kesişimi (örn. "1997–2006" ∩ "2000–2005") ----
function yearsOverlap(fitmentYears = "", filterRange = "") {
  const m = String(fitmentYears).match(/(\d{4})\D+(\d{4})/);
  if (!m) return false;
  const [, a, b] = m;
  const from = parseInt(a, 10);
  const to = parseInt(b, 10);

  const [minY, maxY] = String(filterRange)
    .split("-")
    .map((n) => parseInt(n, 10))
    .filter(Boolean);

  if (!minY || !maxY) return true; // filter hatalıysa engelleme
  return !(to < minY || from > maxY);
}

// ---- categories facet üret (label/value + count) ----
function deriveCategoryOptions(products = []) {
  const brandSet = new Set(
    (BRANDS || []).map((b) => (b.slug || b.name || "").toString().toUpperCase())
  );
  // Fitment'ta geçen araç markalarını da dışla
 for (const p of products) {
   for (const f of p.fitment || []) {
      const fb = (f.brand || "").toUpperCase();
      if (fb) brandSet.add(fb);
    }
  }

  const map = new Map(); // key: label, val: count
  for (const p of products) {
    for (const c of p.categories || []) {
      const label = (c?.label || c?.value || "").toString().trim();
      if (!label) continue;
      // Tamamen araç markasıysa atla (BMW / RENAULT vb.)
      if (brandSet.has(label.toUpperCase())) continue;
      map.set(label, (map.get(label) || 0) + 1);
    }
  }
  return Array.from(map.entries())
    .sort((a, b) => a[0].localeCompare(b[0], "tr"))
    .map(([label, count]) => ({ value: label, label, count }));
}

// ---- years min–max facet üret ----
function deriveYearsMinMax(products = []) {
  let min = Infinity;
  let max = -Infinity;
  for (const p of products) {
    for (const f of p.fitment || []) {
      const m = String(f.years || "").match(/(\d{4})\D+(\d{4})/);
      if (!m) continue;
      const a = parseInt(m[1], 10);
      const b = parseInt(m[2], 10);
      if (a) min = Math.min(min, a);
      if (b) max = Math.max(max, b);
    }
  }
  if (!isFinite(min) || !isFinite(max)) {
    return [1990, new Date().getFullYear()];
  }
  return [min, max];
}

// ✅ backend/realistic mock: fitment + filtreler + facet'ler
async function fetchBrandData({ brand, model, filters }) {
  // 1) fitment'e göre süz (brand/model route match)
  const byFitmentAll = filterProductsByFitment(MOCK_PRODUCTS, { brand, model });

  // 2) facetler (fitment süzülmüş TÜM liste üzerinden — kaybolma yok)
  const partBrandsFacet = derivePartBrandOptions(byFitmentAll);
  const categoriesFacet = deriveCategoryOptions(byFitmentAll);
  const yearsFacet = deriveYearsMinMax(byFitmentAll);

  // 3) kullanıcı filtrelerini uygula
  let arr = [...byFitmentAll];

  if (filters?.partBrand?.length) {
    const set = new Set(filters.partBrand);
    arr = arr.filter((p) => set.has(p.brand));
  }

  if (filters?.cat?.length) {
    const set = new Set(filters.cat);
    arr = arr.filter((p) =>
      (p.categories || []).some((c) => {
        const label = c?.label || c?.value;
        return label && set.has(label);
      })
    );
  }

  if (filters?.year) {
    arr = arr.filter((p) =>
      (p.fitment || []).some((f) => yearsOverlap(f.years, filters.year))
    );
  }

  if (filters?.stock) {
    arr = arr.filter((p) => Number(p.stock || 0) > 0);
  }

  // (opsiyonel) sort’u burada da uygulayabilirsin
  if (filters?.sort === "price-asc") {
    arr.sort((a, b) => a.price - b.price);
  } else if (filters?.sort === "price-desc") {
    arr.sort((a, b) => b.price - a.price);
  } else if (filters?.sort === "name-asc") {
    arr.sort((a, b) => (a.title || "").localeCompare(b.title || ""));
  } else if (filters?.sort === "new") {
    // mock data'da gerçek tarih olmadığı için şimdilik ekstra işlem yok
  }

  return {
    products: arr,
    total: arr.length,
    facets: {
      categories: categoriesFacet,
      partBrands: partBrandsFacet,
      years: yearsFacet,
    },
  };
}
