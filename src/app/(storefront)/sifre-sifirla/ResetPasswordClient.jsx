"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setStatus(null);
  }, [token]);

  if (!token) {
    return (
      <div className="container py-5" style={{ maxWidth: 480 }}>
        <h1 className="h4 mb-3">Şifre Sıfırlama</h1>
        <div className="alert alert-danger">
          Geçersiz bağlantı. Lütfen yeni bir şifre sıfırlama isteği oluşturun.
        </div>
      </div>
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    if (password !== password2) {
      setStatus({ type: "error", message: "Şifreler eşleşmiyor." });
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("token", token);
      formData.append("password", password);
      formData.append("password2", password2);

      const res = await fetch("/api/auth/reset", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus({ type: "error", message: data.message || "Hata oluştu." });
      } else {
        setStatus({
          type: "success",
          message: data.message || "Şifreniz başarıyla güncellendi.",
        });

        // Birkaç saniye sonra login sayfasına yönlendirebilirsin
        setTimeout(() => {
          router.push("/uye-giris");
        }, 2500);
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", message: "Sunucu hatası." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container py-5" style={{ maxWidth: 480 }}>
      <h1 className="h4 mb-3">Şifre Sıfırlama</h1>
      <p className="small text-muted mb-4">
        Yeni şifrenizi belirleyin. Güçlü bir şifre kullanmanızı öneririz.
      </p>

      <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
        <div>
          <label className="form-label">Yeni şifre</label>
          <input
            type="password"
            className="form-control"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label className="form-label">Yeni şifre (tekrar)</label>
          <input
            type="password"
            className="form-control"
            required
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-danger w-100"
          disabled={loading}
        >
          {loading ? "Kaydediliyor..." : "Şifreyi Güncelle"}
        </button>

        {status && (
          <div
            className={`alert mt-3 ${
              status.type === "success" ? "alert-success" : "alert-danger"
            }`}
          >
            {status.message}
          </div>
        )}
      </form>
    </div>
  );
}
