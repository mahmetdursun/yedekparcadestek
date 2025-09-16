export default function ProfileHomePage() {
  return (
    <div className="account-card">
      <h1 className="h5 fw-bold mb-3">Genel Bakış</h1>

      <div className="row g-3">
        <div className="col-12 col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="small text-muted">Toplam Sipariş</div>
              <div className="fs-4 fw-bold">0</div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="small text-muted">Toplam Harcama</div>
              <div className="fs-4 fw-bold">0 TL</div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="small text-muted">Bekleyen Kargolar</div>
              <div className="fs-4 fw-bold">0</div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-muted small mt-3 mb-0">
        Bu alanı; son siparişler, favori ürünler vb. ile zenginleştiririz.
      </p>
    </div>
  );
}
