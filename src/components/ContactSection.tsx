import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact-us" className="bg-section-alt py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-healthcare-green">Get In Touch</span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-primary">Contact &amp; Location</h2>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <MapPin size={24} className="mt-1 shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold text-foreground">Address</h3>
                <p className="text-sm text-muted-foreground">AIIMS, Kunraghat, Gorakhpur, Uttar Pradesh – 273008</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone size={24} className="mt-1 shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold text-foreground">Phone</h3>
                <a href="tel:+915512500100" className="text-sm text-primary hover:underline">0551-2500100</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail size={24} className="mt-1 shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold text-foreground">Email</h3>
                <a href="mailto:director@aiimsgorakhpur.edu.in" className="text-sm text-primary hover:underline">director@aiimsgorakhpur.edu.in</a>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-border shadow-sm">
            <iframe
              title="AIIMS Gorakhpur Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.234!2d83.3!3d26.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDQ1JzM2LjAiTiA4M8KwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
              className="h-64 w-full lg:h-full"
              loading="lazy"
              style={{ border: 0, minHeight: 250 }}
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
