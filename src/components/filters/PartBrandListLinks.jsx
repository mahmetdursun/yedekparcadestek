import Link from "next/link";

export default function PartBrandListLinks({
  title = "Markalar",
  q = "",
  order = "",
  selectedBrand = "",
  options = [], // [{value,label,count}]
}) {
  const keepOrder = order ? `&sirala=${encodeURIComponent(order)}` : "";
  return (
    <div className="card p-3">
      <div className="fw-bold mb-2">{title}</div>
      <div className="d-flex flex-column gap-2">
        <Link
          href={`/arama?q=${encodeURIComponent(q)}${keepOrder}`}
          className={`text-decoration-none ${!selectedBrand ? "fw-bold" : ""}`}
        >
          Tümü
        </Link>
        {options.map((o) => (
          <Link
            key={o.value}
            href={`/arama?q=${encodeURIComponent(q)}&brand=${encodeURIComponent(o.value)}${keepOrder}`}
            className={`text-decoration-none ${selectedBrand === o.value ? "fw-bold" : ""}`}
          >
            {o.label} {typeof o.count === "number" ? `(${o.count})` : ""}
          </Link>
        ))}
      </div>
    </div>
  );
}
