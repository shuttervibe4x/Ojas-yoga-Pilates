import { useState } from "react";
import { Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-body font-bold uppercase tracking-widest text-sm mb-4">Get in Touch</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Contact Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-body text-sm text-muted-foreground">Call Us</p>
                <a href="tel:+919602266329" className="font-heading text-lg font-bold text-foreground hover:text-accent transition-colors">
                  +91 96022 66329
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-body text-sm text-muted-foreground">Email</p>
                <p className="font-heading text-lg font-bold text-foreground">info@yogabyshreemaya.com</p>
              </div>
            </div>

            <div>
              <p className="font-body font-bold text-foreground mb-4">Follow Us</p>
              <div className="flex gap-3">
                {[Instagram, Facebook, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-11 h-11 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    aria-label="Social media"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border space-y-5">
            <div className="space-y-2">
              <Label htmlFor="contact-name" className="font-body">Name</Label>
              <Input
                id="contact-name"
                placeholder="Your name"
                className="rounded-xl bg-secondary border-border"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                maxLength={100}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-email" className="font-body">Email</Label>
              <Input
                id="contact-email"
                type="email"
                placeholder="your@email.com"
                className="rounded-xl bg-secondary border-border"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                maxLength={255}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-message" className="font-body">Message</Label>
              <Textarea
                id="contact-message"
                placeholder="Tell us about your yoga goals..."
                className="rounded-xl bg-secondary border-border min-h-[120px]"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                maxLength={1000}
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full py-6 font-body font-bold"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
