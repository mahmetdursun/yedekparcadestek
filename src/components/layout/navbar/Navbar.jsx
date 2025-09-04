'use client';
import Link from 'next/link';

export default function Navbar({ onToggleSidebar }) {
  return (
    <div className="sf-navbar">
      <div className="container-fluid d-flex align-items-center gap-3 py-2">
        <button className="btn btn-outline-secondary btn-sm" onClick={onToggleSidebar}>☰</button>
        <Link href="/" className="fw-bold text-danger text-decoration-none">yedekparcadestek</Link>
        <form className="d-flex flex-grow-1" onSubmit={(e)=>e.preventDefault()}>
          <input className="form-control" placeholder="OEM / SKU / parça ara..." />
        </form>
        <div className="d-flex align-items-center gap-3">
          <Link href="/sepet">Sepet</Link>
          <Link href="/kargo-takibi">Kargo Takibi</Link>
          <Link href="/uye-giris" className="btn btn-sm btn-outline-primary">Üye Girişi</Link>
        </div>
      </div>
    </div>
  );
}
