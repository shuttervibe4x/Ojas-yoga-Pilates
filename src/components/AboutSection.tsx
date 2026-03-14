import { Heart, Wind, Brain, Sparkles } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const specialties = [
  { icon: Heart, label: "Yoga Therapy" },
  { icon: Brain, label: "Meditation Practices" },
  { icon: Wind, label: "Breathwork (Pranayama)" },
  { icon: Sparkles, label: "Holistic Wellness" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-primary font-body font-bold uppercase tracking-widest text-sm mb-4">About</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Meet Shree Maya
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
              Shree Maya is an experienced yoga instructor who has dedicated her life to helping people achieve physical health, mental clarity, and emotional well-being. With deep knowledge of ancient yogic traditions and modern wellness practices, her mission is to guide students toward healthier, stress-free lives through the transformative power of yoga.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {specialties.map(({ icon: Icon, label }) => (
              <StaggerItem key={label}>
                <div className="flex flex-col items-center gap-3 p-6 bg-card rounded-2xl border border-border hover-lift">
                  <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="font-body font-bold text-sm text-foreground">{label}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
