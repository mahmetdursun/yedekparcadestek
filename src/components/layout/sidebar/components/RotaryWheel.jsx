"use client";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./wheel.module.css";
import { useBrandWheel } from "./brandWheelCtx";
import { GROUPS_ORDER, BRAND_GROUPS } from "@/data/brandsModels";

/** UI/Görünüm birebir korunur. Items dinamiği bizim veriden gelir. */
export default function RotaryWheel({ align = "right" }) {
  const { setActiveGroup } = useBrandWheel();

  // items: BRAND_GROUPS'tan üret (id, label, src)
  const items = useMemo(
    () =>
      GROUPS_ORDER.map((key) => ({
        id: key,
        label: BRAND_GROUPS[key].label,
        src: BRAND_GROUPS[key].logo,
      })),
    []
  );

  const [wheelAngle, setWheelAngle] = useState(0);
  const [snapping, setSnapping] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [locked, setLocked] = useState(false);

  const rafRef = useRef(null);
  const lastTsRef = useRef(null);
  const wrapRef = useRef(null);
  const containerRef = useRef(null);

  const N = items.length;
  const step = 360 / N;
  const TARGET_DEG = align === "bottom" ? 90 : 0; // sağ: 0°, alt: 90°

  // autoplay
  useEffect(() => {
    if (hovering || snapping || locked) return;
    const tick = (ts) => {
      const last = lastTsRef.current ?? ts;
      const dt = ts - last;
      lastTsRef.current = ts;
      const degPerMs = 360 / 26000; // 26s/devir
      setWheelAngle((a) => (a + degPerMs * dt) % 360);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTsRef.current = null;
    };
  }, [hovering, snapping, locked]);

  // dışarı tıklayınca kilidi kaldır
  useEffect(() => {
    if (!locked) return;
    const onClickAway = (e) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target)) setLocked(false);
    };
    document.addEventListener("mousedown", onClickAway);
    return () => document.removeEventListener("mousedown", onClickAway);
  }, [locked]);

  // tıklama → seçilen öğeyi TARGET_DEG’e hizala
  const onClickItem = (index) => {
    setActiveGroup(items[index].id);

    const theta = index * step;
    let desired = (TARGET_DEG - theta) % 360;
    if (desired < 0) desired += 360;

    const a = ((wheelAngle % 360) + 360) % 360;
    let delta = (desired - a) % 360;
    if (delta < 0) delta += 360;

    if (delta < 120) delta += 360;
    const target = (a + delta) % 720;

    setSnapping(true);
    requestAnimationFrame(() => {
      const duration = Math.min(1.8, Math.max(0.9, delta / 240));
      const el = containerRef.current;
      if (el) el.style.setProperty("--snap-duration", `${duration}s`);
      setWheelAngle(target);
      const onEnd = () => {
        setSnapping(false);
        setLocked(true);
        el?.removeEventListener("transitionend", onEnd);
      };
      el?.addEventListener("transitionend", onEnd);
    });
  };

  const itemsPos = useMemo(
    () => items.map((it, i) => ({ ...it, theta: i * step })),
    [items, step]
  );

  const containerStyle = snapping
    ? {
        transform: `rotate(${wheelAngle}deg)`,
        transition: `transform var(--snap-duration,1.2s) cubic-bezier(.2,.7,.1,1)`,
        ["--wheel-angle"]: `${wheelAngle}deg`,
      }
    : {
        transform: `rotate(${wheelAngle}deg)`,
        ["--wheel-angle"]: `${wheelAngle}deg`,
      };

  return (
    <div ref={wrapRef} className={styles.wrap}>
      <div
        ref={containerRef}
        className={styles.wheel}
        style={containerStyle}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        aria-label="Dönen marka çarkı"
      >
        {itemsPos.map((it, i) => (
          <button
            key={it.id}
            className={styles.item}
            style={{ ["--theta"]: `${it.theta}deg` }}
            onClick={() => onClickItem(i)}
            title={it.label}
          >
            <span className={styles.badge}>
              <div className={styles.logoBox}>
                <Image
                  src={it.src}
                  alt={it.label}
                  fill
                  sizes="(max-width: 600px) 40px, 64px"
                  draggable={false}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </span>
          </button>
        ))}
      </div>

      <div className={styles.centerHole} aria-hidden />
    </div>
  );
}
