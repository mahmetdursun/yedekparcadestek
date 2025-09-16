export default function AddressesPage() {
  const items = []; // TODO: API’den getir

  return (
    <div className="account-card">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h1 className="h5 fw-bold m-0">Adreslerim</h1>
        <button className="btn btn-danger btn-sm">Yeni Adres</button>
      </div>

      {items.length === 0 ? (
        <div className="text-muted py-5 text-center">Kayıtlı adresiniz yok.</div>
      ) : (
        <div className="row g-3">
          {items.map((a) => (
            <div className="col-12 col-md-6" key={a.id}>
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="fw-semibold">{a.title}</div>
                  <div className="small text-muted">{a.full}</div>
                  <div className="mt-2 d-flex gap-2">
                    <button className="btn btn-light border btn-sm">Düzenle</button>
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
