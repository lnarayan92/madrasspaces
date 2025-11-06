import { Phone, Mail, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-12 tracking-tight">Contact</h2>

        <div className="grid sm:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-light mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <a
                href="tel:+919042274103"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="font-light">+91 9042274103</span>
              </a>
              <a
                href="mailto:contact@madrasspaces.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="font-light">contact@madrasspaces.com</span>
              </a>
              <a
                href="https://www.instagram.com/madras_spaces/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="font-light">@madras_spaces</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-light mb-6">Location</h3>
            <div className="text-muted-foreground font-light space-y-2">
              <p>Madras Spaces</p>
              <p>Chennai, Tamil Nadu</p>
              <p>India</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-16 border-t border-border">
          <p className="text-sm text-muted-foreground font-light text-center">
            © {new Date().getFullYear()} Madras Spaces. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
