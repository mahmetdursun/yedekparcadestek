'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useMemo, useState, useEffect, useRef } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useSelector } from 'react-redux';
import { selectCount } from '@/store/slices/cartSlice';
import {
  FiX, FiChevronRight, FiChevronLeft,
  FiTruck, FiUser, FiLogOut, FiShoppingCart, FiSearch
} from 'react-icons/fi';

import {
  BRANDS, MODELS, GROUPS_ORDER, BRAND_GROUPS,
  brandKey, toSlug
} from '@/data/brandsModels';

import styles from './style.module.scss';

export default function MobileHamburger({ open, onClose }) {
  const { data: session, status } = useSession();
  const cartCount = useSelector(selectCount);

  // Akış: Grup(0) → Marka(1) → Model(2)
  const [step, setStep] = useState(0);
  const [selGroup, setSelGroup] = useState(null);
  const [selBrand, setSelBrand] = useState(null);

  // kapandığında resetle
  useEffect(() => {
    if (!open) { setStep(0); setSelGroup(null); setSelBrand(null); }
  }, [open]);

  const groups = useMemo(
    () => GROUPS_ORDER.map(k => ({ key: k, ...BRAND_GROUPS[k] })),
    []
  );

  const groupBrands = useMemo(() => {
    if (!selGroup) return [];
    const members = BRAND_GROUPS[selGroup]?.members || [];
    return members
      .map(m => BRANDS.find(b => b.slug === toSlug(m)))
      .filter(Boolean)
      .map(b => ({ name: b.name, slug: b.slug, logo: b.logo }))
      .sort((a, b) => a.name.localeCompare(b.name, 'tr'));
  }, [selGroup]);

  const brandModels = useMemo(() => {
    if (!selBrand) return [];
    const list = MODELS[brandKey(selBrand)] || [];
    return list.map(m => ({ slug: m.slug, name: m.name, img: m.img }));
  }, [selBrand]);

  // Scroll shadow için ref
  const scrollRef = useRef(null);
  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(false);
  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setAtTop(el.scrollTop <= 2);
    setAtBottom(el.scrollHeight - el.clientHeight - el.scrollTop <= 2);
  };

  return (
    <>
      <div
        className={styles['hamburger__overlay']}
        data-open={open ? '1' : undefined}
        onClick={onClose}
      />

      <aside
        className={styles['hamburger__panel']}
        data-open={open ? '1' : undefined}
        aria-hidden={!open}
      >
        {/* Topbar (logo + kapat) */}
        <div className={styles['hamburger__topbar']}>
          <Link href="/" onClick={onClose} className={styles['hamburger__brand']}>
            <Image src="/logo.svg" alt="yedekparcadestek" width={28} height={28} />
            <b>yedekparcadestek</b>
          </Link>
          <button className={styles['hamburger__close']} onClick={onClose} aria-label="Kapat">
            <FiX />
          </button>
        </div>

        {/* Başlık + breadcrumbimsi geri */}
        <div className={styles['hamburger__header']}>
          <div className={styles['hamburger__title']}>
            {step === 0 && 'Gruplar'}
            {step === 1 && (
              <button
                className={styles['hamburger__back']}
                onClick={() => { setStep(0); setSelBrand(null); }}
              >
                <FiChevronLeft /> Gruplar
              </button>
            )}
            {step === 2 && (
              <button
                className={styles['hamburger__back']}
                onClick={() => setStep(1)}
              >
                <FiChevronLeft /> Markalar
              </button>
            )}
          </div>
        </div>

        {/* İçerik (section kartı içinde listeler) */}
        <div
          ref={scrollRef}
          onScroll={onScroll}
          className={styles['hamburger__scroll']}
          data-top={atTop ? '1' : undefined}
          data-bottom={atBottom ? '1' : undefined}
        >
          <div className={styles.section}>
            {/* Section head */}
            <div className={styles.section__head}>
              <span className={styles.section__dot} />
              <span className={styles.section__title}>
                {step === 0 ? 'Gruplar' : step === 1 ? 'Markalar' : 'Modeller'}
              </span>
            </div>

            {/* 0 → Gruplar */}
            {step === 0 && (
              <ul className={styles['list']}>
                {groups.map(g => (
                  <li key={g.key}>
                    <button
                      className={styles['item']}
                      onClick={() => { setSelGroup(g.key); setStep(1); }}
                    >
                      <span className={styles['item__left']}>
                        {g.logo && <img src={g.logo} alt={g.label} />}
                        <b>{g.label}</b>
                      </span>
                      <FiChevronRight className={styles['item__chev']} />
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {/* 1 → Markalar */}
            {step === 1 && (
              <ul className={styles['list']}>
                {groupBrands.map(b => (
                  <li key={b.slug}>
                    <button
                      className={`${styles['item']} ${selBrand === b.slug ? styles.isActive : ''}`}
                      onClick={() => { setSelBrand(b.slug); setStep(2); }}
                    >
                      <span className={styles['item__left']}>
                        {b.logo && <img src={b.logo} alt={b.name} />}
                        <b>{b.name}</b>
                      </span>
                      <FiChevronRight className={styles['item__chev']} />
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {/* 2 → Modeller */}
            {step === 2 && (
              <ul className={styles['list']}>
                {brandModels.map(m => (
                  <li key={m.slug}>
                    <Link
                      href={`/marka/${toSlug(selBrand)}/${m.slug}`}
                      className={styles['item']}
                      onClick={onClose}
                    >
                      <span className={styles['item__left']}>
                        {m.img && <img src={m.img} alt={m.name} />}
                        <b>{m.name}</b>
                      </span>
                      <FiChevronRight className={styles['item__chev']} />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Alt dock */}
        <nav className={styles['hamburger__dock']}>
          <Link href="#" className={styles['dock__btn']} onClick={(e) => e.preventDefault()}>
            <FiSearch /><span>Ara</span>
          </Link>
          <Link href="/kargo-takibi" className={styles['dock__btn']} onClick={onClose}>
            <FiTruck /><span>Kargo</span>
          </Link>
          {status === 'authenticated' ? (
            <>
              <Link href="/profil/hesaplar" className={styles['dock__btn']} onClick={onClose}>
                <FiUser /><span>Profil</span>
              </Link>
              <button className={styles['dock__btn']} onClick={() => signOut({ callbackUrl: '/' })}>
                <FiLogOut /><span>Çıkış</span>
              </button>
            </>
          ) : (
            <Link href="/uye-giris" className={styles['dock__btn']} onClick={onClose}>
              <FiUser /><span>Giriş</span>
            </Link>
          )}
          <Link href="/sepet" className={styles['dock__btn']} onClick={onClose}>
            {cartCount > 0 && <span className={styles['dock__badge']}>{cartCount > 99 ? '99+' : cartCount}</span>}
            <FiShoppingCart /><span>Sepet</span>
          </Link>
        </nav>
      </aside>
    </>
  );
}
