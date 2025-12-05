"use client";

import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Image from "next/image";
import cn from "classnames";
import { useRouter } from "next/navigation"; // ← EKLE

import {
  selectItems,
  selectSubtotal,
  selectKdv,
  selectTotal,
  inc,
  dec,
  removeItem,
  clearCart,
} from "@/store/slices/cartSlice";

import {
  FiShoppingCart,
  FiMapPin,
  FiCreditCard,
  FiFlag,
  FiChevronRight,
  FiAlertCircle,
  FiTruck,
  FiTag,
  FiMessageSquare,
  FiTrash2,
} from "react-icons/fi";

import ConfirmDialog from "@/components/ui/ConfirmDialog/ConfirmDialog";
import styles from "./style.module.scss";

const FREE_SHIPPING_THRESHOLD = 3679.52; // örnek eşik

export default function CartPage() {
  const items = useSelector(selectItems);
  const subtotal = useSelector(selectSubtotal); // KDV dahil
  const kdv = useSelector(selectKdv);
  const total = useSelector(selectTotal);
  const dispatch = useDispatch();
  const router = useRouter();

  const empty = items.length === 0;

  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD || empty ? 0 : 139.9; // örnek kargo
  const grandTotal = total + (empty ? 0 : shipping);

  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className={cn("container", styles["cart-page"])}>
      {/* Üst başlık + stepper */}
      <header className={styles["cart-page__head"]}>
        <div>
          <div className="small text-muted mb-1">Anasayfa / Sepetim</div>
          <h1 className="h4 fw-bold mb-0">Sepetim</h1>
        </div>

        <div className={styles["cart-page__head-right"]}>
          <button className="btn btn-outline-secondary btn-sm">
            Alışverişe Devam Et
          </button>

          <div className={styles["cart-steps"]}>
            <div
              className={cn(
                styles["cart-steps__step"],
                styles["cart-steps__step--active"]
              )}
            >
              <FiShoppingCart className={styles["cart-steps__icon"]} />
              <span>Sepet</span>
            </div>

            <FiChevronRight className={styles["cart-steps__arrow"]} />

            <div className={styles["cart-steps__step"]}>
              <FiCreditCard className={styles["cart-steps__icon"]} />
              <span>Ödeme</span>
            </div>

            <FiChevronRight className={styles["cart-steps__arrow"]} />

            <div className={styles["cart-steps__step"]}>
              <FiFlag className={styles["cart-steps__icon"]} />
              <span>Tamamlandı</span>
            </div>
          </div>
        </div>
      </header>

      {/* Uyarı barları */}
      <div className={styles["cart-page__alerts"]}>
        <div className={styles["cart-alert"]}>
          <FiAlertCircle className={styles["cart-alert__icon--warn"]} />
          <span>
            Sepetinizde farklı tedarik tarihli ürünler bulunmaktadır. En geç{" "}
            <strong>21 Kasım Cuma</strong> günü kargoya teslim edilecektir.
          </span>
        </div>

        <div className={styles["cart-alert--green"]}>
          <FiTruck className={styles["cart-alert__icon--truck"]} />
          {remaining > 0 ? (
            <span>
              Sepetinize <strong>{remaining.toLocaleString("tr-TR")} TL</strong>{" "}
              değerinde ürün eklerseniz <strong>KARGO BEDAVA!</strong>
            </span>
          ) : (
            <span>
              Sepetiniz <strong>KARGO BEDAVA!</strong>
            </span>
          )}
        </div>
      </div>

      {/* Ana grid: sol (ürünler) / sağ (özet) */}
      <div className="row">
        <div className="col-12 col-lg-8">
          <section className={styles["cart-box"]}>
            {empty ? (
              <div className="text-center text-muted py-5">Sepetiniz boş.</div>
            ) : (
              <>
                {items.map((it) => (
                  <article key={it.id} className={styles["cart-line"]}>
                    {/* ürün görseli */}
                    <div className={styles["cart-line__img"]}>
                      <Image
                        src={it.img || "/vercel.svg"}
                        alt={it.title}
                        fill
                        sizes="120px"
                      />
                    </div>

                    {/* ürün bilgileri */}
                    <div className={styles["cart-line__info"]}>
                      <div className={styles["cart-line__title"]}>
                        {it.title}
                      </div>
                      {it.brand && (
                        <div className="small text-muted">{it.brand}</div>
                      )}

                      <div className={styles["cart-line__qty-row"]}>
                        <div className={styles["cart-line__qty"]}>
                          <button
                            className={cn(
                              "btn btn-sm",
                              styles["cart-line__qty-btn"]
                            )}
                            onClick={() => dispatch(dec(it.id))}
                            aria-label="Adet azalt"
                          >
                            −
                          </button>
                          <span className={styles["cart-line__qty-value"]}>
                            {it.qty}
                          </span>
                          <button
                            className={cn(
                              "btn btn-sm",
                              styles["cart-line__qty-btn"]
                            )}
                            onClick={() => dispatch(inc(it.id))}
                            aria-label="Adet arttır"
                          >
                            +
                          </button>
                          <span className={styles["cart-line__unit"]}>
                            Adet
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className={styles["cart-line__price-col"]}>
                      <div className={styles["cart-line__price"]}>
                        {(it.price * it.qty).toLocaleString("tr-TR")} TL
                      </div>

                      <button
                        className={styles["cart-line__remove"]}
                        onClick={() => dispatch(removeItem(it.id))}
                      >
                        <FiTrash2 /> <span>Sil</span>
                      </button>
                    </div>
                  </article>
                ))}

                <div className={styles["cart-box__bottom"]}>
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => setConfirmOpen(true)}
                  >
                    <FiTrash2 className="me-1" />
                    Sepeti Boşalt
                  </button>
                </div>
              </>
            )}
          </section>
        </div>

        {/* Sağ taraf: sipariş özeti + kupon / not kutuları */}
        <div className="col-12 col-lg-4 mt-3 mt-lg-0">
          <aside className={styles["cart-summary"]}>
            <div className={styles["cart-summary__head"]}>Sipariş Özeti</div>

            <div className={styles["cart-summary__rows"]}>
              <div className={styles["cart-summary__row"]}>
                <span>Ara Toplam</span>
                <strong>{subtotal.toLocaleString("tr-TR")} TL</strong>
              </div>
              <div className={styles["cart-summary__row"]}>
                <span>KDV</span>
                <strong>{kdv.toLocaleString("tr-TR")} TL</strong>
              </div>
              <div className={styles["cart-summary__row"]}>
                <span>Kargo</span>
                <strong>
                  {shipping === 0
                    ? "0 TL"
                    : shipping.toLocaleString("tr-TR") + " TL"}
                </strong>
              </div>
            </div>

            <div className={styles["cart-summary__total"]}>
              <span>Toplam</span>
              <strong>{grandTotal.toLocaleString("tr-TR")} TL</strong>
            </div>

            <button
              className={styles["cart-summary__primary"]}
              disabled={empty}
              onClick={() => {
                if (!empty) router.push("/odeme");
              }}
            >
              Sepeti Onayla
            </button>
          </aside>

          <div className={styles["cart-extra"]}>
            <button className={styles["cart-extra__row"]}>
              <div>
                <FiTag className={styles["cart-extra__icon"]} />
                <span>Kupon Kullan</span>
              </div>
              <span className={styles["cart-extra__chevron"]}>›</span>
            </button>

            <button className={styles["cart-extra__row"]}>
              <div>
                <FiMessageSquare className={styles["cart-extra__icon"]} />
                <span>Sipariş Notu Ekle</span>
              </div>
              <span className={styles["cart-extra__chevron"]}>›</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sepeti boşalt onayı */}
      <ConfirmDialog
        open={confirmOpen}
        title="Sepeti Boşalt"
        message="Sepeti tamamen boşaltmak istiyor musunuz?"
        confirmText="Evet, boşalt"
        cancelText="Vazgeç"
        onConfirm={() => {
          dispatch(clearCart());
          setConfirmOpen(false);
        }}
        onClose={() => setConfirmOpen(false)}
      />
    </div>
  );
}
