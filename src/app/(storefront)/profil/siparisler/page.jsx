import styles from "../style.module.scss";

export default function OrdersPage() {
  // TODO: API’den siparişleri çek
  const rows = [];

  return (
    <div className="account-card">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h1 className="h5 fw-bold m-0">Siparişler</h1>
      </div>

      {rows.length === 0 ? (
        <div className="text-muted py-5 text-center">Henüz siparişiniz yok.</div>
      ) : (
        <div className="table-responsive">
          <table className={styles["table-lite"]}>
            <thead>
              <tr>
                <th>#No</th>
                <th>Tarih</th>
                <th>Tutar</th>
                <th>Durum</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id}>
                  <td>{r.code}</td>
                  <td>{r.date}</td>
                  <td>{r.total} TL</td>
                  <td>{r.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
