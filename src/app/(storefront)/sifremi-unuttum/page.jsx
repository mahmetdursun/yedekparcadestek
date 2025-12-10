"use client";

import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', message: '' }
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("email", email);

      const res = await fetch("/api/auth/forgot", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) {
        setStatus({ type: "error", message: data.message || "Hata oluştu." });
      } else {
        setStatus({
          type: "success",
          message:
            data.message ||
            "Eğer e-posta kayıtlı ise, şifre sıfırlama linki gönderildi.",
        });
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
      <h1 className="h4 mb-3">Şifremi Unuttum</h1>
      <p className="small text-muted mb-4">
        Hesabınıza kayıtlı e-posta adresinizi girin. Eğer sistemde kayıtlı ise
        şifre sıfırlama bağlantısı gönderilecektir.
      </p>

      <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
        <div>
          <label className="form-label">E-posta</label>
          <input
            type="email"
            className="form-control"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-danger w-100"
          disabled={loading}
        >
          {loading ? "Gönderiliyor..." : "Şifre Sıfırlama Linki Gönder"}
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
