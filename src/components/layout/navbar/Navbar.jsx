'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useSelector } from 'react-redux';
import { selectCount } from '@/store/slices/cartSlice';
import CartDrawer from '@/components/cart/CartDrawer';
import SearchModal from '@/components/search/SearchModal';
import { FiShoppingCart, FiTruck, FiUser, FiLogOut } from 'react-icons/fi';

export default function Navbar({ onToggleSidebar }) {
 const { data: session, status } = useSession();
  const cartCount = useSelector(selectCount);
  const [openCart, setOpenCart] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <>
      <div className="sf-navbar bg-light border-bottom pb-3 pt-3">
        <div className="container-fluid d-flex align-items-center justify-content-between py-2">
          {/* Sol */}
          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-outline-secondary btn-sm" onClick={onToggleSidebar}>☰</button>
            <Link href="/" className="fw-bold text-danger text-decoration-none">yedekparcadestek</Link>
          </div>

          {/* Arama */}
            <form className="d-flex flex-grow-1 mx-3" onSubmit={(e)=>{e.preventDefault(); setOpenSearch(true);}}>
            <input
              className="form-control"
              placeholder="OEM / SKU / parça ara..."
              readOnly
              onClick={() => setOpenSearch(true)}
              onFocus={() => setOpenSearch(true)}
            />
          </form>

          {/* Sağ Menü */}
          <div className="d-flex align-items-center gap-4">
            <Link href="/kargo-takibi" className="d-flex flex-column align-items-center text-dark text-decoration-none">
              <FiTruck size={22} />
              <small>Kargo Takibi</small>
            </Link>

            {status === 'authenticated' ? (
              <>
                <Link href="/profil/hesaplar" className="d-flex flex-column align-items-center text-dark text-decoration-none">
                  <FiUser size={22} />
                  <small>{session.user?.name || 'Profil'}</small>
                </Link>
                <button
                  type="button"
                  className="btn btn-outline-danger btn-sm d-flex align-items-center gap-1"
                  onClick={() => signOut({ callbackUrl: '/' })}
                >
                  <FiLogOut size={18} /> Çıkış
                </button>
              </>
            ) : (
              <Link href="/uye-giris" className="d-flex flex-column align-items-center text-dark text-decoration-none">
                <FiUser size={22} />
                <small>Üye Girişi</small>
              </Link>
            )}

            <button
              type="button"
              className="d-flex flex-column align-items-center text-dark text-decoration-none position-relative btn p-0 border-0 bg-transparent"
              onClick={() => setOpenCart(true)}
            >
              <span className="position-relative">
                <FiShoppingCart size={22} />
                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.7rem' }}>
                    {cartCount}
                  </span>
                )}
              </span>
              <small>Sepetim</small>
            </button>
          </div>
        </div>
      </div>

      {/* Mini arama penceresi */}
      <SearchModal
  open={openSearch}
  onClose={() => setOpenSearch(false)}
/>

      <CartDrawer open={openCart} onClose={() => setOpenCart(false)} />
    </>
  );
}
