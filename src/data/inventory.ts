export interface InventoryBreakdown {
  name: string;
  value: number;
}

export interface Supplier {
  name: string;
  company: string;
  contact_number: string;
}

export interface InventoryItem {
  id: number;
  material: string;
  quantity: number;
  unit: 'kg' | 'ton';
  supply_date: string;
  estimate_time: string;
  delivered: boolean;
  breakdown: InventoryBreakdown[];
  supplier: Supplier;
  payment_status: 'Completed' | 'Pending';
}

const materials = [
  'Sand', 'Cement', 'Steel',
  //  'Bitumen', 'Bricks', 'Gravel', 'Lime', 'Aggregate', 'Clay', 'Wood', 'Glass',
  //   'Tiles', 'Paint', 'PVC', 'Copper', 'Aluminum', 'Iron', 'Concrete', 'Mortar',
  //    'Gypsum', 'Lead', 'Stone', 'Marble', 'Slate', 'Plastic', 'Rubber', 'Fiber',
  'Insulation', 'Wire', 'Pipe', 'Adhesive'
];
const units: ('kg' | 'ton')[] = ['kg', 'ton'];
const suppliers = ['Supplier A', 'Supplier B', 'Supplier C', 'Supplier X', 'Supplier Y', 'Supplier Z'];
const supplierCompanies = ['BuildCo', 'Constructix', 'MegaSupplies', 'InfraMart', 'MatPro', 'CiviLink'];
const supplierNames = ['Rajesh Kumar', 'Amit Singh', 'Priya Sharma', 'John Doe', 'Emily Clark', 'Michael Brown', 'Sonia Patel', 'David Lee'];

function randomDate(start: Date, end: Date) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    .toISOString().slice(0, 10);
}

function randomPhone() {
  return `+91-${Math.floor(1000000000 + Math.random() * 9000000000)}`;
}

export const inventory: InventoryItem[] = Array.from({ length: 100 }, (_, i) => {
  const material = materials[Math.floor(Math.random() * materials.length)];
  const unit = units[Math.floor(Math.random() * units.length)];
  const quantity = unit === 'kg' ? Math.floor(Math.random() * 9000 + 1000) : Math.floor(Math.random() * 90 + 10);
  const delivered = Math.random() > 0.3;
  const breakdownCount = Math.floor(Math.random() * 3) + 2;
  const breakdown: InventoryBreakdown[] = Array.from({ length: breakdownCount }, () => {
    return {
      name: suppliers[Math.floor(Math.random() * suppliers.length)],
      value: Math.floor(Math.random() * (unit === 'kg' ? 3000 : 30) + 10),
    };
  });
  const supplier: Supplier = {
    name: supplierNames[Math.floor(Math.random() * supplierNames.length)],
    company: supplierCompanies[Math.floor(Math.random() * supplierCompanies.length)],
    contact_number: randomPhone(),
  };
  const payment_status = Math.random() > 0.5 ? 'Completed' : 'Pending';
  return {
    id: i + 1,
    material,
    quantity,
    unit,
    supply_date: randomDate(new Date(2024, 0, 1), new Date(2024, 11, 31)),
    estimate_time: `${Math.ceil(Math.random() * 5)} days`,
    delivered,
    breakdown,
    supplier,
    payment_status,
  };
}); 