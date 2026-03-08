"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CreditCard,
  Zap,
  HardDrive,
  Cpu,
  Download,
  ExternalLink,
  FileText,
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

const usageMetrics = [
  {
    label: "API Calls",
    used: 842000,
    limit: 1000000,
    unit: "calls",
    icon: Zap,
  },
  {
    label: "Storage",
    used: 347,
    limit: 500,
    unit: "GB",
    icon: HardDrive,
  },
  {
    label: "Compute Hours",
    used: 1842,
    limit: 2500,
    unit: "hours",
    icon: Cpu,
  },
];

const invoices = [
  { id: "INV-2026-003", date: "Mar 1, 2026", amount: "$24,500.00", status: "Pending" },
  { id: "INV-2026-002", date: "Feb 1, 2026", amount: "$24,500.00", status: "Paid" },
  { id: "INV-2026-001", date: "Jan 1, 2026", amount: "$24,500.00", status: "Paid" },
  { id: "INV-2025-012", date: "Dec 1, 2025", amount: "$22,800.00", status: "Paid" },
  { id: "INV-2025-011", date: "Nov 1, 2025", amount: "$22,800.00", status: "Paid" },
];

function UsageBar({ used, limit }: { used: number; limit: number }) {
  const percent = Math.min((used / limit) * 100, 100);
  return (
    <div className="w-full h-2 bg-graphite-100 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${percent}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`h-full rounded-full ${
          percent > 90 ? "bg-danger" : percent > 70 ? "bg-warning" : "bg-graphite-800"
        }`}
      />
    </div>
  );
}

function formatUsage(value: number): string {
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `${(value / 1000).toFixed(0)}K`;
  return value.toString();
}

export default function BillingPage() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-4xl space-y-6 pt-2 lg:pt-0"
    >
      <motion.div variants={item}>
        <h1 className="text-2xl font-bold text-graphite-900 tracking-tight">Billing</h1>
        <p className="text-sm text-graphite-500 mt-1">
          Manage your subscription, usage, and payment methods.
        </p>
      </motion.div>

      {/* Current plan */}
      <motion.div variants={item}>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-lg font-semibold text-graphite-900">Enterprise</h2>
                  <Badge variant="success">Active</Badge>
                </div>
                <p className="text-sm text-graphite-500 mt-1">
                  Full platform access with priority support and dedicated infrastructure.
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-graphite-900">$24,500</p>
                <p className="text-xs text-graphite-500">per month</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Usage metrics */}
      <motion.div variants={item}>
        <Card>
          <CardHeader>
            <CardTitle>Usage This Period</CardTitle>
            <CardDescription>
              Current billing cycle: Mar 1 - Mar 31, 2026
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              {usageMetrics.map((metric) => {
                const Icon = metric.icon;
                return (
                  <div key={metric.label}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-graphite-500" />
                        <span className="text-sm font-medium text-graphite-800">
                          {metric.label}
                        </span>
                      </div>
                      <span className="text-sm text-graphite-600">
                        <span className="font-mono">{formatUsage(metric.used)}</span>
                        {" / "}
                        <span className="font-mono">{formatUsage(metric.limit)}</span>
                        {" "}{metric.unit}
                      </span>
                    </div>
                    <UsageBar used={metric.used} limit={metric.limit} />
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Payment method */}
      <motion.div variants={item}>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-graphite-500" />
                <CardTitle>Payment Method</CardTitle>
              </div>
              <Button variant="outline" size="sm">
                Update
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 p-4 bg-graphite-50 rounded border border-graphite-100">
              <div className="p-2 bg-white rounded border border-graphite-200">
                <CreditCard className="h-6 w-6 text-graphite-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-graphite-800">
                  Visa ending in 4242
                </p>
                <p className="text-xs text-graphite-500 mt-0.5">
                  Expires 12/2027 &middot; Artemis Defense Systems
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Invoice history */}
      <motion.div variants={item}>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-graphite-500" />
                <CardTitle>Invoice History</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-graphite-200">
                    <th className="text-left py-3 px-2 text-xs font-semibold text-graphite-500 uppercase tracking-wider">
                      Invoice
                    </th>
                    <th className="text-left py-3 px-2 text-xs font-semibold text-graphite-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="text-left py-3 px-2 text-xs font-semibold text-graphite-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="text-left py-3 px-2 text-xs font-semibold text-graphite-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="text-right py-3 px-2"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-graphite-100">
                  {invoices.map((inv) => (
                    <tr key={inv.id} className="hover:bg-graphite-50 transition-colors">
                      <td className="py-3 px-2 font-mono text-graphite-800">
                        {inv.id}
                      </td>
                      <td className="py-3 px-2 text-graphite-600">{inv.date}</td>
                      <td className="py-3 px-2 font-medium text-graphite-800">
                        {inv.amount}
                      </td>
                      <td className="py-3 px-2">
                        <Badge
                          variant={inv.status === "Paid" ? "success" : "warning"}
                        >
                          {inv.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-2 text-right">
                        <Button variant="ghost" size="sm">
                          <Download className="h-3.5 w-3.5" />
                        </Button>
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
