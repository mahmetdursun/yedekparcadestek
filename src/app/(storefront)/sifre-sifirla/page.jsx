import { Suspense } from "react";
import ResetPasswordClient from "./ResetPasswordClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="container py-5">Yükleniyor...</div>}>
      <ResetPasswordClient />
    </Suspense>
  );
}

 