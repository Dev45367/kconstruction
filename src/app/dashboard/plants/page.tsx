"use client";
import React, { useState, useMemo, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { plants } from "@/data/plants";
import {
  CARD_BG,
  CARD_RADIUS,
  CARD_SHADOW,
  PRIMARY_COLOR,
  PRIMARY_COLOR_HOVER,
} from '@/constants/theme';
import { useRouter } from "next/navigation";

const MapView = dynamic(() => import("@/components/MapView"), { ssr: false });
const ITEMS_PER_PAGE = 10;

export default function PlantsPage() {
  const [selectedPlant, setSelectedPlant] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const mapRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const filteredPlants = useMemo(() => {
    let filtered = plants.filter(item => {
      const searchLower = search.toLowerCase();
      return (
        item.name.toLowerCase().includes(searchLower) ||
        item.address.toLowerCase().includes(searchLower) ||
        item.supervisor_name.toLowerCase().includes(searchLower) ||
        item.supervisor_contact.toLowerCase().includes(searchLower)
      );
    });
    if (selectedPlant) {
      const idx = filtered.findIndex(p => p.id === selectedPlant);
      if (idx > 0) {
        const [selected] = filtered.splice(idx, 1);
        filtered = [selected, ...filtered];
      }
    }
    return filtered;
  }, [search, selectedPlant]);

  const totalPages = Math.ceil(filteredPlants.length / ITEMS_PER_PAGE);
  const paginatedPlants = filteredPlants.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    if (selectedPlant && mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [selectedPlant]);

  return (
    <div className="flex flex-col gap-8">
      {/* Map */}
      <div ref={mapRef} className={`w-full h-[400px] ${CARD_BG} ${CARD_RADIUS} ${CARD_SHADOW} p-2`}>
        <MapView
          projects={plants.map(p => ({
            id: p.id,
            name: p.name,
            address: p.address,
            lat: p.lat,
            lng: p.lng,
            status: "Ongoing",
            country: "India",
          }))}
          selectedProject={selectedPlant}
          onMarkerClick={id => {
            setSelectedPlant(id);
            if (tableRef.current) tableRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
        />
      </div>

      {/* Search */}
      <div className="flex flex-wrap gap-4 items-center mb-2">
        <input
          type="text"
          placeholder="Search by plant, address, supervisor..."
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
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Plant Name</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Address</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Supervisor Name</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Supervisor Contact</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Concrete (Tons)</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Cement (Tons)</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Sand (Tons)</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Steel (Tons)</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Details</th>
            </tr>
          </thead>
          <tbody>
            {paginatedPlants.map((item, idx) => (
              <tr
                key={item.id}
                className={`hover:bg-blue-50 transition cursor-pointer ${selectedPlant === item.id ? 'bg-blue-100' : ''}`}
                onClick={e => {
                  if ((e.target as HTMLElement).tagName !== 'BUTTON') {
                    setSelectedPlant(item.id);
                    if (mapRef.current) mapRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}
              >
                <td className="px-4 py-2 whitespace-nowrap">{(currentPage - 1) * ITEMS_PER_PAGE + idx + 1}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.name}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.address}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.supervisor_name}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.supervisor_contact}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.concrete_available}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.cement_available}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.sand_available}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.steel_available}</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <button
                    className={`px-3 py-1 rounded-lg font-semibold text-white ${PRIMARY_COLOR} ${PRIMARY_COLOR_HOVER}`}
                    onClick={e => {
                      e.stopPropagation();
                      router.push(`/dashboard/plants/${item.id}`);
                    }}
                  >
                    Details
                  </button>
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