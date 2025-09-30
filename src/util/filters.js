// markaları güvenli şekilde türetmek için
export function derivePartBrandOptions(products = []) {
  const map = new Map();
  for (const p of products) {
    const name = (p?.brand || '').trim();
    if (!name) continue;
    map.set(name, (map.get(name) || 0) + 1);
  }
  return Array.from(map.entries())
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([label, count]) => ({ value: label, label, count }));
}
