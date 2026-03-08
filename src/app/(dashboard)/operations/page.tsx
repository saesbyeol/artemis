"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Radio,
  MapPin,
  Shield,
  Users,
  Plane,
  Cpu,
  Satellite,
  ChevronRight,
  AlertTriangle,
  CheckCircle,
  Clock,
  Play,
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

type ZoneStatus = "Active" | "Standby" | "Alert";

const zoneVariant: Record<ZoneStatus, "success" | "default" | "danger"> = {
  Active: "success",
  Standby: "default",
  Alert: "danger",
};

interface OperationalZone {
  name: string;
  designation: string;
  status: ZoneStatus;
  assets: number;
  personnel: number;
  threatLevel: string;
  lastUpdate: string;
}

const zones: OperationalZone[] = [
  {
    name: "Northern Perimeter",
    designation: "ZONE-ALPHA",
    status: "Active",
    assets: 12,
    personnel: 48,
    threatLevel: "Low",
    lastUpdate: "2 min ago",
  },
  {
    name: "Eastern Corridor",
    designation: "ZONE-BRAVO",
    status: "Active",
    assets: 8,
    personnel: 32,
    threatLevel: "Low",
    lastUpdate: "5 min ago",
  },
  {
    name: "Southern Maritime",
    designation: "ZONE-CHARLIE",
    status: "Alert",
    assets: 15,
    personnel: 64,
    threatLevel: "Elevated",
    lastUpdate: "1 min ago",
  },
  {
    name: "Western Range",
    designation: "ZONE-DELTA",
    status: "Active",
    assets: 6,
    personnel: 24,
    threatLevel: "Low",
    lastUpdate: "8 min ago",
  },
  {
    name: "Reserve Staging",
    designation: "ZONE-ECHO",
    status: "Standby",
    assets: 23,
    personnel: 16,
    threatLevel: "Minimal",
    lastUpdate: "15 min ago",
  },
];

interface Operation {
  id: string;
  name: string;
  zone: string;
  status: "In Progress" | "Scheduled" | "Complete";
  commander: string;
  startTime: string;
  description: string;
}

const operations: Operation[] = [
  {
    id: "OP-2026-019",
    name: "IRON CURTAIN",
    zone: "ZONE-CHARLIE",
    status: "In Progress",
    commander: "COL. HARRIS",
    startTime: "06:00 Today",
    description: "Enhanced maritime surveillance following elevated threat assessment in southern corridor.",
  },
  {
    id: "OP-2026-018",
    name: "SILENT WATCH",
    zone: "ZONE-ALPHA",
    status: "In Progress",
    commander: "MAJ. CHEN",
    startTime: "00:00 Today",
    description: "24-hour continuous perimeter monitoring with autonomous patrol rotation.",
  },
  {
    id: "OP-2026-017",
    name: "SWIFT RELAY",
    zone: "ZONE-BRAVO",
    status: "Scheduled",
    commander: "LT. PATEL",
    startTime: "Tomorrow 04:00",
    description: "Communications relay network test and redundancy verification exercise.",
  },
  {
    id: "OP-2026-016",
    name: "DEEP SCAN",
    zone: "ZONE-DELTA",
    status: "Complete",
    commander: "MAJ. REEVES",
    startTime: "Yesterday",
    description: "Full-spectrum sensor sweep and terrain mapping of western operational area.",
  },
];

const resourceAllocation = [
  { resource: "UAV Platforms", allocated: 47, total: 64, icon: Plane },
  { resource: "Ground Stations", allocated: 12, total: 16, icon: Cpu },
  { resource: "SATCOM Links", allocated: 8, total: 10, icon: Satellite },
  { resource: "Personnel", allocated: 184, total: 240, icon: Users },
];

export default function OperationsPage() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6 pt-2 lg:pt-0"
    >
      <motion.div variants={item}>
        <h1 className="text-2xl font-bold text-graphite-900 tracking-tight">Operations</h1>
        <p className="text-sm text-graphite-500 mt-1">
          Operational zones, active operations, and resource allocation.
        </p>
      </motion.div>

      {/* Resource allocation */}
      <motion.div variants={item}>
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
          {resourceAllocation.map((res) => {
            const Icon = res.icon;
            const percent = Math.round((res.allocated / res.total) * 100);
            return (
              <Card key={res.resource}>
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <Icon className="h-4 w-4 text-graphite-500" />
                    <span className="text-xs font-mono text-graphite-400">{percent}%</span>
                  </div>
                  <p className="text-xs text-graphite-500 uppercase tracking-wider">
                    {res.resource}
                  </p>
                  <p className="text-lg font-bold text-graphite-900 mt-0.5">
                    {res.allocated}{" "}
                    <span className="text-sm font-normal text-graphite-400">/ {res.total}</span>
                  </p>
                  <div className="w-full h-1.5 bg-graphite-100 rounded-full overflow-hidden mt-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${percent}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`h-full rounded-full ${
                        percent > 90 ? "bg-danger" : percent > 75 ? "bg-warning" : "bg-graphite-800"
                      }`}
                    />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </motion.div>

      {/* Operational zones */}
      <motion.div variants={item}>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Operational Zones</CardTitle>
                <CardDescription className="mt-1">
                  Current status of all defined operational zones.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {zones.map((zone) => (
                <div
                  key={zone.designation}
                  className="p-4 rounded border border-graphite-100 hover:border-graphite-200 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-graphite-500" />
                      <span className="text-xs font-mono text-graphite-400">
                        {zone.designation}
                      </span>
                    </div>
                    <Badge variant={zoneVariant[zone.status]}>
                      {zone.status}
                    </Badge>
                  </div>
                  <h3 className="text-sm font-semibold text-graphite-900">{zone.name}</h3>
                  <div className="grid grid-cols-2 gap-2 mt-3 text-xs text-graphite-500">
                    <div className="flex items-center gap-1.5">
                      <Plane className="h-3 w-3" />
                      {zone.assets} Assets
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="h-3 w-3" />
                      {zone.personnel} Personnel
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Shield className="h-3 w-3" />
                      Threat: {zone.threatLevel}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3 w-3" />
                      {zone.lastUpdate}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Current operations */}
      <motion.div variants={item}>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Current Operations</CardTitle>
                <CardDescription className="mt-1">
                  Active, scheduled, and recently completed operations.
                </CardDescription>
              </div>
              <Badge variant="outline">{operations.length} Operations</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {operations.map((op) => (
                <div
                  key={op.id}
                  className="p-4 rounded border border-graphite-100 hover:border-graphite-200 transition-colors group cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="font-mono text-xs text-graphite-400">{op.id}</span>
                        <h3 className="text-sm font-semibold text-graphite-900 tracking-wide">
                          {op.name}
                        </h3>
                        <Badge
                          variant={
                            op.status === "In Progress"
                              ? "success"
                              : op.status === "Scheduled"
                              ? "info"
                              : "default"
                          }
                        >
                          {op.status === "In Progress" && <Play className="h-3 w-3 mr-1" />}
                          {op.status === "Scheduled" && <Clock className="h-3 w-3 mr-1" />}
                          {op.status === "Complete" && <CheckCircle className="h-3 w-3 mr-1" />}
                          {op.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-graphite-600 mt-2">{op.description}</p>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-graphite-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {op.zone}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {op.commander}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {op.startTime}
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-graphite-300 group-hover:text-graphite-500 shrink-0 mt-1 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
