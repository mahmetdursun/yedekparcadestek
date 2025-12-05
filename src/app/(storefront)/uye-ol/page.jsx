'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

function scorePassword(pw = '') {
  // çok basit bir güç skoru (frontend); asıl kontrol backend’de olmalı
  let s = 0;
  if (pw.length >= 8) s++;
  if (/[A-ZÇĞİÖŞÜ]/.test(pw)) s++;
  if (/[a-zçğıöşü]/.test(pw)) s++;
  if (/\d/.test(pw)) s++;
  if (/[^A-Za-z0-9]/.test(pw)) s++;
  return Math.min(s, 4);
}

export default function SignUpPage() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [pw, setPw] = useState('');
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');
  const [ok, setOk] = useState('');

  const strength = useMemo(() => scorePassword(pw), [pw]);
  const bars = ['bg-danger','bg-warning','bg-info','bg-success'];

  async function onSubmit(e) {
    e.preventDefault();
    setErr('');
    setOk('');
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: form,
    });

    if (res.ok) {
      setOk('Kayıt tamamlandı. Giriş ekranına yönlendiriliyorsunuz…');
      setTimeout(() => (window.location.href = '/uye-giris'), 1200);
    } else {
      const { message } = await res.json().catch(() => ({ message: 'Hata' }));
      setErr(message || 'Kayıt başarısız.');
      setLoading(false);
    }
  }

  return (
    <div className="container py-5" style={{ maxWidth: 720 }}>
      <h1 className="h3 fw-bold mb-4">Üye Ol</h1>

      <form className="card p-4 shadow-sm" onSubmit={onSubmit}>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Ad *</label>
            <input name="firstName" required className="form-control" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Soyad *</label>
            <input name="lastName" required className="form-control" />
          </div>
          <div className="col-12">
            <label className="form-label">E-posta *</label>
            <input name="email" type="email" required className="form-control" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Şifre *</label>
            <div className="input-group">
              <input
                name="password"
                type={show1 ? 'text' : 'password'}
                required
                minLength={8}
                className="form-control"
                onChange={(e) => setPw(e.target.value)}
                placeholder="En az 8 karakter"
              />
              <button type="button" className="btn btn-outline-secondary" onClick={() => setShow1(s=>!s)}>
                {show1 ? 'Gizle' : 'Göster'}
              </button>
            </div>
            {/* güç göstergesi */}
            <div className="progress mt-2" style={{height: 6}}>
              {[0,1,2,3].map(i=>(
                <div key={i}
                  className={`progress-bar ${i < strength ? bars[strength-1] : 'bg-light'}`}
                  style={{width:'25%'}} />
              ))}
            </div>
            <div className="form-text">
              Büyük/küçük harf, rakam ve sembol kullan.
            </div>
          </div>
          <div className="col-md-6">
            <label className="form-label">Şifre Tekrar *</label>
            <div className="input-group">
              <input name="password2" type={show2 ? 'text' : 'password'} required minLength={8} className="form-control" />
              <button type="button" className="btn btn-outline-secondary" onClick={() => setShow2(s=>!s)}>
                {show2 ? 'Gizle' : 'Göster'}
              </button>
            </div>
          </div>

          <div className="col-12">
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="terms" name="terms" required />
              <label className="form-check-label" htmlFor="terms">
                <Link href="/uyelik-sozlesmesi">Üyelik Sözleşmesi</Link>’ni okudum ve kabul ediyorum.
              </label>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="kvkk" name="kvkk" required />
              <label className="form-check-label" htmlFor="kvkk">
                <Link href="/kvkk">KVKK Aydınlatma Metni</Link>’ni okudum ve kabul ediyorum.
              </label>
            </div>
          </div>

          {/* reCAPTCHA placeholder */}
          <input type="hidden" name="g-recaptcha-response" value="" />

          {err && <div className="alert alert-danger py-2">{err}</div>}
          {ok && <div className="alert alert-success py-2">{ok}</div>}

          <div className="d-grid gap-2">
            <button className="btn btn-danger" disabled={loading}>
              {loading ? 'Kaydediliyor…' : 'KAYIT OL'}
            </button>
            <Link href="/uye-giris" className="btn btn-outline-secondary">Zaten hesabım var</Link>
          </div>

          <div className="text-center text-muted my-3">veya</div>
          <div className="d-flex justify-content-center gap-3 pb-2">
            <button type="button" className="btn btn-light border">Facebook</button>
            <button type="button" className="btn btn-light border">Google</button>
          </div>
        </div>
      </form>
    </div>
  );
}
