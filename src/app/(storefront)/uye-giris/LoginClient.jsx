"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";

// NextAuth hata kodlarını çeviri
const ERROR_MAP = {
  OAuthAccountNotLinked:
    "Bu e-posta başka bir giriş yöntemiyle zaten bağlı. Önce o yöntemle giriş yapın, sonra Profil → Bağlı Hesaplar'dan Google/FB ekleyin.",
  OAuthCreateAccount:
    "Sosyal giriş sırasında hesap oluşturulamadı. Birkaç dakika sonra tekrar deneyin.",
  CredentialsSignin: "E-posta veya şifre hatalı.",
  AccessDenied: "Erişim reddedildi.",
};

export default function LoginClient() {
  const params = useSearchParams();
  const router = useRouter();

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [localErr, setLocalErr] = useState("");

  // URL ?error okuma
  const providerErr = params.get("error");
  const errorMsg = useMemo(() => {
    if (localErr) return localErr;
    if (providerErr && ERROR_MAP[providerErr]) return ERROR_MAP[providerErr];
    if (providerErr) return "Giriş sırasında bir sorun oluştu.";
    return "";
  }, [localErr, providerErr]);

  async function onSubmit(e) {
    e.preventDefault();
    setLocalErr("");
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const res = await signIn("credentials", {
      redirect: false,
      email: form.get("email"),
      password: form.get("password"),
    });

    if (res?.error) {
      setLocalErr(ERROR_MAP[res.error] || "E-posta veya şifre hatalı.");
      setLoading(false);
      return;
    }
    router.push("/");
  }

  const callbackUrl = "/";

  return (
    <div className="container py-5" style={{ maxWidth: 720 }}>
      <h1 className="h3 fw-bold mb-4">Giriş Yap</h1>

      <form className="card p-4 shadow-sm" onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">E-posta</label>
          <input
            name="email"
            type="email"
            required
            className="form-control"
            placeholder="ornek@site.com"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Şifre</label>
          <div className="input-group">
            <input
              name="password"
              type={show ? "text" : "password"}
              required
              minLength={8}
              className="form-control"
              placeholder="••••••••"
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setShow((s) => !s)}
              aria-label="Şifreyi göster/gizle"
            >
              {show ? "Gizle" : "Göster"}
            </button>
          </div>

          <div className="d-flex justify-content-between mt-1 small">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="remember" name="remember" />
              <label className="form-check-label" htmlFor="remember">Beni hatırla</label>
            </div>
            <p className="mt-3 text-center">
              <a href="/sifremi-unuttum" className="small">
                Şifremi unuttum
              </a>
            </p>
          </div>
        </div>

        {errorMsg && <div className="alert alert-warning py-2">{errorMsg}</div>}

        <div className="d-grid gap-2">
          <button className="btn btn-danger" disabled={loading}>
            {loading ? "Giriş yapılıyor…" : "GİRİŞ YAP"}
          </button>
          <Link href="/uye-ol" className="btn btn-outline-secondary">ÜYE KAYIT</Link>
        </div>

        <div className="text-center text-muted my-3">veya</div>

        <div className="d-flex justify-content-center gap-3">
          <button type="button" className="btn btn-light border" onClick={() => signIn("google", { callbackUrl })}>
            Google
          </button>
        </div>
      </form>
    </div>
  );
}
