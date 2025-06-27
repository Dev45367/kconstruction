"use client";
import { useParams } from "next/navigation";
import { plants } from "@/data/plants";
import React, { useState, useMemo } from "react";
import {
  CARD_BG,
  CARD_RADIUS,
  CARD_SHADOW,
  PRIMARY_COLOR,
} from '@/constants/theme';
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const TIME_RANGES = [
  { label: "1 Day", value: 1 },
  { label: "2 Days", value: 2 },
  { label: "1 Week", value: 7 },
];

function randomSales(materials: { name: string; inventory: number; supplier: string }[], days: number) {
  // Generate random sales/inventory for demo
  return materials.map((m: { name: string; inventory: number; supplier: string }, i: number) => ({
    name: m.name,
    value: Math.max(0, m.inventory - Math.floor(Math.random() * 10 * days)),
    sales: Math.floor(Math.random() * 10 * days),
    supplier: m.supplier,
  }));
}

export default function PlantDetailPage() {
  const { id } = useParams();
  const plant = plants.find(p => p.id === Number(id));
  const [days, setDays] = useState(1);

  const chartData = useMemo(() => plant ? randomSales(plant.materials, days) : [], [plant, days]);

  if (!plant) return <div className="p-8 text-red-600">Plant not found.</div>;

  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-8 p-4 md:p-8">
      <div className={`p-4 ${CARD_BG} ${CARD_RADIUS} ${CARD_SHADOW}`}>
        <h2 className="text-2xl font-bold mb-2">{plant.name}</h2>
        <div className="mb-2 text-gray-700">{plant.address}</div>
        <div className="mb-2">Supervisor: <b>{plant.supervisor_name}</b> ({plant.supervisor_contact})</div>
        <div className="flex flex-wrap gap-4 mb-2">
          <div>Concrete: <b>{plant.concrete_available} tons</b></div>
          <div>Cement: <b>{plant.cement_available} tons</b></div>
          <div>Sand: <b>{plant.sand_available} tons</b></div>
          <div>Steel: <b>{plant.steel_available} tons</b></div>
        </div>
      </div>

      {/* Time Range Selector */}
      <div className="flex gap-4 items-center">
        <span className="font-semibold">Show Inventory/Sales for:</span>
        {TIME_RANGES.map(r => (
          <button
            key={r.value}
            onClick={() => setDays(r.value)}
            className={`px-4 py-2 rounded-lg font-semibold border ${days === r.value ? PRIMARY_COLOR + ' text-white' : 'bg-white text-gray-700'} transition`}
          >
            {r.label}
          </button>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className={`p-4 ${CARD_BG} ${CARD_RADIUS} ${CARD_SHADOW}`}>
          <h3 className="font-bold mb-2">Inventory Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {chartData.map((entry: any, index: number) => (
                  <Cell key={`cell-pie-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className={`p-4 ${CARD_BG} ${CARD_RADIUS} ${CARD_SHADOW}`}>
          <h3 className="font-bold mb-2">Sales (Estimated)</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#82ca9d">
                {chartData.map((entry: any, index: number) => (
                  <Cell key={`cell-bar-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Materials Table */}
      <div className={`overflow-x-auto ${CARD_BG} ${CARD_RADIUS} ${CARD_SHADOW}`}>
        <h3 className="font-bold mb-2 p-2">Materials, Inventory & Suppliers</h3>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Material</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Inventory</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Supplier</th>
            </tr>
          </thead>
          <tbody>
            {chartData.map((item: any, idx: number) => (
              <tr key={item.name}>
                <td className="px-4 py-2 whitespace-nowrap">{item.name}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.value}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.supplier}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 