// app/(storefront)/marka/[brand]/[[...model]]/loading.jsx
export default function Loading() {
  return (
    <div className="container-fluid my-3">
      <div className="d-flex gap-3">
        <aside style={{width:260}} className="p-3 border rounded-3">
          <div className="placeholder-glow mb-2">
            <span className="placeholder col-6"></span>
          </div>
          {[...Array(8)].map((_,i)=>(
            <div key={i} className="placeholder-glow mb-1">
              <span className="placeholder col-10"></span>
            </div>
          ))}
        </aside>
        <main className="flex-fill">
          <div className="d-flex justify-content-between mb-2">
            <span className="placeholder col-3"></span>
            <span className="placeholder col-2"></span>
          </div>
          <div className="row g-3">
            {[...Array(8)].map((_,i)=>(
              <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="border rounded-3 p-3">
                  <div className="placeholder col-12 mb-2" style={{height:120}}></div>
                  <div className="placeholder col-8 mb-1"></div>
                  <div className="placeholder col-6"></div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
