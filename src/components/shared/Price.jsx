// src/components/shared/Price.jsx
export default function Price({ price, oldPrice, className = "" }) {
  const p = Number(price || 0);
  const op = oldPrice != null ? Number(oldPrice) : null;
  const showOld = op != null && op > p; // indirim varsa göster

  return (
    <div className={className}>
      {showOld && (
        <div className="text-muted" style={{ textDecoration: "line-through" }}>
          {op.toLocaleString("tr-TR")} TL
        </div>
      )}
      <div style={{ fontWeight: 700 }}>
        {p.toLocaleString("tr-TR")} TL
      </div>
    </div>
  );
}
