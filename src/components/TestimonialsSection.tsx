import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya S.",
    text: "She's a great instructor with in-depth knowledge of yoga and meditation. My stress levels have reduced significantly since joining her classes.",
  },
  {
    name: "Rahul M.",
    text: "Shree Maya's private sessions completely transformed my flexibility and posture. Her personalized approach is what sets her apart.",
  },
  {
    name: "Anita K.",
    text: "The meditation sessions are life-changing. I feel more focused, calm, and balanced in every aspect of my life. Highly recommended!",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-body font-bold uppercase tracking-widest text-sm mb-4">Testimonials</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Students Say
          </h2>
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-6 py-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <span className="font-body font-bold text-foreground">5.0</span>
            <span className="font-body text-muted-foreground">from 51 Happy Students</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map(({ name, text }) => (
            <div
              key={name}
              className="bg-card rounded-2xl p-8 border border-border hover-lift"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="font-body text-muted-foreground leading-relaxed mb-6 italic">"{text}"</p>
              <p className="font-heading font-bold text-foreground">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
