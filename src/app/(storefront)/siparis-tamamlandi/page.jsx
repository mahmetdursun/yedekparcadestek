"use client";

import Image from "next/image";
import Link from "next/link";
import { FiFileText, FiCheckCircle } from "react-icons/fi";
import styles from "./style.module.scss";

export default function OrderCompletePage() {
  // Şimdilik demo veri; sonra gerçek sipariş verisini buraya bağlayabilirsin.
  const order = {
    id: "ORD-2024-00123",
    productTitle: "Xiaomi Redmi 12 8GB 128GB Gümüş",
    image: "/img/demo-phone.png", // elindeki gerçek ürün görsel path’i
    monthlyPrice: 1099,
    months: 12,
    total: 13188,
  };

  return (
    <div className={`container ${styles["oc"]}`}>
      {/* Başlık */}
      <header className={styles["oc__header"]}>
        <div className={styles["oc__header-left"]}>
          <div className={styles["oc__header-icon"]}>
            <FiFileText />
          </div>
          <span className={styles["oc__header-title"]}>Sipariş Özeti</span>
        </div>

        {/* İstersen sipariş numarası da gösterebilirsin */}
        <div className={styles["oc__header-meta"]}>
          <span>Sipariş No:</span>
          <strong>{order.id}</strong>
        </div>
      </header>

      {/* Kart */}
      <section className={styles["oc-card"]}>
        <div className={styles["oc-card__top"]}>
          <div className={styles["oc-card__img"]}>
            <Image
              src={order.image}
              alt={order.productTitle}
              fill
              sizes="96px"
            />
          </div>

          <div className={styles["oc-card__info"]}>
            <div className={styles["oc-card__title"]}>{order.productTitle}</div>
            <div className={styles["oc-card__sub"]}>Faturaya Ek</div>

            <div className={styles["oc-card__price-row"]}>
              <span className={styles["oc-card__installment"]}>
                ₺{order.monthlyPrice.toLocaleString("tr-TR")} ×{" "}
                {order.months} ay
              </span>
              <span className={styles["oc-card__total"]}>
                ₺{order.total.toLocaleString("tr-TR")}
              </span>
            </div>
          </div>
        </div>

        <button className={styles["oc-card__refund-btn"]}>
          İade Talebi Oluştur
        </button>

        <div className={styles["oc-status"]}>
          <div className={styles["oc-status__icon-wrap"]}>
            <FiCheckCircle className={styles["oc-status__icon"]} />
          </div>
          <div className={styles["oc-status__text"]}>Sipariş Tamamlandı</div>
        </div>
      </section>

      {/* Alt aksiyonlar (isteğe bağlı) */}
      <div className={styles["oc__links"]}>
        <Link href="/profil/siparisler" className={styles["oc__link"]}>
          Tüm siparişlerimi görüntüle
        </Link>
        <Link href="/" className={styles["oc__link"]}>
          Alışverişe devam et
        </Link>
      </div>
    </div>
  );
}
