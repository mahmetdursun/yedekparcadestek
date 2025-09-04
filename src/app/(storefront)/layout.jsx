'use client';
import { useState } from 'react';
import Navbar from '@/components/layout/navbar/Navbar';
import Sidebar from '@/components/layout/sidebar/Sidebar';
import Footer from '@/components/layout/footer/Footer';
import '@/styles/layout.scss';

export default function StorefrontLayout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className={`sf-layout ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sf-navbar">
        <Navbar onToggleSidebar={() => setIsCollapsed(v => !v)} />
      </div>
      <div className="sf-layout__main">
        <aside className="sf-layout__sidebar">
          <Sidebar isCollapsed={isCollapsed} />
        </aside>
        <section className="sf-layout__outlet">{children}</section>
      </div>
      <Footer />
    </div>
  );
}
