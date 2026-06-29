import { Divider } from "@/components/ui/Divider";
import { Section } from "@/components/ui/Section";

const footerLinks = {
  Explore: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
  ],
  Contact: [
    { label: "Book Free Consultation", href: "https://wa.me/6287864200926" },
    { label: "reihan.gfarel@gmail.com", href: "mailto:reihan.gfarel@gmail.com" },
    { label: "WhatsApp", href: "https://wa.me/6287864200926" },
    { label: "087864200926", href: "https://wa.me/6287864200926" },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <Section className="pt-20 pb-10">
        <div className="max-w-7xl mx-auto">
          <Divider className="mb-16" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            {/* Brand */}
            <div className="col-span-2">
              <a
                href="/"
                className="text-xl font-semibold tracking-[-0.03em] text-white block mb-4"
              >
                Eleven Studio
              </a>
              <p className="text-sm text-white/35 leading-relaxed max-w-xs">
                Premium websites, dashboards, landing pages, booking systems,
                and modern web applications for ambitious businesses.
              </p>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group}>
                <span className="text-xs font-mono text-white/20 tracking-widest uppercase mb-4 block">
                  {group}
                </span>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-white/40 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Divider className="mb-8" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/20">
              © {year} Eleven Studio. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-xs text-white/20 hover:text-white/40 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-xs text-white/20 hover:text-white/40 transition-colors"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </Section>
    </footer>
  );
}
