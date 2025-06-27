"use client";
import React, { useState, useMemo } from "react";
import { inventory } from "@/data/inventory";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend
} from "recharts";
import {
  CARD_BG,
  CARD_RADIUS,
  CARD_SHADOW,
  PRIMARY_COLOR,
  PRIMARY_COLOR_HOVER,
} from '@/constants/theme';

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const ITEMS_PER_PAGE = 10;

export default function InventoryPage() {
  const [selectedMaterial, setSelectedMaterial] = useState(inventory[0].material);
  const [search, setSearch] = useState("");
  const [deliveredFilter, setDeliveredFilter] = useState("all");
  const [materialFilter, setMaterialFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [paymentStatusFilter, setPaymentStatusFilter] = useState("all");

  // Aggregate data by material type
  const aggregatedData = useMemo(() => {
    const materialMap = new Map();
    inventory.forEach(item => {
      const existing = materialMap.get(item.material) || { material: item.material, quantity: 0, items: [] };
      existing.quantity += item.quantity;
      existing.items.push(item);
      materialMap.set(item.material, existing);
    });
    return Array.from(materialMap.values());
  }, []);

  const selected = inventory.find(i => i.material === selectedMaterial) || inventory[0];

  const filteredInventory = useMemo(() => {
    return inventory.filter(item => {
      const matchesSearch =
        !search ||
        item.material.toLowerCase().includes(search.toLowerCase()) ||
        item.unit.toLowerCase().includes(search.toLowerCase()) ||
        item.breakdown.some(b => b.name.toLowerCase().includes(search.toLowerCase())) ||
        item.supplier.name.toLowerCase().includes(search.toLowerCase()) ||
        item.supplier.company.toLowerCase().includes(search.toLowerCase()) ||
        item.supplier.contact_number.toLowerCase().includes(search.toLowerCase()) ||
        item.payment_status.toLowerCase().includes(search.toLowerCase());
      const matchesDelivered =
        deliveredFilter === "all" ||
        (deliveredFilter === "delivered" && item.delivered) ||
        (deliveredFilter === "pending" && !item.delivered);
      const matchesMaterial =
        materialFilter === "all" || item.material === materialFilter;
      const matchesPayment =
        paymentStatusFilter === "all" || item.payment_status === paymentStatusFilter;
      return matchesSearch && matchesDelivered && matchesMaterial && matchesPayment;
    });
  }, [search, deliveredFilter, materialFilter, paymentStatusFilter]);

  const totalPages = Math.ceil(filteredInventory.length / ITEMS_PER_PAGE);
  const paginatedInventory = filteredInventory.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="flex flex-col gap-8">
      {/* Bar Chart */}
      <div className={`w-full ${CARD_BG} ${CARD_RADIUS} ${CARD_SHADOW} p-4`}>
        <h2 className="text-lg font-bold mb-2">Material Quantities</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={aggregatedData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <XAxis dataKey="material" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="quantity" fill="#8884d8" onClick={data => setSelectedMaterial(data.payload.material)}>
              {aggregatedData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.material === selectedMaterial ? "#ff8042" : COLORS[index % COLORS.length]}
                  cursor="pointer"
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className={`w-full ${CARD_BG} ${CARD_RADIUS} ${CARD_SHADOW} p-4`}>
        <h2 className="text-lg font-bold mb-2">{selected.material} Breakdown</h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={selected.breakdown}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {selected.breakdown.map((entry, index) => (
                <Cell key={`cell-pie-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Filters */}
      <div className={`flex flex-wrap gap-4 items-center mb-2`}>
        <input
          type="text"
          placeholder="Search by material, unit, supplier, payment status..."
          value={search}
          onChange={e => { setSearch(e.target.value); setCurrentPage(1); }}
          className="p-2 border rounded-lg min-w-[220px]"
        />
        <select
          value={deliveredFilter}
          onChange={e => { setDeliveredFilter(e.target.value); setCurrentPage(1); }}
          className="p-2 border rounded-lg"
        >
          <option value="all">All Statuses</option>
          <option value="delivered">Delivered</option>
          <option value="pending">Pending</option>
        </select>
        <select
          value={materialFilter}
          onChange={e => { setMaterialFilter(e.target.value); setCurrentPage(1); }}
          className="p-2 border rounded-lg"
        >
          <option value="all">All Materials</option>
          {[...new Set(inventory.map(i => i.material))].map(mat => (
            <option key={mat} value={mat}>{mat}</option>
          ))}
        </select>
        <select
          value={paymentStatusFilter}
          onChange={e => { setPaymentStatusFilter(e.target.value); setCurrentPage(1); }}
          className="p-2 border rounded-lg"
        >
          <option value="all">All Payments</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>
      </div>

      {/* Table */}
      <div className={`overflow-x-auto ${CARD_BG} ${CARD_RADIUS} ${CARD_SHADOW}`}>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">S.No</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Material</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Quantity</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Unit</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Supply Date</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Estimate Time</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Delivered</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Supplier Name</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Supplier Company</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Supplier Contact</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedInventory.map((item, idx) => (
              <tr key={item.id} className="hover:bg-blue-50 transition">
                <td className="px-4 py-2 whitespace-nowrap">{(currentPage - 1) * ITEMS_PER_PAGE + idx + 1}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.material}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.quantity}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.unit}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.supply_date}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.estimate_time}</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${item.delivered ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {item.delivered ? 'Delivered' : 'Pending'}
                  </span>
                </td>
                <td className="px-4 py-2 whitespace-nowrap">{item.supplier.name}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.supplier.company}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.supplier.contact_number}</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${item.payment_status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}>
                    {item.payment_status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg font-semibold text-white ${PRIMARY_COLOR} ${PRIMARY_COLOR_HOVER} disabled:bg-gray-400`}
        >
          Previous
        </button>
        <span className="text-sm">Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg font-semibold text-white ${PRIMARY_COLOR} ${PRIMARY_COLOR_HOVER} disabled:bg-gray-400`}
        >
          Next
        </button>
      </div>
    </div>
  );
} 