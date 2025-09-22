import ContactMap from "@/components/contact/ContactMap";
import ContactCards from "@/components/contact/ContactCards";

export const metadata = { title: "İletişim | İler Otomotiv" };

export default function ContactPage() {
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">İletişim</h1>

      <div className="row g-4">
        <div className="col-12">
          <ContactMap />
        </div>
      </div>

      <div className="mt-3">
        <ContactCards />
      </div>
    </div>
  );
}
