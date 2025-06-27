"use client";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useState } from 'react';

// Custom icons for different statuses
const iconBlue = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
const iconOrange = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
const iconGreen = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
const iconRed = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export interface Project {
  id: number;
  name: string;
  address: string;
  lat: number;
  lng: number;
  status: 'Ongoing' | 'Planned' | 'Completed';
  country: 'India' | 'US' | 'Canada';
}

interface MapProps {
  projects: Project[];
  selectedProject: number | null;
  onMarkerClick: (id: number) => void;
}

function MapFlyTo({ projects, selectedProject }: { projects: Project[]; selectedProject: number | null }) {
  const map = useMap();
  useEffect(() => {
    if (selectedProject) {
      const proj = projects.find(p => p.id === selectedProject);
      if (proj) {
        map.flyTo([proj.lat, proj.lng], 7, { duration: 1 });
      }
    }
  }, [selectedProject, projects, map]);
  return null;
}

const MapView: React.FC<MapProps> = ({ projects, selectedProject, onMarkerClick }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  const position: [number, number] = [28.6139, 77.2090]; // Centered on Delhi by default

  return (
    <MapContainer center={position} zoom={3} style={{ height: '100%', width: '100%' }} className="rounded-lg">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MapFlyTo projects={projects} selectedProject={selectedProject} />
      {projects.map(project => {
        let icon = iconBlue;
        if (selectedProject === project.id) {
          icon = iconRed;
        } else if (project.status === 'Planned') {
          icon = iconOrange;
        } else if (project.status === 'Completed') {
          icon = iconGreen;
        }
        return (
          <Marker 
            key={project.id} 
            position={[project.lat, project.lng]}
            icon={icon}
            eventHandlers={{
              click: () => onMarkerClick(project.id),
            }}
          >
            <Popup>
              <b>{project.name}</b><br />
              {project.address}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default MapView; 