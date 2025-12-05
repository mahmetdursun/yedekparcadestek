// src/util/filters.js

// Markalar (parça markası: BOSCH, BANDO...)
export function derivePartBrandOptions(products = []) {
  const map = new Map();
  for (const p of products) {
    const name = (p?.brand || "").trim();
    if (!name) continue;
    map.set(name, (map.get(name) || 0) + 1);
  }
  return Array.from(map.entries())
    .sort((a, b) => a[0].localeCompare(b[0], "tr"))
    .map(([label, count]) => ({ value: label, label, count }));
}

// ⚙ Araçlar (fitment.brand → BMW, Renault, Volkswagen...)
export function deriveVehicleBrandOptions(products = []) {
  const map = new Map();
  for (const p of products) {
    for (const f of p.fitment || []) {
      const name = (f.brand || "").trim();
      if (!name) continue;
      map.set(name, (map.get(name) || 0) + 1);
    }
  }
  return Array.from(map.entries())
    .sort((a, b) => a[0].localeCompare(b[0], "tr"))
    .map(([label, count]) => ({ value: label, label, count }));
}

// ⚙ Kategori (Tahrik / V Kayışları, Arka Takım ve Süspansiyon...)
export function deriveCategoryOptions(products = []) {
  const map = new Map();
  for (const p of products) {
    for (const c of p.categories || []) {
      const label = (c.label || "").trim();
      if (!label) continue;
      map.set(label, (map.get(label) || 0) + 1);
    }
  }
  return Array.from(map.entries())
    .sort((a, b) => a[0].localeCompare(b[0], "tr"))
    .map(([label, count]) => ({ value: label, label, count }));
}
