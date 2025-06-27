export interface Trip {
  id: number;
  vehicle_name: string;
  vehicle_number: string;
  operator_name: string;
  operator_number: string;
  source_site: string;
  destination: string;
  timing: string;
  trip_start: string;
  trip_end: string;
  lat: number;
  lng: number;
}

const vehicleNames = [
  'Dumper', 'Tipper', 'Haul Truck', 'Dump Truck', 'Articulated Dumper', 'Rigid Dumper', 'Mini Dumper', 'Crawler Dumper', 'Site Dumper', 'Loader Dumper'
];
const operatorNames = [
  'Amit Singh', 'Rajesh Kumar', 'Priya Sharma', 'John Doe', 'Emily Clark', 'Michael Brown', 'Sonia Patel', 'David Lee',
  'Ravi Verma', 'Sunil Yadav', 'Anil Mehta', 'Deepak Saini', 'Vikram Chauhan', 'Suresh Rathi', 'Manoj Joshi', 'Karan Kapoor'
];
const sites = [
  'Site A', 'Site B', 'Site C', 'Site D', 'Site E', 'Site F', 'Site G', 'Site H', 'Site I', 'Site J'
];
const destinations = [
  'Dump Yard 1', 'Dump Yard 2', 'Dump Yard 3', 'Crusher', 'Plant 1', 'Plant 2', 'Stockpile', 'Warehouse', 'Site K', 'Site L'
];
const coords = [
  [28.6139, 77.2090], [19.0760, 72.8777], [12.9716, 77.5946], [17.3850, 78.4867], [13.0827, 80.2707],
  [22.5726, 88.3639], [18.5204, 73.8567], [23.0225, 72.5714], [26.9124, 75.7873], [26.8467, 80.9462]
];

function randomFrom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}
function randomPhone() {
  return `+91-${Math.floor(1000000000 + Math.random() * 9000000000)}`;
}
function randomVehicleNumber() {
  return `DL${Math.floor(Math.random()*10)}CA${Math.floor(1000+Math.random()*9000)}`;
}
function randomDateTime(start: Date, end: Date) {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toISOString().replace('T', ' ').slice(0, 16);
}

export const trips: Trip[] = Array.from({ length: 40 }, (_, i) => {
  const coord = coords[i % coords.length];
  const tripStart = randomDateTime(new Date(2024, 5, 1, 6, 0), new Date(2024, 5, 1, 12, 0));
  const tripEnd = randomDateTime(new Date(2024, 5, 1, 13, 0), new Date(2024, 5, 1, 20, 0));
  return {
    id: i + 1,
    vehicle_name: randomFrom(vehicleNames),
    vehicle_number: randomVehicleNumber(),
    operator_name: randomFrom(operatorNames),
    operator_number: randomPhone(),
    source_site: randomFrom(sites),
    destination: randomFrom(destinations),
    timing: `${Math.floor(Math.random() * 3 + 1)}h ${Math.floor(Math.random() * 60)}m`,
    trip_start: tripStart,
    trip_end: tripEnd,
    lat: coord[0] + Math.random() * 0.1,
    lng: coord[1] + Math.random() * 0.1,
  };
}); 