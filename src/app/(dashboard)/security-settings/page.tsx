"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { changePasswordSchema, type ChangePasswordInput } from "@/lib/validations";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Lock,
  Smartphone,
  Monitor,
  Globe,
  Shield,
  CheckCircle,
  AlertTriangle,
  Clock,
  X,
} from "lucide-react";

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

const activeSessions = [
  {
    device: "Chrome on Windows 11",
    location: "Arlington, VA",
    ip: "198.51.100.42",
    lastActive: "Now",
    current: true,
    icon: Monitor,
  },
  {
    device: "Safari on macOS",
    location: "San Diego, CA",
    ip: "203.0.113.78",
    lastActive: "2 hours ago",
    current: false,
    icon: Monitor,
  },
  {
    device: "Artemis Mobile on iOS",
    location: "Arlington, VA",
    ip: "198.51.100.44",
    lastActive: "5 hours ago",
    current: false,
    icon: Smartphone,
  },
];

const securityLog = [
  {
    event: "Successful login",
    ip: "198.51.100.42",
    location: "Arlington, VA",
    time: "Today, 08:32",
    status: "success",
  },
  {
    event: "Password changed",
    ip: "198.51.100.42",
    location: "Arlington, VA",
    time: "Mar 5, 14:18",
    status: "info",
  },
  {
    event: "Failed login attempt",
    ip: "192.0.2.15",
    location: "Unknown",
    time: "Mar 4, 22:07",
    status: "warning",
  },
  {
    event: "Successful login",
    ip: "203.0.113.78",
    location: "San Diego, CA",
    time: "Mar 4, 09:15",
    status: "success",
  },
  {
    event: "2FA verification",
    ip: "198.51.100.42",
    location: "Arlington, VA",
    time: "Mar 3, 08:47",
    status: "info",
  },
];

export default function SecuritySettingsPage() {
  const [passwordSaved, setPasswordSaved] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ChangePasswordInput>({
    resolver: zodResolver(changePasswordSchema),
  });

  const onSubmit = async (_data: ChangePasswordInput) => {
    await new Promise((r) => setTimeout(r, 800));
    setPasswordSaved(true);
    reset();
    setTimeout(() => setPasswordSaved(false), 3000);
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-3xl space-y-6 pt-2 lg:pt-0"
    >
      <motion.div variants={item}>
        <h1 className="text-2xl font-bold text-graphite-900 tracking-tight">Security</h1>
        <p className="text-sm text-graphite-500 mt-1">
          Manage authentication, sessions, and security settings.
        </p>
      </motion.div>

      {/* Change password */}
      <motion.div variants={item}>
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-graphite-500" />
              <CardTitle>Change Password</CardTitle>
            </div>
            <CardDescription>
              Update your password regularly to maintain account security.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Input
                id="currentPassword"
                label="Current Password"
                type="password"
                placeholder="Enter current password"
                error={errors.currentPassword?.message}
                {...register("currentPassword")}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  id="newPassword"
                  label="New Password"
                  type="password"
                  placeholder="Enter new password"
                  error={errors.newPassword?.message}
                  {...register("newPassword")}
                />
                <Input
                  id="confirmNewPassword"
                  label="Confirm New Password"
                  type="password"
                  placeholder="Confirm new password"
                  error={errors.confirmNewPassword?.message}
                  {...register("confirmNewPassword")}
                />
              </div>
              <div className="flex items-center gap-3 pt-1">
                <Button type="submit" loading={isSubmitting}>
                  Update Password
                </Button>
                {passwordSaved && (
                  <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-1.5 text-sm text-success"
                  >
                    <CheckCircle className="h-4 w-4" />
                    <span>Password updated</span>
                  </motion.div>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>

      {/* Two-Factor Authentication */}
      <motion.div variants={item}>
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-graphite-500" />
              <CardTitle>Two-Factor Authentication</CardTitle>
            </div>
            <CardDescription>
              Add an extra layer of security to your account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded ${twoFactorEnabled ? "bg-emerald-50" : "bg-graphite-100"}`}>
                  <Smartphone className={`h-5 w-5 ${twoFactorEnabled ? "text-success" : "text-graphite-500"}`} />
                </div>
                <div>
                  <p className="text-sm font-medium text-graphite-800">
                    Authenticator App
                  </p>
                  <p className="text-xs text-graphite-500 mt-0.5">
                    {twoFactorEnabled
                      ? "2FA is enabled. Your account has additional protection."
                      : "Use an authenticator app for time-based verification codes."}
                  </p>
                </div>
              </div>
              <Button
                variant={twoFactorEnabled ? "outline" : "default"}
                size="sm"
                onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
              >
                {twoFactorEnabled ? "Disable" : "Enable"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Active sessions */}
      <motion.div variants={item}>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-graphite-500" />
                <CardTitle>Active Sessions</CardTitle>
              </div>
              <Button variant="ghost" size="sm" className="text-danger hover:text-danger">
                Revoke All
              </Button>
            </div>
            <CardDescription>
              Devices and locations with active access to your account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="divide-y divide-graphite-100">
              {activeSessions.map((session, i) => {
                const SessIcon = session.icon;
                return (
                  <div key={i} className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                      <SessIcon className="h-4 w-4 text-graphite-500" />
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-medium text-graphite-800">
                            {session.device}
                          </p>
                          {session.current && (
                            <Badge variant="success">Current</Badge>
                          )}
                        </div>
                        <p className="text-xs text-graphite-500 mt-0.5">
                          {session.location} &middot; {session.ip} &middot;{" "}
                          {session.lastActive}
                        </p>
                      </div>
                    </div>
                    {!session.current && (
                      <Button variant="ghost" size="sm">
                        <X className="h-3.5 w-3.5" />
                      </Button>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Security log */}
      <motion.div variants={item}>
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-graphite-500" />
              <CardTitle>Security Log</CardTitle>
            </div>
            <CardDescription>
              Recent authentication and security events.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="divide-y divide-graphite-100">
              {securityLog.map((entry, i) => (
                <div key={i} className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    {entry.status === "success" ? (
                      <CheckCircle className="h-4 w-4 text-success shrink-0" />
                    ) : entry.status === "warning" ? (
                      <AlertTriangle className="h-4 w-4 text-warning shrink-0" />
                    ) : (
                      <Shield className="h-4 w-4 text-info shrink-0" />
                    )}
                    <div>
                      <p className="text-sm text-graphite-800">{entry.event}</p>
                      <p className="text-xs text-graphite-500 mt-0.5">
                        {entry.ip} &middot; {entry.location}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-graphite-400 shrink-0 ml-4">{entry.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
