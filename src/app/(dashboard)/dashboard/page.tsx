"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Activity,
  Shield,
  Target,
  AlertTriangle,
  Satellite,
  Radio,
  Radar,
  Cpu,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Zap,
  Brain,
  ChevronRight,
} from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const metrics = [
  {
    label: "Active Systems",
    value: "47",
    change: "+3",
    trend: "up" as const,
    icon: Activity,
    color: "text-info",
    bgColor: "bg-blue-50",
  },
  {
    label: "Fleet Readiness",
    value: "92%",
    change: "+1.2%",
    trend: "up" as const,
    icon: Shield,
    color: "text-success",
    bgColor: "bg-emerald-50",
  },
  {
    label: "Mission Status",
    value: "24",
    subtext: "Active",
    change: "-2",
    trend: "down" as const,
    icon: Target,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    label: "Threat Level",
    value: "LOW",
    change: "Stable",
    trend: "up" as const,
    icon: AlertTriangle,
    color: "text-success",
    bgColor: "bg-emerald-50",
  },
];

const systemStatuses = [
  { name: "GPS Navigation", status: "Online", icon: Satellite },
  { name: "Comms Array", status: "Online", icon: Radio },
  { name: "Radar Systems", status: "Online", icon: Radar },
  { name: "Sensor Grid", status: "Degraded", icon: Cpu },
];

const recentActivity = [
  { time: "14:32", event: "Fleet Alpha completed patrol route Delta-7", type: "success" },
  { time: "14:18", event: "Sensor grid sector 4B reporting intermittent signal", type: "warning" },
  { time: "13:55", event: "Mission OVERWATCH-12 status updated to active", type: "info" },
  { time: "13:41", event: "Drone ARX-047 returned to base, maintenance queued", type: "default" },
  { time: "13:22", event: "Comms relay 7 handshake verified with SATCOM", type: "success" },
  { time: "12:58", event: "New threat assessment uploaded to command database", type: "info" },
];

const recommendations = [
  {
    title: "Optimize Patrol Route",
    desc: "Route Delta-7 efficiency can improve 12% by adjusting waypoint 3.",
    priority: "Medium",
    icon: Brain,
  },
  {
    title: "Schedule Maintenance",
    desc: "ARX-031 and ARX-044 approaching 500hr service interval.",
    priority: "High",
    icon: Zap,
  },
  {
    title: "Sensor Calibration",
    desc: "Sector 4B sensors may benefit from recalibration cycle.",
    priority: "High",
    icon: Radar,
  },
  {
    title: "Comms Redundancy",
    desc: "Consider activating backup relay for northern corridor.",
    priority: "Low",
    icon: Radio,
  },
];

function TelemetryBar({ label, value, maxValue, delay }: { label: string; value: number; maxValue: number; delay: number }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-graphite-500 w-16 shrink-0 font-mono">{label}</span>
      <div className="flex-1 h-5 bg-graphite-100 rounded-sm overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${(value / maxValue) * 100}%` }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className="h-full bg-graphite-800 rounded-sm relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
        </motion.div>
      </div>
      <span className="text-xs font-mono text-graphite-700 w-10 text-right">{value}%</span>
    </div>
  );
}

