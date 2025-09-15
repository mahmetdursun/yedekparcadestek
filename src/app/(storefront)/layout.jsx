'use client';

import Navbar from '@/components/layout/navbar/Navbar';
import Footer from '@/components/layout/footer/Footer';

// yeni yatay marka barı (bir önceki mesajda verdiğim BrandTopbar.jsx’i oluşturduysan)
import Sidebar from '@/components/layout/sidebar/Sidebar';

import '@/styles/layout.scss';

export default function StorefrontLayout({ children }) {
  return (
    <div className="sf-layout">
      {/* Üst navigasyon */}
      <Navbar />

      {/* NAVBAR'IN HEMEN ALTINDA YATAY MARKA BAR */}
      <Sidebar />

      {/* İçerik */}
      <main className="sf-layout__main">
        {/* soldaki aside ve Sidebar tamamen kaldırıldı */}
        <section className="sf-layout__outlet">
          {children}
        </section>
      </main>

      <Footer />
    </div>
  );
}
