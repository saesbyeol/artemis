"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  Eye,
  Bot,
  Plane,
  Layers,
  ShieldAlert,
  Map,
  Cpu,
  Network,
  ArrowRight,
  ChevronRight,
  Satellite,
  BrainCircuit,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/marketing/section-wrapper";
import { AnimatedHeading } from "@/components/marketing/animated-heading";
import { FeatureCard } from "@/components/marketing/feature-card";
import { GridBackground } from "@/components/marketing/grid-background";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
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
            Capabilities
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-graphite-950 leading-[0.95]"
          >
            Full-spectrum
            <br />
            autonomous
            <br />
            <span className="text-graphite-400">operations</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={3}
            className="mt-8 text-lg lg:text-xl text-graphite-600 max-w-2xl leading-relaxed"
          >
            An integrated systems architecture delivering intelligence,
            surveillance, reconnaissance, and autonomous coordination across
            every operational domain.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function CapabilitiesGridSection() {
  const capabilities = [
    {
      icon: Eye,
      title: "ISR Operations",
      description:
        "Persistent intelligence, surveillance, and reconnaissance across multi-domain environments. Real-time multi-source fusion combining SIGINT, IMINT, HUMINT, and OSINT feeds into a unified operational picture with AI-assisted anomaly detection.",
    },
    {
      icon: Bot,
      title: "Autonomous Operations",
      description:
        "Fully autonomous flight, navigation, and decision-making in GPS-denied and communications-contested environments. Onboard edge AI enables independent mission execution with dynamic re-tasking based on real-time threat assessment.",
    },
    {
      icon: Plane,
      title: "Fleet Management",
      description:
        "Comprehensive lifecycle management for heterogeneous drone fleets. Predictive maintenance algorithms, automated pre-flight checks, readiness scoring, and logistics optimization across distributed operating bases.",
    },
    {
      icon: Layers,
      title: "Data Fusion",
      description:
        "High-bandwidth telemetry aggregation from distributed sensor networks with sub-second correlation. Cross-platform data normalization, temporal alignment, and multi-layer geospatial visualization for real-time operational awareness.",
    },
    {
      icon: ShieldAlert,
      title: "Threat Detection",
      description:
        "AI-powered threat identification and classification across electromagnetic, cyber, and kinetic domains. Automated track correlation, pattern-of-life analysis, and predictive threat modeling with confidence-scored alert generation.",
    },
    {
      icon: Map,
      title: "Mission Planning",
      description:
        "Dynamic mission planning with terrain analysis, threat overlay, weather integration, and asset optimization. Automated route generation with contingency planning, deconfliction, and real-time re-routing capabilities.",
    },
    {
      icon: Network,
      title: "Swarm Coordination",
      description:
        "Distributed swarm protocols enabling coordinated multi-vehicle operations at scale. Dynamic task allocation, formation control, and collaborative sensing across up to 256 autonomous units with resilient mesh networking.",
    },
    {
      icon: Satellite,
      title: "Communications Infrastructure",
      description:
        "Resilient multi-path communications architecture spanning SATCOM, line-of-sight, and mesh relay networks. Adaptive waveform selection, bandwidth management, and automated link restoration in contested RF environments.",
    },
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
          Core Systems
        </motion.div>
        <AnimatedHeading as="h2">
          Integrated capability across every domain
        </AnimatedHeading>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-lg text-graphite-500 leading-relaxed"
        >
          Each capability is engineered as a modular component within the
          Artemis ecosystem, enabling rapid composition of mission-specific
          configurations without custom integration.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {capabilities.map((cap, i) => (
          <motion.div
            key={cap.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="border border-graphite-200 p-8 hover:border-graphite-300 transition-colors duration-300 group"
          >
            <div className="flex items-start gap-5">
              <div className="shrink-0 w-10 h-10 bg-graphite-50 flex items-center justify-center">
                <cap.icon
                  className="w-5 h-5 text-graphite-500"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <h3 className="text-base font-semibold text-graphite-900 mb-2">
                  {cap.title}
                </h3>
                <p className="text-sm text-graphite-500 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

function AIHighlightSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const aiCapabilities = [
    "Real-time object detection and classification across EO/IR/SAR sensor modalities",
    "Pattern-of-life analysis with behavioral anomaly scoring",
    "Predictive maintenance and fleet readiness optimization",
    "Autonomous mission re-planning under dynamic threat conditions",
    "Multi-agent reinforcement learning for swarm coordination",
    "Natural language mission briefing and report generation",
    "Cross-domain data correlation with confidence-scored intelligence products",
    "Edge-deployed inference with sub-100ms latency on embedded hardware",
  ];

  return (
    <SectionWrapper dark>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono uppercase tracking-widest text-graphite-500 mb-6"
          >
            AI Integration
          </motion.div>
          <AnimatedHeading as="h2" className="text-white">
            Machine intelligence at the tactical edge
          </AnimatedHeading>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-lg text-graphite-400 leading-relaxed"
          >
            Every Artemis platform incorporates purpose-built AI models
            trained on operational data. Our models are not research
            prototypes. They are field-validated, adversarially tested, and
            deployed at scale.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <div className="border border-graphite-800 bg-graphite-900/50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <BrainCircuit
                className="w-5 h-5 text-graphite-500"
                strokeWidth={1.5}
              />
              <span className="text-xs font-mono uppercase tracking-wider text-graphite-500">
                AI Capabilities Matrix
              </span>
            </div>
            <div className="space-y-3">
              {aiCapabilities.map((cap, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
                  className="flex items-start gap-3 text-sm text-graphite-400"
                >
                  <ChevronRight className="w-3 h-3 text-graphite-600 shrink-0 mt-1" />
                  <span>{cap}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

function IntegrationSection() {
  const integrations = [
    {
      label: "NATO STANAG",
      detail: "Compliant with STANAG 4586 and 4671 interoperability standards",
    },
    {
      label: "Link 16",
      detail: "Native tactical data link integration for joint force operations",
    },
    {
      label: "MIL-STD-1553",
      detail: "Hardware bus interface for legacy avionics integration",
    },
    {
      label: "CoT / TAK",
      detail: "Cursor on Target and TAK ecosystem integration for SA sharing",
    },
    {
      label: "OGC / GeoInt",
      detail: "Open geospatial standards for intelligence product dissemination",
    },
    {
      label: "REST / gRPC",
      detail: "Modern API architecture for enterprise system integration",
    },
  ];

  return (
    <SectionWrapper className="bg-graphite-50/50 border-y border-graphite-200">
      <div className="max-w-3xl mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono uppercase tracking-widest text-graphite-500 mb-6"
        >
          Interoperability
        </motion.div>
        <AnimatedHeading as="h2">
          Designed for integration, not isolation
        </AnimatedHeading>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-lg text-graphite-500 leading-relaxed"
        >
          Artemis systems are built to interoperate with existing command
          architectures, legacy platforms, and allied force systems from day
          one.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {integrations.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="border border-graphite-200 bg-white p-6"
          >
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-graphite-900 block mb-2">
              {item.label}
            </span>
            <p className="text-sm text-graphite-500 leading-relaxed">
              {item.detail}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

function CTASection() {
  return (
    <SectionWrapper dark>
      <div className="text-center max-w-3xl mx-auto">
        <AnimatedHeading as="h2" className="text-white">
          Explore the platform
        </AnimatedHeading>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-lg text-graphite-400 leading-relaxed mb-10"
        >
          Schedule a technical briefing with our solutions architecture team
          to discuss capability requirements specific to your operational
          environment.
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
              Request Briefing
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/drone-systems">
            <Button
              variant="outline"
              size="xl"
              className="border-graphite-700 text-graphite-300 hover:bg-graphite-800 hover:text-white"
            >
              View Drone Systems
            </Button>
          </Link>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

export default function CapabilitiesPage() {
  return (
    <>
      <HeroSection />
      <CapabilitiesGridSection />
      <AIHighlightSection />
      <IntegrationSection />
      <CTASection />
    </>
  );
}
