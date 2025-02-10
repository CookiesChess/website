
import { Card } from "@/components/ui/card";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-cookie-light py-12">
      <div className="container mx-auto px-4">
        <Card className="p-8 max-w-3xl mx-auto">
          <h1 className="text-3xl font-cookie text-cookie-secondary mb-6">Impressum</h1>
          
          <section className="space-y-4 text-cookie-dark">
            <h2 className="text-xl font-semibold">Angaben gemäß § 5 TMG</h2>
            <p>[Company Name]</p>
            <p>[Street Address]</p>
            <p>[Postal Code, City]</p>
            <p>Germany</p>

            <h2 className="text-xl font-semibold mt-6">Kontakt</h2>
            <p>Telefon: [Phone Number]</p>
            <p>E-Mail: [Email Address]</p>

            <h2 className="text-xl font-semibold mt-6">Handelsregister</h2>
            <p>Handelsregisternummer: [Number]</p>
            <p>Registergericht: [Court]</p>

            <h2 className="text-xl font-semibold mt-6">Umsatzsteuer-ID</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:</p>
            <p>[VAT ID]</p>

            <h2 className="text-xl font-semibold mt-6">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>[Responsible Person]</p>
            <p>[Address]</p>
          </section>
        </Card>
      </div>
    </div>
  );
};

export default Impressum;
