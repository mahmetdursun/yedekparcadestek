// src/data/mockProducts.js

// Türkçe/aksan güvenli slug (örn. "rülmanı" → "rulmani")
export const toSlug = (s = "") =>
  String(s)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/İ/g, "i")
    .replace(/ı/g, "i")
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const safeDecode = (x) => {
  try { return decodeURIComponent(x); } catch { return x; }
};

// Örnek veri
export const MOCK_PRODUCTS = [
  {
    id: "102115",
    slug: "optimal-102115-teker-rülmani-arka-golf-4-octavia-leon-tld-5b-abs",
    title: "OPTIMAL 102115 | Teker Rulmanı Arka Golf.4–Octavia–Leon–Tld 5B–ABS",
    brand: "OPTIMAL",
    images: [
      "/images/mock/opt102115-1.jpg",
      "/images/mock/opt102115-2.jpg",
      "/images/mock/opt102115-3.jpg",
    ],
    price: 1403.53,
    oldPrice: 1684.23,
    currency: "TRY",
    stock: 9,
    sku: "102115",
    ean: "4031185120115",
    categories: [
      { label: "Arka Takım ve Süspansiyon", href: "/k/arac-takim" },
      { label: "BORA" },
      { label: "VOLKSWAGEN" },
    ],
    attributes: [
      { label: "Genişlik [mm]", value: "61.8" },
      { label: "İç çap [mm]", value: "30" },
      { label: "Dış çap [mm]", value: "120" },
    ],
    fitment: [
      { brand: "Volkswagen", model: "Golf 4", years: "1997–2006" },
      { brand: "Skoda", model: "Octavia I", years: "1996–2010" },
      { brand: "Seat", model: "Leon I", years: "1999–2006" },
    ],
    description:
      "Teker rulmanı arka, ABS uyumlu. Yüksek dayanımlı malzeme ve düşük sürtünme.",
    rating: 4.6,
    reviewCount: 18,
  },
];

// Slug'a göre ürün bul (URL’den gelen slug’ı decode + normalize et)
export function getProductBySlug(slug) {
  const s = toSlug(safeDecode(String(slug ?? "")));
  return MOCK_PRODUCTS.find((p) => toSlug(p.slug || p.title) === s) || null;
}

// Geriye dönük: handle → slug gibi çalışsın
export function getProductByHandle(handle) {
  return getProductBySlug(handle);
}
