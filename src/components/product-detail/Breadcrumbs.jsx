import Link from "next/link";
import { toSlug } from "@/data/mockProducts";
import styles from "./product-detail.module.scss";

/**
 * Sıra: Anasayfa / BRAND / MODEL / KATEGORİ / ÜRÜN
 * - BRAND/MODEL: fitment[0]’dan al
 * - KATEGORİ: categories içinden (href’li olan öncelikli; yoksa ilk eleman)
 * categories artık sadece “gerçek” kategoriler içeriyor.
 */
export default function Breadcrumbs({ product }) {
  const cats = product?.categories || [];
  const fit0 = product?.fitment?.[0];

  const brandLabel = fit0?.brand || null;
  const modelLabel = fit0?.model || null;

  const brandSlug = brandLabel ? toSlug(brandLabel) : null;
  const modelSlug = brandSlug && modelLabel ? toSlug(modelLabel) : null;

  const catNode = cats.find(c => !!c.href) || cats[0] || null;

  return (
    <nav className={`small text-muted mb-3 ${styles["pd__bc"]}`}>
      <Link href="/">Anasayfa</Link>

      {brandSlug && (
        <>
          {" / "}
          <Link href={`/marka/${brandSlug}`}>{(brandLabel || "").toUpperCase()}</Link>
        </>
      )}

      {brandSlug && modelSlug && (
        <>
          {" / "}
          <Link href={`/marka/${brandSlug}/${modelSlug}`}>{modelLabel}</Link>
        </>
      )}

      {catNode && (
        <>
          {" / "}
          <Link href={catNode.href || "#"}>{catNode.label}</Link>
        </>
      )}

      {" / "}
      <strong>{product.title}</strong>
    </nav>
  );
}
