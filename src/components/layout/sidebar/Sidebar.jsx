"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useRef, useState, useEffect } from "react";
import {
  BRANDS,
  MODELS,
  toSlug,
  brandKey,
  GROUPS_ORDER,
  BRAND_GROUPS,
} from "@/data/brandsModels";
import { makeSidebarGroups } from "@/util/makeSidebarGroups";
import { usePathname } from "next/navigation";
import styles from "./style.module.scss";

export default function Sidebar({ className = "" }) {
  const [hoverGroup, setHoverGroup] = useState(null); // "vw" | "fiat" | ...
  const [hoverBrand, setHoverBrand] = useState(null); // { key, slug } | null

  // gecikme/kapama zamanlayıcıları
  const groupTimer = useRef(null);
  const brandTimer = useRef(null);
  const hideTimer = useRef(null);

  const pathname = usePathname();

  // Arama yok → doğrudan BRANDS
  const groups = useMemo(
    () => makeSidebarGroups(BRANDS, BRAND_GROUPS, GROUPS_ORDER),
    []
  );

  // === Hover gecikmeleri (1sn) ===
  const startGroupHover = (key) => {
    clearTimeout(groupTimer.current);
    groupTimer.current = setTimeout(() => {
      setHoverGroup(key);
      setHoverBrand(null);
    }, 150);
  };
  const startBrandHover = (raw) => {
    clearTimeout(brandTimer.current);
    brandTimer.current = setTimeout(() => {
      setHoverBrand({ key: brandKey(raw), slug: toSlug(raw) });
    }, 150);
  };
  const abortHoverTimers = () => {
    clearTimeout(groupTimer.current);
    clearTimeout(brandTimer.current);
  };
  const closeSoon = () => {
    abortHoverTimers();
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      setHoverBrand(null);
      setHoverGroup(null);
    }, 140);
  };

  // sayfa değişince paneli kapat
  useEffect(() => {
    abortHoverTimers();
    clearTimeout(hideTimer.current);
    setHoverBrand(null);
    setHoverGroup(null);
    return () => {
      abortHoverTimers();
      clearTimeout(hideTimer.current);
    };
  }, [pathname]);

  const models = hoverBrand ? MODELS[hoverBrand.key] || [] : [];

  return (
    <div
      className={`${styles["brand-top"]} ${className}`}
      style={{ ["--brand-top-offset"]: "140px" }} // JSX'te tip yok
    >
      <div className={`${styles["brand-top__inner"]} container-fluid`}>
        {/* Grup şeridi (VW, FIAT, FORD, …) */}
        <div className={styles["group-rail"]} onMouseLeave={closeSoon}>
          {groups.map((g) => (
            <button
              key={g.key}
              type="button"
              data-group-id={g.id}
              className={styles["group-pill"]}
              data-active={hoverGroup === g.key ? "1" : undefined}
              onMouseEnter={() => startGroupHover(g.key)} // hover → 1sn sonra aç
              onMouseLeave={abortHoverTimers}
              onClick={() => {
                // tıkla → anında aç/kapa
                setHoverBrand(null);
                setHoverGroup((prev) => (prev === g.key ? null : g.key));
              }}
            >
              {g.label}
            </button>
          ))}
        </div>
      </div>

      {/* Seçili grubun markaları (logo + metin kartları) */}
      {hoverGroup && (
        <div
          className={styles["group-brands"]}
          onMouseEnter={() => clearTimeout(hideTimer.current)}
          onMouseLeave={closeSoon}
        >
          <div className="container ps-3 ps-md-4">
            <div className={styles["brand-rail"]}>
              {groups
                .find((g) => g.key === hoverGroup)
                ?.items.map((b) => {
                  const slug = toSlug(b.slug || b.name);
                  const hoverRaw = b.slug || b.name;
                  const isOpen =
                    hoverBrand && hoverBrand.key === brandKey(hoverRaw);
                  return (
                    <Link
                      key={`${b.slug}-${b.name}`}
                      href={`/marka/${slug}`}
                      className={styles["brand-pill"]}
                      title={b.name}
                      data-active={isOpen ? "1" : undefined}
                      onMouseEnter={() => startBrandHover(hoverRaw)} // hover → 1sn sonra model panel
                      onMouseLeave={abortHoverTimers}
                      onClick={(e) => {
                        // tıkla → ilk tık model panelini açar, ikinci tık linke gider
                        if (!isOpen) {
                          e.preventDefault();
                          setHoverBrand({
                            key: brandKey(hoverRaw),
                            slug: toSlug(hoverRaw),
                          });
                          return;
                        }
                        // linke giderken barı kapat
                        setHoverGroup(null);
                      }}
                    >
                      {b.logo ? (
                        <Image
                          src={b.logo}
                          alt={b.name}
                          width={56}
                          height={56}
                        />
                      ) : (
                        <span className={styles["brand-pill__fallback"]}>
                          {b.name?.[0]}
                        </span>
                      )}
                      <span className={styles["brand-pill__name"]}>
                        {b.name}
                      </span>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      )}

      {/* Model mega paneli */}
      {hoverBrand && models.length > 0 && (
        <div
          className={styles["brand-mega--top"]}
          onMouseEnter={() => {
            abortHoverTimers();
            clearTimeout(hideTimer.current);
          }}
          onMouseLeave={closeSoon}
        >
          <div className={styles["brand-mega__grid"]}>
            {models.map((m) => (
              <Link
                key={m.slug}
                href={`/marka/${hoverBrand.slug}/${m.slug}`}
                className={styles["brand-mega__item"]}
                onClick={() => {
                  setHoverBrand(null);
                  setHoverGroup(null);
                }}
              >
                {m.img && (
                  <span className={styles["brand-mega__thumb"]}>
                    <Image
                      src={m.img}
                      alt={m.name}
                      fill
                      sizes="(min-width:1400px) 140px, (min-width:992px) 12vw, 33vw"
                      priority={false}
                    />
                  </span>
                )}
                <span className={styles["brand-mega__texts"]}>
                  <span className={styles["brand-mega__title"]}>{m.name}</span>
                  {m.since && (
                    <span className={styles["brand-mega__meta"]}>
                      {m.since}'den itibaren
                    </span>
                  )}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
