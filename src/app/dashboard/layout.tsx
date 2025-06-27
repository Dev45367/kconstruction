"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import {
  PRIMARY_COLOR,
  PRIMARY_COLOR_TEXT,
  CARD_BG,
  CARD_SHADOW,
  CARD_RADIUS,
  PAGE_BG,
  TEXT_COLOR,
  PRIMARY_COLOR_HOVER,
} from "@/constants/theme";

const menuItems = [
  { name: "Projects", href: "/dashboard" },
  { name: "Employees", href: "/dashboard/employees" },
  { name: "Inventory", href: "/dashboard/inventory" },
  { name: "Machinery", href: "/dashboard/machinery" },
  { name: "Trips", href: "/dashboard/trips" },
  { name: "Plants", href: "/dashboard/plants" },
  { name: "Petrol Pumps", href: "#" },
  { name: "Reports", href: "#" },
  { name: "Logout", href: "/login" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className={`min-h-screen flex ${PAGE_BG}`}>
      {/* Sidebar */}
      <aside className={`
        fixed z-30 inset-y-0 left-0 w-64 transition-transform duration-200 transform bg-gray-100 border-r border-gray-200 ${CARD_RADIUS}
        lg:static lg:translate-x-0
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <div className={`flex items-center justify-between px-6 py-4 border-b border-gray-200`}>
          <div className={`w-10 h-10 rounded-full ${PRIMARY_COLOR} flex items-center justify-center mr-2`}>
            <span className="text-white text-xl font-bold">kc</span>
          </div>
          <span className="font-bold text-lg">Admin</span>
          <button className="lg:hidden ml-2" onClick={() => setSidebarOpen(false)}>
            <span className="text-2xl">×</span>
          </button>
        </div>
        <nav className="mt-4 flex flex-col gap-1 px-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`py-2 px-4 rounded-lg font-medium text-left transition ${pathname === item.href
                ? `${PRIMARY_COLOR} text-white ${PRIMARY_COLOR_HOVER}`
                : `text-gray-700 hover:bg-blue-100`
                }`}
              onClick={() => setSidebarOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top bar for mobile */}
        <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-white border-b">
          <button onClick={() => setSidebarOpen(true)}>
            <span className="text-2xl">☰</span>
          </button>
          <span className="font-bold text-lg">Dashboard</span>
          <div className={`w-8 h-8 rounded-full ${PRIMARY_COLOR} flex items-center justify-center`}>
            <span className="text-white text-lg font-bold">kc</span>
          </div>
        </div>
        <main className="flex-1 p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
} 