import { Flower2, Brain, HeartPulse, User, Dumbbell } from "lucide-react";

const services = [
  {
    icon: Flower2,
    title: "Beginner Yoga Classes",
    description: "Perfect for newcomers. Learn foundational poses, breathing techniques, and build your practice from the ground up in a supportive environment.",
  },
  {
    icon: Brain,
    title: "Meditation & Mindfulness",
    description: "Cultivate inner peace and mental clarity through guided meditation sessions designed to reduce stress and improve focus.",
  },
  {
    icon: HeartPulse,
    title: "Stress Relief Yoga",
    description: "Gentle yoga sequences specifically crafted to release tension, calm the nervous system, and restore emotional balance.",
  },
  {
    icon: User,
    title: "Private Yoga Training",
    description: "One-on-one personalized sessions tailored to your specific goals, fitness level, and schedule for maximum results.",
  },
  {
    icon: Dumbbell,
    title: "Flexibility & Strength Yoga",
    description: "Build functional strength and deep flexibility through dynamic yoga flows that challenge and transform your body.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-body font-bold uppercase tracking-widest text-sm mb-4">Programs</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Yoga Programs & Services
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Discover the perfect practice for your journey toward health and inner peace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-card rounded-2xl p-8 border border-border hover-lift group"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors duration-500">
                <Icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
