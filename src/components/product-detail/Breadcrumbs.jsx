import Link from "next/link";
import { toSlug } from "@/data/mockProducts";
import styles from "./product-detail.module.scss";

/**
 * İstenen sıra: Anasayfa / BRAND / MODEL / KATEGORİ / ÜRÜN
 * - BRAND → /marka/:brand
 * - MODEL → /marka/:brand/:model
 * - KATEGORİ → product.categories içinden href’i olan (örn. Arka Takım..)
 * - BRAND/MODEL tespit: mümkünse fitment[0] brand/model,
 *   yoksa categories içindeki etiketlerden çıkar.
 */
export default function Breadcrumbs({ product }) {
  const cats = product?.categories || [];
  const fit0 = product?.fitment?.[0];

  // kategori (href'i olan)
  const catNode = cats.find(c => !!c.href) || null;

  // brand label
  let brandLabel =
    fit0?.brand ||
    (cats.find(c => ["volkswagen","audi","bmw","mercedes","opel","renault","toyota","honda","hyundai","kia","nissan","peugeot","citroen","skoda","seat","mini","land rover","range rover","volvo","fiat","lancia","jeep","dacia","lexus"]
      .includes(toSlug(c.label)))?.label) ||
    null;

  // model label (kategori ve brand olmayan ilk etiket)
  let modelLabel =
    cats.find(c => toSlug(c.label) !== toSlug(brandLabel || "") && c !== catNode)?.label || null;

  const brandSlug = brandLabel ? toSlug(brandLabel) : null;
  const modelSlug = brandSlug && modelLabel ? toSlug(modelLabel) : null;

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
          <Link href={catNode.href}>{catNode.label}</Link>
        </>
      )}

      {" / "}
      <strong>{product.title}</strong>
    </nav>
  );
}
