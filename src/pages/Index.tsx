
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Calendar, Cookie, Star, Trophy } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const Index = () => {
  const handleSubscribe = async (priceId: 'monthly' | 'annual') => {
    try {
      toast.loading("Preparing checkout...");
      const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '');
      if (!stripe) {
        throw new Error('Stripe failed to initialize');
      }

      const { data, error } = await supabase.functions.invoke('create-checkout-session', {
        body: { priceId },
      });

      if (error) {
        throw error;
      }

      const result = await stripe.redirectToCheckout({
        sessionId: data.id,
      });

      if (result.error) {
        toast.error(result.error.message || 'Something went wrong');
      }
    } catch (error) {
      toast.error('Failed to initiate checkout');
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-cookie-light">
      <section className="relative h-screen flex items-center justify-center chess-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 to-white/80" />
        <div className="container mx-auto px-4 z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="animate-float">
              <img 
                src="/lovable-uploads/4457da79-9e36-4e43-9771-485545ae9043.png" 
                alt="Cookies Logo" 
                className="w-24 h-24 mx-auto mb-6"
              />
            </div>
            <h1 className="font-cookie text-6xl md:text-7xl mb-6 bg-gradient-to-r from-cookie-secondary to-cookie-accent bg-clip-text text-transparent">
              Cookies AI Training
            </h1>
            <p className="text-xl md:text-2xl text-cookie-dark mb-8">
              Your personal AI trainer, making you smarter one bite at a time
            </p>
            <Button 
              onClick={() => handleSubscribe('monthly')}
              className="bg-cookie-primary hover:bg-cookie-accent text-white px-8 py-6 rounded-lg text-lg transition-all duration-300 hover:scale-105"
            >
              Start Training Now
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-cookie text-center mb-16 text-cookie-secondary">
            Master Your Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Star className="w-8 h-8" />}
              title="Smart Learning"
              description="Master concepts through AI-powered practice sessions"
            />
            <FeatureCard
              icon={<Brain className="w-8 h-8" />}
              title="Progress Analysis"
              description="Deep analysis of your learning to identify patterns and improve weaknesses"
            />
            <FeatureCard
              icon={<Calendar className="w-8 h-8" />}
              title="Daily Practice"
              description="Personalized daily exercises based on your learning history"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-cookie-light">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-cookie text-center mb-16 text-cookie-secondary">
            Simple Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingCard
              title="Monthly"
              price="2.99"
              period="month"
              features={[
                "Full access to AI trainer",
                "Personalized learning path",
                "Daily challenges",
                "Progress tracking",
              ]}
              onSubscribe={() => handleSubscribe('monthly')}
            />
            <PricingCard
              title="Annual"
              price="30"
              period="year"
              features={[
                "Everything in monthly",
                "Save 16%",
                "Priority support",
                "Advanced statistics",
              ]}
              highlighted
              onSubscribe={() => handleSubscribe('annual')}
            />
          </div>
        </div>
      </section>

      <footer className="bg-cookie-secondary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <Cookie className="w-8 h-8 mx-auto mb-4" />
          <p className="text-cookie-light">
            © {new Date().getFullYear()} Cookies AI Training. All rights reserved.
          </p>
          <p className="text-sm mt-4 text-cookie-light/80">
            Cookie icon credit: Image by <a href="https://pixabay.com/users/diosk2k-9406755/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=6116766" className="underline">Diosk2k</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=6116766" className="underline">Pixabay</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-none">
    <div className="text-cookie-primary mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-cookie-secondary">{title}</h3>
    <p className="text-cookie-dark">{description}</p>
  </Card>
);

const PricingCard = ({
  title,
  price,
  period,
  features,
  highlighted = false,
  onSubscribe,
}: {
  title: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
  onSubscribe: () => void;
}) => (
  <Card
    className={`p-8 text-center transition-transform duration-300 hover:scale-105 ${
      highlighted ? "border-2 border-cookie-primary shadow-lg" : ""
    }`}
  >
    <h3 className="text-2xl font-cookie mb-2 text-cookie-secondary">{title}</h3>
    <div className="mb-6">
      <span className="text-4xl font-bold text-cookie-secondary">€{price}</span>
      <span className="text-cookie-dark">/{period}</span>
    </div>
    <ul className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="text-cookie-dark flex items-center justify-center">
          <Cookie className="w-4 h-4 mr-2 text-cookie-primary" />
          {feature}
        </li>
      ))}
    </ul>
    <Button
      onClick={onSubscribe}
      className={`w-full ${
        highlighted
          ? "bg-cookie-primary hover:bg-cookie-accent text-white"
          : "bg-cookie-secondary hover:bg-cookie-dark text-white"
      }`}
    >
      Get Started
    </Button>
  </Card>
);

export default Index;
