"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  Crosshair,
  ShieldCheck,
  Bot,
  Zap,
  ArrowRight,
  Users,
  Target,
  Clock,
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
            About Artemis
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-graphite-950 leading-[0.95]"
          >
            The standard
            <br />
            in autonomous
            <br />
            <span className="text-graphite-400">defense systems</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={3}
            className="mt-8 text-lg lg:text-xl text-graphite-600 max-w-2xl leading-relaxed"
          >
            Artemis builds the critical infrastructure that defense and
            intelligence organizations depend on. We engineer autonomous
            systems for the most demanding operational environments on earth.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function MissionSection() {
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
            Our Mission
          </motion.div>
          <AnimatedHeading as="h2">
            Built for the most demanding operational environments
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
            Artemis was founded on a singular conviction: the defense
            infrastructure protecting allied nations must be as intelligent,
            adaptive, and resilient as the threats it confronts.
          </p>
          <p className="text-base text-graphite-500 leading-relaxed">
            We design and deliver autonomous systems that operate at the
            intersection of artificial intelligence, aerospace engineering,
            and signals intelligence. Every platform we build is engineered
            for zero-failure tolerance, contested-environment endurance, and
            seamless integration into existing command architectures.
          </p>
          <p className="text-base text-graphite-500 leading-relaxed">
            Our technology is deployed across allied defense forces, national
            intelligence agencies, and critical infrastructure protection
            programs worldwide. We do not build products for demonstration.
            We build systems for deployment.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

function ValuesSection() {
  const values = [
    {
      icon: Crosshair,
      title: "Precision",
      description:
        "Every component, algorithm, and decision pathway is engineered to sub-tolerance specifications. In mission-critical systems, approximation is not acceptable.",
    },
    {
      icon: ShieldCheck,
      title: "Security",
      description:
        "Zero-trust architecture from silicon to cloud. Our systems are built for classified environments and comply with the most stringent international security frameworks.",
    },
    {
      icon: Bot,
      title: "Autonomy",
      description:
        "True machine autonomy that reduces operator burden and accelerates decision cycles. AI that augments human judgment rather than replacing it.",
    },
    {
      icon: Zap,
      title: "Reliability",
      description:
        "99.97% operational uptime across deployed systems. Redundant architectures, graceful degradation, and field-proven resilience in communications-denied environments.",
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
          Core Values
        </motion.div>
        <AnimatedHeading as="h2">
          Principles that govern every system we build
        </AnimatedHeading>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-graphite-200 border border-graphite-200">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-white p-8 lg:p-10"
          >
            <v.icon
              className="w-6 h-6 text-graphite-400 mb-5"
              strokeWidth={1.5}
            />
            <h3 className="text-lg font-semibold text-graphite-900 mb-3">
              {v.title}
            </h3>
            <p className="text-sm text-graphite-500 leading-relaxed">
              {v.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

function TimelineSection() {
  const milestones = [
    {
      year: "2019",
      title: "Founded",
      description:
        "Artemis established in Arlington, VA by a team of defense technologists and former intelligence officers.",
    },
    {
      year: "2020",
      title: "First Contract",
      description:
        "Awarded initial R&D contract for autonomous ISR systems with the Department of Defense.",
    },
    {
      year: "2021",
      title: "HAWK Platform",
      description:
        "ARTEMIS HAWK fixed-wing UAS achieves first flight. Begins operational testing with allied forces.",
    },
    {
      year: "2022",
      title: "FedRAMP Authorization",
      description:
        "ARTEMIS CONTROL intelligence platform receives FedRAMP High authorization for classified workloads.",
    },
    {
      year: "2023",
      title: "TALON Deployment",
      description:
        "ARTEMIS TALON VTOL system enters full-rate production. Deployed across three theater commands.",
    },
    {
      year: "2024",
      title: "SWARM Program",
      description:
        "256-unit autonomous swarm coordination demonstrated in contested EW environments. NATO interoperability certified.",
    },
    {
      year: "2025",
      title: "Global Expansion",
      description:
        "Operations expanded to allied nations across Five Eyes and NATO partnerships. 400+ systems deployed worldwide.",
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
          Timeline
        </motion.div>
        <AnimatedHeading as="h2" className="text-white">
          Key milestones
        </AnimatedHeading>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-0 bottom-0 w-px bg-graphite-800 hidden md:block" />

        <div className="space-y-8">
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="relative md:pl-12"
            >
              {/* Dot */}
              <div className="absolute left-0 top-1.5 w-[15px] h-[15px] border-2 border-graphite-700 bg-graphite-950 hidden md:block" />

              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <span className="text-sm font-mono text-graphite-500 shrink-0 w-12">
                  {m.year}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1">
                    {m.title}
                  </h3>
                  <p className="text-sm text-graphite-400 leading-relaxed">
                    {m.description}
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

function LeadershipSection() {
  const leaders = [
    {
      name: "Dr. Elena Vasquez",
      title: "Chief Executive Officer",
      bio: "Former Deputy Director at DARPA with 20 years in autonomous systems research. PhD in Aerospace Engineering from MIT.",
    },
    {
      name: "Col. James Harper (Ret.)",
      title: "Chief Operations Officer",
      bio: "26-year career in U.S. Air Force special operations. Led multi-domain C2 programs across three combatant commands.",
    },
    {
      name: "Dr. Sarah Chen",
      title: "Chief Technology Officer",
      bio: "Pioneer in swarm intelligence and edge AI architectures. Previously led advanced AI programs at a major defense contractor.",
    },
    {
      name: "Michael Torres",
      title: "Chief Information Security Officer",
      bio: "Former NSA technical director. Architect of cross-domain security solutions for IC and DoD classified networks.",
    },
    {
      name: "Dr. Anika Patel",
      title: "VP of Engineering",
      bio: "Specialist in autonomous flight systems and sensor fusion. 15 years in defense aerospace engineering and rapid prototyping.",
    },
    {
      name: "Robert Kim",
      title: "VP of Government Relations",
      bio: "Former senior advisor to the Senate Armed Services Committee. Deep expertise in defense acquisition and policy.",
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
          Leadership
        </motion.div>
        <AnimatedHeading as="h2">
          Operational experience at every level
        </AnimatedHeading>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-lg text-graphite-500 leading-relaxed"
        >
          Our leadership team brings decades of combined experience across
          defense, intelligence, and advanced technology development.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {leaders.map((leader, i) => (
          <motion.div
            key={leader.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="border border-graphite-200 p-6 hover:border-graphite-300 transition-colors duration-300"
          >
            <div className="w-12 h-12 bg-graphite-100 mb-5 flex items-center justify-center">
              <Users
                className="w-5 h-5 text-graphite-400"
                strokeWidth={1.5}
              />
            </div>
            <h3 className="text-base font-semibold text-graphite-900">
              {leader.name}
            </h3>
            <p className="text-xs font-mono uppercase tracking-wider text-graphite-500 mt-1 mb-4">
              {leader.title}
            </p>
            <p className="text-sm text-graphite-500 leading-relaxed">
              {leader.bio}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "400+", label: "Systems Deployed" },
    { value: "12", label: "Allied Nations" },
    { value: "99.97%", label: "Uptime SLA" },
    { value: "24/7", label: "Mission Support" },
  ];

  return (
    <section
      ref={ref}
      className="border-y border-graphite-200 bg-graphite-50/50"
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-semibold text-graphite-900 font-mono">
                {stat.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-wider text-graphite-500">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <SectionWrapper dark>
      <div className="text-center max-w-3xl mx-auto">
        <AnimatedHeading as="h2" className="text-white">
          Join the mission
        </AnimatedHeading>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-lg text-graphite-400 leading-relaxed mb-10"
        >
          We are always looking for exceptional engineers, operators, and
          strategists who want to build systems that matter.
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
              Get in Touch
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/capabilities">
            <Button
              variant="outline"
              size="xl"
              className="border-graphite-700 text-graphite-300 hover:bg-graphite-800 hover:text-white"
            >
              Explore Capabilities
            </Button>
          </Link>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <ValuesSection />
      <StatsSection />
      <TimelineSection />
      <LeadershipSection />
      <CTASection />
    </>
  );
}
