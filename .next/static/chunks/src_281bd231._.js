(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/data/employees.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "employees": (()=>employees)
});
const firstNames = [
    'John',
    'Jane',
    'Peter',
    'Susan',
    'Michael',
    'Emily',
    'Chris',
    'Jessica'
];
const lastNames = [
    'Smith',
    'Doe',
    'Jones',
    'Williams',
    'Brown',
    'Davis',
    'Miller',
    'Wilson'
];
const professions = [
    'Engineer',
    'Supervisor',
    'Accountant',
    'Electrician',
    'Plumber',
    'Operator',
    'Architect'
];
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
    'This is a very long address to demonstrate the show more and show less functionality, located at 707 Willow Creek Pass, in the beautiful city of Longview, State of Confusion, 99999'
];
const employees = Array.from({
    length: 100
}, (_, i)=>({
        id: i + 1,
        emp_id: `kc${i + 1}`,
        name: `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`,
        address: addresses[Math.floor(Math.random() * addresses.length)],
        contact_number: `(555) 555-${String(1000 + i).padStart(4, '0')}`,
        profession: professions[Math.floor(Math.random() * professions.length)],
        is_active: Math.random() > 0.15,
        leave_request: Math.random() > 0.7 ? `${Math.ceil(Math.random() * 5)} days` : null,
        salary: 20000 + Math.floor(Math.random() * 30000),
        total_leaves: 12,
        leaves_taken: Math.floor(Math.random() * 10),
        last_leave_date: Math.random() > 0.5 ? `2024-0${Math.ceil(Math.random() * 6)}-${String(Math.ceil(Math.random() * 28)).padStart(2, '0')}` : null
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/dashboard/employees/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// This file will contain the Employees page component.
__turbopack_context__.s({
    "default": (()=>EmployeesPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$employees$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/employees.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/theme.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const ITEMS_PER_PAGE = 20;
const AddressCell = ({ address })=>{
    _s();
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isLongAddress = address.length > 40;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            isExpanded ? address : `${address.substring(0, 40)}${isLongAddress ? '...' : ''}`,
            isLongAddress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsExpanded(!isExpanded),
                className: `ml-2 text-sm font-semibold ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRIMARY_COLOR_TEXT"]} hover:underline`,
                children: isExpanded ? 'Show Less' : 'Show More'
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/employees/page.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/employees/page.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
};
_s(AddressCell, "FPNvbbHVlWWR4LKxxNntSxiIS38=");
_c = AddressCell;
const LeaveModal = ({ employee, onClose, onApprove, onDecline })=>{
    if (!employee) return null;
    // Extract leave days from leave_request string, e.g., 'Request for 3 days off'
    let leaveDays = null;
    if (employee.leave_request) {
        const match = employee.leave_request.match(/(\d+) days?/);
        if (match) leaveDays = match[1];
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center",
        style: {
            background: "rgba(0, 0, 0, 0.5)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow-lg p-6 min-w-[320px] max-w-[90vw]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-bold mb-4",
                    children: [
                        "Leave Details for ",
                        employee.name
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/employees/page.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "mb-4 text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "Total Leaves:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/employees/page.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this),
                                " ",
                                employee.total_leaves
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/employees/page.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "Leaves Taken:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/employees/page.tsx",
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, this),
                                " ",
                                employee.leaves_taken
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/employees/page.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "Last Leave Date:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/employees/page.tsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, this),
                                " ",
                                employee.last_leave_date || '--'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/employees/page.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "Remaining Leaves:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/employees/page.tsx",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, this),
                                " ",
                                employee.total_leaves - employee.leaves_taken
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/employees/page.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        leaveDays && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "Current Leave Request:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/employees/page.tsx",
                                    lineNumber: 59,
                                    columnNumber: 17
                                }, this),
                                " ",
                                leaveDays,
                                " day",
                                leaveDays !== '1' ? 's' : ''
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/employees/page.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/employees/page.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                employee.leave_request ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 mb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onApprove,
                            className: "px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700",
                            children: "Approve"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/employees/page.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onDecline,
                            className: "px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700",
                            children: "Decline"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/employees/page.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/employees/page.tsx",
                    lineNumber: 63,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-2 text-gray-500",
                    children: "No current leave request."
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/employees/page.tsx",
                    lineNumber: 68,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "px-3 py-1 rounded bg-gray-200 hover:bg-gray-300",
                    children: "Close"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/employees/page.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/employees/page.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/employees/page.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
};
_c1 = LeaveModal;
function EmployeesPage() {
    _s1();
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        search: '',
        is_active: 'all',
        leave_request: 'all'
    });
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [modalEmployee, setModalEmployee] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const filteredEmployees = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EmployeesPage.useMemo[filteredEmployees]": ()=>{
            let filtered = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$employees$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["employees"];
            if (filters.search) {
                const search = filters.search.toLowerCase();
                filtered = filtered.filter({
                    "EmployeesPage.useMemo[filteredEmployees]": (emp)=>emp.name.toLowerCase().includes(search) || emp.emp_id.toLowerCase().includes(search) || emp.contact_number.toLowerCase().includes(search)
                }["EmployeesPage.useMemo[filteredEmployees]"]);
            }
            if (filters.is_active !== 'all') {
                filtered = filtered.filter({
                    "EmployeesPage.useMemo[filteredEmployees]": (emp)=>emp.is_active === (filters.is_active === 'active')
                }["EmployeesPage.useMemo[filteredEmployees]"]);
            }
            if (filters.leave_request !== 'all') {
                filtered = filtered.filter({
                    "EmployeesPage.useMemo[filteredEmployees]": (emp)=>filters.leave_request === 'yes' ? emp.leave_request : !emp.leave_request
                }["EmployeesPage.useMemo[filteredEmployees]"]);
            }
            return filtered;
        }
    }["EmployeesPage.useMemo[filteredEmployees]"], [
        filters
    ]);
    const totalPages = Math.ceil(filteredEmployees.length / ITEMS_PER_PAGE);
    const paginatedEmployees = filteredEmployees.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
    const handleFilterChange = (e)=>{
        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        });
        setCurrentPage(1);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col flex-1 min-h-0 h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CARD_BG"]} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CARD_RADIUS"]} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CARD_SHADOW"]}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "search",
                        placeholder: "Search by Name, Emp. ID, or Contact",
                        onChange: handleFilterChange,
                        className: "p-2 border rounded-lg md:col-span-3 lg:col-span-3"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/employees/page.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        name: "is_active",
                        onChange: handleFilterChange,
                        className: "p-2 border rounded-lg ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "all",
                                children: "All Statuses"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/employees/page.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "active",
                                children: "Active"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/employees/page.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "inactive",
                                children: "Inactive"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/employees/page.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/employees/page.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        name: "leave_request",
                        onChange: handleFilterChange,
                        className: "p-2 border rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "all",
                                children: "All Leave Requests"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/employees/page.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "yes",
                                children: "Has Request"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/employees/page.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "no",
                                children: "No Request"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/employees/page.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/employees/page.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/employees/page.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex-1 min-h-0 h-full overflow-auto ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CARD_BG"]} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CARD_RADIUS"]} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CARD_SHADOW"]}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "min-w-full divide-y divide-gray-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "bg-gray-50",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider",
                                        children: "S.No"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/employees/page.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider",
                                        children: "Emp. ID"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/employees/page.tsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider",
                                        children: "Name"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/employees/page.tsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider",
                                        children: "Address"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/employees/page.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider",
                                        children: "Contact"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/employees/page.tsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider",
                                        children: "Profession"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/employees/page.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider",
                                        children: "Salary"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/employees/page.tsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider",
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/employees/page.tsx",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider",
                                        children: "Leave Request"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/employees/page.tsx",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/employees/page.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/employees/page.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: paginatedEmployees.map((emp, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "hover:bg-blue-50 transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-2 whitespace-nowrap",
                                            children: (currentPage - 1) * ITEMS_PER_PAGE + index + 1
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/employees/page.tsx",
                                            lineNumber: 153,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-2 whitespace-nowrap",
                                            children: emp.emp_id
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/employees/page.tsx",
                                            lineNumber: 154,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-2 whitespace-nowrap",
                                            children: emp.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/employees/page.tsx",
                                            lineNumber: 155,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AddressCell, {
                                                address: emp.address
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/employees/page.tsx",
                                                lineNumber: 156,
                                                columnNumber: 43
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/employees/page.tsx",
                                            lineNumber: 156,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-2 whitespace-nowrap",
                                            children: emp.contact_number
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/employees/page.tsx",
                                            lineNumber: 157,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-2 whitespace-nowrap",
                                            children: emp.profession
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/employees/page.tsx",
                                            lineNumber: 158,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-2 whitespace-nowrap",
                                            children: [
                                                "₹",
                                                emp.salary.toLocaleString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/employees/page.tsx",
                                            lineNumber: 159,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-2 whitespace-nowrap",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `px-2 py-1 rounded-full text-xs font-semibold ${emp.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`,
                                                children: emp.is_active ? 'Active' : 'Inactive'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/employees/page.tsx",
                                                lineNumber: 161,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/employees/page.tsx",
                                            lineNumber: 160,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-2 whitespace-nowrap",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setModalEmployee(emp),
                                                className: "underline text-blue-600 hover:text-blue-800",
                                                children: emp.leave_request || '--'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/employees/page.tsx",
                                                lineNumber: 166,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/employees/page.tsx",
                                            lineNumber: 165,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, emp.id, true, {
                                    fileName: "[project]/src/app/dashboard/employees/page.tsx",
                                    lineNumber: 152,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/employees/page.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/employees/page.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/employees/page.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCurrentPage((prev)=>Math.max(prev - 1, 1)),
                        disabled: currentPage === 1,
                        className: `px-4 py-2 rounded-lg font-semibold text-white ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRIMARY_COLOR"]} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRIMARY_COLOR_HOVER"]} disabled:bg-gray-400`,
                        children: "Previous"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/employees/page.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm",
                        children: [
                            "Page ",
                            currentPage,
                            " of ",
                            totalPages
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/employees/page.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCurrentPage((prev)=>Math.min(prev + 1, totalPages)),
                        disabled: currentPage === totalPages,
                        className: `px-4 py-2 rounded-lg font-semibold text-white ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRIMARY_COLOR"]} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRIMARY_COLOR_HOVER"]} disabled:bg-gray-400`,
                        children: "Next"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/employees/page.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/employees/page.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            modalEmployee && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LeaveModal, {
                employee: modalEmployee,
                onClose: ()=>setModalEmployee(null),
                onApprove: ()=>{
                    alert('Leave Approved!');
                    setModalEmployee(null);
                },
                onDecline: ()=>{
                    alert('Leave Declined!');
                    setModalEmployee(null);
                }
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/employees/page.tsx",
                lineNumber: 197,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/employees/page.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
_s1(EmployeesPage, "gKr5hFQLG9SUtt2pX9ToyjkLzss=");
_c2 = EmployeesPage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "AddressCell");
__turbopack_context__.k.register(_c1, "LeaveModal");
__turbopack_context__.k.register(_c2, "EmployeesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_281bd231._.js.map