import styles from "./style.module.scss";

const IconPhone = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
    <path d="M6.6 10.8c1.2 2.3 3.1 4.2 5.4 5.4l2-2a1 1 0 0 1 1.1-.2c1.2.5 2.5.7 3.9.7a1 1 0 0 1 1 1V19a1 1 0 0 1-1 1C11.6 20 4 12.4 4 3a1 1 0 0 1 1-1h3.3a1 1 0 0 1 1 1c0 1.4.2 2.7.7 3.9.2.4.1.8-.2 1.1l-2 2Z" fill="currentColor"/>
  </svg>
);

const IconMail = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
    <path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm0 0 8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconWhatsApp = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
    <path d="M20 12a8 8 0 0 1-11.9 7l-3.7 1 1-3.8A8 8 0 1 1 20 12Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M8.5 9.5c.3 2 2.1 3.8 4.1 4.1.3.1.6 0 .8-.2l1-.9a.7.7 0 0 1 .9 0l1.9 1.1c.3.1.4.5.2.8-1 1.3-2.6 2-4.2 1.9-3.6-.2-6.6-3.2-6.8-6.8 0-1.6.6-3.2 1.9-4.2.3-.2.7 0 .8.2l1.1 1.9c.2.3.2.7 0 .9l-.9 1a.7.7 0 0 0-.2.8Z" fill="currentColor"/>
  </svg>
);

const IconMapPin = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
    <path d="M12 21s7-5.3 7-11a7 7 0 1 0-14 0c0 5.7 7 11 7 11Z" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export default function ContactCards() {
  return (
    <div className="row g-4">
      <div className="col-md-4">
        <div className={styles.card}>
          <div className={styles.icon}><IconPhone /></div>
          <h5 className={styles.cardTitle}>Telefon</h5>
          <a className={styles.cardLink} href="tel:+905437803504">+90 543 780 35 04</a>
        </div>
      </div>

      <div className="col-md-4">
        <div className={styles.card}>
          <div className={styles.icon}><IconMail /></div>
          <h5 className={styles.cardTitle}>E-posta</h5>
          <a className={styles.cardLink} href="mailto:info@ilerotomotiv.com">info@ilerotomotiv.com</a>
        </div>
      </div>

      <div className="col-md-4">
        <div className={styles.card}>
          <div className={styles.icon}><IconWhatsApp /></div>
          <h5 className={styles.cardTitle}>WhatsApp</h5>
          <a
            className={styles.cardLink}
            href="https://wa.me/905437803504"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hemen mesaj gönder
          </a>
        </div>
      </div>

      <div className="col-12">
        <div className={styles.card}>
          <div className={styles.icon}><IconMapPin /></div>
          <h5 className={styles.cardTitle}>Adres</h5>
          <p className={styles.cardText}>
            Barbaros Mah.Barbaros Cad. No:52/2 Ataşehir – İstanbul
          </p>
        </div>
      </div>
    </div>
  );
}
