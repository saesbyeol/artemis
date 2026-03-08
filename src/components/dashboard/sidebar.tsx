"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { signOut } from "next-auth/react";
import {
  LayoutDashboard,
  Plane,
  Target,
  Radio,
  Puzzle,
  CreditCard,
  User,
  Settings,
  ShieldCheck,
  LogOut,
  Menu,
  X,
  Hexagon,
  ChevronRight,
} from "lucide-react";

interface SidebarUser {
  id?: string;
  name?: string | null;
  email?: string | null;
}

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

const navigation: NavGroup[] = [
  {
    title: "OPERATIONS",
    items: [
      { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { label: "Fleet", href: "/fleet", icon: Plane },
      { label: "Missions", href: "/missions", icon: Target },
      { label: "Operations", href: "/operations", icon: Radio },
    ],
  },
  {
    title: "PLATFORM",
    items: [
      { label: "Integrations", href: "/integrations", icon: Puzzle },
      { label: "Billing", href: "/billing", icon: CreditCard },
    ],
  },
  {
    title: "ACCOUNT",
    items: [
      { label: "Profile", href: "/profile", icon: User },
      { label: "Settings", href: "/settings", icon: Settings },
      { label: "Security", href: "/security-settings", icon: ShieldCheck },
    ],
  },
];

export function Sidebar({ user }: { user: SidebarUser }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const initials = user.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "U";

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Branding */}
      <div className="px-5 py-6 border-b border-graphite-800/50">
        <Link href="/dashboard" className="flex items-center gap-3 group">
          <div className="relative">
            <Hexagon className="h-8 w-8 text-graphite-400 group-hover:text-graphite-300 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-graphite-400 group-hover:bg-graphite-300 transition-colors" />
            </div>
          </div>
          <div>
            <span className="text-sm font-bold tracking-[0.25em] text-graphite-200">
              ARTEMIS
            </span>
            <span className="block text-[10px] tracking-[0.3em] text-graphite-500 -mt-0.5">
              CONTROL
            </span>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-6">
        {navigation.map((group) => (
          <div key={group.title}>
            <p className="px-3 mb-2 text-[10px] font-semibold tracking-[0.2em] text-graphite-500">
              {group.title}
            </p>
            <div className="space-y-0.5">
              {group.items.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 text-sm rounded transition-all duration-150 group relative",
                      isActive
                        ? "bg-graphite-800/80 text-white"
                        : "text-graphite-400 hover:text-graphite-200 hover:bg-graphite-800/40"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="sidebar-active"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-graphite-300 rounded-r"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <Icon className={cn("h-4 w-4 flex-shrink-0", isActive ? "text-graphite-200" : "text-graphite-500 group-hover:text-graphite-400")} />
                    <span className="font-medium">{item.label}</span>
                    {isActive && (
                      <ChevronRight className="h-3 w-3 ml-auto text-graphite-500" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* User section */}
      <div className="border-t border-graphite-800/50 p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-8 w-8 rounded bg-graphite-700 flex items-center justify-center text-xs font-semibold text-graphite-300 flex-shrink-0">
            {initials}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-graphite-200 truncate">
              {user.name || "Operator"}
            </p>
            <p className="text-xs text-graphite-500 truncate">
              {user.email || ""}
            </p>
          </div>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="flex items-center gap-2 w-full px-3 py-2 text-xs text-graphite-500 hover:text-graphite-300 hover:bg-graphite-800/40 rounded transition-colors cursor-pointer"
        >
          <LogOut className="h-3.5 w-3.5" />
          <span>Sign out</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-graphite-900 border border-graphite-700 rounded text-graphite-300 hover:text-white transition-colors cursor-pointer"
        aria-label="Open navigation"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-40 bg-black/60"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="lg:hidden fixed left-0 top-0 bottom-0 z-50 w-64 bg-graphite-950 border-r border-graphite-800/50"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 p-1 text-graphite-500 hover:text-graphite-300 transition-colors cursor-pointer"
              aria-label="Close navigation"
            >
              <X className="h-5 w-5" />
            </button>
            {sidebarContent}
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop sidebar */}
      <aside className="hidden lg:block fixed left-0 top-0 bottom-0 w-64 bg-graphite-950 border-r border-graphite-800/50 z-30">
        {sidebarContent}
      </aside>
    </>
  );
}
