
import { Card } from "@/components/ui/card";

const AGB = () => {
  return (
    <div className="min-h-screen bg-cookie-light py-12">
      <div className="container mx-auto px-4">
        <Card className="p-8 max-w-3xl mx-auto">
          <h1 className="text-3xl font-cookie text-cookie-secondary mb-6">Allgemeine Geschäftsbedingungen (AGB)</h1>
          
          <div className="space-y-4 text-cookie-dark">
            <section>
              <h2 className="text-xl font-semibold">§1 Geltungsbereich</h2>
              <p>Diese Allgemeinen Geschäftsbedingungen gelten für alle gegenwärtigen und zukünftigen Geschäftsbeziehungen zwischen Cookies AI Training und dem Nutzer.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">§2 Vertragsschluss</h2>
              <p>Der Vertrag kommt durch die Registrierung des Nutzers und die Annahme durch uns zustande.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">§3 Leistungsbeschreibung</h2>
              <p>Wir bieten eine KI-gestützte Lernplattform zur Verbesserung Ihrer Fähigkeiten.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">§4 Preise und Zahlungsbedingungen</h2>
              <p>Die Preise sind in Euro angegeben und enthalten die gesetzliche Mehrwertsteuer.</p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AGB;
