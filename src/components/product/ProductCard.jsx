// src/components/product/ProductCard.jsx
'use client';
import { useDispatch } from 'react-redux';
import { addItem } from '@/store/slices/cartSlice';

export default function ProductCard({ p }) {
  const dispatch = useDispatch();

  const onAdd = () => {
    // p: { id, title, price, img, brand } biçiminde geldiğini varsayıyoruz
    dispatch(addItem({
      id: p.id ?? p.slug ?? p.title, // benzersiz bir şey
      title: p.title,
      price: Number(p.price),
      img: p.img,
      brand: p.brand,
    }));
  };

  return (
    <div className="product-card align-items-center">
      <img src={p.img || '/vercel.svg'} alt={p.title} />
      <div className="brand">{p.brand}</div>
      <div className="title">{p.title}</div>
      <div className="price">{p.price} TL</div>
      <button className="btn btn-danger btn-sm mt-1" onClick={onAdd}>
        Sepete Ekle
      </button>
    </div>
  );
}
