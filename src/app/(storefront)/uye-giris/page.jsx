// app/(storefront)/uye-giris/page.jsx
import { Suspense } from "react";
import LoginClient from "./LoginClient";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="container py-5" style={{ maxWidth: 720 }}>
          <div className="text-muted">Yükleniyor…</div>
        </div>
      }
    >
      <LoginClient />
    </Suspense>
  );
}
