"use client";

import { BrandWheelProvider } from "./components/brandWheelCtx";
import RotaryWheel from "./components/RotaryWheel";
import BrandModelPanel from "./components/BrandModelPanel";
import styles from "./components/panel.module.css";

export default function Sidebar({ className = "", visible = true, suppressWheel = false }) {
  if (!visible) return null;

  return (
    <div className={className}>
      <BrandWheelProvider>
        <div className={styles.sideWrap}>
          {/* 🔻 Hamburger açıkken çarkı gösterme */}
          {!suppressWheel && (
            <div className={styles.sideLeft}>
              <RotaryWheel align="right" />
            </div>
          )}

          <div className={styles.sideRight}>
            <BrandModelPanel layout="side" />
          </div>
        </div>
      </BrandWheelProvider>
    </div>
  );
}





// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useMemo, useRef, useState, useEffect } from "react";
// import {
//   BRANDS,
//   MODELS,
//   toSlug,
//   brandKey,
//   GROUPS_ORDER,
//   BRAND_GROUPS,
// } from "@/data/brandsModels";
// import { makeSidebarGroups } from "@/util/makeSidebarGroups";
// import { usePathname } from "next/navigation";
// import styles from "./style.module.scss";

// export default function Sidebar({ className = "" }) {
//   const [hoverGroup, setHoverGroup] = useState(null);          // "vw" | "fiat" | ...
//   const [hoverBrand, setHoverBrand] = useState(null);          // { key, slug } | null
//   const groupTimer = useRef(null);
//   const brandTimer = useRef(null);
//   const hideTimer = useRef(null);

//   const pathname = usePathname();

//   // grupları hazırla
//   const groups = useMemo(
//     () => makeSidebarGroups(BRANDS, BRAND_GROUPS, GROUPS_ORDER),
//     []
//   );

//   // === Hover gecikmeleri (150ms) ===
//   const startGroupHover = (key) => {
//     clearTimeout(groupTimer.current);
//     groupTimer.current = setTimeout(() => {
//       setHoverGroup(key);
//       setHoverBrand(null);
//     }, 150);
//   };

//   const startBrandHover = (raw) => {
//     clearTimeout(brandTimer.current);
//     brandTimer.current = setTimeout(() => {
//       setHoverBrand({ key: brandKey(raw), slug: toSlug(raw) });
//     }, 150);
//   };

//   const closeSoon = () => {
//     abortHoverTimers();
//     clearTimeout(hideTimer.current);
//     hideTimer.current = setTimeout(() => {
//       setHoverBrand(null);
//       setHoverGroup(null);
//     }, 350);
//   };

//   const abortHoverTimers = () => {
//     clearTimeout(groupTimer.current);
//     clearTimeout(brandTimer.current);
//   };

//   // sayfa değişince her şeyi kapat
//   useEffect(() => {
//     abortHoverTimers();
//     clearTimeout(hideTimer.current);
//     setHoverBrand(null);
//     setHoverGroup(null);
//     return () => {
//       abortHoverTimers();
//       clearTimeout(hideTimer.current);
//     };
//   }, [pathname]);

//   const models = hoverBrand ? (MODELS[hoverBrand.key] || []) : [];

//   return (
//     <div className={`${styles["brand-top"]} ${className}`}>
//       <div className={`${styles["brand-top__inner"]} container-fluid`}>
//         {/* Grup şeridi (VW, FIAT, FORD, …) */}
//         <div className={styles["group-rail"]} onMouseLeave={closeSoon}>
//           {groups.map((g) => (
//             <button
//               key={g.key}
//               type="button"
//               data-group-id={g.id}
//               className={styles["group-pill"]}
//               data-active={hoverGroup === g.key ? "1" : undefined}
//               onMouseEnter={() => startGroupHover(g.key)}
//               onMouseLeave={abortHoverTimers}
//               onClick={() => {
//                 setHoverBrand(null);
//                 setHoverGroup((prev) => (prev === g.key ? null : g.key));
//               }}
//             >
//               {g.label}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Seçili grubun MARKALARI + ALTINDA MODEL PANELİ */}
//       {hoverGroup && (
//         <div
//           className={styles["group-brands"]}
//           onMouseEnter={() => clearTimeout(hideTimer.current)}
//           onMouseLeave={closeSoon}
//         >
//           {/* ▼▼▼ YENİ: markalar için popover kartı ▼▼▼ */}
//           <div className={styles["brands-popover"]}>
//             <div className="container ps-3 ps-md-4">
//               <div className={styles["brand-rail"]}>
//                 {groups.find((g) => g.key === hoverGroup)?.items.map((b) => {
//                   const slug = toSlug(b.slug || b.name);
//                   const hoverRaw = b.slug || b.name;
//                   const isOpen =
//                     hoverBrand && hoverBrand.key === brandKey(hoverRaw);

//                   return (
//                     <Link
//                       key={`${b.slug}-${b.name}`}
//                       href={`/marka/${slug}`}
//                       className={styles["brand-pill"]}
//                       title={b.name}
//                       data-active={isOpen ? "1" : undefined}
//                       onMouseEnter={() => startBrandHover(hoverRaw)}
//                       onMouseLeave={abortHoverTimers}
//                       onClick={(e) => {
//                         // ilk tık → model paneli aç; açıkken ikinci tık → linke git
//                         if (!isOpen) {
//                           e.preventDefault();
//                           setHoverBrand({
//                             key: brandKey(hoverRaw),
//                             slug: toSlug(hoverRaw),
//                           });
//                           return;
//                         }
//                         setHoverGroup(null);
//                       }}
//                     >
//                       {b.logo ? (
//                         <Image src={b.logo} alt={b.name} width={56} height={56} />
//                       ) : (
//                         <span className={styles["brand-pill__fallback"]}>
//                           {b.name?.[0]}
//                         </span>
//                       )}
//                       <span className={styles["brand-pill__name"]}>{b.name}</span>
//                     </Link>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* MODEL PANELİ – marka kartlarının ALTINDA ve ortada */}
//             {hoverBrand && models.length > 0 && (
//               <div
//                 className={styles["brand-mega--top"]}
//                 onMouseEnter={() => {
//                   abortHoverTimers();
//                   clearTimeout(hideTimer.current);
//                 }}
//                 onMouseLeave={closeSoon}
//               >
//                 <div className={styles["brand-mega__grid"]}>
//                   {models.map((m) => (
//                     <Link
//                       key={m.slug}
//                       href={`/marka/${hoverBrand.slug}/${m.slug}`}
//                       className={styles["brand-mega__item"]}
//                       onClick={() => {
//                         setHoverBrand(null);
//                         setHoverGroup(null);
//                       }}
//                     >
//                       {m.img && (
//                         <span className={styles["brand-mega__thumb"]}>
//                           <Image
//                             src={m.img}
//                             alt={m.name}
//                             fill
//                             sizes="(min-width:1400px) 120px, (min-width:992px) 12vw, 33vw"
//                           />
//                         </span>
//                       )}
//                       <span className={styles["brand-mega__title"]}>{m.name}</span>
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//           {/* ▲▲▲ YENİ: markalar için popover kartı ▲▲▲ */}
//         </div>
//       )}
//     </div>
//   );
// }
