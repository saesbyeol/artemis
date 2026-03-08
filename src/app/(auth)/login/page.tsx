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
import { loginSchema, type LoginInput } from "@/lib/validations";

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
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginInput) {
    setError(null);

    try {
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid credentials. Please verify your email and password.");
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
            Authentication
          </span>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight text-graphite-900">
          Sign In
        </h1>
        <p className="mt-2 text-sm text-graphite-500">
          Access your Artemis Control dashboard
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
            placeholder="Enter your password"
            autoComplete="current-password"
            error={errors.password?.message}
            {...register("password")}
          />
        </motion.div>

        <motion.div variants={itemAnimation} className="flex items-center justify-end">
          <Link
            href="/forgot-password"
            className="text-xs text-graphite-500 hover:text-graphite-900 transition-colors duration-200"
          >
            Forgot password?
          </Link>
        </motion.div>

        <motion.div variants={itemAnimation}>
          <Button
            type="submit"
            loading={isSubmitting}
            className="w-full"
            size="lg"
          >
            {isSubmitting ? "Authenticating..." : "Sign In"}
          </Button>
        </motion.div>
      </form>

      {/* Footer link */}
      <motion.div variants={itemAnimation} className="mt-8 text-center">
        <p className="text-xs text-graphite-500">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-medium text-graphite-900 hover:text-graphite-700 transition-colors duration-200"
          >
            Request access
          </Link>
        </p>
      </motion.div>
    </motion.div>
  );
}
