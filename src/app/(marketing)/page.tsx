"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Radar,
  Cpu,
  Plane,
  Shield,
  Activity,
  Satellite,
  Eye,
  Network,
  BarChart3,
  Lock,
  Server,
  Globe,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GridBackground } from "@/components/marketing/grid-background";
import { SectionWrapper } from "@/components/marketing/section-wrapper";
import { AnimatedHeading } from "@/components/marketing/animated-heading";
import { FeatureCard } from "@/components/marketing/feature-card";

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
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
            Systems Operational
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight text-graphite-950 leading-[0.95]"
          >
            Autonomous
            <br />
            Defense
            <br />
            <span className="text-graphite-400">Infrastructure</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={3}
            className="mt-8 text-lg lg:text-xl text-graphite-600 max-w-2xl leading-relaxed"
          >
            Mission-critical AI systems for real-time analysis, autonomous
            coordination, and operational decision support across complex
            environments.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={4}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link href="/register">
              <Button size="xl" className="group">
                Request Access
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/capabilities">
              <Button variant="outline" size="xl">
                Explore Capabilities
              </Button>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={5}
            className="mt-20 grid grid-cols-3 gap-8 max-w-lg"
          >
            {[
              { value: "99.97%", label: "Uptime SLA" },
              { value: "< 50ms", label: "Latency" },
              { value: "FedRAMP", label: "Authorized" },
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" as const }}
          className="w-5 h-8 border-2 border-graphite-300 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-graphite-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function TrustSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const partners = [
    "DEPARTMENT OF DEFENSE",
    "NATO ALLIES",
    "FIVE EYES",
    "ALLIED FORCES",
    "INTELLIGENCE COMMUNITY",
  ];

  return (
    <section ref={ref} className="border-y border-graphite-200 bg-graphite-50/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-graphite-500 mb-10">
            Trusted by defense and intelligence organizations worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {partners.map((p, i) => (
              <motion.span
                key={p}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                className="text-sm font-medium tracking-[0.15em] text-graphite-400"
              >
                {p}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  const capabilities = [
    {
      icon: Eye,
      title: "Intelligence Analysis",
      description:
        "Real-time multi-source intelligence fusion with AI-assisted pattern recognition across SIGINT, IMINT, and OSINT streams.",
    },
    {
      icon: Network,
      title: "Autonomous Coordination",
      description:
        "Distributed swarm coordination protocols enabling multi-vehicle autonomous operations with dynamic task allocation.",
    },
    {
      icon: Plane,
      title: "Fleet Operations",
      description:
        "Comprehensive fleet management for heterogeneous drone platforms with predictive maintenance and readiness monitoring.",
    },
    {
      icon: Radar,
      title: "Surveillance Systems",
      description:
        "Persistent wide-area surveillance with edge-processed analytics, automated target tracking, and anomaly detection.",
    },
    {
      icon: Activity,
      title: "Data Fusion & Telemetry",
      description:
        "High-bandwidth telemetry aggregation from distributed sensor networks with sub-second correlation and visualization.",
    },
    {
      icon: Cpu,
      title: "AI Decision Support",
      description:
        "Machine learning models trained on operational data to provide real-time recommendations for mission-critical decisions.",
    },
  ];

  return (
    <SectionWrapper id="capabilities">
      <div className="max-w-3xl mb-16">
        <AnimatedHeading as="h2" className="text-4xl lg:text-5xl mb-6">
          Core Capabilities
        </AnimatedHeading>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-graphite-500 leading-relaxed"
        >
          Integrated systems architecture delivering autonomous intelligence,
          surveillance, and reconnaissance capabilities at scale.
        </motion.p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-graphite-200">
        {capabilities.map((cap, i) => (
          <FeatureCard key={cap.title} {...cap} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}

function DroneSystemsSection() {
  const platforms = [
    {
      name: "ARTEMIS HAWK",
      type: "Fixed-Wing MALE UAS",
      specs: ["40hr endurance", "45,000ft ceiling", "Multi-sensor payload"],
      status: "Operational",
    },
    {
      name: "ARTEMIS TALON",
      type: "VTOL Tactical UAS",
      specs: ["12hr endurance", "15,000ft ceiling", "Rapid deployment"],
      status: "Operational",
    },
    {
      name: "ARTEMIS SWARM",
      type: "Distributed Micro-UAS",
      specs: ["Autonomous coordination", "256-unit swarm", "Edge AI processing"],
      status: "Field Testing",
    },
  ];

  return (
    <SectionWrapper id="drone-systems" dark>
      <div className="max-w-3xl mb-16">
        <AnimatedHeading as="h2" className="text-4xl lg:text-5xl mb-6 text-white">
          Drone Systems
        </AnimatedHeading>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-graphite-400 leading-relaxed"
        >
          Purpose-built autonomous aerial platforms engineered for persistent
          operations in contested and communications-denied environments.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {platforms.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="border border-graphite-800 bg-graphite-900/50 p-8 group hover:border-graphite-600 transition-colors duration-300"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-graphite-500">
                {p.type}
              </span>
              <span
                className={`text-xs font-mono uppercase tracking-wider ${
                  p.status === "Operational"
                    ? "text-success"
                    : "text-warning"
                }`}
              >
                {p.status}
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-6 tracking-tight">
              {p.name}
            </h3>
            <div className="space-y-3">
              {p.specs.map((spec) => (
                <div
                  key={spec}
                  className="flex items-center gap-3 text-sm text-graphite-400"
                >
                  <ChevronRight className="w-3 h-3 text-graphite-600" />
                  {spec}
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-graphite-800">
              <Link
                href="/drone-systems"
                className="text-sm text-graphite-400 hover:text-white transition-colors inline-flex items-center gap-2 group/link"
              >
                View specifications
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

function IntelligencePlatformSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const modules = [
    { label: "Command & Control", value: "C2", icon: Satellite },
    { label: "Telemetry", value: "TEL", icon: Activity },
    { label: "Threat Detection", value: "THR", icon: Shield },
    { label: "Analytics", value: "ANL", icon: BarChart3 },
  ];

  return (
    <SectionWrapper id="intelligence">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <AnimatedHeading as="h2" className="text-4xl lg:text-5xl mb-6">
            Intelligence Platform
          </AnimatedHeading>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-graphite-500 leading-relaxed mb-8"
          >
            Unified command, telemetry, monitoring, and decision support in a
            single operational interface. Process thousands of concurrent data
            streams with sub-second latency.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-4"
          >
            {[
              "Multi-domain operational picture",
              "AI-powered threat correlation",
              "Encrypted communications backbone",
              "Real-time mission planning",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-sm text-graphite-700"
              >
                <div className="w-1 h-1 bg-graphite-400 rounded-full" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative"
        >
          <div className="border border-graphite-200 bg-graphite-50 p-1">
            <div className="border border-graphite-200 bg-white p-6">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-graphite-400">
                  ARTEMIS CONTROL v4.2.1
                </span>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-success" />
                  <div className="w-2 h-2 rounded-full bg-graphite-300" />
                  <div className="w-2 h-2 rounded-full bg-graphite-300" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {modules.map((m, i) => (
                  <motion.div
                    key={m.value}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                    className="border border-graphite-200 p-4 hover:border-graphite-300 transition-colors"
                  >
                    <m.icon className="w-5 h-5 text-graphite-400 mb-3" />
                    <div className="text-xs font-mono text-graphite-400 mb-1">
                      {m.value}
                    </div>
                    <div className="text-sm font-medium text-graphite-900">
                      {m.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 p-3 bg-graphite-50 border border-graphite-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 bg-success rounded-full animate-pulse" />
                  <span className="text-xs font-mono text-graphite-500">
                    LIVE TELEMETRY
                  </span>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: 32 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 4 }}
                      animate={
                        inView
                          ? { height: Math.random() * 24 + 4 }
                          : { height: 4 }
                      }
                      transition={{
                        delay: 0.8 + i * 0.03,
                        duration: 0.4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        repeatDelay: 1 + Math.random() * 2,
                      }}
                      className="flex-1 bg-graphite-300 min-h-[4px]"
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

function MissionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const metrics = [
    { label: "Active Missions", value: "24", trend: "+3" },
    { label: "Assets Deployed", value: "142", trend: "+12" },
    { label: "Zones Monitored", value: "8", trend: "—" },
    { label: "Uptime", value: "99.97%", trend: "—" },
  ];

  const events = [
    { time: "14:32:01", event: "Sector 7 sweep complete", type: "success" },
    { time: "14:31:45", event: "Hawk-3 RTB initiated", type: "info" },
    { time: "14:31:12", event: "Anomaly detected — Grid 4C", type: "warning" },
    { time: "14:30:58", event: "Talon-7 on station", type: "success" },
    { time: "14:30:22", event: "Comms relay established", type: "info" },
  ];

  return (
    <SectionWrapper id="mission" className="bg-graphite-50/50">
      <div className="max-w-3xl mb-16">
        <AnimatedHeading as="h2" className="text-4xl lg:text-5xl mb-6">
          Operational Awareness
        </AnimatedHeading>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-graphite-500 leading-relaxed"
        >
          Complete situational awareness from a single pane of glass.
          Real-time mission tracking, fleet telemetry, and operational
          analytics.
        </motion.p>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="border border-graphite-200 bg-white"
      >
        <div className="border-b border-graphite-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-graphite-500">
              Mission Control — Live Preview
            </span>
          </div>
          <span className="text-xs font-mono text-graphite-400">
            ARTEMIS CONTROL
          </span>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className="border border-graphite-200 p-4"
              >
                <div className="text-xs uppercase tracking-wider text-graphite-500 mb-2">
                  {m.label}
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-2xl font-semibold font-mono text-graphite-900">
                    {m.value}
                  </span>
                  <span className="text-xs font-mono text-graphite-400">
                    {m.trend}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 border border-graphite-200 p-4">
              <div className="text-xs uppercase tracking-wider text-graphite-500 mb-4">
                Operational Map
              </div>
              <div className="aspect-[16/9] bg-graphite-50 grid-pattern relative overflow-hidden">
                <motion.div
                  animate={
                    inView
                      ? {
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }
                      : {}
                  }
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" as const }}
                  className="absolute top-1/3 left-1/4 w-32 h-32 border border-graphite-300 rounded-full"
                />
                <motion.div
                  animate={
                    inView
                      ? {
                          scale: [1, 1.3, 1],
                          opacity: [0.2, 0.5, 0.2],
                        }
                      : {}
                  }
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut" as const,
                    delay: 1,
                  }}
                  className="absolute top-1/2 right-1/3 w-24 h-24 border border-graphite-300 rounded-full"
                />
                {[
                  { top: "25%", left: "30%" },
                  { top: "45%", left: "55%" },
                  { top: "60%", left: "40%" },
                  { top: "35%", left: "70%" },
                ].map((pos, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.2 }}
                    className="absolute w-2 h-2 bg-graphite-900"
                    style={pos}
                  >
                    <div className="absolute inset-0 bg-graphite-900 animate-ping opacity-20" />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="border border-graphite-200 p-4">
              <div className="text-xs uppercase tracking-wider text-graphite-500 mb-4">
                Activity Feed
              </div>
              <div className="space-y-0">
                {events.map((e, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                    className="flex gap-3 py-3 border-b border-graphite-100 last:border-0"
                  >
                    <span className="text-xs font-mono text-graphite-400 shrink-0 pt-0.5">
                      {e.time}
                    </span>
                    <span className="text-xs text-graphite-700">{e.event}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

function SecuritySection() {
  const features = [
    {
      icon: Lock,
      title: "Zero Trust Architecture",
      description:
        "End-to-end encryption with certificate-pinned communications and hardware-backed key storage.",
    },
    {
      icon: Shield,
      title: "Compliance Ready",
      description:
        "Built to satisfy NIST 800-53, FedRAMP High, ITAR, and IL5 deployment requirements.",
    },
    {
      icon: Server,
      title: "Sovereign Deployment",
      description:
        "On-premises, air-gapped, and hybrid deployment topologies for classified environments.",
    },
    {
      icon: Globe,
      title: "Multi-Domain Security",
      description:
        "Cross-domain guard integration with automated content inspection and policy enforcement.",
    },
  ];

  return (
    <SectionWrapper id="security">
      <div className="max-w-3xl mb-16">
        <AnimatedHeading as="h2" className="text-4xl lg:text-5xl mb-6">
          Security & Deployment
        </AnimatedHeading>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-graphite-500 leading-relaxed"
        >
          Engineered for the most demanding security environments.
          Architected for classified operations from day one.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-graphite-200 border border-graphite-200">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-white p-8 lg:p-10"
          >
            <f.icon className="w-6 h-6 text-graphite-400 mb-5" />
            <h3 className="text-lg font-semibold text-graphite-900 mb-3">
              {f.title}
            </h3>
            <p className="text-sm text-graphite-500 leading-relaxed">
              {f.description}
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
        <AnimatedHeading
          as="h2"
          className="text-4xl lg:text-5xl mb-6 text-white"
        >
          Ready to deploy
        </AnimatedHeading>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-graphite-400 leading-relaxed mb-10"
        >
          Contact our team to discuss operational requirements and deployment
          timelines for your organization.
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
          <Link href="/register">
            <Button
              variant="outline"
              size="xl"
              className="border-graphite-700 text-graphite-300 hover:bg-graphite-800 hover:text-white"
            >
              Request Demo
            </Button>
          </Link>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <CapabilitiesSection />
      <DroneSystemsSection />
      <IntelligencePlatformSection />
      <MissionSection />
      <SecuritySection />
      <CTASection />
    </>
  );
}
