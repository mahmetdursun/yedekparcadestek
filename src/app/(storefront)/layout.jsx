"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/layout/navbar/Navbar";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import Footer from "@/components/layout/footer/Footer";
import MobileHamburger from "@/components/layout/hamburger/Hamburger"; // ✅ EKLE
import "@/styles/main.scss";

/** ≤992px → hamburger modu */
function useIsHamburger() {
  const [isHam, setIsHam] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 992px)");
    const handler = (e) => setIsHam(e.matches);
    setIsHam(mql.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);
  return isHam;
}

export default function StorefrontLayout({ children }) {
  // Masaüstü: sidebar çarkını aç/kapat
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const onToggleSidebar = () => setSidebarVisible(v => !v);

  // Mobil: hamburger çekmece
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHamburger = useIsHamburger();

  // Body scroll lock (çekmece açıkken sayfa kaymasın)
  useEffect(() => {
    if (!isHamburger) return;
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen, isHamburger]);

  return (
    <div className="sf-layout">
      <Navbar
        onToggleSidebar={onToggleSidebar}            // masaüstü çark
        onOpenHamburger={() => setMobileOpen(true)}  // mobil çekmece
      />

      <main className="sf-layout__main container">
        {/* ✅ Hamburger modunda çark YOK. Sadece masaüstünde görünür. */}
        {!isHamburger && sidebarVisible && <Sidebar visible />}

        <section className="sf-layout__outlet">{children}</section>
      </main>

      <Footer />

      {/* ✅ Asıl açılan panel: MobileHamburger */}
      {isHamburger && (
        <MobileHamburger open={mobileOpen} onClose={() => setMobileOpen(false)} />
      )}
    </div>
  );
}
