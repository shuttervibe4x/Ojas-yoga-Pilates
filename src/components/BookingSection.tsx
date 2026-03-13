import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(10, "Valid phone number required").max(15),
  email: z.string().trim().email("Valid email required").max(255),
  classType: z.string().min(1, "Please select a class type"),
  preferredTime: z.string().min(1, "Please select a time"),
});

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    classType: "",
    preferredTime: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = bookingSchema.safeParse(formData);
    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }
    toast.success("Booking request sent! We'll contact you shortly.");
    setFormData({ name: "", phone: "", email: "", classType: "", preferredTime: "" });
  };

  return (
    <section id="booking" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-body font-bold uppercase tracking-widest text-sm mb-4">Book Now</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Reserve Your Yoga Session
            </h2>
            <p className="font-body text-muted-foreground">Start your wellness journey today.</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-sm space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-body">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="rounded-xl bg-secondary border-border"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  maxLength={100}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="font-body">Phone Number</Label>
                <Input
                  id="phone"
                  placeholder="+91 XXXXX XXXXX"
                  className="rounded-xl bg-secondary border-border"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  maxLength={15}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="font-body">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="rounded-xl bg-secondary border-border"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                maxLength={255}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label className="font-body">Preferred Class Type</Label>
                <Select value={formData.classType} onValueChange={(v) => setFormData({ ...formData, classType: v })}>
                  <SelectTrigger className="rounded-xl bg-secondary border-border">
                    <SelectValue placeholder="Select class" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner Yoga</SelectItem>
                    <SelectItem value="meditation">Meditation & Mindfulness</SelectItem>
                    <SelectItem value="stress-relief">Stress Relief Yoga</SelectItem>
                    <SelectItem value="private">Private Training</SelectItem>
                    <SelectItem value="flexibility">Flexibility & Strength</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="font-body">Preferred Time</Label>
                <Select value={formData.preferredTime} onValueChange={(v) => setFormData({ ...formData, preferredTime: v })}>
                  <SelectTrigger className="rounded-xl bg-secondary border-border">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (6 AM - 9 AM)</SelectItem>
                    <SelectItem value="midday">Midday (10 AM - 1 PM)</SelectItem>
                    <SelectItem value="evening">Evening (4 PM - 7 PM)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full py-6 text-lg font-body font-bold"
            >
              Reserve Your Yoga Session
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
