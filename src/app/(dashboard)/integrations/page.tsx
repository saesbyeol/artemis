"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Key,
  Copy,
  Check,
  Plus,
  Webhook,
  Eye,
  EyeOff,
  Trash2,
  Satellite,
  Radio,
  Database,
  Cloud,
  MapPin,
  Shield,
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

const apiKeys = [
  {
    name: "Production API Key",
    key: "art_prod_9k2x7mH4pLqR8nTfWzYbCdEg",
    created: "Jan 15, 2026",
    lastUsed: "2 min ago",
    status: "Active",
  },
  {
    name: "Staging API Key",
    key: "art_stg_3vN5jKpQ7wRmXtYcUhFaLzBs",
    created: "Feb 8, 2026",
    lastUsed: "3 hours ago",
    status: "Active",
  },
  {
    name: "Development Key",
    key: "art_dev_1aM6nJrT4xWfZkYbVgHcPdEq",
    created: "Mar 1, 2026",
    lastUsed: "1 day ago",
    status: "Active",
  },
];

const webhooks = [
  {
    url: "https://ops.artemis.dev/webhooks/fleet-status",
    events: ["fleet.status_change", "fleet.maintenance"],
    status: "Active",
    lastDelivery: "5 min ago",
  },
  {
    url: "https://ops.artemis.dev/webhooks/mission-events",
    events: ["mission.created", "mission.completed", "mission.alert"],
    status: "Active",
    lastDelivery: "18 min ago",
  },
];

const integrations = [
  {
    name: "SATCOM Relay",
    description: "Satellite communication data feed and command relay.",
    icon: Satellite,
    connected: true,
  },
  {
    name: "SIGINT Gateway",
    description: "Signals intelligence ingestion and processing pipeline.",
    icon: Radio,
    connected: true,
  },
  {
    name: "GIS Platform",
    description: "Geographic information system for terrain and mapping data.",
    icon: MapPin,
    connected: true,
  },
  {
    name: "Threat Database",
    description: "Real-time threat intelligence feed from allied networks.",
    icon: Shield,
    connected: false,
  },
  {
    name: "Cloud Storage",
    description: "Secure cloud storage for mission data and telemetry archives.",
    icon: Cloud,
    connected: false,
  },
  {
    name: "Data Warehouse",
    description: "Centralized analytics warehouse for historical analysis.",
    icon: Database,
    connected: false,
  },
];

function MaskedKey({ keyValue }: { keyValue: string }) {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  const masked = keyValue.slice(0, 8) + "..." + keyValue.slice(-4);

  const handleCopy = () => {
    navigator.clipboard.writeText(keyValue);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2">
      <code className="text-xs font-mono bg-graphite-50 px-2 py-1 rounded border border-graphite-100 text-graphite-600">
        {visible ? keyValue : masked}
      </code>
      <button
        onClick={() => setVisible(!visible)}
        className="p-1 text-graphite-400 hover:text-graphite-600 transition-colors cursor-pointer"
        aria-label={visible ? "Hide key" : "Show key"}
      >
        {visible ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
      </button>
      <button
        onClick={handleCopy}
        className="p-1 text-graphite-400 hover:text-graphite-600 transition-colors cursor-pointer"
        aria-label="Copy key"
      >
        {copied ? (
          <Check className="h-3.5 w-3.5 text-success" />
        ) : (
          <Copy className="h-3.5 w-3.5" />
        )}
      </button>
    </div>
  );
}

export default function IntegrationsPage() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-4xl space-y-6 pt-2 lg:pt-0"
    >
      <motion.div variants={item}>
        <h1 className="text-2xl font-bold text-graphite-900 tracking-tight">
          API & Integrations
        </h1>
        <p className="text-sm text-graphite-500 mt-1">
          Manage API keys, webhooks, and third-party integrations.
        </p>
      </motion.div>

      {/* API Keys */}
      <motion.div variants={item}>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Key className="h-4 w-4 text-graphite-500" />
                <CardTitle>API Keys</CardTitle>
              </div>
              <Button size="sm">
                <Plus className="h-3.5 w-3.5 mr-1.5" />
                Generate Key
              </Button>
            </div>
            <CardDescription>
              Keys used to authenticate with the Artemis API.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="divide-y divide-graphite-100">
              {apiKeys.map((apiKey) => (
                <div key={apiKey.name} className="py-4 first:pt-0 last:pb-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium text-graphite-800">
                          {apiKey.name}
                        </p>
                        <Badge variant="success">{apiKey.status}</Badge>
                      </div>
                      <div className="mt-2">
                        <MaskedKey keyValue={apiKey.key} />
                      </div>
                      <p className="text-xs text-graphite-400 mt-1.5">
                        Created {apiKey.created} &middot; Last used {apiKey.lastUsed}
                      </p>
                    </div>
                    <Button variant="ghost" size="sm" className="text-graphite-400 hover:text-danger shrink-0">
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Webhooks */}
      <motion.div variants={item}>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Webhook className="h-4 w-4 text-graphite-500" />
                <CardTitle>Webhooks</CardTitle>
              </div>
              <Button size="sm" variant="outline">
                <Plus className="h-3.5 w-3.5 mr-1.5" />
                Add Webhook
              </Button>
            </div>
            <CardDescription>
              Receive real-time event notifications at your endpoints.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="divide-y divide-graphite-100">
              {webhooks.map((wh, i) => (
                <div key={i} className="py-4 first:pt-0 last:pb-0">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <code className="text-xs font-mono text-graphite-700 bg-graphite-50 px-2 py-0.5 rounded">
                        {wh.url}
                      </code>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {wh.events.map((ev) => (
                          <Badge key={ev} variant="outline" className="text-[10px]">
                            {ev}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-xs text-graphite-400 mt-1.5">
                        Last delivery: {wh.lastDelivery}
                      </p>
                    </div>
                    <Badge variant="success">{wh.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Available integrations */}
      <motion.div variants={item}>
        <Card>
          <CardHeader>
            <CardTitle>Available Integrations</CardTitle>
            <CardDescription>
              Connect external systems to extend platform capabilities.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {integrations.map((intg) => {
                const Icon = intg.icon;
                return (
                  <div
                    key={intg.name}
                    className="flex items-start gap-3 p-4 rounded border border-graphite-100 hover:border-graphite-200 transition-colors"
                  >
                    <div className="p-2 bg-graphite-50 rounded shrink-0">
                      <Icon className="h-5 w-5 text-graphite-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-medium text-graphite-800">
                          {intg.name}
                        </p>
                        {intg.connected ? (
                          <Badge variant="success">Connected</Badge>
                        ) : (
                          <Button variant="outline" size="sm">
                            Connect
                          </Button>
                        )}
                      </div>
                      <p className="text-xs text-graphite-500 mt-1">
                        {intg.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
