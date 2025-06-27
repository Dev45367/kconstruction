"use client";
import React, { useState, useMemo, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { machinery, MachineryItem } from "@/data/machinery";
import {
  CARD_BG,
  CARD_RADIUS,
  CARD_SHADOW,
  PRIMARY_COLOR,
  PRIMARY_COLOR_HOVER,
} from '@/constants/theme';

const MapView = dynamic(() => import("@/components/MapView"), { ssr: false });

const ITEMS_PER_PAGE = 10;

export default function MachineryPage() {
  const [selectedMachinery, setSelectedMachinery] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const mapRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);

  const filteredMachinery = useMemo(() => {
    let filtered = machinery.filter(item => {
      const searchLower = search.toLowerCase();
      return (
        item.name.toLowerCase().includes(searchLower) ||
        item.vehicle_number.toLowerCase().includes(searchLower) ||
        item.driver_name.toLowerCase().includes(searchLower) ||
        item.driver_contact.toLowerCase().includes(searchLower)
      );
    });
    if (selectedMachinery) {
      const idx = filtered.findIndex(m => m.id === selectedMachinery);
      if (idx > 0) {
        const [selected] = filtered.splice(idx, 1);
        filtered = [selected, ...filtered];
      }
    }
    return filtered;
  }, [search, selectedMachinery]);

  const totalPages = Math.ceil(filteredMachinery.length / ITEMS_PER_PAGE);
  const paginatedMachinery = filteredMachinery.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    if (selectedMachinery && mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [selectedMachinery]);

  return (
    <div className="flex flex-col gap-8">
      {/* Map */}
      <div ref={mapRef} className={`w-full h-[400px] ${CARD_BG} ${CARD_RADIUS} ${CARD_SHADOW} p-2`}>
        <MapView
          projects={machinery.map(m => ({
            id: m.id,
            name: m.name + ' (' + m.vehicle_number + ')',
            address: m.last_visit_place + ', ' + m.country,
            lat: m.lat,
            lng: m.lng,
            status: "Ongoing",
            country: m.country,
          }))}
          selectedProject={selectedMachinery}
          onMarkerClick={id => {
            setSelectedMachinery(id);
            if (tableRef.current) tableRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
        />
      </div>

      {/* Search */}
      <div className="flex flex-wrap gap-4 items-center mb-2">
        <input
          type="text"
          placeholder="Search by machinery, vehicle, driver, or contact..."
          value={search}
          onChange={e => { setSearch(e.target.value); setCurrentPage(1); }}
          className="p-2 border rounded-lg min-w-[220px]"
        />
      </div>

      {/* Table */}
      <div ref={tableRef} className={`overflow-x-auto ${CARD_BG} ${CARD_RADIUS} ${CARD_SHADOW}`}>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">S.No</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Machinery Name</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Vehicle Number</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Driver Name</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Driver Contact</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Last Visit (Place & Date)</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Destination (Place & Date)</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Driver Salary</th>
            </tr>
          </thead>
          <tbody>
            {paginatedMachinery.map((item, idx) => (
              <tr
                key={item.id}
                className={`hover:bg-blue-50 transition cursor-pointer ${selectedMachinery === item.id ? 'bg-blue-100' : ''}`}
                onClick={() => {
                  setSelectedMachinery(item.id);
                  if (mapRef.current) mapRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
              >
                <td className="px-4 py-2 whitespace-nowrap">{(currentPage - 1) * ITEMS_PER_PAGE + idx + 1}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.name}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.vehicle_number}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.driver_name}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.driver_contact}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.last_visit_place} ({item.last_visit_date})</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.destination} ({item.destination_date})</td>
                <td className="px-4 py-2 whitespace-nowrap">₹{item.driver_salary.toLocaleString()}</td>
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