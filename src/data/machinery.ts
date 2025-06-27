export interface MachineryItem {
  id: number;
  name: string;
  vehicle_number: string;
  driver_name: string;
  driver_contact: string;
  last_visit_place: string;
  last_visit_date: string;
  destination: string;
  destination_date: string;
  lat: number;
  lng: number;
  driver_salary: number;
  country: 'India' | 'US' | 'Canada';
}

const machineryNames = [
  'Tractor', 'Concrete Mixer', 'Excavator', 'Bulldozer', 'Crane', 'Dump Truck', 'Loader', 'Backhoe', 'Grader', 'Compactor',
  'Forklift', 'Paver', 'Scraper', 'Skid-Steer Loader', 'Tower Crane', 'Wheel Loader', 'Asphalt Plant', 'Batching Plant', 'Road Roller', 'Hydraulic Hammer'
];
const driverNames = [
  'Amit Singh', 'Rajesh Kumar', 'Priya Sharma', 'John Doe', 'Emily Clark', 'Michael Brown', 'Sonia Patel', 'David Lee',
  'Ravi Verma', 'Sunil Yadav', 'Anil Mehta', 'Deepak Saini', 'Vikram Chauhan', 'Suresh Rathi', 'Manoj Joshi', 'Karan Kapoor',
  'Chris Evans', 'Robert Brown', 'Linda White', 'Patricia Miller'
];
const placesIndia = ['Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow'];
const placesUS = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'];
const placesCanada = ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa', 'Edmonton', 'Winnipeg', 'Quebec City', 'Hamilton', 'Kitchener'];
const countries = ['India', 'US', 'Canada'] as const;
const coords = {
  India: [
    [28.6139, 77.2090], [19.0760, 72.8777], [12.9716, 77.5946], [17.3850, 78.4867], [13.0827, 80.2707],
    [22.5726, 88.3639], [18.5204, 73.8567], [23.0225, 72.5714], [26.9124, 75.7873], [26.8467, 80.9462]
  ],
  US: [
    [40.7128, -74.0060], [34.0522, -118.2437], [41.8781, -87.6298], [29.7604, -95.3698], [33.4484, -112.0740],
    [39.9526, -75.1652], [29.4241, -98.4936], [32.7157, -117.1611], [32.7767, -96.7970], [37.3382, -121.8863]
  ],
  Canada: [
    [43.6532, -79.3832], [49.2827, -123.1207], [45.5017, -73.5673], [51.0447, -114.0719], [45.4215, -75.6997],
    [53.5461, -113.4938], [49.8951, -97.1384], [46.8139, -71.2080], [43.2557, -79.8711], [43.4516, -80.4925]
  ]
};

function randomFrom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}
function randomDate(start: Date, end: Date) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    .toISOString().slice(0, 10);
}
function randomPhone() {
  return `+91-${Math.floor(1000000000 + Math.random() * 9000000000)}`;
}
function randomVehicleNumber(country: string) {
  if (country === 'India') return `DL${Math.floor(Math.random()*10)}CA${Math.floor(1000+Math.random()*9000)}`;
  if (country === 'US') return `${String.fromCharCode(65+Math.floor(Math.random()*26))}${Math.floor(1000+Math.random()*9000)}`;
  return `CA${Math.floor(1000+Math.random()*9000)}`;
}

export const machinery: MachineryItem[] = Array.from({ length: 50 }, (_, i) => {
  const country = countries[Math.floor(i/17)] || 'India';
  const places = country === 'India' ? placesIndia : country === 'US' ? placesUS : placesCanada;
  const coord = coords[country][i%10];
  const name = randomFrom(machineryNames);
  const driver_name = randomFrom(driverNames);
  const last_visit_place = randomFrom(places);
  const destination = randomFrom(places);
  return {
    id: i+1,
    name,
    vehicle_number: randomVehicleNumber(country),
    driver_name,
    driver_contact: randomPhone(),
    last_visit_place,
    last_visit_date: randomDate(new Date(2024, 0, 1), new Date(2024, 5, 30)),
    destination,
    destination_date: randomDate(new Date(2024, 6, 1), new Date(2024, 11, 31)),
    lat: coord[0],
    lng: coord[1],
    driver_salary: Math.floor(20000 + Math.random() * 30000),
    country,
  };
}); 