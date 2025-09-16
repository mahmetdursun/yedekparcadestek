"use client";

import { useEffect, useMemo, useState } from "react";
import { useSession } from "next-auth/react";
import styles from "./style.module.scss";

export default function ProfileInfoPage() {
  const { data: session } = useSession();
  const emailFromSession = session?.user?.email || "";

  const [form, setForm] = useState({
    email: emailFromSession,
    name: "",
    phone: "",
    birthDate: "", // yyyy-mm-dd
  });
  const [saving, setSaving] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [msg, setMsg] = useState({ type: "", text: "" });

  // ilk yüklemede mevcut verileri çek
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch("/api/profile", { cache: "no-store" });
        if (!res.ok) throw new Error("Profil bilgileri alınamadı.");
        const { user } = await res.json();
        if (!mounted) return;

        const birth = user?.birthDate ? new Date(user.birthDate) : null;
        setForm({
          email: user?.email || emailFromSession,
          name: user?.name || "",
          phone: user?.phone || "",
          birthDate: birth ? birth.toISOString().slice(0, 10) : "",
        });
        setLoaded(true);
      } catch (e) {
        setMsg({ type: "error", text: e.message || "Bir hata oluştu." });
        setLoaded(true);
      }
    })();
    return () => (mounted = false);
  }, [emailFromSession]);

  const canSave = useMemo(() => {
    if (!loaded || saving) return false;
    // minimal doğrulamalar
    if (form.phone && !/^[0-9+()\s-]{6,}$/.test(form.phone)) return false;
    if (form.birthDate && Number.isNaN(new Date(form.birthDate).valueOf())) return false;
    return true;
  }, [form, loaded, saving]);

  async function onSubmit(e) {
    e.preventDefault();
    if (!canSave) return;
    setSaving(true);
    setMsg({ type: "", text: "" });

    try {
      const res = await fetch("/api/profile", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          birthDate: form.birthDate, // boş string gelirse API null yapıyor
        }),
      });
      if (!res.ok) throw new Error("Kaydedilemedi.");
      setMsg({ type: "ok", text: "Bilgileriniz güncellendi." });
    } catch (e) {
      setMsg({ type: "error", text: e.message || "Bir hata oluştu." });
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className={styles.profile}>
      <form className={`${styles["profile__card"]} card shadow-sm`} onSubmit={onSubmit}>
        <div className="card-body">
          <div className={styles["profile__grid"]}>
            {/* Email - readonly */}
            <div className={styles["profile__field"]}>
              <label className={styles["profile__label"]}>E-posta</label>
              <input
                className={`form-control ${styles["profile__input"]}`}
                value={form.email}
                readOnly
              />
              <div className={styles["profile__hint"]}>
                Giriş yaptığınız e-posta adresi. Değiştirmek için bağlı hesaplarınızı düzenleyin.
              </div>
            </div>

            {/* Ad Soyad */}
            <div className={styles["profile__field"]}>
              <label className={styles["profile__label"]}>Ad Soyad</label>
              <input
                className={`form-control ${styles["profile__input"]}`}
                value={form.name}
                onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
                placeholder="Adınız ve soyadınız"
              />
            </div>

            {/* Cep Telefonu */}
            <div className={styles["profile__field"]}>
              <label className={styles["profile__label"]}>Cep Telefonu</label>
              <input
                className={`form-control ${styles["profile__input"]}`}
                value={form.phone}
                onChange={(e) => setForm(f => ({ ...f, phone: e.target.value }))}
                placeholder="+90 5xx xxx xx xx"
                inputMode="tel"
              />
              <div className={styles["profile__hint"]}>Kargo ve destek için kullanılabilir.</div>
            </div>

            {/* Doğum Tarihi */}
            <div className={styles["profile__field"]}>
              <label className={styles["profile__label"]}>Doğum Tarihi</label>
              <input
                type="date"
                className={`form-control ${styles["profile__input"]}`}
                value={form.birthDate}
                onChange={(e) => setForm(f => ({ ...f, birthDate: e.target.value }))}
              />
            </div>
          </div>
        </div>

        <div className={`card-footer bg-transparent ${styles["profile__actions"]}`}>
          <button className="btn btn-danger" disabled={!canSave}>
            {saving ? "Kaydediliyor…" : "Bilgileri Kaydet"}
          </button>
          {msg.text && (
            <span
              className={
                msg.type === "ok"
                  ? `ms-3 text-success ${styles["profile__msg"]}`
                  : `ms-3 text-danger ${styles["profile__msg"]}`
              }
            >
              {msg.text}
            </span>
          )}
        </div>
      </form>
    </div>
  );
}
