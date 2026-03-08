import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Authentication | Artemis",
  description: "Secure access to the Artemis defense platform.",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Left Panel — Decorative Branding (hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-[55%] relative bg-graphite-950 grid-pattern-dark overflow-hidden">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-graphite-950 via-graphite-950/90 to-graphite-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-transparent to-transparent" />

        {/* Subtle radial glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-graphite-800/20 rounded-full blur-3xl" />

        <div className="relative z-10 flex flex-col justify-between p-12 xl:p-16 w-full">
          {/* Top — Logo */}
          <div>
            <Link
              href="/"
              className="text-sm font-semibold tracking-widest text-white uppercase"
            >
              ARTEMIS
            </Link>
          </div>

          {/* Center — Branding content */}
          <div className="max-w-md">
            {/* Decorative element — Classification bar */}
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-px bg-graphite-600" />
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-graphite-500">
                Secure Access Portal
              </span>
            </div>

            <h1 className="text-4xl xl:text-5xl font-semibold tracking-tight text-white leading-[1.1] mb-6">
              Autonomous
              <br />
              Defense
              <br />
              <span className="text-graphite-500">Infrastructure</span>
            </h1>

            <p className="text-sm text-graphite-500 leading-relaxed max-w-sm">
              Mission-critical intelligence systems for real-time analysis,
              autonomous coordination, and operational decision support.
            </p>

            {/* Decorative metrics */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { value: "256-bit", label: "Encryption" },
                { value: "99.97%", label: "Uptime" },
                { value: "< 50ms", label: "Latency" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-sm font-semibold font-mono text-graphite-300">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-widest text-graphite-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom — Classification notice */}
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-widest text-graphite-700">
              ARTEMIS SYSTEMS v4.2.1
            </span>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-graphite-600">
                Systems Operational
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel — Form Content */}
      <div className="flex w-full lg:w-1/2 xl:w-[45%] flex-col">
        {/* Mobile logo header */}
        <div className="flex items-center justify-between p-6 lg:hidden">
          <Link
            href="/"
            className="text-sm font-semibold tracking-widest text-graphite-900 uppercase"
          >
            ARTEMIS
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-graphite-500">
              Online
            </span>
          </div>
        </div>

        {/* Centered form area */}
        <div className="flex flex-1 items-center justify-center px-6 py-12 sm:px-12 lg:px-16 xl:px-20">
          <div className="w-full max-w-sm">{children}</div>
        </div>

        {/* Bottom bar */}
        <div className="px-6 pb-6 sm:px-12 lg:px-16 xl:px-20">
          <div className="border-t border-graphite-200 pt-6 flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-widest text-graphite-400">
              Encrypted Connection
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-graphite-400">
              TLS 1.3
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
