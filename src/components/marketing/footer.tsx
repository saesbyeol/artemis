import Link from "next/link";

const footerColumns = [
  {
    title: "Platform",
    links: [
      { label: "Drone Systems", href: "#" },
      { label: "Intelligence Platform", href: "#" },
      { label: "Fleet Operations", href: "#" },
      { label: "Threat Detection", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Security", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Status", href: "#" },
      { label: "Support", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Security Policy", href: "#" },
      { label: "Compliance", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-graphite-950 text-graphite-400">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-12">
        {/* Top Section: Branding + Columns */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-6">
          {/* Branding */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-sm font-semibold tracking-widest text-white uppercase"
            >
              ARTEMIS
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-graphite-500">
              Next-generation autonomous defense systems. Precision engineered
              for the most demanding operational environments.
            </p>
          </div>

          {/* Link Columns */}
          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="text-xs font-semibold tracking-wider text-graphite-300 uppercase">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-graphite-500 transition-colors duration-200 hover:text-graphite-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-graphite-800 pt-8 sm:flex-row">
          <p className="text-xs text-graphite-600">
            &copy; {new Date().getFullYear()} Artemis Defense Systems. All
            rights reserved.
          </p>
          <p className="text-xs text-graphite-600">
            Autonomous systems for complex environments
          </p>
        </div>
      </div>
    </footer>
  );
}
