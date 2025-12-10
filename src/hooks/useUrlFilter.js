"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useUrlFilter() {
  const pathname = usePathname();
  const router = useRouter();
  const sp = useSearchParams();

  const update = (patch) => {
    const q = new URLSearchParams(sp.toString());

    Object.entries(patch).forEach(([key, value]) => {
      if (
        value == null ||
        value === "" ||
        (Array.isArray(value) && value.length === 0)
      ) {
        q.delete(key);
      } else {
        q.set(
          key,
          Array.isArray(value) ? value.join(",") : String(value)
        );
      }
    });

    // filtre değişince sayfayı 1'e çek
    q.set("page", "1");

    router.push(`${pathname}?${q.toString()}`, { scroll: false });
  };

  const getArray = (key) =>
    (sp.get(key) || "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

  const get = (key) => sp.get(key);

  return { get, getArray, update };
}
