"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;

const formAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const itemAnimation = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordInput>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit() {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={formAnimation}
    >
      {/* Header */}
      <motion.div variants={itemAnimation} className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-6 h-px bg-graphite-300" />
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-graphite-400">
            Account Recovery
          </span>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight text-graphite-900">
          Reset Password
        </h1>
        <p className="mt-2 text-sm text-graphite-500">
          Enter your email to receive a password reset link
        </p>
      </motion.div>

      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.div
            key="form"
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
            variants={formAnimation}
          >
            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <motion.div variants={itemAnimation}>
                <Input
                  id="email"
                  type="email"
                  label="Email Address"
                  placeholder="operator@artemis.mil"
                  autoComplete="email"
                  error={errors.email?.message}
                  {...register("email")}
                />
              </motion.div>

              <motion.div variants={itemAnimation}>
                <Button
                  type="submit"
                  loading={isSubmitting}
                  className="w-full"
                  size="lg"
                >
                  {isSubmitting ? "Sending..." : "Send Reset Link"}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
          >
            {/* Success state */}
            <div className="border border-graphite-200 bg-graphite-50 px-5 py-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-graphite-500">
                  Request Submitted
                </span>
              </div>
              <p className="text-sm text-graphite-700 leading-relaxed">
                If an account with that email exists, you will receive a password
                reset link shortly. Check your inbox and spam folder.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer link */}
      <motion.div variants={itemAnimation} className="mt-8 text-center">
        <Link
          href="/login"
          className="text-xs text-graphite-500 hover:text-graphite-900 transition-colors duration-200 inline-flex items-center gap-2"
        >
          <span aria-hidden="true">&larr;</span>
          Back to sign in
        </Link>
      </motion.div>
    </motion.div>
  );
}
