
import { Card } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-cookie-light py-12">
      <div className="container mx-auto px-4">
        <Card className="p-8 max-w-3xl mx-auto">
          <h1 className="text-3xl font-cookie text-cookie-secondary mb-6">Datenschutzerklärung</h1>
          
          <div className="space-y-4 text-cookie-dark">
            <section>
              <h2 className="text-xl font-semibold">1. Datenschutz auf einen Blick</h2>
              <p>Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zwecke der Verarbeitung von personenbezogenen Daten innerhalb unseres Onlineangebotes auf.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">2. Verantwortlicher</h2>
              <p>[Company Name]</p>
              <p>[Address]</p>
              <p>Email: [Email]</p>
              <p>Tel: [Phone]</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">3. Arten der verarbeiteten Daten</h2>
              <ul className="list-disc pl-6">
                <li>Bestandsdaten (z.B., Namen, Adressen)</li>
                <li>Kontaktdaten (z.B., E-Mail, Telefonnummern)</li>
                <li>Nutzungsdaten (z.B., besuchte Webseiten, Interesse an Inhalten)</li>
                <li>Meta-/Kommunikationsdaten (z.B., Geräte-Informationen, IP-Adressen)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold">4. Zweck der Verarbeitung</h2>
              <p>Bereitstellung des Onlineangebotes, seiner Funktionen und Inhalte
                Beantwortung von Kontaktanfragen und Kommunikation mit Nutzern
                Sicherheitsmaßnahmen
                Reichweitenmessung/Marketing</p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Privacy;
