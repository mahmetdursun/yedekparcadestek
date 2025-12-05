"use client";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import cn from "classnames";

import {
  selectItems,
  selectSubtotal,
  selectKdv,
  selectTotal,
} from "@/store/slices/cartSlice";

import {
  FiShoppingCart,
  FiMapPin,
  FiCreditCard,
  FiFlag,
  FiChevronRight,
} from "react-icons/fi";

// 🔴 BURAYI EKLE
import styles from "./style.module.scss";

const FREE_SHIPPING_THRESHOLD = 3679.52;
const SHIPPING_FLAT = 44.99;

// Şimdilik sadece UI için örnek adresler (local state)
const MOCK_ADDRESSES = [
  {
    id: "1",
    title: "Ev",
    name: "Ahmet Yılmaz",
    phone: "5xx xxx xx xx",
    city: "İstanbul",
    district: "Kadıköy",
    line: "Örnek Mah. Deneme Sok. No:10 D:3",
    type: "bireysel",
  },
];

export default function CheckoutPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const items = useSelector(selectItems);
  const subtotal = useSelector(selectSubtotal); // KDV dahil
  const kdv = useSelector(selectKdv);
  const total = useSelector(selectTotal);

  const empty = items.length === 0;

  const shipping =
    empty || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FLAT;
  const grandTotal = total + (empty ? 0 : shipping);

  // ------- Adresler (Sadece UI / local state) -------
  const [addresses, setAddresses] = useState(MOCK_ADDRESSES);
  const [selectedAddressId, setSelectedAddressId] = useState(
    MOCK_ADDRESSES[0]?.id ?? null
  );
  const [addrModalOpen, setAddrModalOpen] = useState(false);
  const [addrForm, setAddrForm] = useState({
    name: "",
    phone: "",
    city: "",
    district: "",
    line: "",
    title: "",
    type: "bireysel", // bireysel | kurumsal
    vkn: "",
    taxOffice: "",
    company: "",
  });

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // 🔐 Login kontrolü (UI için kalsın, backend sonra)
  if (status === "loading") {
    return (
      <div className="container py-5">
        <div className="placeholder-glow">
          <div className="placeholder col-6 mb-3"></div>
          <div className="placeholder col-8 mb-2"></div>
        </div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="container py-5">
        <div className="alert alert-warning mb-4">
          Ödeme adımına geçmek için önce giriş yapmanız gerekiyor.
        </div>
        <button
          className="btn btn-primary"
          onClick={() => router.push("/giris")} // login route’un
        >
          Giriş Yap / Üye Ol
        </button>
      </div>
    );
  }

  // Ödeme butonu (şimdilik sadece UI)
  const onPay = () => {
    if (empty) return;
    if (!selectedAddressId) {
      alert("Lütfen bir teslimat adresi seçin veya ekleyin.");
      return;
    }
    console.log("Ödeme başladı (UI only)");
  };

  const selectedAddress =
    addresses.find((a) => a.id === selectedAddressId) || null;

  return (
    <div className={cn("container", styles.checkout)}>
      {/* Üst başlık + stepper */}
      <header className={styles.checkout__head}>
        <div>
          <div className="small text-muted mb-1">
            Anasayfa / Sepetim / Ödeme
          </div>
          <h1 className="h4 fw-bold mb-0">Ödeme</h1>
        </div>

        <div className={styles["checkout-steps"]}>
          <div
            className={cn(
              styles["checkout-steps__step"],
              styles["checkout-steps__step--done"]
            )}
          >
            <FiShoppingCart className={styles["checkout-steps__icon"]} />
            <span>Sepet</span>
          </div>

          <FiChevronRight className={styles["checkout-steps__arrow"]} />

          <div
            className={cn(
              styles["checkout-steps__step"],
              styles["checkout-steps__step--active"]
            )}
          >
            <FiCreditCard className={styles["checkout-steps__icon"]} />
            <span>Ödeme</span>
          </div>

          <FiChevronRight className={styles["checkout-steps__arrow"]} />

          <div className={styles["checkout-steps__step"]}>
            <FiFlag className={styles["checkout-steps__icon"]} />
            <span>Tamamlandı</span>
          </div>
        </div>
      </header>

      {/* Grid: sol (ürün + adres + ödeme) / sağ (özet) */}
      <div className="row">
        <div className="col-12 col-lg-8">
          {/* Sepetteki ürünler ufak kutu */}
          <section className={styles["checkout-box"]}>
            <div className={styles["checkout-box__head"]}>
              Sepetimdeki Ürünler ({items.length})
            </div>

            {empty ? (
              <div className="text-muted py-4">Sepetiniz boş.</div>
            ) : (
              <ul className={styles["checkout-items"]}>
                {items.map((it) => (
                  <li key={it.id} className={styles["checkout-item"]}>
                    <div className={styles["checkout-item__img"]}>
                      <Image
                        src={it.img || "/vercel.svg"}
                        alt={it.title}
                        fill
                        sizes="80px"
                      />
                    </div>
                    <div className={styles["checkout-item__info"]}>
                      <div className={styles["checkout-item__title"]}>
                        {it.title}
                      </div>
                      {it.brand && (
                        <div className="small text-muted">{it.brand}</div>
                      )}
                    </div>
                    <div className={styles["checkout-item__price"]}>
                      {(it.price * it.qty).toLocaleString("tr-TR")} TL
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* Teslimat Adresi */}
          <section className={styles["checkout-box"]}>
            <div className={styles["checkout-box__head"]}>
              Teslimat Adresi
            </div>

            <div className={styles["address-list"]}>
              {addresses.length === 0 ? (
                <div className="text-muted mb-2">
                  Kayıtlı adresiniz bulunmuyor. Aşağıdaki butona tıklayarak
                  adres ekleyebilirsiniz.
                </div>
              ) : (
                <>
                  {addresses.map((addr) => (
                    <button
                      key={addr.id}
                      type="button"
                      className={cn(
                        styles["address-card"],
                        addr.id === selectedAddressId &&
                          styles["address-card--active"]
                      )}
                      onClick={() => setSelectedAddressId(addr.id)}
                    >
                      <div className={styles["address-card__title"]}>
                        {addr.title || "Adres"}
                      </div>
                      <div className={styles["address-card__line"]}>
                        {addr.line}
                      </div>
                      <div className={styles["address-card__meta"]}>
                        {addr.district} / {addr.city}
                      </div>
                    </button>
                  ))}
                </>
              )}

              {/* Her durumda görünen buton */}
              <button
                type="button"
                className={styles["address-add-btn"]}
                onClick={() => setAddrModalOpen(true)}
              >
                + Adres Ekle / Değiştir
              </button>
            </div>

            <div className="form-check mt-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="sameInvoice"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="sameInvoice">
                Faturamı Aynı Adrese Gönder
              </label>
            </div>
          </section>

          {/* Ödeme Seçenekleri */}
          <section className={styles["checkout-box"]}>
            <div className={styles["checkout-box__head"]}>
              Ödeme Seçenekleri
            </div>

            <div className={styles["pay-tabs"]}>
              <button
                className={cn(
                  styles["pay-tabs__btn"],
                  styles["pay-tabs__btn--active"]
                )}
              >
                Kart ile Öde
              </button>
            </div>

            <div className={styles["pay-grid"]}>
              {/* Kart bilgileri */}
              <div className={styles["pay-card"]}>
                <div className="mb-2 fw-semibold">Kart Bilgileri</div>

                <div className="mb-2">
                  <label className={styles["field-label"]}>
                    Kart Numarası
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="**** **** **** ****"
                  />
                </div>

                <div className="row">
                  <div className="col-6 mb-2">
                    <label className={styles["field-label"]}>
                      Son Kullanma Tarihi
                    </label>
                    <div className="d-flex gap-2">
                      <select className="form-select">
                        <option>Ay</option>
                      </select>
                      <select className="form-select">
                        <option>Yıl</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-6 mb-2">
                    <label className={styles["field-label"]}>CVV</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>

                <div className="form-check mt-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="secure3d"
                  />
                  <label className="form-check-label" htmlFor="secure3d">
                    3D Secure ile ödemek istiyorum
                  </label>
                </div>
              </div>

              {/* Taksit bilgisi */}
              <div className={styles["pay-installment"]}>
                <div className="mb-2 fw-semibold">Taksit Seçenekleri</div>
                <div className={styles["pay-installment__row"]}>
                  <div>Tek Çekim</div>
                  <div>{grandTotal.toLocaleString("tr-TR")} TL</div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Sağ: Sipariş Özeti */}
        <div className="col-12 col-lg-4 mt-3 mt-lg-0">
          <aside className={styles["summary"]}>
            <div className={styles["summary__head"]}>Sipariş Özeti</div>

            <div className={styles["summary__rows"]}>
              <div className={styles["summary__row"]}>
                <span>Ara Toplam</span>
                <strong>{subtotal.toLocaleString("tr-TR")} TL</strong>
              </div>
              <div className={styles["summary__row"]}>
                <span>KDV</span>
                <strong>{kdv.toLocaleString("tr-TR")} TL</strong>
              </div>
              <div className={styles["summary__row"]}>
                <span>Kargo Toplam</span>
                <strong>
                  {shipping === 0
                    ? "0 TL"
                    : shipping.toLocaleString("tr-TR") + " TL"}
                </strong>
              </div>
            </div>

            <div className={styles["summary__total"]}>
              <span>Toplam</span>
              <strong>{grandTotal.toLocaleString("tr-TR")} TL</strong>
            </div>

            <div className={styles["summary__contract"]}>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="contractOk"
                />
                <label
                  className="form-check-label small"
                  htmlFor="contractOk"
                >
                  Ön Bilgilendirme Koşulları’nı ve Mesafeli Satış
                  Sözleşmesi’ni okudum, onaylıyorum.
                </label>
              </div>
            </div>

            <button
              className={styles["summary__btn"]}
              disabled={empty}
              onClick={onPay}
            >
              Ödeme Yap
            </button>
          </aside>
        </div>
      </div>

      {/* Adres Ekle modalı – sadece UI / local state */}
      {addrModalOpen && (
        <div className={styles["addr-modal__backdrop"]}>
          <div className={styles["addr-modal"]}>
            <div className={styles["addr-modal__head"]}>
              <h2 className="h6 mb-0">Adres Ekle</h2>
              <button
                type="button"
                className="btn btn-sm btn-link text-muted"
                onClick={() => setAddrModalOpen(false)}
              >
                ×
              </button>
            </div>

            <div className={styles["addr-modal__body"]}>
              <div className="row">
                <div className="col-6 mb-2">
                  <label className={styles["field-label"]}>Ad*</label>
                  <input
                    className="form-control"
                    value={addrForm.name}
                    onChange={(e) =>
                      setAddrForm((f) => ({ ...f, name: e.target.value }))
                    }
                  />
                </div>
                <div className="col-6 mb-2">
                  <label className={styles["field-label"]}>Telefon*</label>
                  <input
                    className="form-control"
                    value={addrForm.phone}
                    onChange={(e) =>
                      setAddrForm((f) => ({ ...f, phone: e.target.value }))
                    }
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-6 mb-2">
                  <label className={styles["field-label"]}>İl*</label>
                  <input
                    className="form-control"
                    value={addrForm.city}
                    onChange={(e) =>
                      setAddrForm((f) => ({ ...f, city: e.target.value }))
                    }
                  />
                </div>
                <div className="col-6 mb-2">
                  <label className={styles["field-label"]}>İlçe*</label>
                  <input
                    className="form-control"
                    value={addrForm.district}
                    onChange={(e) =>
                      setAddrForm((f) => ({
                        ...f,
                        district: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>

              <div className="mb-2">
                <label className={styles["field-label"]}>Adres*</label>
                <textarea
                  className="form-control"
                  rows={3}
                  value={addrForm.line}
                  onChange={(e) =>
                    setAddrForm((f) => ({ ...f, line: e.target.value }))
                  }
                />
              </div>

              <div className="mb-2">
                <label className={styles["field-label"]}>Adres Başlığı*</label>
                <input
                  className="form-control"
                  value={addrForm.title}
                  onChange={(e) =>
                    setAddrForm((f) => ({ ...f, title: e.target.value }))
                  }
                />
              </div>

              <div className="mb-2">
                <label className={styles["field-label"]}>Fatura Türü*</label>
                <div className={styles["invoice-type"]}>
                  <button
                    type="button"
                    className={cn(
                      styles["invoice-type__btn"],
                      addrForm.type === "bireysel" &&
                        styles["invoice-type__btn--active"]
                    )}
                    onClick={() =>
                      setAddrForm((f) => ({ ...f, type: "bireysel" }))
                    }
                  >
                    Bireysel
                  </button>
                  <button
                    type="button"
                    className={cn(
                      styles["invoice-type__btn"],
                      addrForm.type === "kurumsal" &&
                        styles["invoice-type__btn--active"]
                    )}
                    onClick={() =>
                      setAddrForm((f) => ({ ...f, type: "kurumsal" }))
                    }
                  >
                    Kurumsal
                  </button>
                </div>
              </div>

              {addrForm.type === "kurumsal" && (
                <>
                  <div className="row">
                    <div className="col-6 mb-2">
                      <label className={styles["field-label"]}>
                        VKN/TCKN*
                      </label>
                      <input
                        className="form-control"
                        value={addrForm.vkn}
                        onChange={(e) =>
                          setAddrForm((f) => ({ ...f, vkn: e.target.value }))
                        }
                      />
                    </div>
                    <div className="col-6 mb-2">
                      <label className={styles["field-label"]}>
                        Vergi Dairesi*
                      </label>
                      <input
                        className="form-control"
                        value={addrForm.taxOffice}
                        onChange={(e) =>
                          setAddrForm((f) => ({
                            ...f,
                            taxOffice: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>

                  <div className="mb-2">
                    <label className={styles["field-label"]}>
                      Firma Adı*
                    </label>
                    <input
                      className="form-control"
                      value={addrForm.company}
                      onChange={(e) =>
                        setAddrForm((f) => ({ ...f, company: e.target.value }))
                      }
                    />
                  </div>
                </>
              )}
            </div>

            <div className={styles["addr-modal__foot"]}>
              <button
                type="button"
                className="btn btn-light border"
                onClick={() => setAddrModalOpen(false)}
              >
                Vazgeç
              </button>
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => {
                  // ŞİMDİLİK: sadece local state’e ekle, backend yok
                  if (
                    !addrForm.name ||
                    !addrForm.phone ||
                    !addrForm.city ||
                    !addrForm.district ||
                    !addrForm.line
                  ) {
                    alert("Lütfen zorunlu alanları doldurun.");
                    return;
                  }

                  const newAddr = {
                    ...addrForm,
                    id: Date.now().toString(),
                  };

                  setAddresses((list) => [...list, newAddr]);
                  setSelectedAddressId(newAddr.id);
                  setAddrModalOpen(false);
                  // formu sıfırlayalım
                  setAddrForm({
                    name: "",
                    phone: "",
                    city: "",
                    district: "",
                    line: "",
                    title: "",
                    type: "bireysel",
                    vkn: "",
                    taxOffice: "",
                    company: "",
                  });
                }}
              >
                Kaydet
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
