const Footer = () => {
  return (
    <footer className="bg-earth py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="font-heading text-xl font-bold text-primary-foreground mb-4">Yoga by Ojas Yoga Pilates</h3>
            <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">
              Transform your mind, body, and soul through expert-guided yoga and meditation.
            </p>
          </div>
          <div>
            <h4 className="font-body font-bold text-primary-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["About", "Services", "Benefits", "Testimonials"].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-body font-bold text-primary-foreground mb-4">Contact</h4>
            <div className="flex flex-col gap-2 font-body text-sm text-primary-foreground/60">
              <span>+91 987654321</span>
              <span>info@yourcomapnyname.com</span>
            </div>
          </div>
          <div>
            <h4 className="font-body font-bold text-primary-foreground mb-4">Location</h4>
            <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">
              <br />
              Jaipur<br />
              Rajasthan 302001
            </p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-6 text-center">
          <p className="font-body text-sm text-primary-foreground/40">
            © {new Date().getFullYear()} Yoga by Ojas Yoga Pilates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
