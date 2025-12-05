// util/makeSidebarGroups.ts
import {
  type Brand,
  GROUPS_ORDER,
  BRAND_GROUPS,
  toSlug,
} from "@/data/brandsModels";

export type SidebarGroup = {
  id: number;                           // 1..13 (sende böyle kullanılıyor)
  key: (typeof GROUPS_ORDER)[number];   // "vw" | "fiat" | ...
  label: string;                        // "VAG", "PSA", "RENAULT", ...
  logo?: string;                        // ✅ grup logosu (örn: /images/group-logos/vag.png)
  items: Brand[];                       // gruptaki gerçek marka nesneleri
};

export function makeSidebarGroups(brands: Brand[]): SidebarGroup[] {
  // Markaları normalized slug -> Brand şeklinde indexle
  const bySlug = new Map<string, Brand>();
  for (const b of brands) {
    bySlug.set(toSlug(b.slug || b.name), b);
  }

  // Sabit sıraya göre grupları üret (+ logo’yu dahil et)
  return GROUPS_ORDER.map((key, idx) => {
    const { label, members, logo } = BRAND_GROUPS[key];

    const items: Brand[] = [];
    for (const m of members) {
      const found = bySlug.get(toSlug(m));
      if (found) items.push(found);
    }

    return {
      id: idx + 1,
      key,
      label,
      logo,       // ✅ artık Sidebar’da g.logo ile erişebilirsin
      items,
    };
  });
}
