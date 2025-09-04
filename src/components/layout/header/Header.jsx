import Link from 'next/link';

export default function Header(){
  return (
    <header className="border-bottom bg-white">
      <div className="container d-flex align-items-center gap-3 py-2">
        <Link href="/" className="navbar-brand fw-bold text-danger">yedekparcadestek</Link>
        <form className="flex-grow-1">
          <input className="form-control" placeholder="OEM / SKU / parça ara..." />
        </form>
        <nav className="ms-auto d-flex gap-3">
          <Link href="/sepet">Sepet</Link>
          <Link href="/kargo-takibi">Kargo</Link>
        </nav>
      </div>
    </header>
  );
}
