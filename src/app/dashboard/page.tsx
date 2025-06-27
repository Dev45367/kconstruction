"use client";
import React, { useState, useMemo } from "react";
import dynamic from 'next/dynamic';
import { projects as allProjects, Project } from '@/data/projects';
import {
  CARD_BG,
  CARD_RADIUS,
  CARD_SHADOW,
  TEXT_COLOR,
  PRIMARY_COLOR,
  PRIMARY_COLOR_HOVER,
} from "@/constants/theme";

const ITEMS_PER_PAGE = 10;

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const MapView = useMemo(() => dynamic(() => import('@/components/MapView'), { ssr: false }), []);

  // Move selected project to top, then paginate
  const sortedProjects = useMemo(() => {
    if (!selectedProject) return allProjects;
    const selected = allProjects.find(p => p.id === selectedProject);
    const rest = allProjects.filter(p => p.id !== selectedProject);
    return selected ? [selected, ...rest] : allProjects;
  }, [selectedProject]);

  const totalPages = Math.ceil(sortedProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = sortedProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleProjectSelect = (id: number) => {
    setSelectedProject(id);
    setCurrentPage(1); // Always show selected at top
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Map */}
      <div className="w-full h-64 md:h-96 bg-gray-200 rounded-lg">
        <MapView
          projects={allProjects as any}
          selectedProject={selectedProject}
          onMarkerClick={handleProjectSelect}
        />
      </div>
      {/* Projects Table */}
      <div className={`overflow-x-auto ${CARD_BG} ${CARD_RADIUS} ${CARD_SHADOW}`}>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Project Name</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Address</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Status</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Progress</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Estimated Date</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Start Date</th>
            </tr>
          </thead>
          <tbody>
            {paginatedProjects.map((project) => (
              <tr
                key={project.id}
                className={`cursor-pointer hover:bg-blue-50 transition ${selectedProject === project.id ? "bg-blue-100 font-semibold" : ""}`}
                onClick={() => handleProjectSelect(project.id)}
              >
                <td className="px-4 py-2 whitespace-nowrap">{project.name}</td>
                <td className="px-4 py-2 whitespace-nowrap">{project.address}</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <span
                    className={
                      project.status === 'Planned'
                        ? 'bg-orange-100 text-orange-800 rounded px-2 py-1 text-xs font-semibold'
                        : project.status === 'Ongoing'
                          ? 'bg-blue-100 text-blue-800 rounded px-2 py-1 text-xs font-semibold'
                          : 'bg-green-100 text-green-800 rounded px-2 py-1 text-xs font-semibold'
                    }
                  >
                    {project.status}
                  </span>
                </td>
                <td className="px-4 py-2 whitespace-nowrap">{project.progress}</td>
                <td className="px-4 py-2 whitespace-nowrap">{project.estimatedDate}</td>
                <td className="px-4 py-2 whitespace-nowrap">{project.startDate}</td>
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
          className={`px-4 py-2 rounded-lg font-semibold text-white ${PRIMARY_COLOR} ${PRIMARY_COLOR_HOVER} disabled:bg-gray-400 disabled:cursor-not-allowed`}
        >
          Previous
        </button>
        <span className="text-sm text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg font-semibold text-white ${PRIMARY_COLOR} ${PRIMARY_COLOR_HOVER} disabled:bg-gray-400 disabled:cursor-not-allowed`}
        >
          Next
        </button>
      </div>
    </div>
  );
} 