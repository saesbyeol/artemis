"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Plane,
  Activity,
  Wrench,
  CheckCircle,
  MapPin,
  Clock,
  ArrowUpRight,
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
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const fleetMetrics = [
  { label: "Total Assets", value: "64", icon: Plane, color: "text-graphite-700", bgColor: "bg-graphite-50" },
  { label: "Operational", value: "47", icon: CheckCircle, color: "text-success", bgColor: "bg-emerald-50" },
  { label: "In Maintenance", value: "8", icon: Wrench, color: "text-warning", bgColor: "bg-amber-50" },
  { label: "Deployed", value: "9", icon: Activity, color: "text-info", bgColor: "bg-blue-50" },
];

type AssetStatus = "Operational" | "Maintenance" | "Standby" | "Deployed";

const statusVariant: Record<AssetStatus, "success" | "warning" | "default" | "info"> = {
  Operational: "success",
  Maintenance: "warning",
  Standby: "default",
  Deployed: "info",
};

interface FleetAsset {
  id: string;
  name: string;
  type: string;
  status: AssetStatus;
  location: string;
  lastActive: string;
  hours: number;
}

const assets: FleetAsset[] = [
  { id: "ARX-001", name: "Sentinel Alpha", type: "Recon UAV", status: "Deployed", location: "Sector 7-B", lastActive: "Now", hours: 1247 },
  { id: "ARX-007", name: "Overwatch Prime", type: "Surveillance HALE", status: "Operational", location: "Hangar A", lastActive: "12 min ago", hours: 892 },
  { id: "ARX-012", name: "Pathfinder II", type: "Tactical VTOL", status: "Deployed", location: "Zone Delta", lastActive: "Now", hours: 543 },
  { id: "ARX-019", name: "Ghost Hawk", type: "Stealth Recon", status: "Operational", location: "Hangar B", lastActive: "1 hour ago", hours: 2105 },
  { id: "ARX-023", name: "Iron Kite", type: "Cargo Lifter", status: "Maintenance", location: "Bay 3", lastActive: "6 hours ago", hours: 3421 },
  { id: "ARX-031", name: "Storm Petrel", type: "Maritime Patrol", status: "Operational", location: "Dock C", lastActive: "25 min ago", hours: 487 },
  { id: "ARX-038", name: "Night Raptor", type: "Strike UCAV", status: "Standby", location: "Hangar A", lastActive: "3 hours ago", hours: 1876 },
  { id: "ARX-044", name: "Silver Fox", type: "Electronic Warfare", status: "Maintenance", location: "Bay 1", lastActive: "1 day ago", hours: 2940 },
  { id: "ARX-047", name: "Red Falcon", type: "Recon UAV", status: "Operational", location: "Hangar C", lastActive: "45 min ago", hours: 612 },
  { id: "ARX-052", name: "Aegis Wing", type: "Defensive Screen", status: "Deployed", location: "Perimeter North", lastActive: "Now", hours: 1533 },
];

export default function FleetPage() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6 pt-2 lg:pt-0"
    >
      <motion.div variants={item}>
        <h1 className="text-2xl font-bold text-graphite-900 tracking-tight">Fleet</h1>
        <p className="text-sm text-graphite-500 mt-1">
          Monitor and manage all autonomous assets.
        </p>
      </motion.div>

      {/* Fleet metrics */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        {fleetMetrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <motion.div key={metric.label} variants={item}>
              <Card>
                <CardContent className="p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-medium text-graphite-500 uppercase tracking-wider">
                        {metric.label}
                      </p>
                      <p className="text-2xl font-bold text-graphite-900 mt-1">
                        {metric.value}
                      </p>
                    </div>
                    <div className={`p-2 rounded ${metric.bgColor}`}>
                      <Icon className={`h-5 w-5 ${metric.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Fleet table */}
      <motion.div variants={item}>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Fleet Assets</CardTitle>
                <CardDescription className="mt-1">
                  All registered autonomous platforms and their current operational state.
                </CardDescription>
              </div>
              <Badge variant="outline" className="shrink-0">
                {assets.length} Assets
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-graphite-200">
                    <th className="text-left py-3 px-3 text-xs font-semibold text-graphite-500 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="text-left py-3 px-3 text-xs font-semibold text-graphite-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="text-left py-3 px-3 text-xs font-semibold text-graphite-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="text-left py-3 px-3 text-xs font-semibold text-graphite-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="text-left py-3 px-3 text-xs font-semibold text-graphite-500 uppercase tracking-wider">
                      Location
                    </th>
                    <th className="text-left py-3 px-3 text-xs font-semibold text-graphite-500 uppercase tracking-wider">
                      Flight Hours
                    </th>
                    <th className="text-left py-3 px-3 text-xs font-semibold text-graphite-500 uppercase tracking-wider">
                      Last Active
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-graphite-100">
                  {assets.map((asset) => (
                    <tr
                      key={asset.id}
                      className="hover:bg-graphite-50 transition-colors group cursor-pointer"
                    >
                      <td className="py-3 px-3 font-mono text-xs text-graphite-500">
                        {asset.id}
                      </td>
                      <td className="py-3 px-3">
                        <span className="font-medium text-graphite-800 group-hover:text-graphite-900">
                          {asset.name}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-graphite-600">{asset.type}</td>
                      <td className="py-3 px-3">
                        <Badge variant={statusVariant[asset.status]}>
                          {asset.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-1.5 text-graphite-600">
                          <MapPin className="h-3 w-3 text-graphite-400" />
                          {asset.location}
                        </div>
                      </td>
                      <td className="py-3 px-3 font-mono text-graphite-600">
                        {asset.hours.toLocaleString()}h
                      </td>
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-1.5 text-graphite-500">
                          <Clock className="h-3 w-3" />
                          {asset.lastActive}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
