// src/util/fitment.js
import { BRANDS, MODELS, brandKey } from "@/data/brandsModels";
import { toSlug } from "@/data/mockProducts";

/** "Clio III", "Symbol I (1999-2008)" -> "symbol-i" gibi:
 *  - parantez içindeki yıl bilgisini at
 *  - sonuna yapışmış yıl aralığı varsa temizle
 */
function stripYears(s = "") {
  const noParen = String(s).replace(/\([^)]*\)/g, "").trim();         // (...) sil
  // "Symbol I 1999-2008" veya "1999–2008" gibi son yıl bloğunu sil
  return noParen.replace(/\b\d{4}\s*[–-]\s*\d{4}\b/g, "").trim();
}

/** Brand'ı route ile aynı forma getir (slug) */
function normBrand(s = "") {
  return toSlug(s);
}

/** MODELS tabanlı alias haritası kur:
 *  aliasMap[brandKey] = Map<aliasSlug, canonicalModelSlug>
 *  alias'lara:
 *   - model.name slug'ı
 *   - model.slug (zaten kanonik)
 *   - name’den years-strip edilmiş slug
 *  (MODELS kaydında özel 'aliases' dizin varsa onu da map'e ekleyebilirsin)
 */
function buildModelAliasMap() {
  const mapByBrand = {}; // { [brandKey]: Map }
  for (const b of BRANDS || []) {
    const bKey = brandKey(b.slug || b.name);
    const models = MODELS[bKey] || [];
    const m = new Map();

    for (const mdl of models) {
      const canonical = toSlug(mdl.slug || mdl.name || "");
      if (!canonical) continue;

      // 1) kendi slug'ı kanonik
      m.set(canonical, canonical);

      // 2) name -> canonical
      const nameSlug = toSlug(mdl.name || "");
      if (nameSlug) m.set(nameSlug, canonical);

      // 3) name (years-strip) -> canonical
      const nameNoYearsSlug = toSlug(stripYears(mdl.name || ""));
      if (nameNoYearsSlug) m.set(nameNoYearsSlug, canonical);

      // 4) opsiyonel aliases
      if (Array.isArray(mdl.aliases)) {
        for (const a of mdl.aliases) {
          const al = toSlug(a);
          if (al) m.set(al, canonical);
        }
      }
    }

    mapByBrand[bKey] = m;
  }
  return mapByBrand;
}

const MODEL_ALIAS = buildModelAliasMap();

/** Verilen brandKey için bir "slug-ish" model değerini kanonik slug'a çevir */
function canonicalizeModelSlug(brandKeyStr, anyModelLike = "") {
  const bKey = brandKey(brandKeyStr);
  const table = MODEL_ALIAS[bKey];
  if (!table) return toSlug(anyModelLike);

  // denenecek varyantlar:
  const raw = String(anyModelLike || "");
  const v1 = toSlug(raw);
  const v2 = toSlug(stripYears(raw));

  // alias tablosunda varsa kanoniği döndür
  if (table.has(v1)) return table.get(v1);
  if (table.has(v2)) return table.get(v2);

  // değilse eldeki slug'ı döndür (eşleşemeyecektir)
  return v1 || v2;
}

/** Ürünleri marka/model rotasına göre fitment’ten katı (strict) filtrele */
export function filterProductsByFitment(products = [], { brand, model } = {}) {
  const bKeyRoute = brandKey(brand || "");
  const mKeyRoute = model ? toSlug(model) : null;

  const routeCanonModel =
    mKeyRoute ? canonicalizeModelSlug(bKeyRoute, mKeyRoute) : null;

  const out = [];

  for (const p of products) {
    const fits = Array.isArray(p.fitment) ? p.fitment : [];
    let ok = false;

    for (const f of fits) {
      const fBrandKey = brandKey(normBrand(f.brand || ""));
      if (fBrandKey !== bKeyRoute) continue; // marka tutmuyorsa geç

      // sadece marka sayfası ise marka eşleşmesi yeter
      if (!routeCanonModel) {
        ok = true;
        break;
      }

      // model sayfasında: fitment.model kanonik = route kanonik olmalı
      const fitCanonModel = canonicalizeModelSlug(bKeyRoute, f.model || "");
      if (fitCanonModel && fitCanonModel === routeCanonModel) {
        ok = true;
        break;
      }
    }

    if (ok) out.push(p);
  }

  return out;
}
