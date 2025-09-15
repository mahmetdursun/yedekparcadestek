"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useRef, useState, useEffect } from "react";
import { BRANDS, MODELS, toSlug, brandKey } from "../../../data/brandsModels";
import { usePathname } from "next/navigation";

export default function Sidebar({ className = "" }) {
  const [q, setQ] = useState("");
  // hover için hem MODELS anahtarını (key) hem URL slug'ını (slug) tutuyoruz
  const [hoverBrand, setHoverBrand] = useState(null); // { key: 'audi', slug: 'audi' }
  const hideTimer = useRef(null);

  // Arama (BRANDS içinde isimde filtre)
  const filtered = useMemo(() => {
    if (!q) return BRANDS;
    const nq = q.trim().toLowerCase();
    return BRANDS.filter((b) => (b.name || "").toLowerCase().includes(nq));
  }, [q]);

  // Hover panel aç/kapa
  const openPanel = (raw) => {
    clearTimeout(hideTimer.current);
    setHoverBrand({
      key: brandKey(raw), // MODELS[...] için güvenli anahtar
      slug: toSlug(raw), // URL için güvenli slug
    });
  };
  const closePanelSoon = () => {
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setHoverBrand(null), 120);
  };

  const pathname = usePathname();
  useEffect(() => {
    // sayfa/route değiştiğinde hover panel ve timer’ı sıfırla
    clearTimeout(hideTimer.current);
    setHoverBrand(null);
  }, [pathname]);

  const models = hoverBrand ? MODELS[hoverBrand.key] || [] : [];

  return (
    <div
      className={`brand-top ${className}`}
      style={{ "--brand-top-offset": "140px" }}
    >
      <div className="brand-top__inner container-fluid">
        {/* arama */}
        <div className="brand-top__search">
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Marka ara…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>

        {/* yatay ray */}
        <div className="brand-rail" onMouseLeave={closePanelSoon}>
          {filtered.map((b) => {
            const urlSlug = toSlug(b.slug || b.name);
            const hoverRaw = b.slug || b.name; // openPanel'a ham değer
            return (
              <Link
                key={`${b.slug}-${b.name}`}
                href={`/marka/${urlSlug}`}
                className="brand-pill"
                title={b.name}
                onMouseEnter={() => openPanel(hoverRaw)}
              >
                {b.logo ? (
                  <Image src={b.logo} alt={b.name} width={20} height={20} />
                ) : (
                  <span className="brand-pill__fallback">{b.name?.[0]}</span>
                )}
                <span className="brand-pill__name">{b.name}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* hover mega – altına açılır */}
      {hoverBrand && models.length > 0 && (
        <div
          className="brand-mega brand-mega--top"
          onMouseEnter={() => clearTimeout(hideTimer.current)}
          onMouseLeave={closePanelSoon}
        >
          <div className="brand-mega__grid container-fluid">
            {models.map((m) => (
              <Link
                key={m.slug}
                href={`/marka/${hoverBrand.slug}/${m.slug}`}
                className="brand-mega__item"
              >
                {m.img && (
                  <span className="brand-mega__thumb">
                    <Image src={m.img} alt={m.name} fill sizes="160px" />
                  </span>
                )}
                <span className="brand-mega__title">{m.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
