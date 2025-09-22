"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./style.module.scss";

// Koordinatlar (İler Otomotiv)
const LAT = 40.99171796268745;
const LNG = 29.09238932023893;

// Embed URL üretici
function buildSrc({ lat, lng, zoom, type, lang = "tr" }) {
  if (type === "sv") {
    // Street View
    return `https://www.google.com/maps?hl=${lang}&layer=c&cbll=${lat},${lng}&cbp=0,0,,0,0&output=svembed`;
  }
  // t=m(roadmap) | k(satellite) | h(hybrid) | p(terrain)
  // q=lat,lng → gömülü haritada kırmızı pin gösterir
  return `https://maps.google.com/maps?hl=${lang}&ll=${lat},${lng}&q=${lat},${lng}&z=${zoom}&t=${type}&output=embed`;
}

export default function ContactMap({
  lat = LAT,
  lng = LNG,
  initialZoom = 15,
  lang = "tr",
  className = "",
}) {
  const [zoom, setZoom] = useState(initialZoom);
  const [type, setType] = useState("m"); // "m" | "k" | "h" | "p" | "sv"
  const [isFs, setIsFs] = useState(false);
  const wrapRef = useRef(null);

  const src = useMemo(
    () => buildSrc({ lat, lng, zoom, type, lang }),
    [lat, lng, zoom, type, lang]
  );

  // Fullscreen state takip
  useEffect(() => {
    const onFs = () => setIsFs(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  const zoomIn = () => type !== "sv" && setZoom((z) => Math.min(20, z + 1));
  const zoomOut = () => type !== "sv" && setZoom((z) => Math.max(3, z - 1));
  const recenter = () => setZoom(initialZoom);
  const toggleFs = () => {
    const el = wrapRef.current;
    if (!el) return;
    if (!document.fullscreenElement) el.requestFullscreen?.();
    else document.exitFullscreen?.();
  };

  const openInMaps = () =>
    window.open(
      `https://maps.google.com/?q=${lat},${lng}&t=${type === "sv" ? "m" : type}`,
      "_blank"
    );

  const openDirections = () =>
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`,
      "_blank"
    );

  const btn = (label, active, onClick) => (
    <button
      type="button"
      aria-pressed={active}
      className={`${styles.btn} ${active ? styles.active : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );

  return (
    <div ref={wrapRef} className={`${styles.mapWrap} ${className}`}>
      <div className={styles.toolbar}>
        <div className={styles.left}>
          {btn("Harita", type === "m", () => setType("m"))}
          {btn("Uydu", type === "k", () => setType("k"))}
          {btn("Street View", type === "sv", () => setType("sv"))}
        </div>

        <div className={styles.right}>
          <button
            type="button"
            title="Yakınlaştır"
            className={styles.iconBtn}
            disabled={type === "sv" || zoom >= 20}
            onClick={zoomIn}
          >
            +
          </button>
          <button
            type="button"
            title="Uzaklaştır"
            className={styles.iconBtn}
            disabled={type === "sv" || zoom <= 3}
            onClick={zoomOut}
          >
            −
          </button>
          <button
            type="button"
            title="Merkeze al"
            className={styles.iconBtn}
            onClick={recenter}
          >
            ⤾
          </button>
          <button
            type="button"
            title={isFs ? "Tam ekrandan çık" : "Tam ekran"}
            className={styles.iconBtn}
            onClick={toggleFs}
          >
            ⛶
          </button>
          <button
            type="button"
            title="Google Haritalar'da aç"
            className={styles.iconBtn}
            onClick={openInMaps}
          >
            ⧉
          </button>
          <button
            type="button"
            title="Yol tarifi al"
            className={styles.iconBtn}
            onClick={openDirections}
          >
            ➔
          </button>
        </div>
      </div>

      <div className={styles.mapResponsive}>
        <iframe
          key={src} // mod/zoom değişince yeniden yüklet
          src={src}
          title="İler Otomotiv Konumu"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
