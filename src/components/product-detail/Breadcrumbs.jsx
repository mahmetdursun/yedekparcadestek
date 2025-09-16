import Link from "next/link";
import styles from "./product-detail.module.scss";

export default function Breadcrumbs({ product }) {
  const cats = product?.categories || [];
  return (
    <nav className={`small text-muted mb-3 ${styles["pd__bc"]}`}>
      <Link href="/">Anasayfa</Link>
      {cats.map((c, i) => (
        <span key={i}>
          {" "}/{" "}
          {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
        </span>
      ))}
      {" / "}
      <strong>{product.title}</strong>
    </nav>
  );
}
