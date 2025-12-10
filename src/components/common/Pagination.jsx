"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Pagination({ totalItems, page, pageSize }) {
  const pathname = usePathname();
  const router = useRouter();
  const sp = useSearchParams();

  const totalPages = Math.ceil(totalItems / pageSize);
  if (!totalPages || totalPages <= 1) return null;

  const currentPage = Math.min(Math.max(page || 1, 1), totalPages);

  const goToPage = (p) => {
    const u = new URLSearchParams(sp.toString());
    if (p > 1) u.set("page", String(p));
    else u.delete("page");
    router.push(`${pathname}?${u.toString()}`, { scroll: false });
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) pages.push(i);

  return (
    <nav className="mt-4 d-flex justify-content-center">
      <ul className="pagination pagination-sm">

        {/* === İlk & Geri === */}
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button className="page-link" onClick={() => goToPage(1)}>
            İlk
          </button>
        </li>

        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button className="page-link" onClick={() => goToPage(currentPage - 1)}>
            Geri
          </button>
        </li>

        {/* === Sayfa numaraları === */}
        {pages.map((p) => (
          <li key={p} className={`page-item ${p === currentPage ? "active" : ""}`}>
            <button className="page-link" onClick={() => goToPage(p)}>
              {p}
            </button>
          </li>
        ))}

        {/* === İleri & Son === */}
        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
          <button className="page-link" onClick={() => goToPage(currentPage + 1)}>
            İleri
          </button>
        </li>

        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
          <button className="page-link" onClick={() => goToPage(totalPages)}>
            Son
          </button>
        </li>

      </ul>
    </nav>
  );
}
