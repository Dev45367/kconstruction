(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/data/machinery.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "machinery": (()=>machinery)
});
const machineryNames = [
    'Tractor',
    'Concrete Mixer',
    'Excavator',
    'Bulldozer',
    'Crane',
    'Dump Truck',
    'Loader',
    'Backhoe',
    'Grader',
    'Compactor',
    'Forklift',
    'Paver',
    'Scraper',
    'Skid-Steer Loader',
    'Tower Crane',
    'Wheel Loader',
    'Asphalt Plant',
    'Batching Plant',
    'Road Roller',
    'Hydraulic Hammer'
];
const driverNames = [
    'Amit Singh',
    'Rajesh Kumar',
    'Priya Sharma',
    'John Doe',
    'Emily Clark',
    'Michael Brown',
    'Sonia Patel',
    'David Lee',
    'Ravi Verma',
    'Sunil Yadav',
    'Anil Mehta',
    'Deepak Saini',
    'Vikram Chauhan',
    'Suresh Rathi',
    'Manoj Joshi',
    'Karan Kapoor',
    'Chris Evans',
    'Robert Brown',
    'Linda White',
    'Patricia Miller'
];
const placesIndia = [
    'Delhi',
    'Mumbai',
    'Bangalore',
    'Hyderabad',
    'Chennai',
    'Kolkata',
    'Pune',
    'Ahmedabad',
    'Jaipur',
    'Lucknow'
];
const placesUS = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix',
    'Philadelphia',
    'San Antonio',
    'San Diego',
    'Dallas',
    'San Jose'
];
const placesCanada = [
    'Toronto',
    'Vancouver',
    'Montreal',
    'Calgary',
    'Ottawa',
    'Edmonton',
    'Winnipeg',
    'Quebec City',
    'Hamilton',
    'Kitchener'
];
const countries = [
    'India',
    'US',
    'Canada'
];
const coords = {
    India: [
        [
            28.6139,
            77.2090
        ],
        [
            19.0760,
            72.8777
        ],
        [
            12.9716,
            77.5946
        ],
        [
            17.3850,
            78.4867
        ],
        [
            13.0827,
            80.2707
        ],
        [
            22.5726,
            88.3639
        ],
        [
            18.5204,
            73.8567
        ],
        [
            23.0225,
            72.5714
        ],
        [
            26.9124,
            75.7873
        ],
        [
            26.8467,
            80.9462
        ]
    ],
    US: [
        [
            40.7128,
            -74.0060
        ],
        [
            34.0522,
            -118.2437
        ],
        [
            41.8781,
            -87.6298
        ],
        [
            29.7604,
            -95.3698
        ],
        [
            33.4484,
            -112.0740
        ],
        [
            39.9526,
            -75.1652
        ],
        [
            29.4241,
            -98.4936
        ],
        [
            32.7157,
            -117.1611
        ],
        [
            32.7767,
            -96.7970
        ],
        [
            37.3382,
            -121.8863
        ]
    ],
    Canada: [
        [
            43.6532,
            -79.3832
        ],
        [
            49.2827,
            -123.1207
        ],
        [
            45.5017,
            -73.5673
        ],
        [
            51.0447,
            -114.0719
        ],
        [
            45.4215,
            -75.6997
        ],
        [
            53.5461,
            -113.4938
        ],
        [
            49.8951,
            -97.1384
        ],
        [
            46.8139,
            -71.2080
        ],
        [
            43.2557,
            -79.8711
        ],
        [
            43.4516,
            -80.4925
        ]
    ]
};
function randomFrom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().slice(0, 10);
}
function randomPhone() {
    return `+91-${Math.floor(1000000000 + Math.random() * 9000000000)}`;
}
function randomVehicleNumber(country) {
    if (country === 'India') return `DL${Math.floor(Math.random() * 10)}CA${Math.floor(1000 + Math.random() * 9000)}`;
    if (country === 'US') return `${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${Math.floor(1000 + Math.random() * 9000)}`;
    return `CA${Math.floor(1000 + Math.random() * 9000)}`;
}
const machinery = Array.from({
    length: 50
}, (_, i)=>{
    const country = countries[Math.floor(i / 17)] || 'India';
    const places = country === 'India' ? placesIndia : country === 'US' ? placesUS : placesCanada;
    const coord = coords[country][i % 10];
    const name = randomFrom(machineryNames);
    const driver_name = randomFrom(driverNames);
    const last_visit_place = randomFrom(places);
    const destination = randomFrom(places);
    return {
        id: i + 1,
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
        country
    };
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/dashboard/machinery/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MachineryPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$machinery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/machinery.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/theme.ts [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const MapView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/components/MapView.tsx [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/MapView.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = MapView;
const ITEMS_PER_PAGE = 10;
function MachineryPage() {
    _s();
    const [selectedMachinery, setSelectedMachinery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tableRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const filteredMachinery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MachineryPage.useMemo[filteredMachinery]": ()=>{
            let filtered = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$machinery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["machinery"].filter({
                "MachineryPage.useMemo[filteredMachinery].filtered": (item)=>{
                    const searchLower = search.toLowerCase();
                    return item.name.toLowerCase().includes(searchLower) || item.vehicle_number.toLowerCase().includes(searchLower) || item.driver_name.toLowerCase().includes(searchLower) || item.driver_contact.toLowerCase().includes(searchLower);
                }
            }["MachineryPage.useMemo[filteredMachinery].filtered"]);
            if (selectedMachinery) {
                const idx = filtered.findIndex({
                    "MachineryPage.useMemo[filteredMachinery].idx": (m)=>m.id === selectedMachinery
                }["MachineryPage.useMemo[filteredMachinery].idx"]);
                if (idx > 0) {
                    const [selected] = filtered.splice(idx, 1);
                    filtered = [
                        selected,
                        ...filtered
                    ];
                }
            }
            return filtered;
        }
    }["MachineryPage.useMemo[filteredMachinery]"], [
        search,
        selectedMachinery
    ]);
    const totalPages = Math.ceil(filteredMachinery.length / ITEMS_PER_PAGE);
    const paginatedMachinery = filteredMachinery.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MachineryPage.useEffect": ()=>{
            if (selectedMachinery && mapRef.current) {
                mapRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        }
    }["MachineryPage.useEffect"], [
        selectedMachinery
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: mapRef,
                className: `w-full h-[400px] ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CARD_BG"]} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CARD_RADIUS"]} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CARD_SHADOW"]} p-2`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapView, {
                    projects: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$machinery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["machinery"].map((m)=>({
                            id: m.id,
                            name: m.name + ' (' + m.vehicle_number + ')',
                            address: m.last_visit_place + ', ' + m.country,
                            lat: m.lat,
                            lng: m.lng,
                            status: "Ongoing",
                            country: m.country
                        })),
                    selectedProject: selectedMachinery,
                    onMarkerClick: (id)=>{
                        setSelectedMachinery(id);
                        if (tableRef.current) tableRef.current.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/machinery/page.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/machinery/page.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-4 items-center mb-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: "Search by machinery, vehicle, driver, or contact...",
                    value: search,
                    onChange: (e)=>{
                        setSearch(e.target.value);
                        setCurrentPage(1);
                    },
                    className: "p-2 border rounded-lg min-w-[220px]"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/machinery/page.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/machinery/page.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: tableRef,
                className: `overflow-x-auto ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CARD_BG"]} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CARD_RADIUS"]} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CARD_SHADOW"]}`,
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
                                        fileName: "[project]/src/app/dashboard/machinery/page.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider",
                                        children: "Machinery Name"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/machinery/page.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider",
                                        children: "Vehicle Number"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/machinery/page.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider",
                                        children: "Driver Name"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/machinery/page.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider",
                                        children: "Driver Contact"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/machinery/page.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider",
                                        children: "Last Visit (Place & Date)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/machinery/page.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider",
                                        children: "Destination (Place & Date)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/machinery/page.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider",
                                        children: "Driver Salary"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/machinery/page.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/machinery/page.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/machinery/page.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: paginatedMachinery.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: `hover:bg-blue-50 transition cursor-pointer ${selectedMachinery === item.id ? 'bg-blue-100' : ''}`,
                                    onClick: ()=>{
                                        setSelectedMachinery(item.id);
                                        if (mapRef.current) mapRef.current.scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'center'
                                        });
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-2 whitespace-nowrap",
                                            children: (currentPage - 1) * ITEMS_PER_PAGE + idx + 1
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/machinery/page.tsx",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-2 whitespace-nowrap",
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/machinery/page.tsx",
                                            lineNumber: 115,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-2 whitespace-nowrap",
                                            children: item.vehicle_number
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/machinery/page.tsx",
                                            lineNumber: 116,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-2 whitespace-nowrap",
                                            children: item.driver_name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/machinery/page.tsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-2 whitespace-nowrap",
                                            children: item.driver_contact
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/machinery/page.tsx",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-2 whitespace-nowrap",
                                            children: [
                                                item.last_visit_place,
                                                " (",
                                                item.last_visit_date,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/machinery/page.tsx",
                                            lineNumber: 119,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-2 whitespace-nowrap",
                                            children: [
                                                item.destination,
                                                " (",
                                                item.destination_date,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/machinery/page.tsx",
                                            lineNumber: 120,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-2 whitespace-nowrap",
                                            children: [
                                                "₹",
                                                item.driver_salary.toLocaleString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/machinery/page.tsx",
                                            lineNumber: 121,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/src/app/dashboard/machinery/page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/machinery/page.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/machinery/page.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/machinery/page.tsx",
                lineNumber: 90,
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
                        fileName: "[project]/src/app/dashboard/machinery/page.tsx",
                        lineNumber: 129,
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
                        fileName: "[project]/src/app/dashboard/machinery/page.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCurrentPage((prev)=>Math.min(prev + 1, totalPages)),
                        disabled: currentPage === totalPages,
                        className: `px-4 py-2 rounded-lg font-semibold text-white ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRIMARY_COLOR"]} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRIMARY_COLOR_HOVER"]} disabled:bg-gray-400`,
                        children: "Next"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/machinery/page.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/machinery/page.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/machinery/page.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(MachineryPage, "DtRITMfGS3GEL5BAPv2pz46rcdc=");
_c1 = MachineryPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "MapView");
__turbopack_context__.k.register(_c1, "MachineryPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BailoutToCSR", {
    enumerable: true,
    get: function() {
        return BailoutToCSR;
    }
});
const _bailouttocsr = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
function BailoutToCSR(param) {
    let { reason, children } = param;
    if (typeof window === 'undefined') {
        throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(reason), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    return children;
} //# sourceMappingURL=dynamic-bailout-to-csr.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/encode-uri-path.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "encodeURIPath", {
    enumerable: true,
    get: function() {
        return encodeURIPath;
    }
});
function encodeURIPath(file) {
    return file.split('/').map((p)=>encodeURIComponent(p)).join('/');
} //# sourceMappingURL=encode-uri-path.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PreloadChunks", {
    enumerable: true,
    get: function() {
        return PreloadChunks;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _reactdom = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[project]/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
const _encodeuripath = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/encode-uri-path.js [app-client] (ecmascript)");
function PreloadChunks(param) {
    let { moduleIds } = param;
    // Early return in client compilation and only load requestStore on server side
    if (typeof window !== 'undefined') {
        return null;
    }
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (workStore === undefined) {
        return null;
    }
    const allFiles = [];
    // Search the current dynamic call unique key id in react loadable manifest,
    // and find the corresponding CSS files to preload
    if (workStore.reactLoadableManifest && moduleIds) {
        const manifest = workStore.reactLoadableManifest;
        for (const key of moduleIds){
            if (!manifest[key]) continue;
            const chunks = manifest[key].files;
            allFiles.push(...chunks);
        }
    }
    if (allFiles.length === 0) {
        return null;
    }
    const dplId = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : '';
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: allFiles.map((chunk)=>{
            const href = workStore.assetPrefix + "/_next/" + (0, _encodeuripath.encodeURIPath)(chunk) + dplId;
            const isCss = chunk.endsWith('.css');
            // If it's stylesheet we use `precedence` o help hoist with React Float.
            // For stylesheets we actually need to render the CSS because nothing else is going to do it so it needs to be part of the component tree.
            // The `preload` for stylesheet is not optional.
            if (isCss) {
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                    // @ts-ignore
                    precedence: "dynamic",
                    href: href,
                    rel: "stylesheet",
                    as: "style"
                }, chunk);
            } else {
                // If it's script we use ReactDOM.preload to preload the resources
                (0, _reactdom.preload)(href, {
                    as: 'script',
                    fetchPriority: 'low'
                });
                return null;
            }
        })
    });
} //# sourceMappingURL=preload-chunks.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _dynamicbailouttocsr = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-client] (ecmascript)");
const _preloadchunks = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-client] (ecmascript)");
// Normalize loader to return the module as form { default: Component } for `React.lazy`.
// Also for backward compatible since next/dynamic allows to resolve a component directly with loader
// Client component reference proxy need to be converted to a module.
function convertModule(mod) {
    // Check "default" prop before accessing it, as it could be client reference proxy that could break it reference.
    // Cases:
    // mod: { default: Component }
    // mod: Component
    // mod: { default: proxy(Component) }
    // mod: proxy(Component)
    const hasDefault = mod && 'default' in mod;
    return {
        default: hasDefault ? mod.default : mod
    };
}
const defaultOptions = {
    loader: ()=>Promise.resolve(convertModule(()=>null)),
    loading: null,
    ssr: true
};
function Loadable(options) {
    const opts = {
        ...defaultOptions,
        ...options
    };
    const Lazy = /*#__PURE__*/ (0, _react.lazy)(()=>opts.loader().then(convertModule));
    const Loading = opts.loading;
    function LoadableComponent(props) {
        const fallbackElement = Loading ? /*#__PURE__*/ (0, _jsxruntime.jsx)(Loading, {
            isLoading: true,
            pastDelay: true,
            error: null
        }) : null;
        // If it's non-SSR or provided a loading component, wrap it in a suspense boundary
        const hasSuspenseBoundary = !opts.ssr || !!opts.loading;
        const Wrap = hasSuspenseBoundary ? _react.Suspense : _react.Fragment;
        const wrapProps = hasSuspenseBoundary ? {
            fallback: fallbackElement
        } : {};
        const children = opts.ssr ? /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                typeof window === 'undefined' ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_preloadchunks.PreloadChunks, {
                    moduleIds: opts.modules
                }) : null,
                /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                    ...props
                })
            ]
        }) : /*#__PURE__*/ (0, _jsxruntime.jsx)(_dynamicbailouttocsr.BailoutToCSR, {
            reason: "next/dynamic",
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                ...props
            })
        });
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Wrap, {
            ...wrapProps,
            children: children
        });
    }
    LoadableComponent.displayName = 'LoadableComponent';
    return LoadableComponent;
}
const _default = Loadable; //# sourceMappingURL=loadable.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return dynamic;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _loadable = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-client] (ecmascript)"));
function dynamic(dynamicOptions, options) {
    var _mergedOptions_loadableGenerated;
    const loadableOptions = {};
    if (typeof dynamicOptions === 'function') {
        loadableOptions.loader = dynamicOptions;
    }
    const mergedOptions = {
        ...loadableOptions,
        ...options
    };
    return (0, _loadable.default)({
        ...mergedOptions,
        modules: (_mergedOptions_loadableGenerated = mergedOptions.loadableGenerated) == null ? void 0 : _mergedOptions_loadableGenerated.modules
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-dynamic.js.map
}}),
}]);

//# sourceMappingURL=_8cf46708._.js.map