"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileSchema, type ProfileInput } from "@/lib/validations";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Shield, Building, CheckCircle } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function ProfilePage() {
  const { data: session } = useSession();
  const [saved, setSaved] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProfileInput>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: session?.user?.name || "",
      email: session?.user?.email || "",
      organization: "Artemis Defense Systems",
      role: "Operations Lead",
    },
  });

  const initials = session?.user?.name
    ? session.user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "U";

  const onSubmit = async (_data: ProfileInput) => {
    // Simulate save
    await new Promise((r) => setTimeout(r, 800));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-3xl space-y-6 pt-2 lg:pt-0"
    >
      {/* Page heading */}
      <motion.div variants={item}>
        <h1 className="text-2xl font-bold text-graphite-900 tracking-tight">Profile</h1>
        <p className="text-sm text-graphite-500 mt-1">
          Manage your operator profile and credentials.
        </p>
      </motion.div>

      {/* Profile header card */}
      <motion.div variants={item}>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="h-20 w-20 rounded bg-graphite-900 flex items-center justify-center text-xl font-bold text-graphite-200 shrink-0">
                {initials}
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-lg font-semibold text-graphite-900">
                  {session?.user?.name || "Operator"}
                </h2>
                <p className="text-sm text-graphite-500 mt-0.5">
                  {session?.user?.email || "operator@artemis.dev"}
                </p>
                <div className="flex flex-wrap items-center gap-2 mt-3">
                  <Badge variant="default">
                    <User className="h-3 w-3 mr-1" />
                    Operations Lead
                  </Badge>
                  <Badge variant="info">
                    <Shield className="h-3 w-3 mr-1" />
                    TS/SCI
                  </Badge>
                  <Badge variant="outline">
                    <Building className="h-3 w-3 mr-1" />
                    Artemis Defense Systems
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Edit form */}
      <motion.div variants={item}>
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Input
                  id="name"
                  label="Full Name"
                  placeholder="Your full name"
                  error={errors.name?.message}
                  {...register("name")}
                />
                <Input
                  id="email"
                  label="Email Address"
                  type="email"
                  placeholder="you@artemis.dev"
                  error={errors.email?.message}
                  {...register("email")}
                />
                <Input
                  id="organization"
                  label="Organization"
                  placeholder="Organization name"
                  error={errors.organization?.message}
                  {...register("organization")}
                />
                <Input
                  id="role"
                  label="Role"
                  placeholder="Your role"
                  error={errors.role?.message}
                  {...register("role")}
                />
              </div>
              <div className="flex items-center gap-3 pt-2">
                <Button type="submit" loading={isSubmitting}>
                  Save Changes
                </Button>
                {saved && (
                  <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-1.5 text-sm text-success"
                  >
                    <CheckCircle className="h-4 w-4" />
                    <span>Profile updated successfully</span>
                  </motion.div>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
