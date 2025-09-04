export default function ProductCard({ p }) {
  return (
    <div className="product-card align-items-center">
      <img src={p.img || '/vercel.svg'} alt={p.title} />
      <div className="brand">{p.brand}</div>
      <div className="title">{p.title}</div>
      <div className="price">{p.price} TL</div>
      <button className="btn btn-danger btn-sm mt-1">Sepete Ekle</button>
    </div>
  );
}
