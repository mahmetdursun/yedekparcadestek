"use client";
import Link from "next/link";
import styles from "./style.module.scss";

const BANNERS = [
  {
    slug: "sarfi-malz",
    title: "Sarf Malzemeleri",
    img: "/images/categories/sarf-malzemeleri.png",
  },
  {
    slug: "motor-yaglari",
    title: "Motor Yağları",
    img: "/images/categories/yag.png",
  },
  {
    slug: "antifriz",
    title: "Antifriz Fiyatları",
    img: "/images/categories/antifriz.png",
  },
  {
    slug: "sanziman-yaglari",
    title: "Şanzıman Yağları",
    img: "/images/categories/sanziman-yag.png",
  },
  {
    slug: "fren-hidrolik",
    title: "Fren Hidrolik Yağları",
    img: "/images/categories/fren-yag.png",
  },
];

export default function CategoryBanners() {
  return (
    <div className="container">
      <div className="row g-3">
        {BANNERS.map((b) => (
          <div className="col-12 col-md-4" key={b.slug}>
            <div className={styles["banner-card"]}>
              <img src={b.img} alt={b.title} />
              <div className={styles["banner-card__overlay"]}>
                <div className={styles["banner-card__title"]}>{b.title}</div>
                <Link
                  href={`/kategori/${b.slug}`}
                  className="btn btn-danger btn-sm mt-2"
                >
                  Ürünlere Git
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
