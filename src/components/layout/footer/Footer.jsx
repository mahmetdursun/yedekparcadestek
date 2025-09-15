"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer mt-5">
      <div className="container py-5">
        <div className="row g-4">
          {/* Brand / about */}
          <div className="col-12 col-md-4">
            <div className="d-flex align-items-center gap-2 mb-2">
              <h6 className="m-0">yedekparcadestek</h6>
            </div>
            <p className="small mb-3">
              Oto yedek parça, yağ ve aksesuarları hızlı kargo ve güvenli ödeme ile kapına getiriyoruz.
            </p>

            <div className="d-flex gap-2">
              <a className="social-btn" href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="social-btn" href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="social-btn" href="#" aria-label="Twitter">
                <i className="fab fa-x-twitter"></i>
              </a>
            </div>
          </div>

          {/* Kurumsal */}
          <div className="col-6 col-md-2">
            <h6 className="footer-title">Kurumsal</h6>
            <ul className="footer-links">
              <li><Link href="/hakkimizda">Hakkımızda</Link></li>
              <li><Link href="/iletisim">İletişim</Link></li>
              <li><Link href="/kargo-takibi">Kargo Takibi</Link></li>
              <li><Link href="/iade-degisim">İade & Değişim</Link></li>
              <li><Link href="/kvkk">KVKK</Link></li>
            </ul>
          </div>

          {/* Kategoriler */}
          <div className="col-6 col-md-3">
            <h6 className="footer-title">Öne Çıkan Kategoriler</h6>
            <ul className="footer-links">
              <li><Link href="/kategori/aydinlatma">Aydınlatma</Link></li>
              <li><Link href="/kategori/suspansiyon">Süspansiyon</Link></li>
              <li><Link href="/kategori/yag">Motor Yağları</Link></li>
              <li><Link href="/kategori/fren">Fren &amp; Balata</Link></li>
              <li><Link href="/kategori/aksesuar">Aksesuar</Link></li>
            </ul>
          </div>

          {/* Account + payments */}
          <div className="col-12 col-md-3">
            <h6 className="footer-title">Hesap</h6>
            <div className="d-flex gap-2 mb-3">
              <Link href="/uye-ol" className="btn btn-outline-light btn-sm px-3">Üye Ol</Link>
              <Link href="/uye-giris" className="btn btn-danger btn-sm px-3">Üye Girişi</Link>
            </div>

            <h6 className="footer-title">Güvenli Ödeme</h6>
            <div className="d-flex gap-3 align-items-center">
              <i className="fab fa-cc-visa fa-2x"></i>
              <i className="fab fa-cc-mastercard fa-2x"></i>
              <i className="fab fa-cc-amex fa-2x"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <div className="container d-flex flex-column flex-sm-row gap-2 justify-content-between align-items-center">
          <span className="small">
            © {new Date().getFullYear()} yedekparcadestek. Tüm hakları saklıdır.
          </span>
          <div className="small d-flex gap-3">
            <Link href="/sozlesme">Üyelik Sözleşmesi</Link>
            <Link href="/gizlilik">Gizlilik</Link>
            <Link href="/cerez">Çerez Politikası</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
