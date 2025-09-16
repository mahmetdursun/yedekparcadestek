export default function CardsPage() {
  const cards = []; // TODO: API’den getir

  return (
    <div className="account-card">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h1 className="h5 fw-bold m-0">Kayıtlı Kartlar</h1>
        <button className="btn btn-danger btn-sm">Kart Ekle</button>
      </div>

      {cards.length === 0 ? (
        <div className="text-muted py-5 text-center">Kayıtlı kartınız yok.</div>
      ) : (
        <div className="row g-3">
          {cards.map((c) => (
            <div className="col-12 col-md-6" key={c.id}>
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="fw-semibold">{c.mask}</div>
                  <div className="small text-muted">{c.holder}</div>
                  <div className="mt-2 d-flex gap-2">
                    <button className="btn btn-light border btn-sm">Varsayılan Yap</button>
                    <button className="btn btn-outline-danger btn-sm">Sil</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
