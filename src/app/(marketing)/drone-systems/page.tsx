"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  Plane,
  ArrowRight,
  ChevronRight,
  Gauge,
  Mountain,
  Clock,
  Radar,
  Radio,
  Weight,
  Ruler,
  Wind,
  Cpu,
  Network,
  Battery,
  Zap,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/marketing/section-wrapper";
import { AnimatedHeading } from "@/components/marketing/animated-heading";
import { GridBackground } from "@/components/marketing/grid-background";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative min-h-[70vh] flex items-center overflow-hidden"
    >
      <GridBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/60 to-white z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
          className="max-w-4xl"
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-graphite-300 text-xs font-medium uppercase tracking-widest text-graphite-600"
          >
            Drone Systems
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-graphite-950 leading-[0.95]"
          >
            Purpose-built
            <br />
            aerial
            <br />
            <span className="text-graphite-400">platforms</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={3}
            className="mt-8 text-lg lg:text-xl text-graphite-600 max-w-2xl leading-relaxed"
          >
            Three autonomous aerial platforms engineered for persistent
            operations in contested and communications-denied environments.
            Each system delivers mission-specific capability within the
            integrated Artemis ecosystem.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={4}
            className="mt-12 grid grid-cols-3 gap-8 max-w-lg"
          >
            {[
              { value: "3", label: "Platforms" },
              { value: "40hr", label: "Max Endurance" },
              { value: "256", label: "Swarm Units" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl lg:text-3xl font-semibold text-graphite-900 font-mono">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-graphite-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

interface DroneSpec {
  label: string;
  value: string;
}

interface DronePlatform {
  name: string;
  designation: string;
  type: string;
  status: string;
  description: string;
  specs: DroneSpec[];
  features: string[];
}

function DroneCard({
  platform,
  index,
}: {
  platform: DronePlatform;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="border border-graphite-800 bg-graphite-900/50"
    >
      {/* Header */}
      <div className="px-8 py-6 border-b border-graphite-800">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono uppercase tracking-wider text-graphite-500">
            {platform.type}
          </span>
          <span
            className={`text-xs font-mono uppercase tracking-wider ${
              platform.status === "Operational"
                ? "text-success"
                : "text-warning"
            }`}
          >
            {platform.status}
          </span>
        </div>
        <h3 className="text-2xl lg:text-3xl font-semibold text-white tracking-tight">
          {platform.name}
        </h3>
        <p className="text-xs font-mono text-graphite-500 mt-1">
          {platform.designation}
        </p>
        <p className="mt-4 text-sm text-graphite-400 leading-relaxed">
          {platform.description}
        </p>
      </div>

      {/* Specs Grid */}
      <div className="px-8 py-6 border-b border-graphite-800">
        <div className="text-xs font-mono uppercase tracking-wider text-graphite-600 mb-4">
          Technical Specifications
        </div>
        <div className="grid grid-cols-2 gap-4">
          {platform.specs.map((spec, i) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
              className="border border-graphite-800 p-3"
            >
              <div className="text-xs text-graphite-600 mb-1">
                {spec.label}
              </div>
              <div className="text-sm font-mono font-medium text-white">
                {spec.value}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="px-8 py-6">
        <div className="text-xs font-mono uppercase tracking-wider text-graphite-600 mb-4">
          Key Capabilities
        </div>
        <div className="space-y-2.5">
          {platform.features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.05, duration: 0.4 }}
              className="flex items-center gap-3 text-sm text-graphite-400"
            >
              <ChevronRight className="w-3 h-3 text-graphite-600 shrink-0" />
              {feature}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function PlatformsSection() {
  const platforms: DronePlatform[] = [
    {
      name: "ARTEMIS HAWK",
      designation: "AH-1 Fixed-Wing MALE UAS",
      type: "Fixed-Wing MALE UAS",
      status: "Operational",
      description:
        "Long-endurance, medium-altitude fixed-wing platform designed for persistent ISR and wide-area surveillance missions. The HAWK provides theater-level intelligence coverage with multi-sensor payload flexibility.",
      specs: [
        { label: "Endurance", value: "40 hours" },
        { label: "Service Ceiling", value: "45,000 ft" },
        { label: "Max Speed", value: "220 kts" },
        { label: "Wingspan", value: "24 m" },
        { label: "MTOW", value: "1,650 kg" },
        { label: "Payload Capacity", value: "350 kg" },
        { label: "Comm Range", value: "BLOS / SATCOM" },
        { label: "Launch Method", value: "Runway" },
      ],
      features: [
        "Multi-sensor payload bay (EO/IR/SAR/SIGINT)",
        "Fully autonomous flight with manual override",
        "Real-time HD video downlink with onboard recording",
        "Automatic target recognition and tracking",
        "SATCOM and LOS data link redundancy",
        "De-icing and all-weather operational capability",
      ],
    },
    {
      name: "ARTEMIS TALON",
      designation: "AT-2 VTOL Tactical UAS",
      type: "VTOL Tactical UAS",
      status: "Operational",
      description:
        "Vertical takeoff and landing tactical platform optimized for rapid deployment in austere environments. The TALON bridges the gap between man-portable systems and theater-level assets.",
      specs: [
        { label: "Endurance", value: "12 hours" },
        { label: "Service Ceiling", value: "15,000 ft" },
        { label: "Max Speed", value: "85 kts" },
        { label: "Rotor Diameter", value: "3.2 m" },
        { label: "MTOW", value: "120 kg" },
        { label: "Payload Capacity", value: "25 kg" },
        { label: "Comm Range", value: "150 km LOS" },
        { label: "Launch Method", value: "VTOL / No Infrastructure" },
      ],
      features: [
        "Zero-infrastructure VTOL launch and recovery",
        "Rapid field deployment in under 15 minutes",
        "Modular payload interface for mission-specific sensors",
        "Terrain-following autonomous navigation",
        "Encrypted mesh networking with relay capability",
        "Silent mode with reduced acoustic signature",
      ],
    },
    {
      name: "ARTEMIS SWARM",
      designation: "AS-3 Micro-UAS Network",
      type: "Distributed Micro-UAS Network",
      status: "Field Testing",
      description:
        "Autonomous multi-unit coordination system enabling distributed ISR, area denial, and collaborative sensing through swarm intelligence. Each unit operates as a node in a self-healing mesh network.",
      specs: [
        { label: "Swarm Size", value: "Up to 256 units" },
        { label: "Unit Endurance", value: "90 minutes" },
        { label: "Unit Weight", value: "850 g" },
        { label: "Coordination", value: "Fully autonomous" },
        { label: "AI Processing", value: "Edge / Onboard" },
        { label: "Mesh Range", value: "Unit-to-unit 2 km" },
        { label: "Deployment", value: "Canister launch" },
        { label: "Recovery", value: "Autonomous RTB" },
      ],
      features: [
        "256-unit autonomous coordination with dynamic task allocation",
        "Self-healing mesh network with distributed command",
        "Edge AI processing for real-time collaborative sensing",
        "Autonomous area mapping and persistent coverage",
        "EW-resilient operations in contested RF environments",
        "Canister-launched rapid deployment from ground or air",
      ],
    },
  ];

  return (
    <SectionWrapper dark>
      <div className="max-w-3xl mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono uppercase tracking-widest text-graphite-500 mb-6"
        >
          Platforms
        </motion.div>
        <AnimatedHeading as="h2" className="text-white">
          Three platforms, one ecosystem
        </AnimatedHeading>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-lg text-graphite-400 leading-relaxed"
        >
          Each platform is designed to operate independently or as part of a
          coordinated multi-platform deployment, sharing data and
          situational awareness through the ARTEMIS CONTROL backbone.
        </motion.p>
      </div>

      <div className="space-y-8">
        {platforms.map((platform, i) => (
          <DroneCard key={platform.name} platform={platform} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}

function ComparisonSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const comparisonData = [
    { spec: "Platform Type", hawk: "Fixed-Wing MALE", talon: "VTOL Tactical", swarm: "Micro-UAS Network" },
    { spec: "Endurance", hawk: "40 hours", talon: "12 hours", swarm: "90 min / unit" },
    { spec: "Service Ceiling", hawk: "45,000 ft", talon: "15,000 ft", swarm: "1,500 ft" },
    { spec: "Max Speed", hawk: "220 kts", talon: "85 kts", swarm: "45 kts" },
    { spec: "Payload", hawk: "350 kg", talon: "25 kg", swarm: "150 g / unit" },
    { spec: "Launch Requirement", hawk: "Runway", talon: "None (VTOL)", swarm: "Canister" },
    { spec: "Autonomy Level", hawk: "Full w/ Override", talon: "Full w/ Override", swarm: "Fully Autonomous" },
    { spec: "AI Processing", hawk: "Onboard + Cloud", talon: "Onboard + Edge", swarm: "Edge / Distributed" },
    { spec: "Comm Architecture", hawk: "SATCOM / LOS", talon: "LOS / Mesh", swarm: "Mesh Network" },
    { spec: "Status", hawk: "Operational", talon: "Operational", swarm: "Field Testing" },
  ];

  return (
    <SectionWrapper>
      <div className="max-w-3xl mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono uppercase tracking-widest text-graphite-500 mb-6"
        >
          Comparison
        </motion.div>
        <AnimatedHeading as="h2">
          Platform specifications at a glance
        </AnimatedHeading>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="border border-graphite-200 overflow-x-auto"
      >
        <table className="w-full min-w-[640px]">
          <thead>
            <tr className="border-b border-graphite-200 bg-graphite-50">
              <th className="text-left px-6 py-4 text-xs font-mono uppercase tracking-wider text-graphite-500">
                Specification
              </th>
              <th className="text-left px-6 py-4 text-xs font-mono uppercase tracking-wider text-graphite-900">
                HAWK
              </th>
              <th className="text-left px-6 py-4 text-xs font-mono uppercase tracking-wider text-graphite-900">
                TALON
              </th>
              <th className="text-left px-6 py-4 text-xs font-mono uppercase tracking-wider text-graphite-900">
                SWARM
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, i) => (
              <motion.tr
                key={row.spec}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.1 + i * 0.04, duration: 0.4 }}
                className="border-b border-graphite-100 last:border-0"
              >
                <td className="px-6 py-3.5 text-sm font-medium text-graphite-700">
                  {row.spec}
                </td>
                <td className="px-6 py-3.5 text-sm font-mono text-graphite-600">
                  {row.hawk}
                </td>
                <td className="px-6 py-3.5 text-sm font-mono text-graphite-600">
                  {row.talon}
                </td>
                <td className="px-6 py-3.5 text-sm font-mono text-graphite-600">
                  {row.swarm}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </SectionWrapper>
  );
}

function CTASection() {
  return (
    <SectionWrapper dark>
      <div className="text-center max-w-3xl mx-auto">
        <AnimatedHeading as="h2" className="text-white">
          Request technical specifications
        </AnimatedHeading>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-lg text-graphite-400 leading-relaxed mb-10"
        >
          Detailed technical documentation, integration guides, and
          performance data are available under NDA for qualified defense
          organizations.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/contact">
            <Button
              size="xl"
              className="bg-white text-graphite-900 hover:bg-graphite-100 group"
            >
              Contact Sales
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/capabilities">
            <Button
              variant="outline"
              size="xl"
              className="border-graphite-700 text-graphite-300 hover:bg-graphite-800 hover:text-white"
            >
              View Capabilities
            </Button>
          </Link>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

export default function DroneSystemsPage() {
  return (
    <>
      <HeroSection />
      <PlatformsSection />
      <ComparisonSection />
      <CTASection />
    </>
  );
}
