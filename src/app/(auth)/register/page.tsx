"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { registerSchema, type RegisterInput } from "@/lib/validations";

const formAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemAnimation = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(data: RegisterInput) {
    setError(null);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.error || "Registration failed. Please try again.");
        return;
      }

      // Auto sign-in after successful registration
      const signInResult = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (signInResult?.error) {
        // Account created but auto sign-in failed — redirect to login
        router.push("/login");
        return;
      }

      router.push("/dashboard");
    } catch {
      setError("An unexpected error occurred. Please try again.");
    }
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
            Registration
          </span>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight text-graphite-900">
          Create Account
        </h1>
        <p className="mt-2 text-sm text-graphite-500">
          Request access to the Artemis platform
        </p>
      </motion.div>

      {/* Error message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 border border-danger/20 bg-danger/5 px-4 py-3"
        >
          <p className="text-xs text-danger">{error}</p>
        </motion.div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <motion.div variants={itemAnimation}>
          <Input
            id="name"
            type="text"
            label="Full Name"
            placeholder="Jane Doe"
            autoComplete="name"
            error={errors.name?.message}
            {...register("name")}
          />
        </motion.div>

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
          <Input
            id="password"
            type="password"
            label="Password"
            placeholder="Min 8 characters"
            autoComplete="new-password"
            error={errors.password?.message}
            {...register("password")}
          />
        </motion.div>

        <motion.div variants={itemAnimation}>
          <Input
            id="confirmPassword"
            type="password"
            label="Confirm Password"
            placeholder="Re-enter your password"
            autoComplete="new-password"
            error={errors.confirmPassword?.message}
            {...register("confirmPassword")}
          />
        </motion.div>

        {/* Password requirements hint */}
        <motion.div variants={itemAnimation}>
          <p className="text-[10px] font-mono uppercase tracking-wider text-graphite-400 leading-relaxed">
            Requires 8+ characters with uppercase, lowercase, and a number
          </p>
        </motion.div>

        <motion.div variants={itemAnimation}>
          <Button
            type="submit"
            loading={isSubmitting}
            className="w-full"
            size="lg"
          >
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </Button>
        </motion.div>
      </form>

      {/* Footer link */}
      <motion.div variants={itemAnimation} className="mt-8 text-center">
        <p className="text-xs text-graphite-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-graphite-900 hover:text-graphite-700 transition-colors duration-200"
          >
            Sign in
          </Link>
        </p>
      </motion.div>
    </motion.div>
  );
}
