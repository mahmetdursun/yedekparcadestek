// src/app/(storefront)/parca/[slug]/page.jsx
import styles from "@/components/product-detail/product-detail.module.scss";
import Breadcrumbs from "@/components/product-detail/Breadcrumbs";
import ProductGallery from "@/components/product-detail/ProductGallery";
import PurchaseBox from "@/components/product-detail/PurchaseBox";
import DetailTabs from "@/components/product-detail/DetailTabs";
import { getProductBySlug } from "@/data/mockProducts";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic"; // opsiyonel ama faydalı

export default function ProductDetailPage({ params }) {
  const slug = params.slug;                 // ❌ await yok
  const product = getProductBySlug(slug);   // mock veriden bul

  if (!product) return notFound();

  return (
    <div className={`container ${styles["pd"]}`}>
      <Breadcrumbs product={product} />
      <div className={`row ${styles["pd__head"]}`}>
        <div className="col-12 col-lg-5">
          <ProductGallery product={product} />
        </div>

        <div className="col-12 col-lg-4">
          <div className={styles["pd__summary"]}>
            <div className={styles["pd__brand"]}>{product.brand}</div>
            <h1 className={styles["pd__title"]}>{product.title}</h1>

            <div className={styles["pd__meta"]}>
              {product.sku && <>SKU: <strong>{product.sku}</strong></>}
              {product.ean && <span className="ms-3">EAN: <strong>{product.ean}</strong></span>}
              <span className={`ms-3 ${product.stock>0 ? styles["pd__stock--in"] : styles["pd__stock--out"]}`}>
                {product.stock > 0 ? "Stokta Var" : "Stokta Yok"}
              </span>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-3">
          <PurchaseBox product={product} />
        </div>
      </div>

      <DetailTabs
        description={product.description}
        fitment={product.fitment}
        attributes={product.attributes}
      />
    </div>
  );
}
