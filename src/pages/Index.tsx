
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Calendar, ChessKnight as Knight, ChessKing as King, ChessQueen as Queen, Trophy } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-chess-gray-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center chess-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 to-white/80" />
        <div className="container mx-auto px-4 z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="animate-float">
              <Knight className="w-16 h-16 mx-auto mb-6 text-chess-black" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-chess-black to-chess-gray-700 bg-clip-text text-transparent">
              BnW Chess Training
            </h1>
            <p className="text-xl md:text-2xl text-chess-gray-600 mb-8">
              Your personal AI chess trainer, tailored to your unique playing style
            </p>
            <Button className="bg-chess-black hover:bg-chess-gray-800 text-white px-8 py-6 rounded-lg text-lg transition-all duration-300 hover:scale-105">
              Start Training Now
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-chess-gray-800">
            Master Your Game
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<King className="w-8 h-8" />}
              title="Opening Mastery"
              description="Master your openings through spaced repetition and AI-powered practice sessions"
            />
            <FeatureCard
              icon={<Brain className="w-8 h-8" />}
              title="Game Analysis"
              description="Deep analysis of your games to identify patterns and improve weaknesses"
            />
            <FeatureCard
              icon={<Calendar className="w-8 h-8" />}
              title="Daily Tactics"
              description="Personalized daily tactics based on your playing history"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-chess-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-chess-gray-800">
            Simple Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingCard
              title="Monthly"
              price="2.99"
              period="month"
              features={[
                "Full access to AI trainer",
                "Personalized opening repertoire",
                "Daily tactics challenges",
                "Game analysis",
              ]}
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
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-chess-black text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <Queen className="w-8 h-8 mx-auto mb-4" />
          <p className="text-chess-gray-400">
            © {new Date().getFullYear()} BnW Chess Training. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-none">
    <div className="text-chess-black mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-chess-gray-800">{title}</h3>
    <p className="text-chess-gray-600">{description}</p>
  </Card>
);

const PricingCard = ({
  title,
  price,
  period,
  features,
  highlighted = false,
}: {
  title: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
}) => (
  <Card
    className={`p-8 text-center transition-transform duration-300 hover:scale-105 ${
      highlighted ? "border-2 border-chess-gold shadow-lg" : ""
    }`}
  >
    <h3 className="text-2xl font-bold mb-2 text-chess-gray-800">{title}</h3>
    <div className="mb-6">
      <span className="text-4xl font-bold text-chess-gray-800">€{price}</span>
      <span className="text-chess-gray-500">/{period}</span>
    </div>
    <ul className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="text-chess-gray-600 flex items-center justify-center">
          <Trophy className="w-4 h-4 mr-2 text-chess-gold" />
          {feature}
        </li>
      ))}
    </ul>
    <Button
      className={`w-full ${
        highlighted
          ? "bg-chess-gold hover:bg-chess-gold/90 text-chess-black"
          : "bg-chess-black hover:bg-chess-gray-800 text-white"
      }`}
    >
      Get Started
    </Button>
  </Card>
);

export default Index;
