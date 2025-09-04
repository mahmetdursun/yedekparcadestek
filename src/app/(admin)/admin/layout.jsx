export default function AdminLayout({ children }) {
  return (
    <section className="container py-4">
      <h1 className="h4 mb-3">Admin</h1>
      {children}
    </section>
  );
}
