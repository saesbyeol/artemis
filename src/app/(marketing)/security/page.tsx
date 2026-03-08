"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Server,
  Globe,
  Eye,
  KeyRound,
  FileCheck,
  ArrowRight,
  ChevronRight,
  Fingerprint,
  ScanLine,
  Cloud,
  HardDrive,
  Wifi,
  WifiOff,
  Network,
  ClipboardCheck,
  AlertTriangle,
  Activity,
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
            <Lock className="w-3 h-3" />
            Security & Compliance
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-graphite-950 leading-[0.95]"
          >
            Architected for
            <br />
            classified
            <br />
            <span className="text-graphite-400">operations</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={3}
            className="mt-8 text-lg lg:text-xl text-graphite-600 max-w-2xl leading-relaxed"
          >
            Security is not a feature. It is the foundation. Every Artemis
            system is engineered from silicon to cloud with zero-trust
            principles, end-to-end encryption, and compliance with the most
            stringent international security frameworks.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={4}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl"
          >
            {[
              { value: "FedRAMP", label: "High Authorized" },
              { value: "NIST", label: "800-53 Compliant" },
              { value: "ITAR", label: "Registered" },
              { value: "IL5", label: "Certified" },
            ].map((cert) => (
              <div key={cert.label}>
                <div className="text-lg lg:text-xl font-semibold text-graphite-900 font-mono">
                  {cert.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-graphite-500">
                  {cert.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ZeroTrustSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const principles = [
    {
      icon: Fingerprint,
      title: "Identity-Centric Access",
      description:
        "Every request is authenticated and authorized regardless of network location. Multi-factor authentication with hardware token support and certificate-based machine identity.",
    },
    {
      icon: ScanLine,
      title: "Continuous Verification",
      description:
        "Trust is never assumed and always verified. Continuous posture assessment, behavioral analytics, and real-time access decision enforcement at every interaction.",
    },
    {
      icon: Lock,
      title: "Least Privilege Enforcement",
      description:
        "Role-based and attribute-based access controls ensuring operators access only the data and functions required for their current mission role.",
    },
    {
      icon: Eye,
      title: "Assume Breach Posture",
      description:
        "Architecturally designed to contain and isolate compromises. Micro-segmentation, lateral movement detection, and automated threat containment.",
    },
  ];

  return (
    <SectionWrapper>
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono uppercase tracking-widest text-graphite-500 mb-6"
          >
            Zero Trust Architecture
          </motion.div>
          <AnimatedHeading as="h2">
            Never trust, always verify
          </AnimatedHeading>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-lg text-graphite-500 leading-relaxed"
          >
            Artemis implements a complete zero-trust security model aligned
            with DoD Zero Trust Reference Architecture and NIST SP 800-207.
            No implicit trust is granted to any user, device, or network
            segment.
          </motion.p>
        </div>

        <div className="space-y-4">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="border border-graphite-200 p-6 hover:border-graphite-300 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-9 h-9 bg-graphite-50 flex items-center justify-center">
                  <p.icon
                    className="w-4 h-4 text-graphite-500"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-graphite-900 mb-1">
                    {p.title}
                  </h3>
                  <p className="text-sm text-graphite-500 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function ComplianceSection() {
  const frameworks = [
    {
      code: "FedRAMP High",
      title: "Federal Risk and Authorization Management Program",
      details: [
        "FedRAMP High baseline authorization",
        "421 security controls implemented and assessed",
        "Continuous monitoring with monthly POA&M reporting",
        "Third-party assessment organization (3PAO) validated",
      ],
    },
    {
      code: "NIST 800-53",
      title: "Security and Privacy Controls",
      details: [
        "Full implementation of NIST SP 800-53 Rev. 5 controls",
        "High impact baseline for confidentiality, integrity, availability",
        "Automated compliance monitoring and evidence collection",
        "Supply chain risk management (SR family) controls",
      ],
    },
    {
      code: "ITAR",
      title: "International Traffic in Arms Regulations",
      details: [
        "Registered with the Directorate of Defense Trade Controls",
        "Technical data access restricted to U.S. persons",
        "Encrypted storage and transmission of ITAR-controlled data",
        "Export control classification and marking enforcement",
      ],
    },
    {
      code: "IL5",
      title: "Impact Level 5 Authorization",
      details: [
        "Authorized for CUI and National Security Systems data",
        "Meets DoD SRG requirements for IL5 workloads",
        "Dedicated infrastructure with U.S. person administration",
        "STIG-hardened operating environments",
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
          Compliance
        </motion.div>
        <AnimatedHeading as="h2" className="text-white">
          Compliance is not optional
        </AnimatedHeading>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-lg text-graphite-400 leading-relaxed"
        >
          Artemis maintains active compliance with the security frameworks
          required for defense and intelligence operations. Compliance is
          continuously validated, not periodically assessed.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {frameworks.map((fw, i) => (
          <motion.div
            key={fw.code}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="border border-graphite-800 bg-graphite-900/50 p-8"
          >
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-white mb-1">
              {fw.code}
            </div>
            <div className="text-xs text-graphite-500 mb-5">{fw.title}</div>
            <div className="space-y-2.5">
              {fw.details.map((detail, j) => (
                <div
                  key={j}
                  className="flex items-start gap-3 text-sm text-graphite-400"
                >
                  <ChevronRight className="w-3 h-3 text-graphite-600 shrink-0 mt-1" />
                  {detail}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

function DeploymentSection() {
  const models = [
    {
      icon: Cloud,
      title: "Cloud",
      label: "GovCloud / C2S",
      description:
        "Deployed on FedRAMP High authorized cloud infrastructure with full managed services. Ideal for organizations requiring scalability without infrastructure management burden.",
      features: [
        "AWS GovCloud / Azure Government",
        "Auto-scaling and managed Kubernetes",
        "99.99% availability SLA",
        "Managed security patching",
      ],
    },
    {
      icon: HardDrive,
      title: "On-Premises",
      label: "Sovereign / SCIF",
      description:
        "Full platform deployment on customer-owned infrastructure within classified facilities. Complete data sovereignty with no external network dependencies.",
      features: [
        "SCIF-compatible deployment",
        "Customer-controlled hardware",
        "No external network requirement",
        "Full feature parity with cloud",
      ],
    },
    {
      icon: WifiOff,
      title: "Air-Gapped",
      label: "Classified Networks",
      description:
        "Fully isolated deployment with no connection to external networks. Designed for highest-classification environments requiring complete network isolation.",
      features: [
        "Zero external connectivity",
        "Offline update mechanisms",
        "Cross-domain guard integration",
        "Manual data import/export controls",
      ],
    },
    {
      icon: Network,
      title: "Hybrid",
      label: "Multi-Environment",
      description:
        "Distributed deployment spanning cloud, on-premises, and edge nodes with unified management. Supports mixed-classification data handling across environments.",
      features: [
        "Unified management plane",
        "Cross-environment data sync",
        "Edge node federation",
        "Classification-aware routing",
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
          Deployment Models
        </motion.div>
        <AnimatedHeading as="h2">
          Deploy anywhere, compromise nothing
        </AnimatedHeading>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-lg text-graphite-500 leading-relaxed"
        >
          Full feature parity across all deployment topologies. Choose the
          model that matches your security requirements without accepting
          capability trade-offs.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {models.map((model, i) => (
          <motion.div
            key={model.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="border border-graphite-200 p-8 hover:border-graphite-300 transition-colors duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-graphite-50 flex items-center justify-center">
                <model.icon
                  className="w-5 h-5 text-graphite-500"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <h3 className="text-base font-semibold text-graphite-900">
                  {model.title}
                </h3>
                <span className="text-xs font-mono text-graphite-400">
                  {model.label}
                </span>
              </div>
            </div>
            <p className="text-sm text-graphite-500 leading-relaxed mb-5">
              {model.description}
            </p>
            <div className="space-y-2">
              {model.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 text-sm text-graphite-600"
                >
                  <ChevronRight className="w-3 h-3 text-graphite-400 shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

function EncryptionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const standards = [
    {
      category: "Data at Rest",
      items: [
        "AES-256-GCM full-volume encryption",
        "Hardware Security Module (HSM) key management",
        "FIPS 140-3 Level 3 validated cryptographic modules",
        "Automated key rotation with zero-downtime re-encryption",
      ],
    },
    {
      category: "Data in Transit",
      items: [
        "TLS 1.3 with certificate pinning",
        "mTLS for all service-to-service communication",
        "CNSA Suite-compliant cipher selection",
        "Perfect forward secrecy on all connections",
      ],
    },
    {
      category: "Data in Use",
      items: [
        "Confidential computing with hardware enclaves",
        "Memory encryption for sensitive workloads",
        "Secure multi-party computation for data sharing",
        "Attestation-verified processing environments",
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
          Encryption Standards
        </motion.div>
        <AnimatedHeading as="h2" className="text-white">
          End-to-end encryption at every layer
        </AnimatedHeading>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {standards.map((standard, i) => (
          <motion.div
            key={standard.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="border border-graphite-800 bg-graphite-900/50 p-8"
          >
            <KeyRound
              className="w-5 h-5 text-graphite-500 mb-4"
              strokeWidth={1.5}
            />
            <h3 className="text-base font-semibold text-white mb-5">
              {standard.category}
            </h3>
            <div className="space-y-3">
              {standard.items.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm text-graphite-400"
                >
                  <ChevronRight className="w-3 h-3 text-graphite-600 shrink-0 mt-1" />
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

function AuditSection() {
  const capabilities = [
    {
      icon: ClipboardCheck,
      title: "Comprehensive Audit Logging",
      description:
        "Every access, modification, and operational action is logged with immutable audit trails. Tamper-evident logging with cryptographic chain-of-custody verification.",
    },
    {
      icon: Activity,
      title: "Real-Time Security Monitoring",
      description:
        "Continuous security posture monitoring with automated threat detection, anomaly identification, and incident response workflows integrated into the operational platform.",
    },
    {
      icon: AlertTriangle,
      title: "Incident Response Automation",
      description:
        "Automated containment and response playbooks triggered by security events. Integration with SOC tools and escalation procedures for human-in-the-loop response.",
    },
    {
      icon: FileCheck,
      title: "Continuous Compliance Validation",
      description:
        "Automated compliance checks against FedRAMP, NIST, and DoD SRG control baselines with real-time drift detection and evidence collection for auditors.",
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
          Audit & Monitoring
        </motion.div>
        <AnimatedHeading as="h2">
          Continuous visibility, continuous assurance
        </AnimatedHeading>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-graphite-200 border border-graphite-200">
        {capabilities.map((cap, i) => (
          <motion.div
            key={cap.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-white p-8 lg:p-10"
          >
            <cap.icon
              className="w-6 h-6 text-graphite-400 mb-5"
              strokeWidth={1.5}
            />
            <h3 className="text-lg font-semibold text-graphite-900 mb-3">
              {cap.title}
            </h3>
            <p className="text-sm text-graphite-500 leading-relaxed">
              {cap.description}
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
          Security assessment available
        </AnimatedHeading>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-lg text-graphite-400 leading-relaxed mb-10"
        >
          Request a detailed security architecture review and compliance
          documentation package for your authorization and accreditation
          process.
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
              Request Security Package
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/intelligence">
            <Button
              variant="outline"
              size="xl"
              className="border-graphite-700 text-graphite-300 hover:bg-graphite-800 hover:text-white"
            >
              View Platform
            </Button>
          </Link>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

export default function SecurityPage() {
  return (
    <>
      <HeroSection />
      <ZeroTrustSection />
      <ComplianceSection />
      <DeploymentSection />
      <EncryptionSection />
      <AuditSection />
      <CTASection />
    </>
  );
}
