"use client";
import React, { useState, useMemo, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { trips } from "@/data/trips";
import {
  CARD_BG,
  CARD_RADIUS,
  CARD_SHADOW,
  PRIMARY_COLOR,
  PRIMARY_COLOR_HOVER,
} from '@/constants/theme';

const MapView = dynamic(() => import("@/components/MapView"), { ssr: false });
const ITEMS_PER_PAGE = 10;

export default function TripsPage() {
  const [selectedTrip, setSelectedTrip] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const mapRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);

  const filteredTrips = useMemo(() => {
    let filtered = trips.filter(item => {
      const searchLower = search.toLowerCase();
      return (
        item.vehicle_name.toLowerCase().includes(searchLower) ||
        item.vehicle_number.toLowerCase().includes(searchLower) ||
        item.operator_name.toLowerCase().includes(searchLower) ||
        item.operator_number.toLowerCase().includes(searchLower)
      );
    });
    if (selectedTrip) {
      const idx = filtered.findIndex(t => t.id === selectedTrip);
      if (idx > 0) {
        const [selected] = filtered.splice(idx, 1);
        filtered = [selected, ...filtered];
      }
    }
    return filtered;
  }, [search, selectedTrip]);

  const totalPages = Math.ceil(filteredTrips.length / ITEMS_PER_PAGE);
  const paginatedTrips = filteredTrips.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    if (selectedTrip && mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [selectedTrip]);

  return (
    <div className="flex flex-col gap-8">
      {/* Map */}
      <div ref={mapRef} className={`w-full h-[400px] ${CARD_BG} ${CARD_RADIUS} ${CARD_SHADOW} p-2`}>
        <MapView
          projects={trips.map(t => ({
            id: t.id,
            name: t.vehicle_name + ' (' + t.vehicle_number + ')',
            address: t.source_site + ' → ' + t.destination,
            lat: t.lat,
            lng: t.lng,
            status: "Ongoing",
            country: "India",
          }))}
          selectedProject={selectedTrip}
          onMarkerClick={id => {
            setSelectedTrip(id);
            if (tableRef.current) tableRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
        />
      </div>

      {/* Search */}
      <div className="flex flex-wrap gap-4 items-center mb-2">
        <input
          type="text"
          placeholder="Search by vehicle, operator, or number..."
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
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Vehicle Name</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Vehicle Number</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Operator Name</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Operator Number</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Source Site</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Destination</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Timing</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Trip Start</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Trip End</th>
            </tr>
          </thead>
          <tbody>
            {paginatedTrips.map((item, idx) => (
              <tr
                key={item.id}
                className={`hover:bg-blue-50 transition cursor-pointer ${selectedTrip === item.id ? 'bg-blue-100' : ''}`}
                onClick={() => {
                  setSelectedTrip(item.id);
                  if (mapRef.current) mapRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
              >
                <td className="px-4 py-2 whitespace-nowrap">{(currentPage - 1) * ITEMS_PER_PAGE + idx + 1}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.vehicle_name}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.vehicle_number}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.operator_name}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.operator_number}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.source_site}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.destination}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.timing}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.trip_start}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.trip_end}</td>
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