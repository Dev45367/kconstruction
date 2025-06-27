// This file will contain the Employees page component.

"use client";
import React, { useState, useMemo } from 'react';
import { employees as allEmployees, Employee } from '@/data/employees';
import {
  CARD_BG,
  CARD_RADIUS,
  CARD_SHADOW,
  PRIMARY_COLOR,
  PRIMARY_COLOR_HOVER,
  PRIMARY_COLOR_TEXT,
} from '@/constants/theme';

const ITEMS_PER_PAGE = 20;

const AddressCell = ({ address }: { address: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongAddress = address.length > 40;

  return (
    <div>
      {isExpanded ? address : `${address.substring(0, 40)}${isLongAddress ? '...' : ''}`}
      {isLongAddress && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`ml-2 text-sm font-semibold ${PRIMARY_COLOR_TEXT} hover:underline`}
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
};

const LeaveModal = ({ employee, onClose, onApprove, onDecline }: {
  employee: Employee;
  onClose: () => void;
  onApprove: () => void;
  onDecline: () => void;
}) => {
  if (!employee) return null;
  // Extract leave days from leave_request string, e.g., 'Request for 3 days off'
  let leaveDays = null;
  if (employee.leave_request) {
    const match = employee.leave_request.match(/(\d+) days?/);
    if (match) leaveDays = match[1];
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
      <div className="bg-white rounded-lg shadow-lg p-6 min-w-[320px] max-w-[90vw]">
        <h2 className="text-lg font-bold mb-4">Leave Details for {employee.name}</h2>
        <ul className="mb-4 text-sm">
          <li><b>Total Leaves:</b> {employee.total_leaves}</li>
          <li><b>Leaves Taken:</b> {employee.leaves_taken}</li>
          <li><b>Last Leave Date:</b> {employee.last_leave_date || '--'}</li>
          <li><b>Remaining Leaves:</b> {employee.total_leaves - employee.leaves_taken}</li>
          {leaveDays && (
            <li><b>Current Leave Request:</b> {leaveDays} day{leaveDays !== '1' ? 's' : ''}</li>
          )}
        </ul>
        {employee.leave_request ? (
          <div className="flex gap-2 mb-2">
            <button onClick={onApprove} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Approve</button>
            <button onClick={onDecline} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Decline</button>
          </div>
        ) : (
          <div className="mb-2 text-gray-500">No current leave request.</div>
        )}
        <button onClick={onClose} className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">Close</button>
      </div>
    </div>
  );
};

export default function EmployeesPage() {
  const [filters, setFilters] = useState({
    search: '',
    is_active: 'all',
    leave_request: 'all',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [modalEmployee, setModalEmployee] = useState<Employee | null>(null);

  const filteredEmployees = useMemo(() => {
    let filtered = allEmployees;

    if (filters.search) {
      const search = filters.search.toLowerCase();
      filtered = filtered.filter(emp =>
        emp.name.toLowerCase().includes(search) ||
        emp.emp_id.toLowerCase().includes(search) ||
        emp.contact_number.toLowerCase().includes(search)
      );
    }
    if (filters.is_active !== 'all') {
      filtered = filtered.filter(emp => emp.is_active === (filters.is_active === 'active'));
    }
    if (filters.leave_request !== 'all') {
      filtered = filtered.filter(emp => (filters.leave_request === 'yes' ? emp.leave_request : !emp.leave_request));
    }

    return filtered;
  }, [filters]);

  const totalPages = Math.ceil(filteredEmployees.length / ITEMS_PER_PAGE);
  const paginatedEmployees = filteredEmployees.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
    setCurrentPage(1);
  };

  return (
    <div className="flex flex-col flex-1 min-h-0 h-full">
      {/* Filters */}
      <div className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 ${CARD_BG} ${CARD_RADIUS} ${CARD_SHADOW}`}>
        <input name="search" placeholder="Search by Name, Emp. ID, or Contact" onChange={handleFilterChange} className="p-2 border rounded-lg md:col-span-3 lg:col-span-3" />
        <select name="is_active" onChange={handleFilterChange} className="p-2 border rounded-lg ">
          <option value="all">All Statuses</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <select name="leave_request" onChange={handleFilterChange} className="p-2 border rounded-lg">
          <option value="all">All Leave Requests</option>
          <option value="yes">Has Request</option>
          <option value="no">No Request</option>
        </select>
      </div>

      {/* Employees Table */}
      <div className={`flex-1 min-h-0 h-full overflow-auto ${CARD_BG} ${CARD_RADIUS} ${CARD_SHADOW}`}>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">S.No</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Emp. ID</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Name</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Address</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Contact</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Profession</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Salary</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Status</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider">Leave Request</th>
            </tr>
          </thead>
          <tbody>
            {paginatedEmployees.map((emp, index) => (
              <tr key={emp.id} className="hover:bg-blue-50 transition">
                <td className="px-4 py-2 whitespace-nowrap">{(currentPage - 1) * ITEMS_PER_PAGE + index + 1}</td>
                <td className="px-4 py-2 whitespace-nowrap">{emp.emp_id}</td>
                <td className="px-4 py-2 whitespace-nowrap">{emp.name}</td>
                <td className="px-4 py-2"><AddressCell address={emp.address} /></td>
                <td className="px-4 py-2 whitespace-nowrap">{emp.contact_number}</td>
                <td className="px-4 py-2 whitespace-nowrap">{emp.profession}</td>
                <td className="px-4 py-2 whitespace-nowrap">₹{emp.salary.toLocaleString()}</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${emp.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {emp.is_active ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <button onClick={() => setModalEmployee(emp)} className="underline text-blue-600 hover:text-blue-800">
                    {emp.leave_request || '--'}
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

      {/* Leave Modal */}
      {modalEmployee && (
        <LeaveModal
          employee={modalEmployee}
          onClose={() => setModalEmployee(null)}
          onApprove={() => { alert('Leave Approved!'); setModalEmployee(null); }}
          onDecline={() => { alert('Leave Declined!'); setModalEmployee(null); }}
        />
      )}
    </div>
  );
} 