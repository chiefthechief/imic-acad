const schoolLinks = [
  { label: "About IMIC", href: "/about" },
  { label: "Campus Life", href: "/campus-life" },
  { label: "News & Events", href: "/news" },
  { label: "Contact Us", href: "/contact" },
];

const academicsLinks = [
  { label: "German Abitur", href: "/academics" },
  { label: "Cambridge IGCSE", href: "/academics" },
  { label: "MINT / STEM", href: "/academics" },
  { label: "DSD Certification", href: "/academics" },
];

const familiesLinks = [
  { label: "Admissions", href: "/admissions" },
  { label: "Apply Online", href: "/contact" },
  { label: "Open Days", href: "/admissions" },
  { label: "Prospectus", href: "/about" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-wide py-16 md:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Branding */}
          <div>
            <div className="font-serif text-2xl font-bold tracking-wide">IMIC</div>
            <div className="text-[10px] font-medium tracking-[0.25em] text-white/60 uppercase">
              International Academy
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              A German education in the heart of Ghana. Delivering excellence
              since 2003.
            </p>
          </div>

          {/* School */}
          <div>
            <h4 className="mb-4 text-xs font-bold tracking-[0.2em] text-mustard uppercase">
              School
            </h4>
            <ul className="space-y-2.5">
              {schoolLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="mb-4 text-xs font-bold tracking-[0.2em] text-mustard uppercase">
              Academics
            </h4>
            <ul className="space-y-2.5">
              {academicsLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Families */}
          <div>
            <h4 className="mb-4 text-xs font-bold tracking-[0.2em] text-mustard uppercase">
              Families
            </h4>
            <ul className="space-y-2.5">
              {familiesLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-6">
          <p className="text-center text-xs text-white/50">
            &copy; 2025 IMIC International Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