export default function DashboardPage() {
  const { data: session } = useSession();
  const [currentTime, setCurrentTime] = useState<string>("");
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    function update() {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
      setCurrentDate(
        now.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
    }
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const firstName = session?.user?.name?.split(" ")[0] || "Operator";

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6 pt-2 lg:pt-0"
    >
      {/* Header */}
      <motion.div variants={item} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
        <div>
          <h1 className="text-2xl font-bold text-graphite-900 tracking-tight">
            Welcome back, {firstName}
          </h1>
          <p className="text-sm text-graphite-500 mt-1">{currentDate}</p>
        </div>
        <div className="flex items-center gap-2 text-graphite-500">
          <Clock className="h-4 w-4" />
          <span className="text-sm font-mono tracking-wider">{currentTime}</span>
          <Badge variant="success" className="ml-2">SYSTEMS NOMINAL</Badge>
        </div>
      </motion.div>

      {/* Metric cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <motion.div key={metric.label} variants={item}>
              <Card className="hover:shadow-sm transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-medium text-graphite-500 uppercase tracking-wider">
                        {metric.label}
                      </p>
                      <div className="flex items-baseline gap-2 mt-2">
                        <span className="text-2xl font-bold text-graphite-900">
                          {metric.value}
                        </span>
                        {metric.subtext && (
                          <span className="text-sm text-graphite-500">{metric.subtext}</span>
                        )}
                      </div>
                      <div className="flex items-center gap-1 mt-1.5">
                        {metric.trend === "up" ? (
                          <ArrowUpRight className="h-3 w-3 text-success" />
                        ) : (
                          <ArrowDownRight className="h-3 w-3 text-graphite-400" />
                        )}
                        <span className="text-xs text-graphite-500">{metric.change}</span>
                      </div>
                    </div>
                    <div className={`p-2.5 rounded ${metric.bgColor}`}>
                      <Icon className={`h-5 w-5 ${metric.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Telemetry + System Status */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <motion.div variants={item} className="xl:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Live Telemetry</CardTitle>
                <Badge variant="outline">Real-time</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <TelemetryBar label="NAV" value={98} maxValue={100} delay={0.2} />
              <TelemetryBar label="COMMS" value={94} maxValue={100} delay={0.3} />
              <TelemetryBar label="RADAR" value={87} maxValue={100} delay={0.4} />
              <TelemetryBar label="SENSOR" value={71} maxValue={100} delay={0.5} />
              <TelemetryBar label="POWER" value={96} maxValue={100} delay={0.6} />
              <TelemetryBar label="THERMAL" value={63} maxValue={100} delay={0.7} />
              <TelemetryBar label="PAYLOAD" value={100} maxValue={100} delay={0.8} />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>System Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {systemStatuses.map((system) => {
                const SysIcon = system.icon;
                const isOnline = system.status === "Online";
                return (
                  <div
                    key={system.name}
                    className="flex items-center justify-between py-2.5 border-b border-graphite-100 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <SysIcon className="h-4 w-4 text-graphite-500" />
                      <span className="text-sm text-graphite-700">{system.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className={`h-2 w-2 rounded-full ${
                          isOnline ? "bg-success" : "bg-warning"
                        }`}
                      />
                      <span
                        className={`text-xs font-medium ${
                          isOnline ? "text-success" : "text-warning"
                        }`}
                      >
                        {system.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Activity + Recommendations */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <motion.div variants={item}>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent Activity</CardTitle>
                <span className="text-xs text-graphite-400">Last 2 hours</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-0">
                {recentActivity.map((entry, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 py-3 border-b border-graphite-100 last:border-0"
                  >
                    <span className="text-xs font-mono text-graphite-400 mt-0.5 w-12 shrink-0">
                      {entry.time}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-graphite-700 leading-relaxed">
                        {entry.event}
                      </p>
                    </div>
                    <Badge
                      variant={
                        entry.type === "success"
                          ? "success"
                          : entry.type === "warning"
                          ? "warning"
                          : entry.type === "info"
                          ? "info"
                          : "default"
                      }
                      className="shrink-0"
                    >
                      {entry.type}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>AI Recommendations</CardTitle>
                <Brain className="h-4 w-4 text-graphite-400" />
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {recommendations.map((rec, i) => {
                const RecIcon = rec.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded border border-graphite-100 hover:border-graphite-200 transition-colors group cursor-pointer"
                  >
                    <div className="p-1.5 bg-graphite-50 rounded shrink-0">
                      <RecIcon className="h-4 w-4 text-graphite-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-medium text-graphite-800">
                          {rec.title}
                        </p>
                        <Badge
                          variant={
                            rec.priority === "High"
                              ? "warning"
                              : rec.priority === "Low"
                              ? "default"
                              : "info"
                          }
                        >
                          {rec.priority}
                        </Badge>
                      </div>
                      <p className="text-xs text-graphite-500 mt-1">{rec.desc}</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-graphite-300 group-hover:text-graphite-500 mt-1 shrink-0 transition-colors" />
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
