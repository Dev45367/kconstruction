export interface Employee {
  id: number;
  emp_id: string;
  name: string;
  address: string;
  contact_number: string;
  profession: string;
  is_active: boolean;
  leave_request: string | null;
  salary: number;
  total_leaves: number;
  leaves_taken: number;
  last_leave_date: string | null;
}

const firstNames = ['John', 'Jane', 'Peter', 'Susan', 'Michael', 'Emily', 'Chris', 'Jessica'];
const lastNames = ['Smith', 'Doe', 'Jones', 'Williams', 'Brown', 'Davis', 'Miller', 'Wilson'];
const professions = ['Engineer', 'Supervisor', 'Accountant', 'Electrician', 'Plumber', 'Operator', 'Architect'];
const addresses = [
  '123 Main St, Springfield, IL, 62701',
  '456 Oak Ave, Metropolis, NY, 10001',
  '789 Pine Ln, Gotham, NJ, 07001',
  '101 Maple Dr, Star City, CA, 90210',
  '202 Birch Rd, Central City, MO, 63101',
  '303 Cedar Blvd, Coast City, FL, 33101',
  '404 Elm St, National City, TX, 75001',
  '505 Spruce Way, Ivy Town, CT, 06001',
  '606 Aspen Ct, Hub City, WA, 98101',
  'This is a very long address to demonstrate the show more and show less functionality, located at 707 Willow Creek Pass, in the beautiful city of Longview, State of Confusion, 99999',
];

export const employees: Employee[] = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  emp_id: `kc${i + 1}`,
  name: `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`,
  address: addresses[Math.floor(Math.random() * addresses.length)],
  contact_number: `(555) 555-${String(1000 + i).padStart(4, '0')}`,
  profession: professions[Math.floor(Math.random() * professions.length)],
  is_active: Math.random() > 0.15, // 85% are active
  leave_request: Math.random() > 0.7 ? `${Math.ceil(Math.random() * 5)} days` : null,
  salary: 20000 + Math.floor(Math.random() * 30000),
  total_leaves: 12,
  leaves_taken: Math.floor(Math.random() * 10),
  last_leave_date: Math.random() > 0.5 ? `2024-0${Math.ceil(Math.random() * 6)}-${String(Math.ceil(Math.random() * 28)).padStart(2, '0')}` : null,
})); 