export const metadata = { title: "Hakkımızda | İler Otomotiv" };

import styles from "./style.module.scss";

export default function AboutPage() {
  return (
    <div className={`container ${styles.about}`}>
      <h1 className="text-center mb-4">Hakkımızda</h1>

      {/* Giriş metni */}
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <p>
            İler Otomotiv, 34 yıllık sektörel deneyime sahip ortaklar tarafından 2023 yılında kurulmuştur. Taksim yedek parça piyasasından Doğuş Otomotiv'e uzanan kariyerimiz, çıraklıktan tepe yönetime kadar tüm aşamaları kapsamakta olup, sektördeki eksiklikleri görmemizi sağladı. Bu doğrultuda, uzman çözümler sunmak için yola çıktık. 
          </p>
          <p>
            Şirketimiz; yedek parça analiz ve tanımlama, liste revizyonu, orijinal ve eşdeğer parça
            kontrolü, sertifikasyon doğrulama, fiyat ve ıskonto analizi, parça kod eşleştirme ve
            performans iyileştirme gibi alanlarda danışmanlık hizmeti vermektedir.
          </p>
        </div>
      </div>

      {/* Slogan / Misyon / Vizyon */}
      <div className={`row g-3 ${styles.infoRow}`}>
        <div className="col-12 col-md-4">
          <div className={styles.infoCard}>
            <div className={styles.infoTitle}>SLOGANIMIZ</div>
            <p className={styles.infoText}>
              Yedek parçada daima yanınızdayız! İler Otomotiv ile daima ileri!
            </p>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className={styles.infoCard}>
            <div className={styles.infoTitle}>MİSYONUMUZ</div>
            <p className={styles.infoText}>
              İş ortaklarımıza sigorta, katalog, araç filo ve ihale portallarında güvenilir destek
              sunuyoruz.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className={styles.infoCard}>
            <div className={styles.infoTitle}>VİZYONUMUZ</div>
            <p className={styles.infoText}>
              Otomotiv yedek parça piyasasında tanınan, güvenilen, danışman firmaların başında
              gelmekteyiz.
            </p>
          </div>
        </div>
      </div>

      {/* Görseller */}
      <div className="row g-3 justify-content-center mt-1">
        <div className="col-12 col-md-4">
          <div className={styles.photo}>
            <img src="/images/about/01.png" alt="Depo ve operasyon" />
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className={styles.photo}>
            <img src="/images/about/02.png" alt="Lojistik ve stok yönetimi" />
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className={styles.photo}>
            <img src="/images/about/03.png" alt="Sevkiyat ve kalite" />
          </div>
        </div>
      </div>
    </div>
  );
}
