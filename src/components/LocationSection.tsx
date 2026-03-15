import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";

const LocationSection = () => {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227749.05320895495!2d75.62574683476568!3d26.885115145593463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1773507782722!5m2!1sen!2sin";
  const directionsUrl = "https://maps.app.goo.gl/TBxFjmpWo4xH4u3dA";

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
                  <p className="font-body text-muted-foreground leading-relaxed">Jaipur<br />Rajasthan 302001<br />India</p>
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
