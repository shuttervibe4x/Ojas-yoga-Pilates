import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-yoga.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Yoga practice in nature at sunrise"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-earth/70 via-earth/50 to-earth/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center py-32">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-card/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8 animate-fade-in">
            <span className="text-yellow-400">★★★★★</span>
            <span className="text-primary-foreground text-sm font-body">5.0 from 51 Reviews</span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in-up">
            Transform Your Mind, Body & Soul Through Yoga
          </h1>

          <p className="font-body text-lg md:text-xl text-primary-foreground/85 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Experience expert-guided yoga and meditation sessions designed to improve flexibility, reduce stress, and bring balance to your life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <a href="#booking">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-6 text-lg font-body font-bold shadow-lg">
                Book a Yoga Session
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="secondary" className="border border-accent/40 bg-card/95 text-foreground hover:bg-card rounded-full px-8 py-6 text-lg font-body font-bold shadow-lg">
                Contact Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
