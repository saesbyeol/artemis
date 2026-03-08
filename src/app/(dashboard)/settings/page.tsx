"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sun,
  Moon,
  Bell,
  BellOff,
  Globe,
  Download,
  Trash2,
  Monitor,
  Volume2,
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

function Toggle({ enabled, onToggle, label, description }: {
  enabled: boolean;
  onToggle: () => void;
  label: string;
  description: string;
}) {
  return (
    <div className="flex items-center justify-between py-3">
      <div>
        <p className="text-sm font-medium text-graphite-800">{label}</p>
        <p className="text-xs text-graphite-500 mt-0.5">{description}</p>
      </div>
      <button
        onClick={onToggle}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
          enabled ? "bg-graphite-900" : "bg-graphite-200"
        }`}
        role="switch"
        aria-checked={enabled}
      >
        <span
          className={`inline-block h-4 w-4 rounded-full bg-white transition-transform ${
            enabled ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [compactMode, setCompactMode] = useState(false);
  const [soundEffects, setSoundEffects] = useState(true);
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [pushNotifs, setPushNotifs] = useState(true);
  const [missionAlerts, setMissionAlerts] = useState(true);
  const [systemAlerts, setSystemAlerts] = useState(true);
  const [weeklyReport, setWeeklyReport] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const [crashReports, setCrashReports] = useState(true);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-3xl space-y-6 pt-2 lg:pt-0"
    >
      <motion.div variants={item}>
        <h1 className="text-2xl font-bold text-graphite-900 tracking-tight">Settings</h1>
        <p className="text-sm text-graphite-500 mt-1">
          Configure your display preferences and account options.
        </p>
      </motion.div>

      {/* Display preferences */}
      <motion.div variants={item}>
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Monitor className="h-4 w-4 text-graphite-500" />
              <CardTitle>Display Preferences</CardTitle>
            </div>
            <CardDescription>
              Customize how the control interface appears.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="divide-y divide-graphite-100">
              <Toggle
                enabled={darkMode}
                onToggle={() => setDarkMode(!darkMode)}
                label="Dark Mode"
                description="Switch to a dark theme for low-light environments."
              />
              <Toggle
                enabled={compactMode}
                onToggle={() => setCompactMode(!compactMode)}
                label="Compact Mode"
                description="Reduce spacing and padding for denser information display."
              />
              <Toggle
                enabled={soundEffects}
                onToggle={() => setSoundEffects(!soundEffects)}
                label="Sound Effects"
                description="Play audio cues for alerts and status changes."
              />
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="text-sm font-medium text-graphite-800">Time Zone</p>
                  <p className="text-xs text-graphite-500 mt-0.5">
                    Used for timestamps and scheduling.
                  </p>
                </div>
                <Badge variant="outline">
                  <Globe className="h-3 w-3 mr-1" />
                  UTC-5 (EST)
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Notification settings */}
      <motion.div variants={item}>
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Bell className="h-4 w-4 text-graphite-500" />
              <CardTitle>Notification Settings</CardTitle>
            </div>
            <CardDescription>
              Control how and when you receive alerts.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="divide-y divide-graphite-100">
              <Toggle
                enabled={emailNotifs}
                onToggle={() => setEmailNotifs(!emailNotifs)}
                label="Email Notifications"
                description="Receive mission updates and system alerts via email."
              />
              <Toggle
                enabled={pushNotifs}
                onToggle={() => setPushNotifs(!pushNotifs)}
                label="Push Notifications"
                description="Get real-time browser push notifications."
              />
              <Toggle
                enabled={missionAlerts}
                onToggle={() => setMissionAlerts(!missionAlerts)}
                label="Mission Alerts"
                description="Immediate alerts for mission status changes."
              />
              <Toggle
                enabled={systemAlerts}
                onToggle={() => setSystemAlerts(!systemAlerts)}
                label="System Alerts"
                description="Notifications for system health and degradation events."
              />
              <Toggle
                enabled={weeklyReport}
                onToggle={() => setWeeklyReport(!weeklyReport)}
                label="Weekly Digest"
                description="Receive a weekly summary of fleet and mission activity."
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Data & privacy */}
      <motion.div variants={item}>
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Download className="h-4 w-4 text-graphite-500" />
              <CardTitle>Data & Privacy</CardTitle>
            </div>
            <CardDescription>
              Manage your data and privacy preferences.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="divide-y divide-graphite-100">
              <Toggle
                enabled={analyticsEnabled}
                onToggle={() => setAnalyticsEnabled(!analyticsEnabled)}
                label="Usage Analytics"
                description="Help improve Artemis by sharing anonymized usage data."
              />
              <Toggle
                enabled={crashReports}
                onToggle={() => setCrashReports(!crashReports)}
                label="Crash Reports"
                description="Automatically send crash reports for debugging."
              />
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="text-sm font-medium text-graphite-800">Export Data</p>
                  <p className="text-xs text-graphite-500 mt-0.5">
                    Download a copy of all your data.
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="h-3.5 w-3.5 mr-1.5" />
                  Export
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Danger zone */}
      <motion.div variants={item}>
        <Card className="border-red-200">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Trash2 className="h-4 w-4 text-danger" />
              <CardTitle className="text-danger">Danger Zone</CardTitle>
            </div>
            <CardDescription>
              Irreversible actions. Proceed with caution.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-graphite-800">Delete Account</p>
                <p className="text-xs text-graphite-500 mt-0.5">
                  Permanently remove your account, data, and all associated access.
                </p>
              </div>
              <Button variant="danger" size="sm">
                Delete Account
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
