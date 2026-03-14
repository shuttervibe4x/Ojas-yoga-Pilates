import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

import galleryStudio from "@/assets/gallery-studio.jpg";
import galleryClass from "@/assets/gallery-class.jpg";
import galleryMeditation from "@/assets/gallery-meditation.jpg";
import galleryMudra from "@/assets/gallery-mudra.jpg";
import galleryPrivate from "@/assets/gallery-private.jpg";
import galleryOutdoor from "@/assets/gallery-outdoor.jpg";

const photos = [
  { src: galleryStudio, alt: "Peaceful yoga studio interior with natural light", label: "Our Studio" },
  { src: galleryClass, alt: "Group yoga class in session", label: "Group Classes" },
  { src: galleryMeditation, alt: "Meditation practice in serene setting", label: "Meditation" },
  { src: galleryMudra, alt: "Hands in yoga mudra position", label: "Mindful Practice" },
  { src: galleryPrivate, alt: "Private yoga session with instructor", label: "Private Sessions" },
  { src: galleryOutdoor, alt: "Outdoor yoga at sunrise", label: "Outdoor Yoga" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-widest uppercase text-accent">Gallery</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
            Glimpses of Our Journey
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Explore moments of peace, practice, and transformation from our studio and classes.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {photos.map((photo, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`group relative overflow-hidden rounded-xl hover-lift cursor-pointer ${
                i === 2 || i === 4 ? "row-span-2" : ""
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-500 flex items-end">
                <span className="text-primary-foreground font-heading font-semibold text-sm md:text-base px-4 py-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  {photo.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={selected !== null} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-3xl p-2 bg-foreground/95 border-none">
          {selected !== null && (
            <img
              src={photos[selected].src}
              alt={photos[selected].alt}
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
