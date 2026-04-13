const LINKS = [
  { label: "Ministry of Health & Family Welfare", href: "https://mohfw.gov.in" },
  { label: "AIIMS New Delhi", href: "https://aiims.edu" },
  { label: "RTI", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="font-heading text-lg font-bold">AIIMS Gorakhpur</h3>
            <p className="mt-2 text-sm text-primary-foreground/70">
              All India Institute of Medical Sciences, Gorakhpur<br />
              An autonomous institute under MoHFW, Govt. of India
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Important Links</h4>
            <ul className="mt-2 space-y-1.5">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/70 hover:text-primary-foreground hover:underline">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Follow Us</h4>
            <div className="mt-2 flex gap-3">
              {["Facebook", "Twitter", "YouTube"].map((s) => (
                <a key={s} href="#" className="rounded-md bg-primary-foreground/10 px-3 py-1.5 text-xs font-medium text-primary-foreground/80 hover:bg-primary-foreground/20">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-4 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} AIIMS Gorakhpur. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
