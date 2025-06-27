export interface PlantMaterial {
  name: string;
  inventory: number;
  supplier: string;
}

export interface Plant {
  id: number;
  name: string;
  address: string;
  lat: number;
  lng: number;
  supervisor_name: string;
  supervisor_contact: string;
  concrete_available: number;
  cement_available: number;
  sand_available: number;
  steel_available: number;
  materials: PlantMaterial[];
}

const plantNames = [
  'Ready Mix Plant', 'Batching Plant', 'Asphalt Plant', 'Crusher Plant', 'Block Plant', 'Precast Plant',
  'Concrete Plant', 'Aggregate Plant', 'Bitumen Plant', 'Mortar Plant', 'Fly Ash Plant', 'Pipe Plant',
  'Steel Fabrication Plant', 'Cement Plant', 'Sand Processing Plant', 'Gravel Plant', 'Stone Plant',
  'Tile Plant', 'Paver Plant', 'Gypsum Plant', 'Lime Plant', 'Iron Plant', 'Aluminum Plant', 'PVC Plant',
  'Paint Plant', 'Glass Plant', 'Wood Plant', 'Plastic Plant', 'Rubber Plant', 'Fiber Plant', 'Lead Plant'
];
const addresses = [
  'Sector 21, Gurgaon, Haryana', 'MIDC, Pune, Maharashtra', 'Bidadi, Bangalore, Karnataka', 'GIDC, Ahmedabad, Gujarat',
  'Taloja, Navi Mumbai, Maharashtra', 'Selaqui, Dehradun, Uttarakhand', 'Sricity, Andhra Pradesh', 'Manesar, Haryana',
  'Noida Phase 2, UP', 'Bhiwadi, Rajasthan', 'Howrah, West Bengal', 'Vapi, Gujarat', 'Chakan, Pune', 'Neemrana, Rajasthan',
  'Greater Noida, UP', 'Sriperumbudur, Tamil Nadu', 'Hosur, Tamil Nadu', 'Jamshedpur, Jharkhand', 'Nagpur, Maharashtra',
  'Indore, MP', 'Raipur, Chhattisgarh', 'Bhopal, MP', 'Kanpur, UP', 'Lucknow, UP', 'Patna, Bihar', 'Ranchi, Jharkhand',
  'Kolkata, WB', 'Hyderabad, Telangana', 'Chennai, Tamil Nadu', 'Bangalore, Karnataka'
];
const coords = [
  [28.4595, 77.0266], [18.5204, 73.8567], [12.8342, 77.4058], [23.0225, 72.5714], [19.0330, 73.0297],
  [30.3544, 77.9200], [13.5560, 79.9982], [28.3540, 76.9366], [28.5355, 77.3910], [28.2100, 76.8606],
  [22.5897, 88.3104], [20.3893, 72.9106], [18.7606, 73.7229], [27.9881, 76.3844], [28.4744, 77.5030],
  [12.9671, 79.9426], [12.7400, 77.8253], [22.8046, 86.2029], [21.1458, 79.0882], [22.7196, 75.8577],
  [21.2514, 81.6296], [23.2599, 77.4126], [26.4499, 80.3319], [26.8467, 80.9462], [25.5941, 85.1376],
  [23.3441, 85.3096], [22.5726, 88.3639], [17.3850, 78.4867], [13.0827, 80.2707], [12.9716, 77.5946]
];
const supervisorNames = [
  'Amit Singh', 'Rajesh Kumar', 'Priya Sharma', 'John Doe', 'Emily Clark', 'Michael Brown', 'Sonia Patel', 'David Lee',
  'Ravi Verma', 'Sunil Yadav', 'Anil Mehta', 'Deepak Saini', 'Vikram Chauhan', 'Suresh Rathi', 'Manoj Joshi', 'Karan Kapoor'
];
const suppliers = ['BuildCo', 'Constructix', 'MegaSupplies', 'InfraMart', 'MatPro', 'CiviLink', 'UltraCem', 'SteelMart', 'SandPro', 'CementHub'];
const materialNames = ['Concrete', 'Cement', 'Sand', 'Steel', 'Aggregate', 'Bitumen', 'Fly Ash', 'PVC', 'Iron', 'Paint'];

function randomFrom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}
function randomPhone() {
  return `+91-${Math.floor(1000000000 + Math.random() * 9000000000)}`;
}

export const plants: Plant[] = Array.from({ length: 30 }, (_, i) => {
  const materials: PlantMaterial[] = Array.from({ length: 4 + Math.floor(Math.random() * 3) }, () => {
    const name = randomFrom(materialNames);
    return {
      name,
      inventory: Math.floor(Math.random() * 200 + 50),
      supplier: randomFrom(suppliers),
    };
  });
  return {
    id: i + 1,
    name: plantNames[i],
    address: addresses[i],
    lat: coords[i][0],
    lng: coords[i][1],
    supervisor_name: randomFrom(supervisorNames),
    supervisor_contact: randomPhone(),
    concrete_available: Math.floor(Math.random() * 100 + 20),
    cement_available: Math.floor(Math.random() * 100 + 20),
    sand_available: Math.floor(Math.random() * 100 + 20),
    steel_available: Math.floor(Math.random() * 100 + 20),
    materials,
  };
}); 