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

    {
    id: "BANDO-7PK1035",
    slug: "bando-7pk1035-v-kayisi",
    title: "V Kayışı",
    brand: "BANDO",
    images: ["/images/mock/v-belt.jpg"],
    price: 394.69,
    currency: "TRY",
    stock: 12,
    sku: "BANDO-7PK1035",
    ean: "8200830196",
    attributes: [
      { label: "Uzunluk [mm]", value: "1035" },
      { label: "Kaburga sayısı", value: "7" },
    ],
    description: "Kanal sayısı: 7 • Uzunluk: 1035 mm • BANDO 7PK1035",
    rating: 4.4,
    reviewCount: 9,
  },
  {
    id: "BOSCH-1987946248",
    slug: "bosch-1987946248-v-kayisi",
    title: "V Kayışı",
    brand: "BOSCH",
    images: ["/images/mock/v-belt.jpg"],
    price: 574.98,
    currency: "TRY",
    stock: 7,
    sku: "BOSCH-1987946248",
    ean: "8200830196",
    attributes: [
      { label: "Uzunluk [mm]", value: "1035" },
      { label: "Kaburga sayısı", value: "7" },
    ],
    description: "Bosch 7PK1035 muadili.",
    rating: 4.7,
    reviewCount: 22,
  },
  {
    id: "DAYCO-7PK1035",
    slug: "dayco-7pk1035-v-kayisi",
    title: "V Kayışı",
    brand: "DAYCO",
    images: ["/images/mock/v-belt.jpg"],
    price: 609.94,
    currency: "TRY",
    stock: 0,
    sku: "DAYCO-7PK1035",
    ean: "8200830196",
    attributes: [
      { label: "Uzunluk [mm]", value: "1035" },
      { label: "Kaburga sayısı", value: "7" },
    ],
    description: "Dayco 7PK1035.",
    rating: 4.2,
    reviewCount: 5,
  },
  {
    id: "GATES-7PK1035",
    slug: "gates-7pk1035-v-kayisi",
    title: "V Kayışı",
    brand: "GATES",
    images: ["/images/mock/v-belt.jpg"],
    price: 524.76,
    currency: "TRY",
    stock: 4,
    sku: "GATES-7PK1035",
    ean: "8200830196",
    attributes: [
      { label: "Uzunluk [mm]", value: "1035" },
      { label: "Kaburga sayısı", value: "7" },
    ],
    description: "Gates 7PK1035.",
    rating: 4.5,
    reviewCount: 11,
  },
  {
    id: "BANDO-4PK1540",
    slug: "bando-4pk1540-v-kayisi",
    title: "V Kayışı",
    brand: "BANDO",
    images: ["/images/mock/v-belt.jpg"],
    price: 390.30,
    currency: "TRY",
    stock: 3,
    sku: "BANDO-4PK1540",
    ean: "8200830196",
    attributes: [
      { label: "Uzunluk [mm]", value: "1540" },
      { label: "Kaburga sayısı", value: "4" },
    ],
    description: "4PK1540 klima kayışı.",
    rating: 4.1,
    reviewCount: 4,
  },
  {
    id: "BOSCH-4PK925",
    slug: "bosch-4pk925-v-kayisi",
    title: "V Kayışı",
    brand: "BOSCH",
    images: ["/images/mock/v-belt.jpg"],
    price: 234.48,
    currency: "TRY",
    stock: 18,
    sku: "BOSCH-1987948350",
    ean: "8200830196",
    attributes: [
      { label: "Uzunluk [mm]", value: "925" },
      { label: "Kaburga sayısı", value: "4" },
    ],
    description: "BOSCH 4PK925 klima kayışı.",
    rating: 4.3,
    reviewCount: 8,
  },

];

// --- Arama yardımcıları (mevcuda ek) ---
const _normalize = (s) =>
  String(s || "")
    .toLowerCase()
    .replaceAll("ü", "u")
    .replaceAll("ö", "o")
    .replaceAll("ş", "s")
    .replaceAll("ı", "i")
    .replaceAll("ğ", "g")
    .replaceAll("ç", "c")
    .trim();

/** mock arama – MOCK_PRODUCTS içinde gezer. */
export function searchProducts(query) {
  const q = _normalize(query);
  if (!q) return [];
  const tokens = q.split(/\s+/).filter(Boolean);

  const haystack = (p) =>
    _normalize(
      [
        p.title,
        p.brand,
        p.sku,
        p.ean,
        p.slug,
        p.description,
        ...(p.categories || []).map((c) => c.label),
        ...(p.attributes || []).map((a) => `${a.label} ${a.value}`),
      ].join(" ")
    );

  return MOCK_PRODUCTS.filter((p) =>
    tokens.every((t) => haystack(p).includes(t))
  );
}

// Slug'a göre ürün bul (URL’den gelen slug’ı decode + normalize et)
export function getProductBySlug(slug) {
  const s = toSlug(safeDecode(String(slug ?? "")));
  return MOCK_PRODUCTS.find((p) => toSlug(p.slug || p.title) === s) || null;
}

// Geriye dönük: handle → slug gibi çalışsın
export function getProductByHandle(handle) {
  return getProductBySlug(handle);
}
