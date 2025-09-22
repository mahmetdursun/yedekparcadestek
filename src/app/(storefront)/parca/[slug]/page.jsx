// src/app/(storefront)/parca/[slug]/page.jsx
import styles from "@/components/product-detail/product-detail.module.scss";
import Breadcrumbs from "@/components/product-detail/Breadcrumbs";
import ProductGallery from "@/components/product-detail/ProductGallery";
import PurchaseBox from "@/components/product-detail/PurchaseBox";
import SpecsTable from "@/components/product-detail/SpecsTable";
import DetailTabs from "@/components/product-detail/DetailTabs";
import { getProductBySlug } from "@/data/mockProducts";
import { notFound } from "next/navigation";

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;          // ✅ önemli: await
  const product = getProductBySlug(slug); // mock veriden bul

  if (!product) return notFound();        // ya da uyarı div’in
  return (
    <div className={`container ${styles["pd"]}`}>
      <Breadcrumbs product={product} />
      <div className={`row ${styles["pd__head"]}`}>
        <div className="col-12 col-lg-5"><ProductGallery product={product} /></div>
        <div className="col-12 col-lg-4">
          <div className={styles["pd__summary"]}>
            <div className={styles["pd__brand"]}>{product.brand}</div>
            <h1 className={styles["pd__title"]}>{product.title}</h1>
            <div className={styles["pd__meta"]}>
              {product.sku && <>SKU: <strong>{product.sku}</strong></>}
              {product.ean && <span className="ms-3">EAN: <strong>{product.ean}</strong></span>}
            </div>
            <div>
              <span className={`${product.stock>0 ? styles["pd__stock--in"] : styles["pd__stock--out"]}`}>
                {product.stock>0 ? "Stokta Var" : "Stokta Yok"}
              </span>
            </div>
            {/* <SpecsTable attributes={product.attributes} compact /> */}
          </div>
        </div>
        <div className="col-12 col-lg-3"><PurchaseBox product={product} /></div>
      </div>
      <DetailTabs
        description={product.description}
        fitment={product.fitment}
        attributes={product.attributes}
      />
    </div>
  );
}
