"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import styles from "./style.module.scss";

const NAV = [
  { href: "/profil",              label: "Genel Bakış",     icon: "fa-solid fa-user" },
  { href: "/profil/bilgiler",     label: "Kullanıcı Bilgileri" , icon: "fa-solid fa-id-card" },
  { href: "/profil/siparisler",   label: "Siparişler",      icon: "fa-solid fa-box" },
  { href: "/profil/adresler",     label: "Adresler",        icon: "fa-solid fa-location-dot" },
  { href: "/profil/kartlar",      label: "Kayıtlı Kartlar", icon: "fa-solid fa-credit-card" },
  { href: "/profil/hesaplar",     label: "Bağlı Hesaplar",  icon: "fa-solid fa-plug" },
];

export default function ProfileLayout({ children }) {
  // Eğer /profil’i middleware ile koruyorsan, şu 3 satırı silebilirsin.
  const { status } = useSession({ required: true });
  if (status === "loading") return <div className="container py-5">Yükleniyor…</div>;

  const pathname = usePathname();

  return (
    <div className={`container ${styles.account}`}>
      {/* Sidebar */}
      <aside className={styles["account__sidebar"]}>
        <div className={styles["account__user"]}>
          <div className={styles["account__avatar"]}>👤</div>
          <div className={styles["account__who"]}>
            <div className={styles["account__hello"]}>Hesabım</div>
            <div className={styles["account__hint"]}>Profil ve sipariş bilgileri</div>
          </div>
        </div>

        <nav className={styles["account__nav"]}>
          {NAV.map((item) => {
            // ✅ startsWith: /profil/siparisler/123 gibi alt yollarda da aktif kalsın
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles["account__nav-item"]} ${active ? styles["account__nav-item--active"] : ""}`}
              >
                <i className={`${item.icon} ${styles["account__nav-ico"]}`} />
                <span className={styles["account__nav-label"]}>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* İçerik */}
      <main className={styles["account__content"]}>{children}</main>
    </div>
  );
}
