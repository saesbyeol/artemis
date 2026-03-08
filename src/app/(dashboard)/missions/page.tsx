"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  Clock,
  Plane,
  CheckCircle,
  AlertTriangle,
  Play,
  Pause,
  ChevronRight,
  MapPin,
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

type MissionStatus = "Active" | "Paused" | "Completed" | "Planning";
type MissionType = "Reconnaissance" | "Patrol" | "Surveillance" | "Escort" | "Logistics";

const statusConfig: Record<MissionStatus, { variant: "success" | "warning" | "default" | "info"; icon: React.ElementType }> = {
  Active: { variant: "success", icon: Play },
  Paused: { variant: "warning", icon: Pause },
  Completed: { variant: "default", icon: CheckCircle },
  Planning: { variant: "info", icon: Clock },
};

interface Mission {
  id: string;
  name: string;
  type: MissionType;
  status: MissionStatus;
  assets: string[];
  zone: string;
  started: string;
  eta: string;
  progress: number;
}

const missions: Mission[] = [
  {
    id: "MSN-2026-047",
    name: "OVERWATCH-12",
    type: "Surveillance",
    status: "Active",
    assets: ["ARX-001", "ARX-012"],
    zone: "Sector 7-B",
    started: "08:00 Today",
    eta: "16:00 Today",
    progress: 65,
  },
  {
    id: "MSN-2026-046",
    name: "SENTINEL SWEEP",
    type: "Patrol",
    status: "Active",
    assets: ["ARX-052", "ARX-007"],
    zone: "Perimeter North",
    started: "06:00 Today",
    eta: "18:00 Today",
    progress: 42,
  },
  {
    id: "MSN-2026-045",
    name: "EAGLE EYE",
    type: "Reconnaissance",
    status: "Active",
    assets: ["ARX-019"],
    zone: "Zone Delta",
    started: "10:30 Today",
    eta: "14:30 Today",
    progress: 80,
  },
  {
    id: "MSN-2026-044",
    name: "IRON BRIDGE",
    type: "Logistics",
    status: "Paused",
    assets: ["ARX-023"],
    zone: "Supply Route Alpha",
    started: "Yesterday",
    eta: "Delayed",
    progress: 35,
  },
  {
    id: "MSN-2026-043",
    name: "GHOST RUNNER",
    type: "Reconnaissance",
    status: "Planning",
    assets: ["ARX-038", "ARX-047"],
    zone: "Sector 12-A",
    started: "Scheduled",
    eta: "Tomorrow 06:00",
    progress: 0,
  },
  {
    id: "MSN-2026-042",
    name: "WATCHDOG",
    type: "Escort",
    status: "Completed",
    assets: ["ARX-031", "ARX-044"],
    zone: "Maritime Corridor B",
    started: "Yesterday 08:00",
    eta: "Completed",
    progress: 100,
  },
];

const timeline = [
  { time: "14:32", event: "OVERWATCH-12 reached waypoint 7 of 11", mission: "MSN-2026-047", type: "info" as const },
  { time: "14:18", event: "SENTINEL SWEEP detected anomaly in grid N-4", mission: "MSN-2026-046", type: "warning" as const },
  { time: "13:55", event: "EAGLE EYE began final approach to target area", mission: "MSN-2026-045", type: "info" as const },
  { time: "13:41", event: "IRON BRIDGE paused: ARX-023 maintenance required", mission: "MSN-2026-044", type: "warning" as const },
  { time: "13:22", event: "OVERWATCH-12 sensor sweep completed sector 7-B east", mission: "MSN-2026-047", type: "success" as const },
  { time: "12:58", event: "WATCHDOG mission completed, all assets RTB", mission: "MSN-2026-042", type: "success" as const },
];

function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="w-full h-1.5 bg-graphite-100 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`h-full rounded-full ${
          progress === 100
            ? "bg-success"
            : progress > 60
            ? "bg-graphite-800"
            : "bg-graphite-500"
        }`}
      />
    </div>
  );
}

export default function MissionsPage() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6 pt-2 lg:pt-0"
    >
      <motion.div variants={item}>
        <h1 className="text-2xl font-bold text-graphite-900 tracking-tight">Missions</h1>
        <p className="text-sm text-graphite-500 mt-1">
          Track active missions, review plans, and monitor progress.
        </p>
      </motion.div>

      {/* Metrics row */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        {[
          { label: "Active", value: "3", color: "text-success" },
          { label: "Paused", value: "1", color: "text-warning" },
          { label: "Planning", value: "1", color: "text-info" },
          { label: "Completed Today", value: "1", color: "text-graphite-600" },
        ].map((m) => (
          <motion.div key={m.label} variants={item}>
            <Card>
              <CardContent className="p-4">
                <p className="text-xs text-graphite-500 uppercase tracking-wider">
                  {m.label}
                </p>
                <p className={`text-2xl font-bold mt-1 ${m.color}`}>{m.value}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Active missions */}
      <motion.div variants={item}>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>All Missions</CardTitle>
                <CardDescription className="mt-1">
                  Current and recent mission operations.
                </CardDescription>
              </div>
              <Badge variant="outline">{missions.length} Missions</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {missions.map((mission) => {
                const config = statusConfig[mission.status];
                const StatusIcon = config.icon;
                return (
                  <div
                    key={mission.id}
                    className="p-4 rounded border border-graphite-100 hover:border-graphite-200 transition-colors group cursor-pointer"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className="font-mono text-xs text-graphite-400">{mission.id}</span>
                          <h3 className="text-sm font-semibold text-graphite-900 tracking-wide">
                            {mission.name}
                          </h3>
                          <Badge variant={config.variant}>
                            <StatusIcon className="h-3 w-3 mr-1" />
                            {mission.status}
                          </Badge>
                          <Badge variant="outline">{mission.type}</Badge>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-graphite-500">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {mission.zone}
                          </span>
                          <span className="flex items-center gap-1">
                            <Plane className="h-3 w-3" />
                            {mission.assets.join(", ")}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {mission.started}
                          </span>
                          <span>ETA: {mission.eta}</span>
                        </div>
                        {mission.status !== "Planning" && (
                          <div className="mt-3 max-w-md">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-[10px] text-graphite-400 uppercase tracking-wider">
                                Progress
                              </span>
                              <span className="text-xs font-mono text-graphite-500">
                                {mission.progress}%
                              </span>
                            </div>
                            <ProgressBar progress={mission.progress} />
                          </div>
                        )}
                      </div>
                      <ChevronRight className="h-4 w-4 text-graphite-300 group-hover:text-graphite-500 shrink-0 hidden lg:block transition-colors" />
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Mission timeline */}
      <motion.div variants={item}>
        <Card>
          <CardHeader>
            <CardTitle>Mission Activity</CardTitle>
            <CardDescription>Real-time event feed across all active missions.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-0">
              {timeline.map((entry, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 py-3 border-b border-graphite-100 last:border-0"
                >
                  <span className="text-xs font-mono text-graphite-400 mt-0.5 w-12 shrink-0">
                    {entry.time}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-graphite-700">{entry.event}</p>
                    <span className="text-xs font-mono text-graphite-400">{entry.mission}</span>
                  </div>
                  <Badge
                    variant={
                      entry.type === "success"
                        ? "success"
                        : entry.type === "warning"
                        ? "warning"
                        : "info"
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
    </motion.div>
  );
}
