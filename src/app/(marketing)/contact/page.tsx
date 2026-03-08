"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Send,
  CheckCircle,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  organization: z.string().min(2, "Organization must be at least 2 characters"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative flex items-center overflow-hidden"
    >
      <GridBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/60 to-white z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16 lg:pt-40 lg:pb-20">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
          className="max-w-3xl"
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-graphite-300 text-xs font-medium uppercase tracking-widest text-graphite-600"
          >
            Contact
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-graphite-950 leading-[0.95]"
          >
            Get in
            <br />
            <span className="text-graphite-400">touch</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={3}
            className="mt-8 text-lg lg:text-xl text-graphite-600 max-w-2xl leading-relaxed"
          >
            Ready to discuss operational requirements, request a technical
            briefing, or explore how Artemis systems can integrate into your
            mission architecture. Our team is standing by.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (_data: ContactFormData) => {
    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitted(true);
  };

  const subjects = [
    { value: "", label: "Select a subject" },
    { value: "general", label: "General Inquiry" },
    { value: "sales", label: "Sales & Procurement" },
    { value: "technical", label: "Technical Briefing" },
    { value: "partnership", label: "Partnership Opportunity" },
    { value: "support", label: "Operational Support" },
    { value: "careers", label: "Careers" },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
    >
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="border border-graphite-200 p-12 text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-graphite-50 flex items-center justify-center">
              <CheckCircle
                className="w-8 h-8 text-success"
                strokeWidth={1.5}
              />
            </div>
            <h3 className="text-2xl font-semibold text-graphite-900 mb-3">
              Message received
            </h3>
            <p className="text-base text-graphite-500 leading-relaxed max-w-md mx-auto">
              Your inquiry has been submitted to our operations team. We
              will respond within one business day. For urgent matters,
              contact us directly by phone.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="border border-graphite-200 p-8 lg:p-10"
          >
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-graphite-900 mb-1">
                Send a message
              </h2>
              <p className="text-sm text-graphite-500">
                All fields are required. Expect a response within 24 hours.
              </p>
            </div>

            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Input
                  id="name"
                  label="Full Name"
                  placeholder="Dr. Jane Smith"
                  error={errors.name?.message}
                  {...register("name")}
                />
                <Input
                  id="email"
                  label="Email Address"
                  type="email"
                  placeholder="jane.smith@defense.gov"
                  error={errors.email?.message}
                  {...register("email")}
                />
              </div>

              <Input
                id="organization"
                label="Organization"
                placeholder="Department of Defense"
                error={errors.organization?.message}
                {...register("organization")}
              />

              {/* Custom Select */}
              <div className="space-y-1.5">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-graphite-700"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  className={`flex h-10 w-full border bg-white px-3 py-2 text-sm text-graphite-900 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-graphite-400 focus:ring-offset-1 focus:border-graphite-400 ${
                    errors.subject
                      ? "border-danger focus:ring-danger"
                      : "border-graphite-300"
                  }`}
                  {...register("subject")}
                >
                  {subjects.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
                {errors.subject && (
                  <p className="text-xs text-danger mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Textarea */}
              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-graphite-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Describe your operational requirements, timeline, and any specific capabilities of interest..."
                  className={`flex w-full border bg-white px-3 py-2 text-sm text-graphite-900 placeholder:text-graphite-400 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-graphite-400 focus:ring-offset-1 focus:border-graphite-400 resize-none ${
                    errors.message
                      ? "border-danger focus:ring-danger"
                      : "border-graphite-300"
                  }`}
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-xs text-danger mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  size="lg"
                  loading={isSubmitting}
                  className="w-full sm:w-auto group"
                >
                  Submit Inquiry
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </div>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ContactInfoPanel() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const contacts = [
    {
      icon: Mail,
      label: "General Inquiries",
      value: "info@artemis-defense.com",
      href: "mailto:info@artemis-defense.com",
    },
    {
      icon: Mail,
      label: "Sales & Procurement",
      value: "sales@artemis-defense.com",
      href: "mailto:sales@artemis-defense.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (703) 555-0142",
      href: "tel:+17035550142",
    },
    {
      icon: MapPin,
      label: "Headquarters",
      value: "1400 Wilson Blvd, Suite 800\nArlington, VA 22209",
      href: null,
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="space-y-6"
    >
      {/* Contact Info Cards */}
      <div className="border border-graphite-200 divide-y divide-graphite-200">
        {contacts.map((contact, i) => (
          <motion.div
            key={contact.label}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
            className="p-6"
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-9 h-9 bg-graphite-50 flex items-center justify-center">
                <contact.icon
                  className="w-4 h-4 text-graphite-500"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-graphite-500 mb-1">
                  {contact.label}
                </div>
                {contact.href ? (
                  <a
                    href={contact.href}
                    className="text-sm text-graphite-900 hover:text-graphite-600 transition-colors"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <span className="text-sm text-graphite-900 whitespace-pre-line">
                    {contact.value}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Office Hours */}
      <div className="border border-graphite-200 p-6">
        <div className="flex items-center gap-3 mb-4">
          <Building2
            className="w-4 h-4 text-graphite-500"
            strokeWidth={1.5}
          />
          <span className="text-xs font-mono uppercase tracking-wider text-graphite-500">
            Office Hours
          </span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-graphite-500">Monday - Friday</span>
            <span className="text-graphite-900 font-mono">
              0800 - 1800 ET
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-graphite-500">24/7 Operations Support</span>
            <span className="text-graphite-900 font-mono">Available</span>
          </div>
        </div>
      </div>

      {/* Classification Notice */}
      <div className="border border-graphite-200 bg-graphite-50 p-6">
        <p className="text-xs text-graphite-500 leading-relaxed">
          Do not submit classified or controlled unclassified information
          through this form. For classified inquiries, contact us via
          approved secure channels. ITAR-controlled technical discussions
          require prior verification of U.S. person status.
        </p>
      </div>
    </motion.div>
  );
}

function ContactSection() {
  return (
    <SectionWrapper>
      <div className="grid lg:grid-cols-[1fr,380px] gap-10 lg:gap-16">
        <ContactForm />
        <ContactInfoPanel />
      </div>
    </SectionWrapper>
  );
}

function CTASection() {
  return (
    <SectionWrapper dark>
      <div className="text-center max-w-3xl mx-auto">
        <AnimatedHeading as="h2" className="text-white">
          Prefer a direct conversation?
        </AnimatedHeading>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-lg text-graphite-400 leading-relaxed mb-10"
        >
          Our solutions architecture team is available for secure
          communications regarding classified programs and sensitive
          operational requirements.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/capabilities">
            <Button
              size="xl"
              className="bg-white text-graphite-900 hover:bg-graphite-100 group"
            >
              Explore Capabilities
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

export default function ContactPage() {
  return (
    <>
      <HeroSection />
      <ContactSection />
      <CTASection />
    </>
  );
}
