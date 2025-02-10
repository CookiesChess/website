
import { Card } from "@/components/ui/card";

const EULA = () => {
  return (
    <div className="min-h-screen bg-cookie-light py-12">
      <div className="container mx-auto px-4">
        <Card className="p-8 max-w-3xl mx-auto">
          <h1 className="text-3xl font-cookie text-cookie-secondary mb-6">End User License Agreement (EULA)</h1>
          
          <div className="space-y-4 text-cookie-dark">
            <section>
              <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
              <p>By accessing and using Cookies AI Training ("the Service"), you agree to be bound by this End User License Agreement.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">2. License Grant</h2>
              <p>Subject to your compliance with these terms, we grant you a limited, non-exclusive, non-transferable license to use the Service.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">3. Restrictions</h2>
              <p>You may not:</p>
              <ul className="list-disc pl-6">
                <li>Copy, modify, or distribute the Service</li>
                <li>Reverse engineer or attempt to extract the source code</li>
                <li>Use the Service for any illegal purpose</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold">4. Termination</h2>
              <p>We reserve the right to terminate your access to the Service at any time for any reason.</p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default EULA;
