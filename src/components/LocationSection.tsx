import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";

const LocationSection = () => {
  const mapUrl = "https://maps.google.com/maps?q=L1B+Krishna+Marg+C+Scheme+Jaipur+Rajasthan+302001+India&t=&z=15&ie=UTF8&iwloc=&output=embed";
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=L1B+Krishna+Marg+C+Scheme+Jaipur+Rajasthan+302001";

  return (
    <section id="location" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <p className="text-primary font-body font-bold uppercase tracking-widest text-sm mb-4">Find Us</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Our Location</h2>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
            <div className="rounded-2xl overflow-hidden border border-border h-[350px]">
              <iframe title="Yoga by Shree Maya Location" src={mapUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">Yoga by Shree Maya</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">L1B Krishna Marg<br />C Scheme, Jaipur, Rajasthan 302001<br />India</p>
                </div>
              </div>
              <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 font-body font-bold">
                  <Navigation className="w-4 h-4 mr-2" />Get Directions
                </Button>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default LocationSection;
