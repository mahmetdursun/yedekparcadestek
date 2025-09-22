'use client';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addItem } from '@/store/slices/cartSlice';
import { normalizeProduct, buildProductHref } from '../../util/product';
import Price from '@/components/shared/Price';

export default function ProductCard({ p }) {
  const dispatch = useDispatch();
  const product = normalizeProduct(p);
  const href = buildProductHref(product);

  const onAdd = () => {
    dispatch(addItem({
      id: product.id ?? href,
      title: product.title,
      price: product.price,         // KDV hesap yok; sepete bıraktık
      img: product.image,
      brand: product.brand,
    }));
  };

  return (
    <div className="product-card align-items-center">
      <Link href={href} className="d-block">
        <img src={product.image || '/vercel.svg'} alt={product.title} />
      </Link>

      <div className="brand">{product.brand}</div>

      <Link href={href} className="title d-block text-center">
        {product.title}
      </Link>

      <Price price={product.price} oldPrice={product.oldPrice} className="mt-1" />

      <button className="btn btn-danger btn-sm mt-1" onClick={onAdd}>
        Sepete Ekle
      </button>
    </div>
  );
}
