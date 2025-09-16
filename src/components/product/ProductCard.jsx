'use client';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addItem } from '@/store/slices/cartSlice';
import { toSlug } from '@/data/mockProducts';

export default function ProductCard({ p }) {
  const dispatch = useDispatch();

  // 🔧 Her zaman normalize edilmiş slug üret
  const href = `/parca/${toSlug(p.slug || p.title)}`;

  const onAdd = () => {
    dispatch(addItem({
      id: p.id ?? href,
      title: p.title,
      price: Number(p.price),
      img: p.img || p.images?.[0],    // varsa mock'tan
      brand: p.brand,
    }));
  };

  return (
    <div className="product-card align-items-center">
      <Link href={href} className="d-block">
        <img src={p.img || p.images?.[0] || '/vercel.svg'} alt={p.title} />
      </Link>

      <div className="brand">{p.brand}</div>

      <Link href={href} className="title d-block">
        {p.title}
      </Link>

      <div className="price">
        {Number(p.price).toLocaleString('tr-TR')} TL
      </div>

      <button className="btn btn-danger btn-sm mt-1" onClick={onAdd}>
        Sepete Ekle
      </button>
    </div>
  );
}
