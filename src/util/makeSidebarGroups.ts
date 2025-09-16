// util/makeSidebarGroups.ts
import { type Brand, GROUPS_ORDER, BRAND_GROUPS, toSlug } from "@/data/brandsModels";

export type SidebarGroup = {
  id: number;                                  // 1..13
  key: (typeof GROUPS_ORDER)[number];          // "vw" | "fiat" | ...
  label: string;                                // "VW", "FIAT", ...
  items: Brand[];                               // gruptaki gerçek marka nesneleri
};

export function makeSidebarGroups(brands: Brand[]): SidebarGroup[] {
  // Markaları normalized slug -> Brand şeklinde indexleyelim
  const bySlug = new Map<string, Brand>();
  for (const b of brands) bySlug.set(toSlug(b.slug || b.name), b);

  // Sabit sıraya göre grupları üret
  return GROUPS_ORDER.map((key, idx) => {
    const { label, members } = BRAND_GROUPS[key];
    const items: Brand[] = [];
    for (const m of members) {
      const found = bySlug.get(toSlug(m));
      if (found) items.push(found);
    }
    return { id: idx + 1, key, label, items };
  });
}
