'use client';

import { useEffect, useState } from 'react';
import { useSession, signIn } from 'next-auth/react';

const PROVIDERS = {
  google:  { label: 'Google',  btn: 'btn-danger' },
  facebook:{ label: 'Facebook',btn: 'btn-primary' },
  apple:   { label: 'Apple',   btn: 'btn-dark' },
};

export default function LinkedAccountsPage() {
  const { status } = useSession({ required: true });
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState('');

  useEffect(() => {
    if (status !== 'authenticated') return;
    (async () => {
      setLoading(true);
      setErr('');
      const res = await fetch('/api/account', { method: 'GET' });
      if (res.ok) {
        const json = await res.json();
        setAccounts(json.accounts || []);
      } else {
        setErr('Hesaplar alınamadı.');
      }
      setLoading(false);
    })();
  }, [status]);

  const isLinked = (provider) => accounts.some(a => a.provider === provider);

  async function unlink(accountId) {
    if (!confirm('Bu bağlantıyı kaldırmak istiyor musun?')) return;
    const res = await fetch('/api/account', {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ accountId }),
    });
    if (res.ok) {
      setAccounts(prev => prev.filter(a => a.id !== accountId));
    } else {
      const j = await res.json().catch(()=>({message:'Hata'}));
      alert(j.message || 'Bağlantı kaldırılamadı.');
    }
  }

  if (status === 'loading' || loading) {
    return <div className="account-card">Yükleniyor…</div>;
  }

  return (
    <div className="account-card">
      <h1 className="h5 fw-bold mb-3">Bağlı Hesaplar</h1>
      {err && <div className="alert alert-danger">{err}</div>}

      {['google','facebook','apple'].map((p) => {
        const linked = isLinked(p);
        const acc = accounts.find(a => a.provider === p);
        return (
          <div key={p} className="d-flex align-items-center justify-content-between border rounded p-3 mb-2">
            <div>
              <div className="fw-semibold">{PROVIDERS[p].label}</div>
              <div className="small text-muted">
                {linked ? 'Bağlı' : 'Bağlı değil'}
                {linked && acc?.providerAccountId ? ` • ${acc.providerAccountId}` : ''}
              </div>
            </div>
            <div>
              {linked ? (
                <button className="btn btn-outline-secondary btn-sm" onClick={() => unlink(acc.id)}>
                  Bağlantıyı Kaldır
                </button>
              ) : (
                <button className={`btn btn-sm ${PROVIDERS[p].btn}`}
                        onClick={() => signIn(p, { callbackUrl: '/profil/hesaplar' })}>
                  {PROVIDERS[p].label}’ı Bağla
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
