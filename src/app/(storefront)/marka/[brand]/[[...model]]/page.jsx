import BrandModelPage from "@/components/brand/BrandModelPage";
import { BRANDS, MODELS, brandKey } from "@/data/brandsModels";

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

// TODO: backend / main-order ile bağlanacak
async function fetchBrandData({ brand, model, filters }) {
  return {
    products: [],
    total: 0,
    facets: {
      categories: [
        { value: "fren", label: "Fren Balatası", count: 87 },
        { value: "motor", label: "Motor Parçaları", count: 142 },
      ],
      partBrands: [
        { value: "BOSCH", label: "BOSCH", count: 39 },
        { value: "MAHLE", label: "MAHLE", count: 22 },
      ],
      years: [1998, 2025],
    },
  };
}
