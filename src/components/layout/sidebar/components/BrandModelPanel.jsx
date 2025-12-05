"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useBrandWheel } from "./brandWheelCtx";
import styles from "./panel.module.css";

// Bizdeki imzaya göre import:
import {
  BRANDS,
  MODELS,
  toSlug,
  brandKey,
  GROUPS_ORDER,
  BRAND_GROUPS,
} from "@/data/brandsModels";
import { makeSidebarGroups } from "@/util/makeSidebarGroups";

// Bizdeki makeSidebarGroups(BRANDS, BRAND_GROUPS, GROUPS_ORDER)
const groups = makeSidebarGroups(BRANDS, BRAND_GROUPS, GROUPS_ORDER);

export default function BrandModelPanel({ layout = "side" }) {
  const { activeGroup, setActiveGroup, hoverBrand, setHoverBrand } = useBrandWheel();
  const wrapRef = useRef(null);

  // 0.2s gecikmeli hover
  const hoverTimer = useRef(null);
  const clearHoverTimer = () => {
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current);
      hoverTimer.current = null;
    }
  };
  const scheduleOpen = (key, slug) => {
    clearHoverTimer();
    hoverTimer.current = setTimeout(() => setHoverBrand({ key, slug }), 200);
  };

  // dışarı tıkla / ESC → kapat
  useEffect(() => {
    if (!activeGroup && !hoverBrand) return;
    const onClickAway = (e) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target)) {
        clearHoverTimer(); setHoverBrand(null); setActiveGroup(null);
      }
    };
    const onKey = (e) => {
      if (e.key === "Escape") { clearHoverTimer(); setHoverBrand(null); setActiveGroup(null); }
    };
    document.addEventListener("mousedown", onClickAway, true);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClickAway, true);
      document.removeEventListener("keydown", onKey);
    };
  }, [activeGroup, hoverBrand, setActiveGroup, setHoverBrand]);

  useEffect(() => () => clearHoverTimer(), []);

  if (!activeGroup) return null;

  const groupData = groups.find((g) => g.key === activeGroup);
  const brands = groupData?.items ?? [];
  const models = hoverBrand ? (MODELS[hoverBrand.key] || []) : [];

  const handleInnerClick = (e) => {
    const el = e.target;
    const clickable =
      el.closest?.(`.${styles.brandPill}`) || el.closest?.(`.${styles.brandMega__item}`) || el.closest?.(`.${styles.brandPillVertical}`);
    if (!clickable) { clearHoverTimer(); setHoverBrand(null); setActiveGroup(null); }
  };

  if (layout === "side") {
    return (
      <div ref={wrapRef} className={styles.sidePanel} onMouseDown={handleInnerClick}>
        {/* Sol: markalar (dikey) */}
        <div className={styles.sideBrands}>
          {brands.map((b) => {
            const raw = b.slug || b.name;
            const key = brandKey(raw);
            const slug = toSlug(raw);
            const isOpen = hoverBrand?.key === key;
            return (
              <Link
                key={raw}
                href={`/marka/${slug}`}
                className={styles.brandPillVertical}
                data-active={isOpen ? "1" : undefined}
                onMouseEnter={() => scheduleOpen(key, slug)}
                onMouseLeave={() => clearHoverTimer()}
                onClick={(e) => {
                  if (!isOpen) { e.preventDefault(); clearHoverTimer(); setHoverBrand({ key, slug }); return; }
                  clearHoverTimer(); setHoverBrand(null); setActiveGroup(null);
                }}
              >
                {b.logo ? (
                  <Image src={b.logo} alt={b.name} width={36} height={36} />
                ) : (
                  <span className={styles.brandPill__fallback}>{b.name?.[0]}</span>
                )}
                <span className={styles.brandPill__name}>{b.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Sağ: modeller (grid) */}
        <div className={styles.sideModels}>
          {hoverBrand && models.length > 0 && (
            <div className={styles.brandMega}>
              <div className={styles.brandMega__grid}>
                {models.map((m) => (
                  <Link
                    key={m.slug}
                    href={`/marka/${hoverBrand.slug}/${m.slug}`}
                    className={styles.brandMega__item}
                    onClick={() => { clearHoverTimer(); setHoverBrand(null); setActiveGroup(null); }}
                  >
                    {m.img && (
                      <span className={styles.brandMega__thumb}>
                        <Image src={m.img} alt={m.name} fill sizes="160px" />
                      </span>
                    )}
                    <span className={styles.brandMega__title}>{m.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // inline (mevcut görünüm korunuyor)
  return (
    <div ref={wrapRef} className={styles.brandsPopover} onMouseDown={handleInnerClick}>
      <div className={styles.brandRail}>
        {brands.map((b) => {
          const raw = b.slug || b.name;
          const key = brandKey(raw);
          const slug = toSlug(raw);
          const isOpen = hoverBrand?.key === key;
          return (
            <Link
              key={raw}
              href={`/marka/${slug}`}
              className={styles.brandPill}
              data-active={isOpen ? "1" : undefined}
              onMouseEnter={() => scheduleOpen(key, slug)}
              onMouseLeave={() => clearHoverTimer()}
              onClick={(e) => {
                if (!isOpen) { e.preventDefault(); clearHoverTimer(); setHoverBrand({ key, slug }); return; }
                clearHoverTimer(); setHoverBrand(null); setActiveGroup(null);
              }}
            >
              {b.logo ? (
                <Image src={b.logo} alt={b.name} width={44} height={44} />
              ) : (
                <span className={styles.brandPill__fallback}>{b.name?.[0]}</span>
              )}
              <span className={styles.brandPill__name}>{b.name}</span>
            </Link>
          );
        })}
      </div>

      {hoverBrand && models.length > 0 && (
        <div className={styles.brandMega}>
          <div className={styles.brandMega__grid}>
            {models.map((m) => (
              <Link
                key={m.slug}
                href={`/marka/${hoverBrand.slug}/${m.slug}`}
                className={styles.brandMega__item}
                onClick={() => { clearHoverTimer(); setHoverBrand(null); setActiveGroup(null); }}
              >
                {m.img && (
                  <span className={styles.brandMega__thumb}>
                    <Image src={m.img} alt={m.name} fill sizes="140px" />
                  </span>
                )}
                <span className={styles.brandMega__title}>{m.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
