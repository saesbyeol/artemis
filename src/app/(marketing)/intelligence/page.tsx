"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  Satellite,
  Activity,
  ShieldAlert,
  BarChart3,
  Layers,
  ArrowRight,
  ChevronRight,
  Monitor,
  Database,
  Globe,
  Lock,
  Cpu,
  Radio,
  Network,
  Workflow,
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
            <span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse" />
            Intelligence Platform
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-graphite-950 leading-[0.95]"
          >
            ARTEMIS
            <br />
            CONTROL
            <br />
            <span className="text-graphite-400">Platform</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={3}
            className="mt-8 text-lg lg:text-xl text-graphite-600 max-w-2xl leading-relaxed"
          >
            Unified command, control, telemetry, and intelligence in a single
            operational interface. Process thousands of concurrent data
            streams with sub-second latency across every deployed asset.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={4}
            className="mt-12 grid grid-cols-3 gap-8 max-w-lg"
          >
            {[
              { value: "< 50ms", label: "Latency" },
              { value: "10K+", label: "Concurrent Streams" },
              { value: "v4.2.1", label: "Current Release" },
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

function OverviewSection() {
  return (
    <SectionWrapper className="bg-graphite-50/50 border-y border-graphite-200">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono uppercase tracking-widest text-graphite-500 mb-6"
          >
            Platform Overview
          </motion.div>
          <AnimatedHeading as="h2">
            One platform, complete operational awareness
          </AnimatedHeading>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-lg text-graphite-600 leading-relaxed">
            ARTEMIS CONTROL is the operational backbone of every Artemis
            deployment. It provides a unified interface for command and
            control, real-time telemetry monitoring, threat detection,
            analytics, and data fusion across all connected assets.
          </p>
          <p className="text-base text-graphite-500 leading-relaxed">
            The platform is designed for operators, not analysts. Every
            interface element is built for high-tempo decision-making in
            contested environments where latency and information overload
            are operational risks, not inconveniences.
          </p>
          <p className="text-base text-graphite-500 leading-relaxed">
            ARTEMIS CONTROL supports deployment across cloud, on-premises,
            air-gapped, and hybrid environments with full feature parity
            regardless of topology.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

function ModulesSection() {
  const modules = [
    {
      icon: Satellite,
      code: "C2",
      title: "Command & Control",
      description:
        "Multi-domain command interface for real-time asset tasking, mission management, and operational coordination. Supports hierarchical and distributed command structures with role-based access and audit logging.",
      features: [
        "Real-time asset tasking and mission assignment",
        "Multi-echelon command hierarchy support",
        "Automated mission deconfliction",
        "Full audit trail and chain-of-command tracking",
      ],
    },
    {
      icon: Activity,
      code: "TEL",
      title: "Telemetry",
      description:
        "High-bandwidth telemetry aggregation from all deployed assets with sub-second correlation, visualization, and alerting. Process thousands of concurrent data streams with automatic anomaly detection.",
      features: [
        "10,000+ concurrent telemetry streams",
        "Sub-50ms end-to-end data pipeline latency",
        "Automatic threshold alerting and anomaly detection",
        "Historical replay and forensic analysis",
      ],
    },
    {
      icon: ShieldAlert,
      code: "THR",
      title: "Threat Detection",
      description:
        "AI-powered threat identification across electromagnetic, cyber, and kinetic domains. Automated track correlation, classification, and predictive threat modeling with operator-configurable alert thresholds.",
      features: [
        "Multi-domain threat correlation engine",
        "Pattern-of-life deviation scoring",
        "Predictive threat trajectory modeling",
        "Confidence-scored alert generation with provenance",
      ],
    },
    {
      icon: BarChart3,
      code: "ANL",
      title: "Analytics",
      description:
        "Operational analytics engine providing mission effectiveness metrics, fleet performance analysis, and predictive modeling. Transforms raw operational data into actionable intelligence products.",
      features: [
        "Mission effectiveness scoring and trending",
        "Fleet health and readiness dashboards",
        "Predictive maintenance scheduling",
        "Automated reporting and briefing generation",
      ],
    },
    {
      icon: Layers,
      code: "DFN",
      title: "Data Fusion",
      description:
        "Cross-platform data normalization, temporal alignment, and multi-layer geospatial visualization. Fuses intelligence from SIGINT, IMINT, HUMINT, and OSINT into a unified operational picture.",
      features: [
        "Multi-INT correlation and fusion",
        "Geospatial layer management and visualization",
        "Temporal alignment across asynchronous sources",
        "Automated intelligence product generation",
      ],
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
          Platform Modules
        </motion.div>
        <AnimatedHeading as="h2">
          Five integrated modules, one operational picture
        </AnimatedHeading>
      </div>

      <div className="space-y-6">
        {modules.map((mod, i) => (
          <motion.div
            key={mod.code}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="border border-graphite-200 hover:border-graphite-300 transition-colors duration-300"
          >
            <div className="grid lg:grid-cols-[1fr,1fr] divide-y lg:divide-y-0 lg:divide-x divide-graphite-200">
              {/* Info */}
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-graphite-50 flex items-center justify-center">
                    <mod.icon
                      className="w-5 h-5 text-graphite-500"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-graphite-400 block">
                      {mod.code}
                    </span>
                    <h3 className="text-lg font-semibold text-graphite-900">
                      {mod.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-graphite-500 leading-relaxed">
                  {mod.description}
                </p>
              </div>

              {/* Features */}
              <div className="p-8">
                <div className="text-xs font-mono uppercase tracking-wider text-graphite-500 mb-4">
                  Key Features
                </div>
                <div className="space-y-3">
                  {mod.features.map((feature, j) => (
                    <div
                      key={j}
                      className="flex items-start gap-3 text-sm text-graphite-600"
                    >
                      <ChevronRight className="w-3 h-3 text-graphite-400 shrink-0 mt-1" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

function ArchitectureSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const layers = [
    {
      label: "Presentation Layer",
      description: "Operator interfaces, dashboards, mission planning tools",
      icon: Monitor,
    },
    {
      label: "Application Layer",
      description: "C2, Analytics, Threat Detection, Data Fusion engines",
      icon: Workflow,
    },
    {
      label: "Processing Layer",
      description: "Real-time stream processing, AI inference, correlation",
      icon: Cpu,
    },
    {
      label: "Data Layer",
      description: "Time-series telemetry, geospatial, intelligence stores",
      icon: Database,
    },
    {
      label: "Integration Layer",
      description: "NATO STANAG, Link 16, CoT/TAK, REST/gRPC APIs",
      icon: Network,
    },
    {
      label: "Infrastructure Layer",
      description: "Cloud, on-premises, air-gapped, hybrid deployment",
      icon: Globe,
    },
  ];

  return (
    <SectionWrapper dark>
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono uppercase tracking-widest text-graphite-500 mb-6"
          >
            Architecture
          </motion.div>
          <AnimatedHeading as="h2" className="text-white">
            Layered architecture for operational resilience
          </AnimatedHeading>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-lg text-graphite-400 leading-relaxed"
          >
            ARTEMIS CONTROL is built on a modular, layered architecture
            that decouples presentation, processing, and data layers. This
            enables independent scaling, fault isolation, and deployment
            flexibility without sacrificing performance or security.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="border border-graphite-800 bg-graphite-900/50 p-1">
            <div className="border border-graphite-800 p-6">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-graphite-500">
                  Platform Architecture
                </span>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-success" />
                  <div className="w-2 h-2 rounded-full bg-graphite-600" />
                  <div className="w-2 h-2 rounded-full bg-graphite-600" />
                </div>
              </div>

              <div className="space-y-2">
                {layers.map((layer, i) => (
                  <motion.div
                    key={layer.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                    className="border border-graphite-800 p-4 hover:border-graphite-700 transition-colors flex items-center gap-4"
                  >
                    <layer.icon
                      className="w-4 h-4 text-graphite-500 shrink-0"
                      strokeWidth={1.5}
                    />
                    <div className="min-w-0">
                      <div className="text-sm font-medium text-white">
                        {layer.label}
                      </div>
                      <div className="text-xs text-graphite-500 truncate">
                        {layer.description}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Connection indicators */}
              <div className="mt-4 p-3 bg-graphite-900 border border-graphite-800">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 bg-success rounded-full animate-pulse" />
                  <span className="text-xs font-mono text-graphite-500">
                    LAYER INTERCONNECT STATUS
                  </span>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 4 }}
                      animate={
                        inView
                          ? { height: Math.random() * 16 + 4 }
                          : { height: 4 }
                      }
                      transition={{
                        delay: 0.8 + i * 0.04,
                        duration: 0.4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        repeatDelay: 1 + Math.random() * 2,
                      }}
                      className="flex-1 bg-graphite-700 min-h-[4px]"
                    />
                  ))}
                </div>
              </div>
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
      category: "Military Standards",
      items: [
        "NATO STANAG 4586 / 4671",
        "MIL-STD-1553 / 1760",
        "Link 16 / JREAP",
        "VMF / CoT",
      ],
    },
    {
      category: "Intelligence Formats",
      items: [
        "NITF / NSIF imagery",
        "STIX / TAXII threat intel",
        "OGC geospatial standards",
        "IC-EDH data handling",
      ],
    },
    {
      category: "Enterprise Integration",
      items: [
        "REST / gRPC / GraphQL APIs",
        "Apache Kafka streaming",
        "S3-compatible object storage",
        "LDAP / SAML / OIDC identity",
      ],
    },
    {
      category: "Situational Awareness",
      items: [
        "TAK Server (ATAK/WinTAK)",
        "COP/JOP feeds",
        "ADS-B / AIS tracking",
        "Weather / NOTAM integration",
      ],
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
          Integration
        </motion.div>
        <AnimatedHeading as="h2">
          Built to interoperate
        </AnimatedHeading>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-lg text-graphite-500 leading-relaxed"
        >
          ARTEMIS CONTROL integrates with existing command architectures,
          intelligence systems, and operational tools through a comprehensive
          set of standard interfaces and APIs.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {integrations.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="border border-graphite-200 bg-white p-6"
          >
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-graphite-900 mb-4">
              {group.category}
            </h3>
            <div className="space-y-2.5">
              {group.items.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-graphite-500"
                >
                  <div className="w-1 h-1 bg-graphite-300 rounded-full shrink-0" />
                  {item}
                </div>
              ))}
            </div>
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
          See the platform in action
        </AnimatedHeading>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-lg text-graphite-400 leading-relaxed mb-10"
        >
          Request a classified demonstration of ARTEMIS CONTROL tailored to
          your operational requirements and deployment environment.
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
              Request Demo
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/security">
            <Button
              variant="outline"
              size="xl"
              className="border-graphite-700 text-graphite-300 hover:bg-graphite-800 hover:text-white"
            >
              Security & Compliance
            </Button>
          </Link>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

export default function IntelligencePage() {
  return (
    <>
      <HeroSection />
      <OverviewSection />
      <ModulesSection />
      <ArchitectureSection />
      <IntegrationSection />
      <CTASection />
    </>
  );
}
