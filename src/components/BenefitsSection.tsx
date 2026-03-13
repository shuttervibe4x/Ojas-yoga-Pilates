import { Activity, Brain, Smile, Eye, HeartPulse } from "lucide-react";

const benefits = [
  { icon: Activity, title: "Improves Flexibility & Strength", description: "Build a stronger, more supple body with consistent practice." },
  { icon: Smile, title: "Reduces Stress & Anxiety", description: "Find calm and emotional balance through mindful movement." },
  { icon: HeartPulse, title: "Enhances Posture & Balance", description: "Correct alignment issues and improve your body awareness." },
  { icon: Brain, title: "Boosts Mental Clarity", description: "Sharpen focus and enhance cognitive function through meditation." },
  { icon: Eye, title: "Promotes Overall Wellness", description: "Achieve holistic health that nurtures mind, body, and spirit." },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-body font-bold uppercase tracking-widest text-sm mb-4">Why Yoga</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Benefits of Yoga
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map(({ icon: Icon, title, description }, i) => (
            <div key={title} className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-1">{title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
