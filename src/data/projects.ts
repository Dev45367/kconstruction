export interface Project {
  id: number;
  name: string;
  address: string;
  status: 'Ongoing' | 'Planned' | 'Completed';
  progress: string;
  estimatedDate: string;
  startDate: string;
  lat: number;
  lng: number;
  country: 'India' | 'US' | 'Canada';
}

function randomInRange(min: number, max: number) {
  return min + Math.random() * (max - min);
}



const indianStates = [
  { name: 'Andhra Pradesh', lat: 15.9129, lng: 79.7400 },
  { name: 'Arunachal Pradesh', lat: 28.2180, lng: 94.7278 },
  { name: 'Assam', lat: 26.2006, lng: 92.9376 },
  { name: 'Bihar', lat: 25.0961, lng: 85.3131 },
  { name: 'Chhattisgarh', lat: 21.2787, lng: 81.8661 },
  { name: 'Goa', lat: 15.2993, lng: 74.1240 },
  { name: 'Gujarat', lat: 23.0225, lng: 72.5714 },
  { name: 'Haryana', lat: 29.0588, lng: 76.0856 },
  { name: 'Himachal Pradesh', lat: 31.1048, lng: 77.1734 },
  { name: 'Jharkhand', lat: 23.6102, lng: 85.2799 },
  { name: 'Karnataka', lat: 15.3173, lng: 75.7139 },
  { name: 'Kerala', lat: 10.8505, lng: 76.2711 },
  { name: 'Madhya Pradesh', lat: 22.9734, lng: 78.6569 },
  { name: 'Maharashtra', lat: 19.7515, lng: 75.7139 },
  { name: 'Manipur', lat: 24.6637, lng: 93.9063 },
  { name: 'Meghalaya', lat: 25.4670, lng: 91.3662 },
  { name: 'Mizoram', lat: 23.1645, lng: 92.9376 },
  { name: 'Nagaland', lat: 26.1584, lng: 94.5624 },
  { name: 'Odisha', lat: 20.9517, lng: 85.0985 },
  { name: 'Punjab', lat: 31.1471, lng: 75.3412 },
  { name: 'Rajasthan', lat: 27.0238, lng: 74.2179 },
  { name: 'Sikkim', lat: 27.5330, lng: 88.5122 },
  { name: 'Tamil Nadu', lat: 11.1271, lng: 78.6569 },
  { name: 'Telangana', lat: 18.1124, lng: 79.0193 },
  { name: 'Tripura', lat: 23.9408, lng: 91.9882 },
  { name: 'Uttar Pradesh', lat: 26.8467, lng: 80.9462 },
  { name: 'Uttarakhand', lat: 30.0668, lng: 79.0193 },
  { name: 'West Bengal', lat: 22.9868, lng: 87.8550 },
  { name: 'Delhi', lat: 28.7041, lng: 77.1025 },
  { name: 'Chandigarh', lat: 30.7333, lng: 76.7794 },
  { name: 'Puducherry', lat: 11.9416, lng: 79.8083 },
  { name: 'Jammu and Kashmir', lat: 34.0837, lng: 74.7973 },
  { name: 'Ladakh', lat: 34.1526, lng: 77.5771 },
  { name: 'Andaman and Nicobar Islands', lat: 11.7401, lng: 92.6586 },
  { name: 'Dadra and Nagar Haveli', lat: 20.1809, lng: 73.0169 },
  { name: 'Lakshadweep', lat: 10.5667, lng: 72.6417 }
];

export const projects: Project[] = [
  ...indianStates.map((state, i) => {
    const statuses = ['Ongoing', 'Planned', 'Completed'] as const;
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const progress =
      status === 'Completed'
        ? '100%'
        : status === 'Planned'
        ? `${Math.floor(Math.random() * 10)}%`
        : `${40 + Math.floor(Math.random() * 60)}%`;
    
    return {
      id: i + 1,
      name: `${state.name} Construction Project`,
      address: `Construction Site, ${state.name}, India`,
      status,
      progress,
      estimatedDate: `2024-${String(1 + Math.floor(Math.random() * 12)).padStart(2, '0')}-${String(1 + Math.floor(Math.random() * 28)).padStart(2, '0')}`,
      startDate: `2023-${String(1 + Math.floor(Math.random() * 12)).padStart(2, '0')}-${String(1 + Math.floor(Math.random() * 28)).padStart(2, '0')}`,
      lat: state.lat,
      lng: state.lng,
      country: 'India' as const,
    };
  })
]; 