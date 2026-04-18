const STORAGE_KEY = "soulution-print-os-state";
const LOGIN_STATE_KEY = "soulution-print-os-session";
const LOGIN_USER_KEY = "soulution-print-os-current-user";
const API_BASE = "/api";

const defaultData = {
  users: [
    { fullName: "Degenix Admin", loginId: "Degenix", password: "Admin1234", role: "Owner", departmentAccess: ["all"], status: "Active" }
  ],
  clients: [
    { name: "Apex Realty", company: "Apex Realty", phone: "+91 98200 11223", city: "Mumbai", balance: 18500, lastOrder: "Brochure Print" },
    { name: "Bean Street Cafe", company: "Bean Street Cafe", phone: "+91 98111 22558", city: "Pune", balance: 4200, lastOrder: "Table Tent Cards" },
    { name: "Navkar Packaging", company: "Navkar Packaging", phone: "+91 98989 66442", city: "Ahmedabad", balance: 51200, lastOrder: "Corrugated Box Labels" }
  ],
  products: [
    {
      productName: "Premium Visiting Cards",
      productSize: "3.5 x 2 inch",
      coverPaperType: "Art Card",
      paperGsm: 350,
      innerPaperType: "NA",
      innerPaperGsm: 0,
      purchasePrice: 180,
      salePrice: 280,
      laminationType: "Matte",
      foilingType: "Gold"
    },
    {
      productName: "Company Profile Booklet",
      productSize: "A4",
      coverPaperType: "Gloss Paper",
      paperGsm: 300,
      innerPaperType: "Maplitho",
      innerPaperGsm: 170,
      purchasePrice: 145,
      salePrice: 260,
      laminationType: "Gloss",
      foilingType: "None"
    },
    {
      productName: "Wedding Invitation",
      productSize: "8 x 6 inch",
      coverPaperType: "Textured Card",
      paperGsm: 320,
      innerPaperType: "Butter Paper",
      innerPaperGsm: 120,
      purchasePrice: 210,
      salePrice: 395,
      laminationType: "Velvet",
      foilingType: "Rose Gold"
    }
  ],
  vendors: [
    { name: "Pixel Papers", material: "Art Card & Matte", phone: "+91 99000 55443", city: "Surat", due: 24000 },
    { name: "Metro Media Supplies", material: "Flex & Ink", phone: "+91 98190 40211", city: "Mumbai", due: 11800 },
    { name: "Prime Adhesives", material: "Sticker Media", phone: "+91 98702 77841", city: "Delhi", due: 6800 }
  ],
  accounts: [
    { ledger: "Cash in Hand", type: "Asset", amount: 68500, note: "Daily collections" },
    { ledger: "HDFC Current Account", type: "Bank", amount: 124300, note: "Main operating account" },
    { ledger: "GST Payable", type: "Liability", amount: 28440, note: "Current tax cycle" }
  ],
  quotations: [
    {
      quoteNo: "QT-2401",
      client: "Apex Realty",
      workType: "Print",
      creativePackage: "",
      adDateFrom: "",
      adDateTo: "",
      festivalName: "",
      items: [
        {
          productName: "Sales Brochure",
          productSize: "A4",
          coverPaperType: "Gloss Paper",
          paperGsm: 300,
          innerPaperType: "Maplitho",
          innerPaperGsm: 170,
          laminationType: "Gloss",
          foilingType: "None",
          salePrice: 24500
        },
        {
          productName: "Pocket Folder",
          productSize: "A4",
          coverPaperType: "Art Card",
          paperGsm: 350,
          innerPaperType: "NA",
          innerPaperGsm: 0,
          laminationType: "Matte",
          foilingType: "Gold",
          salePrice: 11200
        }
      ],
      validityDate: "2026-04-22",
      gst: "Yes",
      advancePayment: 0,
      paymentMethod: "",
      status: "Sent"
    },
    {
      quoteNo: "QT-2402",
      client: "Bean Street Cafe",
      workType: "Print",
      creativePackage: "",
      adDateFrom: "",
      adDateTo: "",
      festivalName: "",
      items: [
        {
          productName: "Menu Cards",
          productSize: "A3 Fold",
          coverPaperType: "Art Card",
          paperGsm: 300,
          innerPaperType: "NA",
          innerPaperGsm: 0,
          laminationType: "Matte",
          foilingType: "None",
          salePrice: 8600
        }
      ],
      validityDate: "2026-04-18",
      gst: "No",
      advancePayment: 3500,
      paymentMethod: "UPI",
      status: "Approved"
    },
    {
      quoteNo: "QT-2403",
      client: "Navkar Packaging",
      workType: "Print",
      creativePackage: "",
      adDateFrom: "",
      adDateTo: "",
      festivalName: "",
      items: [
        {
          productName: "Label Roll",
          productSize: "Custom",
          coverPaperType: "Sticker Paper",
          paperGsm: 130,
          innerPaperType: "Release Liner",
          innerPaperGsm: 60,
          laminationType: "Gloss",
          foilingType: "Silver",
          salePrice: 39100
        },
        {
          productName: "Carton Sleeve",
          productSize: "Custom",
          coverPaperType: "Duplex Board",
          paperGsm: 400,
          innerPaperType: "NA",
          innerPaperGsm: 0,
          laminationType: "Gloss",
          foilingType: "None",
          salePrice: 22400
        }
      ],
      validityDate: "2026-04-20",
      gst: "Yes",
      advancePayment: 0,
      paymentMethod: "",
      status: "Revision"
    }
  ],
  digitalCreatives: [
    {
      trackingId: "DC-QT-2404",
      quoteNo: "QT-2404",
      client: "Sunrise Mobiles",
      creativePackage: "Ads Package",
      festivalName: "",
      adDateFrom: "2026-04-20",
      adDateTo: "2026-04-30",
      delivered: "No",
      deliveryDate: "",
      status: "Scheduled"
    }
  ],
  jobSheets: [
    {
      jobNo: "JOB-QT-2402",
      quoteNo: "QT-2402",
      client: "Bean Street Cafe",
      vendor: "Pixel Papers",
      productName: "Menu Cards",
      productSize: "A3 Fold",
      salePrice: 8600,
      advancePayment: 3500,
      paymentMethod: "UPI",
      status: "In Printing"
    }
  ],
  billing: [
    { invoiceNo: "INV-581", client: "Apex Realty", amount: 24500, dueDate: "2026-04-18", status: "Pending" },
    { invoiceNo: "INV-582", client: "Bean Street Cafe", amount: 8600, dueDate: "2026-04-12", status: "Paid" },
    { invoiceNo: "INV-583", client: "Navkar Packaging", amount: 39100, dueDate: "2026-04-20", status: "Partial" }
  ],
  delivery: [
    { challanNo: "DL-101", client: "Apex Realty", item: "Sales Brochure", dispatchDate: "2026-04-15", courier: "BlueDart", status: "Out for Delivery" },
    { challanNo: "DL-102", client: "Bean Street Cafe", item: "Menu Cards", dispatchDate: "2026-04-14", courier: "Self Delivery", status: "Delivered" },
    { challanNo: "DL-103", client: "Navkar Packaging", item: "Label Roll", dispatchDate: "2026-04-16", courier: "DTDC", status: "Packed" }
  ],
  payroll: [
    { employee: "Rakesh Kumar", department: "Printing", month: "April 2026", salary: 24000, bonus: 2000, status: "Paid" },
    { employee: "Neha Shah", department: "Sales", month: "April 2026", salary: 28000, bonus: 3500, status: "Pending" },
    { employee: "Imran Ali", department: "Accounts", month: "April 2026", salary: 26000, bonus: 1500, status: "Processed" }
  ],
  festivalCreativeLibrary: [
    { festivalName: "Diwali", designCount: 52, festivalDate: "2026-11-08" },
    { festivalName: "Navratri", designCount: 24, festivalDate: "2026-10-09" },
    { festivalName: "Christmas", designCount: 18, festivalDate: "2026-12-25" }
  ]
};

const appState = {
  isLoggedIn: false,
  currentView: "dashboard",
  currentUser: null,
  data: normalizeStoredData(structuredClone(defaultData)),
  isHydrated: false
};

const companyProfile = {
  name: "Soulution Print OS",
  tagline: "Printing Business Suite",
  address: "Main Production Unit, India",
  phone: "+91 90000 00000",
  email: "hello@soulutionprint.local",
  gstin: "27ABCDE1234F1Z5"
};

const viewConfig = {
  dashboard: { title: "Dashboard", section: "Business Overview", action: "Quick Entry" },
  clients: { title: "Clients", section: "Client Management", action: "Add Client" },
  products: { title: "Products", section: "Product Catalog", action: "Add Product" },
  vendors: { title: "Vendors", section: "Vendor Management", action: "Add Vendor" },
  accounts: { title: "Accounts", section: "Accounts Overview", action: "Add Ledger" },
  quotations: { title: "Quotations", section: "Quotation Tracker", action: "Create Quote" },
  digitalCreatives: { title: "Digital Creatives", section: "Ads And Festival Tracking", action: "Add Digital Creative" },
  jobsDashboard: { title: "Jobs Dashboard", section: "Production Overview", action: "View Jobs Dashboard" },
  jobSheets: { title: "Job Sheets", section: "Production Job Workflow", action: "Add Job" },
  billing: { title: "Billing", section: "Invoices & Collections", action: "Create Invoice" },
  delivery: { title: "Delivery", section: "Delivery Management", action: "Add Delivery" },
  payroll: { title: "Payroll", section: "Staff Payroll System", action: "Add Payroll" },
  users: { title: "Users", section: "User Management", action: "Add User" },
  dataManagement: { title: "Data Management", section: "Delete and Clean Records", action: "View Data Controls" }
};

const departmentAccessOptions = [
  { value: "clients", label: "Clients" },
  { value: "products", label: "Products" },
  { value: "vendors", label: "Vendors" },
  { value: "accounts", label: "Accounts" },
  { value: "quotations", label: "Quotations" },
  { value: "digitalCreatives", label: "Digital Creatives" },
  { value: "jobsDashboard", label: "Jobs Dashboard" },
  { value: "jobSheets", label: "Job Sheets" },
  { value: "billing", label: "Billing" },
  { value: "delivery", label: "Delivery" },
  { value: "payroll", label: "Payroll" },
  { value: "users", label: "Users" },
  { value: "dataManagement", label: "Data Management" }
];

const formConfig = {
  clients: [
    { name: "name", label: "Client Name", required: true },
    { name: "company", label: "Company", required: true },
    { name: "phone", label: "Phone" },
    { name: "city", label: "City" },
    { name: "balance", label: "Opening Balance", type: "number" },
    { name: "lastOrder", label: "Last Order" }
  ],
  products: [
    { name: "productName", label: "Product Name", required: true },
    { name: "productSize", label: "Product Size", required: true },
    { name: "coverPaperType", label: "Cover Paper Type", required: true },
    { name: "paperGsm", label: "Paper GSM", type: "number", required: true },
    { name: "innerPaperType", label: "Inner Paper Type", required: true },
    { name: "innerPaperGsm", label: "Inner Paper GSM", type: "number", required: true },
    { name: "purchasePrice", label: "Purchase Price", type: "number", required: true },
    { name: "salePrice", label: "Sale Price", type: "number", required: true },
    { name: "laminationType", label: "Lamination Type" },
    { name: "foilingType", label: "Foiling Type" }
  ],
  vendors: [
    { name: "name", label: "Vendor Name", required: true },
    { name: "material", label: "Material / Service" },
    { name: "phone", label: "Phone" },
    { name: "city", label: "City" },
    { name: "due", label: "Outstanding Due", type: "number" }
  ],
  accounts: [
    { name: "ledger", label: "Ledger Name", required: true },
    { name: "type", label: "Account Type" },
    { name: "amount", label: "Amount", type: "number" },
    { name: "note", label: "Note", full: true }
  ],
  quotations: [
    { name: "quoteNo", label: "Quote Number", required: true },
    { name: "client", label: "Client", required: true },
    { name: "workType", label: "Work Type", required: true },
    { name: "validityDate", label: "Validity Date", type: "date", required: true },
    { name: "creativePackage", label: "Creative Package" },
    { name: "adDateFrom", label: "Ad Date From", type: "date" },
    { name: "adDateTo", label: "Ad Date To", type: "date" },
    { name: "festivalName", label: "Festival Name" },
    { name: "productName", label: "Product Name", required: true },
    { name: "productSize", label: "Product Size", required: true },
    { name: "coverPaperType", label: "Cover Paper Type", required: true },
    { name: "paperGsm", label: "Paper GSM", type: "number", required: true },
    { name: "innerPaperType", label: "Inner Paper Type", required: true },
    { name: "innerPaperGsm", label: "Inner Paper GSM", type: "number", required: true },
    { name: "laminationType", label: "Lamination Type" },
    { name: "foilingType", label: "Foiling Type" },
    { name: "salePrice", label: "Sale Price", type: "number", required: true },
    { name: "gst", label: "GST", required: true },
    { name: "status", label: "Status", required: true }
  ],
  digitalCreatives: [
    { name: "trackingId", label: "Tracking ID", required: true },
    { name: "quoteNo", label: "Quote Number", required: true },
    { name: "client", label: "Client", required: true },
    { name: "creativePackage", label: "Creative Package", required: true },
    { name: "festivalName", label: "Festival Name" },
    { name: "adDateFrom", label: "Ad Date From", type: "date" },
    { name: "adDateTo", label: "Ad Date To", type: "date" },
    { name: "delivered", label: "Delivered", required: true },
    { name: "deliveryDate", label: "Delivery Date", type: "date" },
    { name: "status", label: "Status", required: true }
  ],
  jobSheets: [
    { name: "jobNo", label: "Job Number", required: true },
    { name: "quoteNo", label: "Quote Number", required: true },
    { name: "client", label: "Client", required: true },
    { name: "vendor", label: "Vendor" },
    { name: "productName", label: "Product Name", required: true },
    { name: "productSize", label: "Product Size" },
    { name: "salePrice", label: "Sale Price", type: "number" },
    { name: "advancePayment", label: "Advance Payment", type: "number" },
    { name: "paymentMethod", label: "Payment Method" },
    { name: "status", label: "Status", required: true }
  ],
  billing: [
    { name: "invoiceNo", label: "Invoice Number", required: true },
    { name: "client", label: "Client" },
    { name: "amount", label: "Amount", type: "number" },
    { name: "dueDate", label: "Due Date", type: "date" },
    { name: "status", label: "Status" }
  ],
  delivery: [
    { name: "challanNo", label: "Challan Number", required: true },
    { name: "client", label: "Client", required: true },
    { name: "item", label: "Item", required: true },
    { name: "dispatchDate", label: "Dispatch Date", type: "date", required: true },
    { name: "courier", label: "Courier / Driver", required: true },
    { name: "status", label: "Status", required: true }
  ],
  payroll: [
    { name: "employee", label: "Employee Name", required: true },
    { name: "department", label: "Department", required: true },
    { name: "month", label: "Salary Month", required: true },
    { name: "salary", label: "Salary", type: "number", required: true },
    { name: "bonus", label: "Bonus", type: "number" },
    { name: "status", label: "Status", required: true }
  ],
  users: [
    { name: "fullName", label: "Full Name", required: true },
    { name: "loginId", label: "Login ID", required: true },
    { name: "password", label: "Password", required: true },
    { name: "role", label: "Role", required: true },
    { name: "departmentAccess", label: "Department Access", required: true, full: true },
    { name: "status", label: "Status", required: true }
  ]
};

const loginScreen = document.getElementById("loginScreen");
const appShell = document.getElementById("appShell");
const loginForm = document.getElementById("loginForm");
const loginIdInput = document.getElementById("loginId");
const loginPasswordInput = document.getElementById("loginPassword");
const loginError = document.getElementById("loginError");
const pageTitle = document.getElementById("pageTitle");
const sectionTitle = document.getElementById("sectionTitle");
const viewRoot = document.getElementById("viewRoot");
const workspaceActions = document.getElementById("workspaceActions");
const heroStats = document.getElementById("heroStats");
const alertsList = document.getElementById("alertsList");
const sidebarSnapshot = document.getElementById("sidebarSnapshot");
const openModalBtn = document.getElementById("openModalBtn");
const logoutBtn = document.getElementById("logoutBtn");
const entryModal = document.getElementById("entryModal");
const modalTitle = document.getElementById("modalTitle");
const formFields = document.getElementById("formFields");
const entryForm = document.getElementById("entryForm");
const closeModalBtn = document.getElementById("closeModalBtn");
const cancelModalBtn = document.getElementById("cancelModalBtn");
const tabItems = document.querySelectorAll(".tab-item");
const deletableViews = ["clients", "products", "vendors", "accounts", "quotations", "digitalCreatives", "jobSheets", "billing", "delivery", "payroll", "users"];
const rowActionViews = ["clients", "products", "vendors", "accounts", "billing", "delivery", "payroll", "users", "digitalCreatives"];

document.addEventListener("DOMContentLoaded", async () => {
  await hydrateAppState();
  appState.isLoggedIn = localStorage.getItem(LOGIN_STATE_KEY) === "true";
  const storedLoginId = localStorage.getItem(LOGIN_USER_KEY);
  appState.currentUser = appState.data.users.find((user) => user.loginId === storedLoginId && user.status === "Active") || null;
  if (appState.isLoggedIn && !appState.currentUser) {
    appState.isLoggedIn = false;
    localStorage.removeItem(LOGIN_STATE_KEY);
    localStorage.removeItem(LOGIN_USER_KEY);
  }
  bindEvents();
  renderApp();
});

function bindEvents() {
  tabItems.forEach((button) => {
    button.addEventListener("click", () => {
      appState.currentView = button.dataset.view;
      renderApp();
    });
  });

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    authenticateUser();
  });

  openModalBtn.addEventListener("click", () => {
    if (appState.currentView === "dataManagement" || appState.currentView === "jobsDashboard") {
      return;
    }

    const targetView = appState.currentView === "dashboard" ? "clients" : appState.currentView;
    openForm(targetView);
  });

  logoutBtn.addEventListener("click", logout);

  entryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    saveEntry();
  });

  closeModalBtn.addEventListener("click", () => entryModal.close());
  cancelModalBtn.addEventListener("click", () => entryModal.close());
}

function renderApp() {
  if (!appState.isHydrated) {
    loginScreen.hidden = false;
    appShell.hidden = true;
    loginError.hidden = true;
    return;
  }

  loginScreen.hidden = appState.isLoggedIn;
  appShell.hidden = !appState.isLoggedIn;

  if (!appState.isLoggedIn) {
    loginForm.reset();
    return;
  }

  if (appState.currentUser) {
    appState.currentUser = appState.data.users.find((user) => user.loginId === appState.currentUser.loginId && user.status === "Active") || null;
    if (!appState.currentUser) {
      logout();
      return;
    }
  }

  updateExpiredQuotations();
  renderAllowedTabs();

  if (!getAccessibleViews().includes(appState.currentView)) {
    appState.currentView = "dashboard";
  }

  const current = viewConfig[appState.currentView];
  pageTitle.textContent = current.title;
  sectionTitle.textContent = current.section;
  openModalBtn.textContent = current.action;
  openModalBtn.disabled = appState.currentView === "dataManagement" || appState.currentView === "jobsDashboard";
  renderWorkspaceActions();

  tabItems.forEach((item) => item.classList.toggle("active", item.dataset.view === appState.currentView));

  renderHeroStats();
  renderSidebarSnapshot();
  renderAlerts();

  if (appState.currentView === "dashboard") {
    viewRoot.replaceChildren(renderDashboardView());
    return;
  }

  viewRoot.replaceChildren(renderTableView(appState.currentView));
}

async function hydrateAppState() {
  try {
    const response = await fetch(`${API_BASE}/state`, {
      headers: {
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`State request failed with ${response.status}`);
    }

    const payload = await response.json();
    appState.data = normalizeStoredData({ ...structuredClone(defaultData), ...payload });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState.data));
  } catch (error) {
    console.warn("Using local fallback data because backend state could not be loaded.", error);
    appState.data = loadStoredData();
  } finally {
    appState.isHydrated = true;
  }
}

function getAccessibleViews() {
  if (!appState.currentUser || appState.currentUser.role === "Owner" || appState.currentUser.departmentAccess.includes("all")) {
    return ["dashboard", ...Object.keys(viewConfig).filter((key) => key !== "dashboard")];
  }

  const allowed = new Set(["dashboard", ...appState.currentUser.departmentAccess]);
  return Object.keys(viewConfig).filter((key) => allowed.has(key));
}

function renderAllowedTabs() {
  const allowedViews = new Set(getAccessibleViews());
  tabItems.forEach((item) => {
    item.hidden = !allowedViews.has(item.dataset.view);
  });
}

function updateExpiredQuotations() {
  const today = startOfDay(new Date());
  let changed = false;

  appState.data.quotations.forEach((quote) => {
    if (quote.status === "Approved" || quote.status === "Cancelled") {
      return;
    }

    const validityDate = parseDateOnly(quote.validityDate);
    if (!validityDate) {
      return;
    }

    if (validityDate.getTime() < today.getTime()) {
      quote.status = "Cancelled";
      changed = true;
    }
  });

  if (changed) {
    persistData();
  }
}

function renderWorkspaceActions() {
  if (!workspaceActions) {
    return;
  }

  const exportable = appState.currentView !== "dataManagement";
  workspaceActions.innerHTML = exportable
    ? `
      <button class="ghost-btn" type="button" data-workspace-export="excel">Export Excel</button>
      <button class="ghost-btn" type="button" data-workspace-export="pdf">Export PDF</button>
    `
    : "";

  workspaceActions.querySelectorAll("[data-workspace-export]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.workspaceExport === "excel") {
        exportViewExcel(appState.currentView);
        return;
      }

      exportViewPdf(appState.currentView);
    });
  });
}

function renderHeroStats() {
  const totalReceivable = sumBy(appState.data.billing, "amount");
  const totalQuotes = appState.data.quotations.reduce((sum, quote) => sum + getQuotationTotal(quote), 0);
  const stockItems = appState.data.products.length;
  const payrollOutflow = sumBy(appState.data.payroll, "salary") + sumBy(appState.data.payroll, "bonus");
  const cards = [
    { label: "Active Users", value: appState.data.users.filter((item) => item.status === "Active").length },
    { label: "Quote Pipeline", value: formatCurrency(totalQuotes) },
    { label: "Invoice Value", value: formatCurrency(totalReceivable) },
    { label: "Deliveries Live", value: appState.data.delivery.length },
    { label: "Payroll Outflow", value: formatCurrency(payrollOutflow) },
    { label: "Material Stock", value: `${stockItems} units` }
  ];

  heroStats.innerHTML = cards.map((card) => `
    <article class="metric-card">
      <p class="eyebrow">${card.label}</p>
      <strong>${card.value}</strong>
    </article>
  `).join("");
}

function renderSidebarSnapshot() {
  const snapshot = [
    ["User Accounts", appState.data.users.length],
    ["Pending Quotes", appState.data.quotations.filter((item) => item.status !== "Approved").length],
    ["Job Sheets", appState.data.jobSheets.length],
    ["Deliveries Active", appState.data.delivery.filter((item) => item.status !== "Delivered").length],
    ["Payroll Pending", appState.data.payroll.filter((item) => item.status === "Pending").length],
    ["Collections Today", formatCurrency(18600)]
  ];

  sidebarSnapshot.innerHTML = snapshot.map(([label, value]) => `
    <div class="mini-metric">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `).join("");
}

function renderAlerts() {
  const alerts = [
    {
      title: "Invoice follow-up",
      body: "Apex Realty payment is due in 3 days. Send reminder with outstanding summary.",
      tag: "Due"
    },
    {
      title: "Stock reorder",
      body: "Vinyl Flex Banner raw stock is moving fast. Prepare vendor reorder this week.",
      tag: "Inventory"
    },
    {
      title: "Quote revision",
      body: "Navkar Packaging wants a revised label roll quotation with lamination option.",
      tag: "Sales"
    },
    {
      title: "Job follow-up",
      body: "Menu Cards job is in printing and needs the next production stage update.",
      tag: "Production"
    },
    {
      title: "Delivery dispatch",
      body: "DL-103 is packed and needs courier handoff before evening cutoff.",
      tag: "Delivery"
    }
  ];

  alerts.unshift(...getFestivalReminderAlerts());

  alertsList.innerHTML = alerts.map((alert) => `
    <article class="alert-card">
      <div>
        <strong>${alert.title}</strong>
        <p class="muted">${alert.body}</p>
      </div>
      <span class="status-pill ${alert.tag === "Due" ? "due" : alert.tag === "Inventory" || alert.tag === "Delivery" || alert.tag === "Production" ? "warn" : ""}">${alert.tag}</span>
    </article>
  `).join("");
}

function getFestivalReminderAlerts() {
  const today = startOfDay(new Date());

  return appState.data.festivalCreativeLibrary
    .map((festival) => {
      const festivalDate = parseDateOnly(festival.festivalDate);
      if (!festivalDate) {
        return null;
      }

      const daysUntilFestival = Math.round((festivalDate.getTime() - today.getTime()) / 86400000);
      if (daysUntilFestival < 0 || daysUntilFestival > 4) {
        return null;
      }

      const dayLabel = daysUntilFestival === 0
        ? "today"
        : daysUntilFestival === 1
          ? "tomorrow"
          : `in ${daysUntilFestival} days`;

      return {
        title: `${festival.festivalName} reminder`,
        body: `${festival.festivalName} is ${dayLabel} on ${formatDate(festival.festivalDate)}. Prepare festival creatives and client follow-ups now.`,
        tag: "Festival"
      };
    })
    .filter(Boolean);
}

function renderDashboardView() {
  const root = document.createElement("div");
  root.className = "cards-grid";

  const quickTabs = document.createElement("section");
  quickTabs.className = "list-card";
  quickTabs.innerHTML = `
    <p class="eyebrow">Segments</p>
    <h3>Open any business section</h3>
    <div class="tab-bar">
      ${Object.entries(viewConfig)
        .filter(([key]) => key !== "dashboard")
        .map(([key, value]) => `<button class="tab-item" type="button" data-jump="${key}">${value.title}</button>`)
        .join("")}
    </div>
  `;

  quickTabs.querySelectorAll("[data-jump]").forEach((button) => {
    button.addEventListener("click", () => {
      appState.currentView = button.dataset.jump;
      renderApp();
    });
  });

  const wrapper = document.createElement("div");
  wrapper.className = "dashboard-grid";
  wrapper.append(
    createSummaryCard("Monthly Revenue", formatCurrency(368400), "12 active invoices this month"),
    createSummaryCard("Quotation Conversion", "64%", "7 approvals out of 11 submitted"),
    createSummaryCard("Live Job Sheets", appState.data.jobSheets.length, "Approved quotations pushed into production workflow"),
    createSummaryCard("Vendor Payables", formatCurrency(sumBy(appState.data.vendors, "due")), "3 major suppliers with pending bills"),
    createSummaryCard("Receivables", formatCurrency(sumBy(appState.data.clients, "balance")), "Client outstanding to collect"),
    createSummaryCard("Dispatch Queue", appState.data.delivery.filter((item) => item.status !== "Delivered").length, "Orders waiting to move or confirm delivery"),
    createSummaryCard("Payroll This Month", formatCurrency(sumBy(appState.data.payroll, "salary") + sumBy(appState.data.payroll, "bonus")), "Salary plus bonus commitments for staff"),
    createSummaryCard("System Users", appState.data.users.length, "Owner and staff logins managed in one place")
  );

  const split = document.createElement("div");
  split.className = "split-grid";

  const left = document.createElement("section");
  left.className = "list-card";
  left.innerHTML = `
    <p class="eyebrow">Recent Jobs</p>
    <h3>Current print flow</h3>
    <div class="activity-list">
      ${[
        ["Apex Realty", "Brochure print approved, artwork sent to production.", "2h ago"],
        ["Bean Street Cafe", "Menu cards packed and ready for dispatch.", "5h ago"],
        ["Navkar Packaging", "Awaiting quote confirmation for label roll.", "Today"]
      ].map(([title, text, time]) => `
        <div class="activity-item">
          <div>
            <strong>${title}</strong>
            <p class="muted">${text}</p>
          </div>
          <span class="muted">${time}</span>
        </div>
      `).join("")}
    </div>
  `;

  const right = document.createElement("section");
  right.className = "info-card";
  right.innerHTML = `
    <p class="eyebrow">Business Health</p>
    <h3>What needs attention</h3>
    <div class="info-list">
      ${[
        ["Top client", "Navkar Packaging", formatCurrency(51200)],
        ["Fastest moving product", "Vinyl Flex Banner", "820 sq ft"],
        ["Largest payable", "Pixel Papers", formatCurrency(24000)],
        ["Best account balance", "HDFC Current Account", formatCurrency(124300)]
      ].map(([label, value, meta]) => `
        <div class="info-row">
          <div>
            <p class="kpi-label">${label}</p>
            <strong>${value}</strong>
          </div>
          <span class="muted">${meta}</span>
        </div>
      `).join("")}
    </div>
  `;

  split.append(left, right);
  root.append(quickTabs, wrapper, split);
  return root;
}

function renderTableView(viewName) {
  if (viewName === "accounts") {
    return renderAccountingView();
  }

  if (viewName === "digitalCreatives") {
    return renderDigitalCreativesView();
  }

  if (viewName === "jobsDashboard") {
    return renderJobsDashboardView();
  }

  if (viewName === "quotations") {
    return renderQuotationWorkflowView();
  }

  if (viewName === "jobSheets") {
    return renderJobSheetView();
  }

  if (viewName === "dataManagement") {
    return renderDataManagementView();
  }

  const records = appState.data[viewName];
  if (!records.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = `No ${viewName} added yet. Use the add button to create your first record.`;
    return empty;
  }

  const template = document.getElementById("tableTemplate");
  const fragment = template.content.cloneNode(true);
  const table = fragment.querySelector("table");
  const thead = table.querySelector("thead");
  const tbody = table.querySelector("tbody");
  const columns = Object.keys(records[0]);

  thead.innerHTML = `<tr>${columns.map((key) => `<th>${beautify(key)}</th>`).join("")}${rowActionViews.includes(viewName) ? '<th class="actions-cell">Actions</th>' : ""}</tr>`;
  tbody.innerHTML = records.map((record) => `
    <tr>
      ${columns.map((column) => `<td>${formatCell(record[column], column)}</td>`).join("")}
      ${rowActionViews.includes(viewName) ? `<td class="actions-cell">${renderRowActionMenu(viewName, record)}</td>` : ""}
    </tr>
  `).join("");

  fragment.querySelectorAll("[data-row-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.rowAction;
      const recordKey = button.dataset.recordKey;
      handleRowAction(viewName, recordKey, action);
      button.closest("details")?.removeAttribute("open");
    });
  });

  return fragment;
}

function renderAccountingView() {
  const snapshot = getAccountingSnapshot();
  const wrapper = document.createElement("div");
  wrapper.className = "cards-grid";

  const summary = document.createElement("div");
  summary.className = "dashboard-grid";
  summary.append(
    createSummaryCard("Cash & Bank", formatCurrency(snapshot.cashAndBankTotal), "Cash in hand and Indian bank balances"),
    createSummaryCard("Client Receivables", formatCurrency(snapshot.clientReceivableTotal), "Outstanding amount to collect from clients"),
    createSummaryCard("Vendor Payables", formatCurrency(snapshot.vendorPayableTotal), "Outstanding dues payable to vendors"),
    createSummaryCard("Staff Payables", formatCurrency(snapshot.staffPayableTotal), "Salary and bonus still pending for staff"),
    createSummaryCard("GST Payable", formatCurrency(snapshot.gstPayable), "Liability currently parked in ledgers"),
    createSummaryCard("Net Position", formatCurrency(snapshot.netPosition), "Receivables plus cash less vendor and staff dues")
  );

  const exportCard = document.createElement("section");
  exportCard.className = "list-card accounting-export-card";
  exportCard.innerHTML = `
    <div class="accounting-export-head">
      <div>
        <p class="eyebrow">Reports & Compliance</p>
        <h3>Export accounting reports</h3>
        <p class="muted">Download a full Excel-ready report or open a PDF-ready statement covering ledgers, receivables, payables, payroll, and GST snapshot.</p>
      </div>
      <div class="button-row">
        <button class="primary-btn" type="button" data-accounting-export="excel">Export Excel</button>
        <button class="ghost-btn" type="button" data-accounting-export="pdf">Export PDF</button>
      </div>
    </div>
  `;

  const sections = document.createElement("div");
  sections.className = "split-grid accounting-grid";
  sections.append(
    renderAccountingTableCard(
      "Primary Ledgers",
      "Cash, bank, assets, liabilities, and business control accounts",
      ["Ledger", "Type", "Amount", "Note"],
      snapshot.ledgerRows.map((row) => [row.ledger, row.type, formatCurrency(row.amount), row.note || "-"])
    ),
    renderAccountingTableCard(
      "Client Accounts",
      "Indian receivables register with billing and balance visibility",
      ["Client", "Company", "City", "Outstanding", "Invoice Value", "Collection Status"],
      snapshot.clientRows.map((row) => [
        row.name,
        row.company,
        row.city || "-",
        formatCurrency(row.balance),
        formatCurrency(row.invoiceValue),
        row.collectionStatus
      ])
    ),
    renderAccountingTableCard(
      "Vendor Accounts",
      "Supplier payables and production partner dues",
      ["Vendor", "Service", "City", "Outstanding", "Open Jobs", "Status"],
      snapshot.vendorRows.map((row) => [
        row.name,
        row.material || "-",
        row.city || "-",
        formatCurrency(row.due),
        row.openJobs,
        row.status
      ])
    ),
    renderAccountingTableCard(
      "Staff Accounts",
      "Payroll visibility for salaries, bonus, and amount still payable",
      ["Employee", "Department", "Last Month", "Gross Payroll", "Pending Amount", "Status"],
      snapshot.staffRows.map((row) => [
        row.employee,
        row.department,
        row.month || "-",
        formatCurrency(row.grossPayroll),
        formatCurrency(row.pendingAmount),
        row.status
      ])
    )
  );

  const taxCard = document.createElement("section");
  taxCard.className = "info-card";
  taxCard.innerHTML = `
    <p class="eyebrow">Indian Accounting Snapshot</p>
    <h3>Tax and working capital view</h3>
    <div class="info-list">
      <div class="info-row">
        <div>
          <p class="kpi-label">GST Payable Ledger</p>
          <strong>${formatCurrency(snapshot.gstPayable)}</strong>
        </div>
        <span class="muted">As available in current ledger data</span>
      </div>
      <div class="info-row">
        <div>
          <p class="kpi-label">Pending Client Collections</p>
          <strong>${formatCurrency(snapshot.pendingCollections)}</strong>
        </div>
        <span class="muted">${snapshot.pendingInvoices} invoices are pending or partial</span>
      </div>
      <div class="info-row">
        <div>
          <p class="kpi-label">Payroll Liability</p>
          <strong>${formatCurrency(snapshot.staffPayableTotal)}</strong>
        </div>
        <span class="muted">${snapshot.pendingStaffCount} staff records need salary closure</span>
      </div>
      <div class="info-row">
        <div>
          <p class="kpi-label">Working Capital</p>
          <strong>${formatCurrency(snapshot.workingCapital)}</strong>
        </div>
        <span class="muted">Receivables and cash less vendor dues</span>
      </div>
    </div>
  `;

  wrapper.append(summary, exportCard, sections, taxCard);

  wrapper.querySelectorAll("[data-accounting-export]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.accountingExport === "excel") {
        exportAccountingExcel(snapshot);
        return;
      }

      exportAccountingPdf(snapshot);
    });
  });

  return wrapper;
}

function renderAccountingTableCard(title, description, columns, rows) {
  const section = document.createElement("section");
  section.className = "list-card";
  section.innerHTML = `
    <p class="eyebrow">Accounts Desk</p>
    <h3>${title}</h3>
    <p class="muted">${description}</p>
    <div class="data-table-wrap accounting-table-wrap">
      <table class="data-table">
        <thead>
          <tr>${columns.map((column) => `<th>${column}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${rows.length
            ? rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")
            : `<tr><td colspan="${columns.length}">No records available.</td></tr>`}
        </tbody>
      </table>
    </div>
  `;
  return section;
}

function getAccountingSnapshot() {
  const cashAndBankLedgers = appState.data.accounts.filter((ledger) => {
    const ledgerType = String(ledger.type || "").toLowerCase();
    const ledgerName = String(ledger.ledger || "").toLowerCase();
    return ledgerType === "bank" || ledgerName.includes("cash");
  });
  const gstLedger = appState.data.accounts.find((ledger) => String(ledger.ledger).toLowerCase().includes("gst"));
  const pendingInvoices = appState.data.billing.filter((invoice) => ["Pending", "Partial"].includes(invoice.status));

  const clientRows = appState.data.clients.map((client) => {
    const relatedInvoices = appState.data.billing.filter((invoice) => invoice.client === client.name);
    const hasPending = relatedInvoices.some((invoice) => ["Pending", "Partial"].includes(invoice.status));
    return {
      name: client.name,
      company: client.company || client.name,
      city: client.city || "",
      balance: Number(client.balance || 0),
      invoiceValue: relatedInvoices.reduce((sum, invoice) => sum + Number(invoice.amount || 0), 0),
      collectionStatus: hasPending ? "Collection Pending" : "Clear / On Track"
    };
  });

  const vendorRows = appState.data.vendors.map((vendor) => ({
    name: vendor.name,
    material: vendor.material || "",
    city: vendor.city || "",
    due: Number(vendor.due || 0),
    openJobs: appState.data.jobSheets.filter((job) => job.vendor === vendor.name && job.status !== "Completed").length,
    status: Number(vendor.due || 0) > 0 ? "Payment Due" : "Clear"
  }));

  const staffMap = appState.data.payroll.reduce((acc, row) => {
    const key = row.employee;
    if (!acc[key]) {
      acc[key] = {
        employee: row.employee,
        department: row.department,
        month: row.month,
        grossPayroll: 0,
        pendingAmount: 0,
        status: row.status
      };
    }

    const gross = Number(row.salary || 0) + Number(row.bonus || 0);
    acc[key].grossPayroll += gross;
    if (row.status !== "Paid") {
      acc[key].pendingAmount += gross;
      acc[key].status = "Pending Clearance";
    }
    if (row.month) {
      acc[key].month = row.month;
    }
    return acc;
  }, {});

  const staffRows = Object.values(staffMap);

  const clientReceivableTotal = clientRows.reduce((sum, row) => sum + row.balance, 0);
  const vendorPayableTotal = vendorRows.reduce((sum, row) => sum + row.due, 0);
  const staffPayableTotal = staffRows.reduce((sum, row) => sum + row.pendingAmount, 0);
  const cashAndBankTotal = cashAndBankLedgers.reduce((sum, row) => sum + Number(row.amount || 0), 0);
  const gstPayable = Number(gstLedger?.amount || 0);
  const pendingCollections = pendingInvoices.reduce((sum, invoice) => sum + Number(invoice.amount || 0), 0);

  return {
    ledgerRows: appState.data.accounts.map((ledger) => ({
      ledger: ledger.ledger,
      type: ledger.type || "Ledger",
      amount: Number(ledger.amount || 0),
      note: ledger.note || ""
    })),
    clientRows,
    vendorRows,
    staffRows,
    cashAndBankTotal,
    clientReceivableTotal,
    vendorPayableTotal,
    staffPayableTotal,
    gstPayable,
    pendingCollections,
    pendingInvoices: pendingInvoices.length,
    pendingStaffCount: staffRows.filter((row) => row.pendingAmount > 0).length,
    workingCapital: cashAndBankTotal + clientReceivableTotal - vendorPayableTotal,
    netPosition: cashAndBankTotal + clientReceivableTotal - vendorPayableTotal - staffPayableTotal
  };
}

function renderJobsDashboardView() {
  const jobs = appState.data.jobSheets;
  const wrapper = document.createElement("div");
  wrapper.className = "cards-grid";

  const statusCards = document.createElement("div");
  statusCards.className = "dashboard-grid";
  statusCards.append(
    createSummaryCard("Vendor Pending", jobs.filter((job) => job.status === "Vendor Pending").length, "Jobs waiting for vendor assignment"),
    createSummaryCard("In Printing", jobs.filter((job) => job.status === "In Printing").length, "Jobs currently on press"),
    createSummaryCard("In Lamination", jobs.filter((job) => job.status === "In Lamination").length, "Jobs under finishing stage"),
    createSummaryCard("In Binding", jobs.filter((job) => job.status === "In Binding").length, "Jobs in binding and assembly"),
    createSummaryCard("Completed", jobs.filter((job) => job.status === "Completed").length, "Jobs finished and ready for dispatch"),
    createSummaryCard("Production Value", formatCurrency(sumBy(jobs, "salePrice")), "Current approved production pipeline")
  );

  const productionBoard = document.createElement("section");
  productionBoard.className = "list-card";
  productionBoard.innerHTML = `
    <p class="eyebrow">Stage Board</p>
    <h3>Current job movement</h3>
    <div class="info-list">
      ${["Vendor Pending", "In Printing", "In Lamination", "In Binding", "Completed"].map((stage) => `
        <div class="info-row">
          <div>
            <p class="kpi-label">${stage}</p>
            <strong>${jobs.filter((job) => job.status === stage).length} jobs</strong>
          </div>
          <span class="muted">${jobs.filter((job) => job.status === stage).map((job) => job.jobNo).slice(0, 3).join(", ") || "No jobs"}</span>
        </div>
      `).join("")}
    </div>
  `;

  const vendorLoad = document.createElement("section");
  vendorLoad.className = "info-card";
  const vendorGroups = jobs.reduce((acc, job) => {
    const key = job.vendor || "Unassigned";
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  vendorLoad.innerHTML = `
    <p class="eyebrow">Vendor Load</p>
    <h3>Assigned production partners</h3>
    <div class="info-list">
      ${Object.entries(vendorGroups).map(([vendor, count]) => `
        <div class="info-row">
          <div>
            <p class="kpi-label">${vendor}</p>
            <strong>${count} jobs</strong>
          </div>
          <span class="muted">Active workload</span>
        </div>
      `).join("")}
    </div>
  `;

  const recentJobs = document.createElement("section");
  recentJobs.className = "list-card";
  recentJobs.innerHTML = `
    <p class="eyebrow">Recent Jobs</p>
    <h3>Latest production entries</h3>
    <div class="activity-list">
      ${jobs.slice(0, 5).map((job) => `
        <div class="activity-item">
          <div>
            <strong>${job.jobNo}</strong>
            <p class="muted">${job.client} | ${job.productName}</p>
          </div>
          <span class="status-pill ${job.status === "Completed" ? "" : "warn"}">${job.status}</span>
        </div>
      `).join("")}
    </div>
  `;

  wrapper.append(statusCards, productionBoard, vendorLoad, recentJobs);
  return wrapper;
}

function renderQuotationWorkflowView() {
  const wrapper = document.createElement("div");
  wrapper.className = "workflow-list";

  appState.data.quotations.forEach((quote) => {
    const card = document.createElement("section");
    card.className = "workflow-card";
    const itemsMarkup = (quote.items || []).map((item, index) => `
      <article class="workflow-item">
        <div class="workflow-item-head">
          <div>
            <strong>${item.productName}</strong>
            <p class="muted">${item.productSize} | ${item.coverPaperType} ${item.paperGsm} GSM</p>
            <p class="muted">Inner: ${item.innerPaperType} ${item.innerPaperGsm} GSM | Lamination: ${item.laminationType || "-"} | Foiling: ${item.foilingType || "-"}</p>
          </div>
          <strong>${formatCurrency(item.salePrice)}</strong>
        </div>
        ${quote.status !== "Approved" && quote.status !== "Cancelled"
          ? `<button class="primary-btn" type="button" data-approve-quote="${quote.quoteNo}" data-approve-index="${index}">Approve This Item</button>`
          : ""
        }
      </article>
    `).join("");

    card.innerHTML = `
      <p class="eyebrow">Quotation</p>
      <div class="workflow-item-head">
        <h3>${quote.quoteNo}</h3>
        ${renderRowActionMenu("quotations", quote)}
      </div>
      <div class="workflow-meta">
        <span class="status-pill ${quote.status === "Approved" ? "" : quote.status === "Cancelled" ? "due" : "warn"}">${quote.status}</span>
        <span class="status-pill ${quote.gst === "Yes" ? "warn" : ""}">GST ${quote.gst}</span>
        <span class="status-pill">${quote.client}</span>
      </div>
      <p class="muted">Validity Date: ${formatDate(quote.validityDate)}${quote.status === "Cancelled" && isQuotationExpired(quote) ? " | Auto-cancelled after expiry" : ""}</p>
      <div class="quote-items">${itemsMarkup}</div>
      <div class="workflow-actions">
        ${quote.status !== "Cancelled" ? `<button class="danger-btn" type="button" data-cancel-quote="${quote.quoteNo}">Cancel Quotation</button>` : ""}
        ${quote.status === "Approved" ? `<button class="secondary-btn" type="button" data-open-jobsheet="${quote.quoteNo}">Open Job Sheet</button>` : ""}
      </div>
      ${quote.status === "Approved" ? `<p class="muted">Advance Payment: ${formatCurrency(quote.advancePayment || 0)} | Method: ${quote.paymentMethod || "-"}</p>` : ""}
    `;

    wrapper.append(card);
  });

  wrapper.querySelectorAll("[data-approve-quote]").forEach((button) => {
    button.addEventListener("click", () => approveQuotationItem(button.dataset.approveQuote, Number(button.dataset.approveIndex)));
  });

  wrapper.querySelectorAll("[data-row-action]").forEach((button) => {
    button.addEventListener("click", () => {
      handleRowAction("quotations", button.dataset.recordKey, button.dataset.rowAction);
      button.closest("details")?.removeAttribute("open");
    });
  });

  wrapper.querySelectorAll("[data-cancel-quote]").forEach((button) => {
    button.addEventListener("click", () => cancelQuotation(button.dataset.cancelQuote));
  });

  wrapper.querySelectorAll("[data-open-jobsheet]").forEach((button) => {
    button.addEventListener("click", () => {
      appState.currentView = "jobSheets";
      renderApp();
    });
  });

  return wrapper;
}

function renderJobSheetView() {
  if (!appState.data.jobSheets.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No job sheets yet. Approved quotations will appear here automatically.";
    return empty;
  }

  const wrapper = document.createElement("div");
  wrapper.className = "workflow-list";

  appState.data.jobSheets.forEach((job) => {
    const card = document.createElement("section");
    card.className = "workflow-card";
    card.innerHTML = `
      <p class="eyebrow">Job Sheet</p>
      <div class="workflow-item-head">
        <h3>${job.jobNo}</h3>
        ${renderRowActionMenu("jobSheets", job)}
      </div>
      <div class="workflow-meta">
        <span class="status-pill ${job.status === "Completed" ? "" : "warn"}">${job.status}</span>
        <span class="status-pill">${job.client}</span>
        <span class="status-pill ${job.vendor ? "" : "due"}">${job.vendor || "Vendor Pending"}</span>
      </div>
      <article class="workflow-item">
        <div class="workflow-item-head">
          <div>
            <strong>${job.productName}</strong>
            <p class="muted">${job.productSize || "-"} | Quote: ${job.quoteNo}</p>
            <p class="muted">Advance: ${formatCurrency(job.advancePayment || 0)} | Method: ${job.paymentMethod || "-"}</p>
          </div>
          <strong>${formatCurrency(job.salePrice || 0)}</strong>
        </div>
      </article>
      <div class="workflow-actions">
        <button class="secondary-btn" type="button" data-job-vendor="${job.jobNo}">Assign Vendor</button>
        <button class="secondary-btn" type="button" data-job-status="${job.jobNo}" data-next-status="In Printing">In Printing</button>
        <button class="secondary-btn" type="button" data-job-status="${job.jobNo}" data-next-status="In Lamination">In Lamination</button>
        <button class="secondary-btn" type="button" data-job-status="${job.jobNo}" data-next-status="In Binding">In Binding</button>
        <button class="primary-btn" type="button" data-job-status="${job.jobNo}" data-next-status="Completed">Completed</button>
      </div>
    `;
    wrapper.append(card);
  });

  wrapper.querySelectorAll("[data-job-vendor]").forEach((button) => {
    button.addEventListener("click", () => assignVendorToJob(button.dataset.jobVendor));
  });

  wrapper.querySelectorAll("[data-job-status]").forEach((button) => {
    button.addEventListener("click", () => updateJobStatus(button.dataset.jobStatus, button.dataset.nextStatus));
  });

  wrapper.querySelectorAll("[data-row-action]").forEach((button) => {
    button.addEventListener("click", () => {
      handleRowAction("jobSheets", button.dataset.recordKey, button.dataset.rowAction);
      button.closest("details")?.removeAttribute("open");
    });
  });

  return wrapper;
}

function renderRowActionMenu(viewName, record) {
  const recordKey = getRecordKey(viewName, record);
  return `
    <details class="row-menu">
      <summary aria-label="More actions">...</summary>
      <div class="row-menu-popover">
        <button class="row-menu-action" type="button" data-row-action="print" data-record-key="${recordKey}">Print</button>
        <button class="row-menu-action" type="button" data-row-action="pdf" data-record-key="${recordKey}">Share PDF</button>
        <button class="row-menu-action" type="button" data-row-action="thanks" data-record-key="${recordKey}">Thank You Message</button>
        <button class="row-menu-action" type="button" data-row-action="whatsapp" data-record-key="${recordKey}">WhatsApp</button>
      </div>
    </details>
  `;
}

function renderDataManagementView() {
  const wrapper = document.createElement("div");
  wrapper.className = "management-grid";

  deletableViews.forEach((viewName) => {
    const card = document.createElement("section");
    card.className = "management-card";
    const records = appState.data[viewName];
    const displayFields = records[0] ? Object.keys(records[0]).slice(0, 2) : [];

    card.innerHTML = `
      <p class="eyebrow">${viewConfig[viewName].title}</p>
      <h3>${records.length} records</h3>
      <div class="delete-list">
        ${records.length
          ? records.map((record, index) => `
              <div class="delete-row">
                <div>
                  <strong>${displayFields.map((field) => record[field]).filter(Boolean).join(" | ") || "Record"}</strong>
                  <p class="muted">Delete this entry from ${viewConfig[viewName].title.toLowerCase()}.</p>
                </div>
                <button class="danger-btn" type="button" data-delete-view="${viewName}" data-delete-index="${index}">Delete</button>
              </div>
            `).join("")
          : `<p class="muted">No records available in this section.</p>`
        }
      </div>
    `;

    wrapper.append(card);
  });

  wrapper.querySelectorAll("[data-delete-view]").forEach((button) => {
    button.addEventListener("click", () => {
      const viewName = button.dataset.deleteView;
      const index = Number(button.dataset.deleteIndex);
      deleteRecord(viewName, index);
    });
  });

  const uploadCard = document.createElement("section");
  uploadCard.className = "management-card";
  uploadCard.innerHTML = `
    <p class="eyebrow">Festival Library</p>
    <h3>Upload festival creative sheet</h3>
    <p class="muted">Upload a CSV exported from Excel with columns like festival name, design count, and festival date.</p>
    <div class="upload-panel">
      <input id="festivalCsvUpload" type="file" accept=".csv,text/csv">
      <p class="muted">Current library items: ${appState.data.festivalCreativeLibrary.length}</p>
    </div>
  `;
  wrapper.prepend(uploadCard);

  const uploadInput = uploadCard.querySelector("#festivalCsvUpload");
  uploadInput?.addEventListener("change", handleFestivalLibraryUpload);

  return wrapper;
}

function renderDigitalCreativesView() {
  const list = document.createElement("div");
  list.className = "workflow-list";

  if (!appState.data.digitalCreatives.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No digital creative packages yet. Approved digital creative quotations will appear here.";
    return empty;
  }

  appState.data.digitalCreatives.forEach((creative) => {
    const card = document.createElement("section");
    card.className = "workflow-card";
    const dateRange = creative.creativePackage === "Ads Package"
      ? `${formatDate(creative.adDateFrom)} to ${formatDate(creative.adDateTo)}`
      : (creative.festivalName || "-");
    const designInfo = creative.creativePackage === "Festival Package"
      ? getFestivalDesignCount(creative.festivalName)
      : "Date-wise ad tracking";

    card.innerHTML = `
      <p class="eyebrow">Digital Creative</p>
      <div class="workflow-item-head">
        <h3>${creative.trackingId}</h3>
        ${renderRowActionMenu("digitalCreatives", creative)}
      </div>
      <div class="workflow-meta">
        <span class="status-pill ${creative.delivered === "Yes" ? "" : "warn"}">${creative.status}</span>
        <span class="status-pill">${creative.client}</span>
        <span class="status-pill ${creative.creativePackage === "Festival Package" ? "warn" : ""}">${creative.creativePackage}</span>
      </div>
      <article class="workflow-item">
        <div class="workflow-item-head">
          <div>
            <strong>${creative.creativePackage}</strong>
            <p class="muted">${dateRange}</p>
            <p class="muted">${designInfo}</p>
          </div>
          <div>
            <strong>Delivered: ${creative.delivered}</strong>
            <p class="muted">${creative.deliveryDate ? `On ${formatDate(creative.deliveryDate)}` : "Pending delivery"}</p>
          </div>
        </div>
      </article>
      <div class="workflow-actions">
        <button class="secondary-btn" type="button" data-creative-delivered="${creative.trackingId}">Mark Delivered</button>
      </div>
    `;

    list.append(card);
  });

  list.querySelectorAll("[data-row-action]").forEach((button) => {
    button.addEventListener("click", () => {
      handleRowAction("digitalCreatives", button.dataset.recordKey, button.dataset.rowAction);
      button.closest("details")?.removeAttribute("open");
    });
  });

  list.querySelectorAll("[data-creative-delivered]").forEach((button) => {
    button.addEventListener("click", () => markDigitalCreativeDelivered(button.dataset.creativeDelivered));
  });

  return list;
}

function createSummaryCard(title, value, caption) {
  const card = document.createElement("article");
  card.className = "summary-card";
  card.innerHTML = `
    <p class="eyebrow">${title}</p>
    <strong>${value}</strong>
    <p class="muted">${caption}</p>
  `;
  return card;
}

function getRecordKey(viewName, record) {
  const keyMap = {
    quotations: "quoteNo",
    jobSheets: "jobNo",
    billing: "invoiceNo",
    delivery: "challanNo",
    users: "loginId",
    accounts: "ledger",
    payroll: "employee",
    clients: "name",
    products: "productName",
    vendors: "name"
  };

  const keyField = keyMap[viewName];
  return String(record[keyField] || "");
}

function openForm(viewName) {
  const fields = formConfig[viewName];
  if (!fields) {
    return;
  }

  modalTitle.textContent = viewConfig[viewName].action;
  formFields.innerHTML = fields.map((field) => `
    <div class="field ${field.full ? "full" : ""}" data-field-name="${field.name}">
      <label for="${field.name}">${field.label}</label>
      ${field.name === "status" && viewName === "users"
        ? `<select id="${field.name}" name="${field.name}" ${field.required ? "required" : ""}>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>`
        : field.name === "workType" && viewName === "quotations"
        ? `<select id="${field.name}" name="${field.name}" ${field.required ? "required" : ""}>
            <option value="Print">Print</option>
            <option value="Digital Creative">Digital Creative</option>
          </select>`
        : field.name === "creativePackage" && (viewName === "quotations" || viewName === "digitalCreatives")
        ? `<select id="${field.name}" name="${field.name}" ${field.required ? "required" : ""}>
            <option value="Ads Package">Ads Package</option>
            <option value="Festival Package">Festival Package</option>
          </select>`
        : field.name === "delivered" && viewName === "digitalCreatives"
        ? `<select id="${field.name}" name="${field.name}" ${field.required ? "required" : ""}>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>`
        : field.name === "gst" && viewName === "quotations"
        ? `<select id="${field.name}" name="${field.name}" ${field.required ? "required" : ""}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>`
        : field.name === "status" && viewName === "quotations"
        ? `<select id="${field.name}" name="${field.name}" ${field.required ? "required" : ""}>
            <option value="Sent">Sent</option>
            <option value="Approved">Approved</option>
            <option value="Revision">Revision</option>
            <option value="Cancelled">Cancelled</option>
          </select>`
        : field.name === "status" && viewName === "digitalCreatives"
        ? `<select id="${field.name}" name="${field.name}" ${field.required ? "required" : ""}>
            <option value="Scheduled">Scheduled</option>
            <option value="In Progress">In Progress</option>
            <option value="Delivered">Delivered</option>
          </select>`
        : field.name === "status" && viewName === "delivery"
        ? `<select id="${field.name}" name="${field.name}" ${field.required ? "required" : ""}>
            <option value="Packed">Packed</option>
            <option value="Out for Delivery">Out for Delivery</option>
            <option value="Delivered">Delivered</option>
          </select>`
        : field.name === "status" && viewName === "payroll"
        ? `<select id="${field.name}" name="${field.name}" ${field.required ? "required" : ""}>
            <option value="Pending">Pending</option>
            <option value="Processed">Processed</option>
            <option value="Paid">Paid</option>
          </select>`
        : field.name === "role" && viewName === "users"
        ? `<select id="${field.name}" name="${field.name}" ${field.required ? "required" : ""}>
            <option value="Owner">Owner</option>
            <option value="Manager">Manager</option>
            <option value="Sales">Sales</option>
            <option value="Accounts">Accounts</option>
            <option value="Operator">Operator</option>
          </select>`
        : field.name === "departmentAccess" && viewName === "users"
        ? `<div class="access-grid" id="departmentAccessGrid">
            ${departmentAccessOptions.map((option) => `
              <label class="access-option">
                <input type="checkbox" name="departmentAccess" value="${option.value}" ${option.value === "clients" || option.value === "quotations" ? "checked" : ""}>
                <span>${option.label}</span>
              </label>
            `).join("")}
          </div>
          <p class="muted">Select which departments this user can open after login.</p>`
        : field.name === "password" && viewName === "users"
        ? `<input id="${field.name}" name="${field.name}" type="password" ${field.required ? "required" : ""}>`
        : field.full
        ? `<textarea id="${field.name}" name="${field.name}" ${field.required ? "required" : ""}></textarea>`
        : `<input id="${field.name}" name="${field.name}" type="${field.type || "text"}" ${field.required ? "required" : ""}>`
      }
    </div>
  `).join("");

  entryForm.dataset.view = viewName;

  if (viewName === "quotations") {
    const workTypeSelect = formFields.querySelector("#workType");
    workTypeSelect?.addEventListener("change", () => updateQuotationFieldVisibility(workTypeSelect.value));
    updateQuotationFieldVisibility(workTypeSelect?.value || "Print");
  }

  if (viewName === "users") {
    const roleSelect = formFields.querySelector("#role");
    roleSelect?.addEventListener("change", () => syncUserDepartmentAccess(roleSelect.value));
    syncUserDepartmentAccess(roleSelect?.value || "Owner");
  }

  entryModal.showModal();
}

function updateQuotationFieldVisibility(workType) {
  const printFields = [
    "productName",
    "productSize",
    "coverPaperType",
    "paperGsm",
    "innerPaperType",
    "innerPaperGsm",
    "laminationType",
    "foilingType",
    "salePrice",
    "gst"
  ];
  const creativeFields = [
    "creativePackage",
    "adDateFrom",
    "adDateTo",
    "festivalName"
  ];

  const isDigitalCreative = workType === "Digital Creative";

  printFields.forEach((fieldName) => {
    const fieldWrap = formFields.querySelector(`[data-field-name="${fieldName}"]`);
    const input = fieldWrap?.querySelector("input, select, textarea");
    if (!fieldWrap || !input) {
      return;
    }

    fieldWrap.hidden = isDigitalCreative;
    input.required = !isDigitalCreative && ["productName", "productSize", "coverPaperType", "paperGsm", "innerPaperType", "innerPaperGsm", "salePrice", "gst"].includes(fieldName);
  });

  creativeFields.forEach((fieldName) => {
    const fieldWrap = formFields.querySelector(`[data-field-name="${fieldName}"]`);
    const input = fieldWrap?.querySelector("input, select, textarea");
    if (!fieldWrap || !input) {
      return;
    }

    fieldWrap.hidden = !isDigitalCreative;
    if (fieldName === "creativePackage") {
      input.required = isDigitalCreative;
    } else if (fieldName === "festivalName") {
      const creativePackage = formFields.querySelector("#creativePackage")?.value;
      input.required = isDigitalCreative && creativePackage === "Festival Package";
    } else {
      const creativePackage = formFields.querySelector("#creativePackage")?.value;
      input.required = isDigitalCreative && creativePackage === "Ads Package";
    }
  });

  const creativePackageSelect = formFields.querySelector("#creativePackage");
  if (creativePackageSelect) {
    creativePackageSelect.onchange = () => updateCreativePackageVisibility(creativePackageSelect.value);
  }
  updateCreativePackageVisibility(creativePackageSelect?.value || "Ads Package");
}

function updateCreativePackageVisibility(creativePackage) {
  const adDateFields = ["adDateFrom", "adDateTo"];
  const festivalField = "festivalName";

  adDateFields.forEach((fieldName) => {
    const fieldWrap = formFields.querySelector(`[data-field-name="${fieldName}"]`);
    const input = fieldWrap?.querySelector("input, select, textarea");
    if (!fieldWrap || !input || fieldWrap.hidden) {
      return;
    }

    const show = creativePackage === "Ads Package";
    fieldWrap.hidden = !show;
    input.required = show;
  });

  const festivalWrap = formFields.querySelector(`[data-field-name="${festivalField}"]`);
  const festivalInput = festivalWrap?.querySelector("input, select, textarea");
  if (festivalWrap && festivalInput && !festivalWrap.hidden) {
    const show = creativePackage === "Festival Package";
    festivalWrap.hidden = !show;
    festivalInput.required = show;
  }
}

function syncUserDepartmentAccess(role) {
  const checkboxes = formFields.querySelectorAll('input[name="departmentAccess"]');
  if (!checkboxes.length) {
    return;
  }

  const shouldLockAll = role === "Owner";
  checkboxes.forEach((checkbox) => {
    checkbox.checked = shouldLockAll || checkbox.checked;
    checkbox.disabled = shouldLockAll;
  });
}

function saveEntry() {
  const viewName = entryForm.dataset.view;

  if (viewName === "dataManagement") {
    entryModal.close();
    return;
  }

  const fields = formConfig[viewName];
  const formData = new FormData(entryForm);
  const record = {};

  fields.forEach((field) => {
    if (viewName === "users" && field.name === "departmentAccess") {
      const selectedDepartments = Array.from(formFields.querySelectorAll('input[name="departmentAccess"]:checked'))
        .map((input) => input.value);
      record[field.name] = selectedDepartments;
      return;
    }

    const rawValue = formData.get(field.name);
    record[field.name] = field.type === "number" ? Number(rawValue || 0) : rawValue;
  });

  if (viewName === "quotations") {
    if (record.workType === "Digital Creative") {
      record.items = [];
    } else {
      const lineItem = {
        productName: record.productName,
        productSize: record.productSize,
        coverPaperType: record.coverPaperType,
        paperGsm: record.paperGsm,
        innerPaperType: record.innerPaperType,
        innerPaperGsm: record.innerPaperGsm,
        laminationType: record.laminationType,
        foilingType: record.foilingType,
        salePrice: record.salePrice
      };

      record.items = [lineItem];
    }

    delete record.productName;
    delete record.productSize;
    delete record.coverPaperType;
    delete record.paperGsm;
    delete record.innerPaperType;
    delete record.innerPaperGsm;
    delete record.laminationType;
    delete record.foilingType;
    delete record.salePrice;
    record.validityDate = normalizeDateInput(record.validityDate);
    record.advancePayment = 0;
    record.paymentMethod = "";

    if (record.status === "Approved" && record.workType !== "Digital Creative") {
      const lineItem = record.items[0];
      appState.data.jobSheets.unshift({
        jobNo: `JOB-${record.quoteNo}`,
        quoteNo: record.quoteNo,
        client: record.client,
        vendor: "",
        productName: lineItem.productName,
        productSize: lineItem.productSize,
        salePrice: lineItem.salePrice,
        advancePayment: 0,
        paymentMethod: "",
        status: "Vendor Pending"
      });
    }

    if (record.status === "Approved" && record.workType === "Digital Creative") {
      appState.data.digitalCreatives.unshift(buildDigitalCreativeFromQuotation(record));
    }
  }

  if (viewName === "users") {
    record.departmentAccess = record.role === "Owner" ? ["all"] : record.departmentAccess;

    const loginExists = appState.data.users.some(
      (user) => user.loginId.toLowerCase() === String(record.loginId).trim().toLowerCase()
    );

    if (loginExists) {
      alert("This login ID already exists. Please choose a different one.");
      return;
    }

    if (!record.departmentAccess.length) {
      alert("Please select at least one department this user can see.");
      return;
    }
  }

  if (viewName === "delivery") {
    const challanExists = appState.data.delivery.some(
      (item) => item.challanNo.toLowerCase() === String(record.challanNo).trim().toLowerCase()
    );

    if (challanExists) {
      alert("This challan number already exists. Please use a different one.");
      return;
    }
  }

  appState.data[viewName].unshift(record);
  persistData();
  entryModal.close();
  entryForm.reset();

  if (appState.currentView === "dashboard") {
    appState.currentView = viewName;
  }

  renderApp();
}

function handleRowAction(viewName, recordKey, action) {
  const record = findRecordByKey(viewName, recordKey);
  if (!record) {
    return;
  }

  if (action === "print") {
    openPrintableWindow(viewName, record, false);
    return;
  }

  if (action === "pdf") {
    openPrintableWindow(viewName, record, true);
    return;
  }

  if (action === "thanks") {
    const message = buildThankYouMessage(viewName, record);
    copyText(message, "Thank you message copied.");
    return;
  }

  if (action === "whatsapp") {
    const message = buildWhatsAppMessage(viewName, record);
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }
}

function sumBy(list, key) {
  return list.reduce((sum, item) => sum + Number(item[key] || 0), 0);
}

function getQuotationTotal(quotation) {
  return (quotation.items || []).reduce((sum, item) => sum + Number(item.salePrice || 0), 0);
}

function isQuotationExpired(quotation) {
  if (!quotation?.validityDate) {
    return false;
  }

  const validityDate = parseDateOnly(quotation.validityDate);
  if (!validityDate) {
    return false;
  }

  return validityDate.getTime() < startOfDay(new Date()).getTime();
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);
}

function formatCell(value, column) {
  if (Array.isArray(value)) {
    return value.includes("all") ? "All Departments" : value.map((item) => beautify(item)).join(", ");
  }

  if (typeof value === "number" && ["amount", "balance", "due", "price", "salary", "bonus", "purchasePrice", "salePrice"].includes(column)) {
    return formatCurrency(value);
  }

  if (column === "status") {
    const className = value === "Approved" || value === "Paid" || value === "Active" || value === "Delivered" ? "" : value === "Pending" || value === "Revision" || value === "Partial" || value === "Processed" || value === "Out for Delivery" ? "warn" : "due";
    return `<span class="status-pill ${className}">${value}</span>`;
  }

  return value || "-";
}

function beautify(key) {
  return key.replace(/([A-Z])/g, " $1").replace(/^./, (match) => match.toUpperCase());
}

function findRecordByKey(viewName, recordKey) {
  return appState.data[viewName]?.find((record) => getRecordKey(viewName, record) === recordKey);
}

function buildDocumentTitle(viewName, record) {
  const prefixMap = {
    quotations: "Quotation",
    jobSheets: "Job Sheet",
    billing: "Invoice",
    delivery: "Delivery Challan",
    users: "User",
    accounts: "Ledger",
    payroll: "Payroll",
    clients: "Client",
    products: "Product",
    vendors: "Vendor"
  };

  return `${prefixMap[viewName] || "Record"} - ${getRecordKey(viewName, record)}`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function downloadFile(filename, content, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function exportAccountingExcel(snapshot = getAccountingSnapshot()) {
  const workbook = buildAccountingWorkbook(snapshot);
  downloadFile(
    `soulution-accounts-${new Date().toISOString().slice(0, 10)}.xls`,
    workbook,
    "application/vnd.ms-excel"
  );
}

function exportAccountingPdf(snapshot = getAccountingSnapshot()) {
  const popup = window.open("", "_blank", "width=1080,height=820");
  if (!popup) {
    alert("Please allow popups to export the PDF report.");
    return;
  }

  const reportDate = formatDate(new Date().toISOString().slice(0, 10));
  popup.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Accounting Report</title>
      <style>
        * { box-sizing: border-box; }
        body { font-family: Arial, sans-serif; margin: 0; padding: 28px; color: #26170f; background: #fffaf5; }
        .sheet { border: 1px solid #e7d8ca; border-radius: 24px; background: white; overflow: hidden; }
        .doc-head { padding: 28px 30px 18px; background: linear-gradient(135deg, #fff2e4, #fffaf5); border-bottom: 1px solid #ebdccd; display: flex; justify-content: space-between; gap: 24px; }
        .brand-mark { width: 52px; height: 52px; border-radius: 16px; display: inline-grid; place-items: center; background: linear-gradient(135deg, #c76822, #8d3b0d); color: white; font-weight: 700; font-size: 22px; margin-bottom: 12px; }
        .eyebrow { margin: 0 0 8px; color: #8a725f; letter-spacing: 0.12em; font-size: 11px; text-transform: uppercase; }
        h1, h2, h3, p { margin: 0; }
        h1 { font-size: 28px; margin-bottom: 6px; }
        h2 { font-size: 24px; margin-bottom: 6px; }
        .muted { color: #6a584c; line-height: 1.5; }
        .doc-body { padding: 28px 30px 30px; }
        .summary-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; margin-bottom: 24px; }
        .summary-card { border: 1px solid #ead9cb; border-radius: 18px; background: #fffaf5; padding: 16px; }
        .summary-card strong { display: block; margin-top: 6px; font-size: 18px; }
        .report-section { margin-top: 22px; }
        table { width: 100%; border-collapse: collapse; margin-top: 12px; }
        th, td { border: 1px solid #e2d2c3; padding: 10px 12px; text-align: left; vertical-align: top; }
        th { background: #fbf2ea; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #795f4c; }
        .note-box { margin-top: 22px; padding: 16px; border-radius: 16px; background: #fff6ee; border: 1px dashed #ddb99e; }
        @media print { body { background: white; padding: 0; } .sheet { border: 0; border-radius: 0; } }
      </style>
    </head>
    <body>
      ${renderAccountingReportDocument(snapshot, reportDate)}
    </body>
    </html>
  `);
  popup.document.close();
  popup.focus();
  popup.print();
}

function exportViewExcel(viewName) {
  if (viewName === "accounts") {
    exportAccountingExcel();
    return;
  }

  const report = getViewReportData(viewName);
  const workbook = buildGenericWorkbook(report);
  downloadFile(
    `soulution-${viewName}-report-${new Date().toISOString().slice(0, 10)}.xls`,
    workbook,
    "application/vnd.ms-excel"
  );
}

function exportViewPdf(viewName) {
  if (viewName === "accounts") {
    exportAccountingPdf();
    return;
  }

  const report = getViewReportData(viewName);
  const popup = window.open("", "_blank", "width=1080,height=820");
  if (!popup) {
    alert("Please allow popups to export the PDF report.");
    return;
  }

  popup.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>${report.title}</title>
      <style>
        * { box-sizing: border-box; }
        body { font-family: Arial, sans-serif; margin: 0; padding: 28px; color: #26170f; background: #fffaf5; }
        .sheet { border: 1px solid #e7d8ca; border-radius: 24px; background: white; overflow: hidden; }
        .doc-head { padding: 28px 30px 18px; background: linear-gradient(135deg, #fff2e4, #fffaf5); border-bottom: 1px solid #ebdccd; display: flex; justify-content: space-between; gap: 24px; }
        .brand-mark { width: 52px; height: 52px; border-radius: 16px; display: inline-grid; place-items: center; background: linear-gradient(135deg, #c76822, #8d3b0d); color: white; font-weight: 700; font-size: 22px; margin-bottom: 12px; }
        .eyebrow { margin: 0 0 8px; color: #8a725f; letter-spacing: 0.12em; font-size: 11px; text-transform: uppercase; }
        h1, h2, h3, p { margin: 0; }
        h1 { font-size: 28px; margin-bottom: 6px; }
        h2 { font-size: 24px; margin-bottom: 6px; }
        h3 { font-size: 18px; margin-bottom: 6px; }
        .muted { color: #6a584c; line-height: 1.5; }
        .doc-body { padding: 28px 30px 30px; }
        .summary-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; margin-bottom: 24px; }
        .summary-card { border: 1px solid #ead9cb; border-radius: 18px; background: #fffaf5; padding: 16px; }
        .summary-card strong { display: block; margin-top: 6px; font-size: 18px; }
        .report-section { margin-top: 22px; }
        table { width: 100%; border-collapse: collapse; margin-top: 12px; }
        th, td { border: 1px solid #e2d2c3; padding: 10px 12px; text-align: left; vertical-align: top; }
        th { background: #fbf2ea; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #795f4c; }
        .note-box { margin-top: 22px; padding: 16px; border-radius: 16px; background: #fff6ee; border: 1px dashed #ddb99e; }
        @media print { body { background: white; padding: 0; } .sheet { border: 0; border-radius: 0; } }
      </style>
    </head>
    <body>
      ${renderGenericReportDocument(report)}
    </body>
    </html>
  `);
  popup.document.close();
  popup.focus();
  popup.print();
}

function getViewReportData(viewName) {
  const reportDate = formatDate(new Date().toISOString().slice(0, 10));

  if (viewName === "dashboard") {
    return {
      title: "Dashboard Report",
      description: "Business summary generated from the live dashboard metrics.",
      reportDate,
      summary: [
        ["Active Users", String(appState.data.users.filter((item) => item.status === "Active").length)],
        ["Quote Pipeline", formatCurrency(appState.data.quotations.reduce((sum, quote) => sum + getQuotationTotal(quote), 0))],
        ["Invoice Value", formatCurrency(sumBy(appState.data.billing, "amount"))],
        ["Dispatch Queue", String(appState.data.delivery.filter((item) => item.status !== "Delivered").length)],
        ["Payroll Outflow", formatCurrency(sumBy(appState.data.payroll, "salary") + sumBy(appState.data.payroll, "bonus"))],
        ["Vendor Payables", formatCurrency(sumBy(appState.data.vendors, "due"))]
      ],
      sections: [
        {
          title: "Operations Snapshot",
          columns: ["Metric", "Value"],
          rows: [
            ["Clients", String(appState.data.clients.length)],
            ["Products", String(appState.data.products.length)],
            ["Approved Quotations", String(appState.data.quotations.filter((item) => item.status === "Approved").length)],
            ["Digital Creatives", String(appState.data.digitalCreatives.length)],
            ["Job Sheets", String(appState.data.jobSheets.length)],
            ["Billing Records", String(appState.data.billing.length)]
          ]
        }
      ]
    };
  }

  if (viewName === "jobsDashboard") {
    return {
      title: "Jobs Dashboard Report",
      description: "Production movement and vendor workload summary.",
      reportDate,
      summary: [
        ["Vendor Pending", String(appState.data.jobSheets.filter((job) => job.status === "Vendor Pending").length)],
        ["In Printing", String(appState.data.jobSheets.filter((job) => job.status === "In Printing").length)],
        ["In Lamination", String(appState.data.jobSheets.filter((job) => job.status === "In Lamination").length)],
        ["In Binding", String(appState.data.jobSheets.filter((job) => job.status === "In Binding").length)],
        ["Completed", String(appState.data.jobSheets.filter((job) => job.status === "Completed").length)],
        ["Production Value", formatCurrency(sumBy(appState.data.jobSheets, "salePrice"))]
      ],
      sections: [
        {
          title: "Job Sheet Register",
          columns: ["Job No", "Quote No", "Client", "Vendor", "Product", "Status", "Sale Price"],
          rows: appState.data.jobSheets.map((job) => [
            job.jobNo,
            job.quoteNo,
            job.client,
            job.vendor || "-",
            job.productName,
            job.status,
            formatCurrency(job.salePrice)
          ])
        }
      ]
    };
  }

  const records = getExportRowsForView(viewName);
  return {
    title: `${viewConfig[viewName]?.title || beautify(viewName)} Report`,
    description: `${viewConfig[viewName]?.section || beautify(viewName)} report generated from live app data.`,
    reportDate,
    summary: getSummaryForView(viewName, records),
    sections: [
      {
        title: `${viewConfig[viewName]?.title || beautify(viewName)} Register`,
        columns: records.columns,
        rows: records.rows
      }
    ]
  };
}

function getExportRowsForView(viewName) {
  if (viewName === "quotations") {
    return {
      columns: ["Quote No", "Client", "Work Type", "Package", "Items", "Total", "Validity Date", "GST", "Status", "Advance Payment"],
      rows: appState.data.quotations.map((quote) => [
        quote.quoteNo,
        quote.client,
        quote.workType || "Print",
        quote.creativePackage || "-",
        String((quote.items || []).length || (quote.workType === "Digital Creative" ? 1 : 0)),
        formatCurrency(getQuotationTotal(quote)),
        formatDate(quote.validityDate),
        quote.gst || "-",
        quote.status,
        formatCurrency(quote.advancePayment || 0)
      ])
    };
  }

  if (viewName === "digitalCreatives") {
    return {
      columns: ["Tracking ID", "Client", "Package", "Festival", "Ad Date From", "Ad Date To", "Delivered", "Delivery Date", "Status"],
      rows: appState.data.digitalCreatives.map((creative) => [
        creative.trackingId,
        creative.client,
        creative.creativePackage,
        creative.festivalName || "-",
        formatDate(creative.adDateFrom),
        formatDate(creative.adDateTo),
        creative.delivered,
        formatDate(creative.deliveryDate),
        creative.status
      ])
    };
  }

  if (viewName === "jobSheets") {
    return {
      columns: ["Job No", "Quote No", "Client", "Vendor", "Product", "Size", "Advance", "Method", "Status"],
      rows: appState.data.jobSheets.map((job) => [
        job.jobNo,
        job.quoteNo,
        job.client,
        job.vendor || "-",
        job.productName,
        job.productSize || "-",
        formatCurrency(job.advancePayment || 0),
        job.paymentMethod || "-",
        job.status
      ])
    };
  }

  if (viewName === "accounts") {
    const snapshot = getAccountingSnapshot();
    return {
      columns: ["Ledger", "Type", "Amount", "Note"],
      rows: snapshot.ledgerRows.map((row) => [row.ledger, row.type, formatCurrency(row.amount), row.note || "-"])
    };
  }

  const records = appState.data[viewName] || [];
  const columns = records.length ? Object.keys(records[0]) : [];
  return {
    columns: columns.map((column) => beautify(column)),
    rows: records.map((record) => columns.map((column) => formatExportCell(record[column], column)))
  };
}

function getSummaryForView(viewName, records) {
  if (viewName === "clients") {
    return [
      ["Total Clients", String(appState.data.clients.length)],
      ["Total Receivable", formatCurrency(sumBy(appState.data.clients, "balance"))]
    ];
  }

  if (viewName === "products") {
    return [
      ["Total Products", String(appState.data.products.length)],
      ["Average Sale Price", formatCurrency(appState.data.products.length ? Math.round(sumBy(appState.data.products, "salePrice") / appState.data.products.length) : 0)]
    ];
  }

  if (viewName === "vendors") {
    return [
      ["Total Vendors", String(appState.data.vendors.length)],
      ["Total Vendor Due", formatCurrency(sumBy(appState.data.vendors, "due"))]
    ];
  }

  if (viewName === "accounts") {
    const snapshot = getAccountingSnapshot();
    return [
      ["Cash & Bank", formatCurrency(snapshot.cashAndBankTotal)],
      ["GST Payable", formatCurrency(snapshot.gstPayable)],
      ["Net Position", formatCurrency(snapshot.netPosition)]
    ];
  }

  if (viewName === "quotations") {
    return [
      ["Total Quotations", String(appState.data.quotations.length)],
      ["Approved Quotations", String(appState.data.quotations.filter((quote) => quote.status === "Approved").length)],
      ["Quoted Value", formatCurrency(appState.data.quotations.reduce((sum, quote) => sum + getQuotationTotal(quote), 0))]
    ];
  }

  if (viewName === "digitalCreatives") {
    return [
      ["Total Creatives", String(appState.data.digitalCreatives.length)],
      ["Delivered", String(appState.data.digitalCreatives.filter((item) => item.delivered === "Yes").length)]
    ];
  }

  if (viewName === "jobSheets" || viewName === "jobsDashboard") {
    return [
      ["Open Jobs", String(appState.data.jobSheets.filter((job) => job.status !== "Completed").length)],
      ["Completed Jobs", String(appState.data.jobSheets.filter((job) => job.status === "Completed").length)]
    ];
  }

  if (viewName === "billing") {
    return [
      ["Invoices", String(appState.data.billing.length)],
      ["Invoice Value", formatCurrency(sumBy(appState.data.billing, "amount"))],
      ["Pending Collections", formatCurrency(appState.data.billing.filter((item) => item.status !== "Paid").reduce((sum, item) => sum + Number(item.amount || 0), 0))]
    ];
  }

  if (viewName === "delivery") {
    return [
      ["Total Dispatches", String(appState.data.delivery.length)],
      ["Delivered", String(appState.data.delivery.filter((item) => item.status === "Delivered").length)]
    ];
  }

  if (viewName === "payroll") {
    return [
      ["Payroll Records", String(appState.data.payroll.length)],
      ["Payroll Total", formatCurrency(sumBy(appState.data.payroll, "salary") + sumBy(appState.data.payroll, "bonus"))],
      ["Pending Payroll", String(appState.data.payroll.filter((item) => item.status !== "Paid").length)]
    ];
  }

  if (viewName === "users") {
    return [
      ["Total Users", String(appState.data.users.length)],
      ["Active Users", String(appState.data.users.filter((item) => item.status === "Active").length)]
    ];
  }

  return [
    ["Rows", String(records.rows.length)]
  ];
}

function formatExportCell(value, column) {
  if (Array.isArray(value)) {
    return value.includes("all") ? "All Departments" : value.map((item) => beautify(item)).join(", ");
  }

  if (typeof value === "number" && ["amount", "balance", "due", "price", "salary", "bonus", "purchasePrice", "salePrice"].includes(column)) {
    return formatCurrency(value);
  }

  if (column.toLowerCase().includes("date")) {
    return formatDate(value);
  }

  if (Array.isArray(value)) {
    return value.length ? JSON.stringify(value) : "-";
  }

  return String(value || "-");
}

function buildGenericWorkbook(report) {
  return `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
    <head>
      <meta charset="UTF-8">
      <style>
        table { border-collapse: collapse; width: 100%; margin-bottom: 24px; }
        th, td { border: 1px solid #c8b7a6; padding: 8px; text-align: left; }
        th { background: #f7e6d8; }
        .title { font-size: 24px; font-weight: 700; }
      </style>
    </head>
    <body>
      <p class="title">${escapeHtml(report.title)}</p>
      <p>${escapeHtml(report.description)}</p>
      <p>Generated on ${escapeHtml(report.reportDate)}</p>
      ${buildAccountingWorkbookTable("Summary", ["Metric", "Value"], report.summary)}
      ${report.sections.map((section) => buildAccountingWorkbookTable(section.title, section.columns, section.rows)).join("")}
    </body>
    </html>
  `;
}

function renderGenericReportDocument(report) {
  return `
    <section class="sheet">
      <div class="doc-head">
        <div>
          <div class="brand-mark">S</div>
          <p class="eyebrow">${companyProfile.tagline}</p>
          <h1>${companyProfile.name}</h1>
          <p class="muted">${companyProfile.address}<br>${companyProfile.phone} | ${companyProfile.email}<br>GSTIN: ${companyProfile.gstin}</p>
        </div>
        <div>
          <p class="eyebrow">Report Export</p>
          <h2>${report.title}</h2>
          <p class="muted">${report.description}<br>Generated on ${report.reportDate}</p>
        </div>
      </div>
      <div class="doc-body">
        <div class="summary-grid">
          ${report.summary.map(([label, value]) => `
            <div class="summary-card">
              <p class="eyebrow">${label}</p>
              <strong>${value}</strong>
            </div>
          `).join("")}
        </div>
        ${report.sections.map((section) => renderAccountingReportTable(section.title, section.columns, section.rows)).join("")}
        <div class="note-box">
          <strong>Report note</strong>
          <p class="muted">This report is generated from the currently saved browser data for the selected page in Soulution Print OS.</p>
        </div>
      </div>
    </section>
  `;
}

function buildAccountingWorkbook(snapshot) {
  return `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
    <head>
      <meta charset="UTF-8">
      <style>
        table { border-collapse: collapse; width: 100%; margin-bottom: 24px; }
        th, td { border: 1px solid #c8b7a6; padding: 8px; text-align: left; }
        th { background: #f7e6d8; }
        .title { font-size: 24px; font-weight: 700; }
      </style>
    </head>
    <body>
      <p class="title">${escapeHtml(companyProfile.name)} - Accounting Report</p>
      <p>Generated on ${escapeHtml(formatDate(new Date().toISOString().slice(0, 10)))}</p>
      ${buildAccountingWorkbookTable("Summary", ["Metric", "Value"], [
        ["Cash & Bank", formatCurrency(snapshot.cashAndBankTotal)],
        ["Client Receivables", formatCurrency(snapshot.clientReceivableTotal)],
        ["Vendor Payables", formatCurrency(snapshot.vendorPayableTotal)],
        ["Staff Payables", formatCurrency(snapshot.staffPayableTotal)],
        ["GST Payable", formatCurrency(snapshot.gstPayable)],
        ["Net Position", formatCurrency(snapshot.netPosition)]
      ])}
      ${buildAccountingWorkbookTable("Primary Ledgers", ["Ledger", "Type", "Amount", "Note"], snapshot.ledgerRows.map((row) => [
        row.ledger,
        row.type,
        formatCurrency(row.amount),
        row.note || "-"
      ]))}
      ${buildAccountingWorkbookTable("Client Accounts", ["Client", "Company", "City", "Outstanding", "Invoice Value", "Collection Status"], snapshot.clientRows.map((row) => [
        row.name,
        row.company,
        row.city || "-",
        formatCurrency(row.balance),
        formatCurrency(row.invoiceValue),
        row.collectionStatus
      ]))}
      ${buildAccountingWorkbookTable("Vendor Accounts", ["Vendor", "Service", "City", "Outstanding", "Open Jobs", "Status"], snapshot.vendorRows.map((row) => [
        row.name,
        row.material || "-",
        row.city || "-",
        formatCurrency(row.due),
        String(row.openJobs),
        row.status
      ]))}
      ${buildAccountingWorkbookTable("Staff Accounts", ["Employee", "Department", "Last Month", "Gross Payroll", "Pending Amount", "Status"], snapshot.staffRows.map((row) => [
        row.employee,
        row.department,
        row.month || "-",
        formatCurrency(row.grossPayroll),
        formatCurrency(row.pendingAmount),
        row.status
      ]))}
    </body>
    </html>
  `;
}

function buildAccountingWorkbookTable(title, columns, rows) {
  return `
    <h3>${escapeHtml(title)}</h3>
    <table>
      <thead>
        <tr>${columns.map((column) => `<th>${escapeHtml(column)}</th>`).join("")}</tr>
      </thead>
      <tbody>
        ${rows.length
          ? rows.map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("")
          : `<tr><td colspan="${columns.length}">No records available.</td></tr>`}
      </tbody>
    </table>
  `;
}

function renderAccountingReportDocument(snapshot, reportDate) {
  return `
    <section class="sheet">
      <div class="doc-head">
        <div>
          <div class="brand-mark">S</div>
          <p class="eyebrow">${companyProfile.tagline}</p>
          <h1>${companyProfile.name}</h1>
          <p class="muted">${companyProfile.address}<br>${companyProfile.phone} | ${companyProfile.email}<br>GSTIN: ${companyProfile.gstin}</p>
        </div>
        <div>
          <p class="eyebrow">Accounting PDF</p>
          <h2>Accounts Report</h2>
          <p class="muted">Prepared on ${reportDate}<br>Indian accounting overview for clients, vendors, staff, and ledgers.</p>
        </div>
      </div>
      <div class="doc-body">
        <div class="summary-grid">
          <div class="summary-card"><p class="eyebrow">Cash & Bank</p><strong>${formatCurrency(snapshot.cashAndBankTotal)}</strong></div>
          <div class="summary-card"><p class="eyebrow">Receivables</p><strong>${formatCurrency(snapshot.clientReceivableTotal)}</strong></div>
          <div class="summary-card"><p class="eyebrow">Payables</p><strong>${formatCurrency(snapshot.vendorPayableTotal + snapshot.staffPayableTotal)}</strong></div>
          <div class="summary-card"><p class="eyebrow">GST Payable</p><strong>${formatCurrency(snapshot.gstPayable)}</strong></div>
          <div class="summary-card"><p class="eyebrow">Working Capital</p><strong>${formatCurrency(snapshot.workingCapital)}</strong></div>
          <div class="summary-card"><p class="eyebrow">Net Position</p><strong>${formatCurrency(snapshot.netPosition)}</strong></div>
        </div>
        ${renderAccountingReportTable("Primary Ledgers", ["Ledger", "Type", "Amount", "Note"], snapshot.ledgerRows.map((row) => [
          row.ledger,
          row.type,
          formatCurrency(row.amount),
          row.note || "-"
        ]))}
        ${renderAccountingReportTable("Client Accounts", ["Client", "Company", "City", "Outstanding", "Invoice Value", "Collection Status"], snapshot.clientRows.map((row) => [
          row.name,
          row.company,
          row.city || "-",
          formatCurrency(row.balance),
          formatCurrency(row.invoiceValue),
          row.collectionStatus
        ]))}
        ${renderAccountingReportTable("Vendor Accounts", ["Vendor", "Service", "City", "Outstanding", "Open Jobs", "Status"], snapshot.vendorRows.map((row) => [
          row.name,
          row.material || "-",
          row.city || "-",
          formatCurrency(row.due),
          String(row.openJobs),
          row.status
        ]))}
        ${renderAccountingReportTable("Staff Accounts", ["Employee", "Department", "Last Month", "Gross Payroll", "Pending Amount", "Status"], snapshot.staffRows.map((row) => [
          row.employee,
          row.department,
          row.month || "-",
          formatCurrency(row.grossPayroll),
          formatCurrency(row.pendingAmount),
          row.status
        ]))}
        <div class="note-box">
          <strong>Report note</strong>
          <p class="muted">This statement is generated from the live app data currently available in Soulution Print OS. Use the Excel export for ledger working and the PDF export for sharing or printing.</p>
        </div>
      </div>
    </section>
  `;
}

function renderAccountingReportTable(title, columns, rows) {
  return `
    <section class="report-section">
      <p class="eyebrow">Accounts Register</p>
      <h3>${title}</h3>
      <table>
        <thead>
          <tr>${columns.map((column) => `<th>${column}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${rows.length
            ? rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")
            : `<tr><td colspan="${columns.length}">No records available.</td></tr>`}
        </tbody>
      </table>
    </section>
  `;
}

function openPrintableWindow(viewName, record, forPdf) {
  const popup = window.open("", "_blank", "width=900,height=700");
  if (!popup) {
    alert("Please allow popups to use this action.");
    return;
  }

  const title = buildDocumentTitle(viewName, record);
  const content = renderPrintableContent(viewName, record, forPdf);

  popup.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>${title}</title>
      <style>
        * { box-sizing: border-box; }
        body { font-family: Arial, sans-serif; margin: 0; padding: 28px; color: #26170f; background: #fffaf5; }
        .sheet { border: 1px solid #e7d8ca; border-radius: 24px; background: white; overflow: hidden; }
        .doc-head { padding: 28px 30px 18px; background: linear-gradient(135deg, #fff2e4, #fffaf5); border-bottom: 1px solid #ebdccd; display: flex; justify-content: space-between; gap: 24px; }
        .brand-mark { width: 52px; height: 52px; border-radius: 16px; display: inline-grid; place-items: center; background: linear-gradient(135deg, #c76822, #8d3b0d); color: white; font-weight: 700; font-size: 22px; margin-bottom: 12px; }
        .eyebrow { margin: 0 0 8px; color: #8a725f; letter-spacing: 0.12em; font-size: 11px; text-transform: uppercase; }
        h1, h2, h3, p { margin: 0; }
        h1 { font-size: 28px; margin-bottom: 6px; }
        h2 { font-size: 24px; margin-bottom: 6px; }
        .muted { color: #6a584c; line-height: 1.5; }
        .doc-body { padding: 28px 30px 30px; }
        .meta-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; margin-bottom: 22px; }
        .meta-card { padding: 16px; border: 1px solid #ead9cb; border-radius: 18px; background: #fffaf5; }
        .meta-card strong { display: block; margin-top: 6px; }
        table { width: 100%; border-collapse: collapse; margin-top: 18px; }
        th, td { border: 1px solid #e2d2c3; padding: 12px; text-align: left; vertical-align: top; }
        th { background: #fbf2ea; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #795f4c; }
        .totals { margin-top: 18px; margin-left: auto; width: min(320px, 100%); }
        .totals-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #ead9cb; }
        .totals-row.total { font-weight: 700; font-size: 18px; border-bottom: 0; padding-top: 14px; }
        .footer-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 26px; margin-top: 28px; }
        .signature { padding-top: 44px; border-bottom: 1px solid #bca28f; }
        .note-box { margin-top: 20px; padding: 16px; border-radius: 16px; background: #fff6ee; border: 1px dashed #ddb99e; }
        .simple-table th { width: 32%; }
        .simple-table td { color: #4a382c; }
        @media print { body { background: white; padding: 0; } .sheet { border: 0; border-radius: 0; } }
      </style>
    </head>
    <body>
      ${content}
    </body>
    </html>
  `);
  popup.document.close();
  popup.focus();
  popup.print();
}

function renderPrintableContent(viewName, record, forPdf) {
  if (viewName === "quotations") {
    return renderQuotationDocument(record, forPdf);
  }

  if (viewName === "billing") {
    return renderBillingDocument(record, forPdf);
  }

  const title = buildDocumentTitle(viewName, record);
  const rows = Object.entries(record).map(([key, value]) => `
    <tr>
      <th>${beautify(key)}</th>
      <td>${formatPrintableValue(key, value)}</td>
    </tr>
  `).join("");

  return `
    <section class="sheet">
      <div class="doc-head">
        <div>
          <div class="brand-mark">S</div>
          <p class="eyebrow">${companyProfile.tagline}</p>
          <h1>${companyProfile.name}</h1>
          <p class="muted">${companyProfile.address}<br>${companyProfile.phone} | ${companyProfile.email}</p>
        </div>
        <div>
          <p class="eyebrow">${forPdf ? "PDF Ready" : "Print View"}</p>
          <h2>${title}</h2>
        </div>
      </div>
      <div class="doc-body">
        <table class="simple-table">${rows}</table>
      </div>
    </section>
  `;
}

function renderQuotationDocument(record, forPdf) {
  const totalValue = getQuotationTotal(record);
  const taxableValue = record.gst === "Yes" ? Math.round(totalValue / 1.18) : totalValue;
  const gstValue = record.gst === "Yes" ? totalValue - taxableValue : 0;
  const itemRows = (record.items || []).map((item) => `
    <tr>
      <td>${item.productName}</td>
      <td>${item.productSize}</td>
      <td>${item.coverPaperType}</td>
      <td>${item.paperGsm}</td>
      <td>${item.innerPaperType}</td>
      <td>${item.innerPaperGsm}</td>
      <td>${item.laminationType || "-"}</td>
      <td>${item.foilingType || "-"}</td>
      <td>${formatCurrency(item.salePrice)}</td>
    </tr>
  `).join("");

  return `
    <section class="sheet">
      <div class="doc-head">
        <div>
          <div class="brand-mark">S</div>
          <p class="eyebrow">${companyProfile.tagline}</p>
          <h1>${companyProfile.name}</h1>
          <p class="muted">${companyProfile.address}<br>${companyProfile.phone} | ${companyProfile.email}<br>GSTIN: ${companyProfile.gstin}</p>
        </div>
        <div>
          <p class="eyebrow">${forPdf ? "Quotation PDF" : "Quotation Print"}</p>
          <h2>Quotation</h2>
          <p class="muted">Quote No: ${record.quoteNo}<br>Status: ${record.status}<br>Validity: ${formatDate(record.validityDate)}<br>GST: ${record.gst}</p>
        </div>
      </div>
      <div class="doc-body">
        <div class="meta-grid">
          <div class="meta-card">
            <p class="eyebrow">Prepared For</p>
            <strong>${record.client}</strong>
            <p class="muted">Quotation for custom print production and finishing.</p>
          </div>
          <div class="meta-card">
            <p class="eyebrow">Document Notes</p>
            <strong>${(record.items || [])[0]?.productName || "Quotation Item"}</strong>
            <p class="muted">Generated from Soulution Print OS for quick client sharing.</p>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Size</th>
              <th>Cover Paper</th>
              <th>Cover GSM</th>
              <th>Inner Paper</th>
              <th>Inner GSM</th>
              <th>Lamination</th>
              <th>Foiling</th>
              <th>Sale Price</th>
            </tr>
          </thead>
          <tbody>${itemRows}</tbody>
        </table>
        <div class="totals">
          <div class="totals-row"><span>Taxable Value</span><strong>${formatCurrency(taxableValue)}</strong></div>
          <div class="totals-row"><span>GST</span><strong>${record.gst === "Yes" ? formatCurrency(gstValue) : "Not Applied"}</strong></div>
          <div class="totals-row total"><span>Total Quoted Amount</span><strong>${formatCurrency(totalValue)}</strong></div>
        </div>
        <div class="note-box">
          <strong>Thank you for the opportunity.</strong>
          <p class="muted">This quotation is prepared for your review. Final production begins after approval of artwork, material, finish, and commercial terms.</p>
        </div>
        <div class="footer-grid">
          <div>
            <p class="eyebrow">Client Approval</p>
            <div class="signature"></div>
          </div>
          <div>
            <p class="eyebrow">Authorized Signatory</p>
            <div class="signature"></div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderBillingDocument(record, forPdf) {
  return `
    <section class="sheet">
      <div class="doc-head">
        <div>
          <div class="brand-mark">S</div>
          <p class="eyebrow">${companyProfile.tagline}</p>
          <h1>${companyProfile.name}</h1>
          <p class="muted">${companyProfile.address}<br>${companyProfile.phone} | ${companyProfile.email}<br>GSTIN: ${companyProfile.gstin}</p>
        </div>
        <div>
          <p class="eyebrow">${forPdf ? "Invoice PDF" : "Invoice Print"}</p>
          <h2>Tax Invoice</h2>
          <p class="muted">Invoice No: ${record.invoiceNo}<br>Status: ${record.status}<br>Due Date: ${formatDate(record.dueDate)}</p>
        </div>
      </div>
      <div class="doc-body">
        <div class="meta-grid">
          <div class="meta-card">
            <p class="eyebrow">Billed To</p>
            <strong>${record.client}</strong>
            <p class="muted">Thank you for choosing our printing and finishing services.</p>
          </div>
          <div class="meta-card">
            <p class="eyebrow">Payment Summary</p>
            <strong>${formatCurrency(record.amount)}</strong>
            <p class="muted">Please clear payment on or before the due date mentioned.</p>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Invoice No</th>
              <th>Client</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${record.invoiceNo}</td>
              <td>${record.client}</td>
              <td>${formatDate(record.dueDate)}</td>
              <td>${record.status}</td>
              <td>${formatCurrency(record.amount)}</td>
            </tr>
          </tbody>
        </table>
        <div class="totals">
          <div class="totals-row"><span>Subtotal</span><strong>${formatCurrency(record.amount)}</strong></div>
          <div class="totals-row"><span>GST / Tax</span><strong>As per invoice line item</strong></div>
          <div class="totals-row total"><span>Total Payable</span><strong>${formatCurrency(record.amount)}</strong></div>
        </div>
        <div class="note-box">
          <strong>Payment Note</strong>
          <p class="muted">Kindly share the payment confirmation once completed. We appreciate your continued business and trust.</p>
        </div>
        <div class="footer-grid">
          <div>
            <p class="eyebrow">Received By</p>
            <div class="signature"></div>
          </div>
          <div>
            <p class="eyebrow">Authorized Signatory</p>
            <div class="signature"></div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function formatPrintableValue(key, value) {
  if (typeof value === "number" && ["amount", "balance", "due", "price", "salary", "bonus", "purchasePrice", "salePrice"].includes(key)) {
    return formatCurrency(value);
  }

  if (key.toLowerCase().includes("date")) {
    return formatDate(value);
  }

  return value || "-";
}

function formatDate(value) {
  if (!value) {
    return "-";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(date);
}

function startOfDay(date) {
  const result = new Date(date);
  result.setHours(0, 0, 0, 0);
  return result;
}

function parseDateOnly(value) {
  if (!value) {
    return null;
  }

  const normalized = normalizeDateInput(value);
  if (!normalized) {
    return null;
  }

  const date = new Date(`${normalized}T00:00:00`);
  return Number.isNaN(date.getTime()) ? null : date;
}

function normalizeDateInput(value) {
  if (!value) {
    return "";
  }

  const raw = String(value).trim();
  if (!raw) {
    return "";
  }

  if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) {
    return raw;
  }

  if (/^\d{2}\/\d{2}\/\d{4}$/.test(raw)) {
    const [day, month, year] = raw.split("/");
    return `${year}-${month}-${day}`;
  }

  const date = new Date(raw);
  return Number.isNaN(date.getTime()) ? "" : date.toISOString().slice(0, 10);
}

function buildThankYouMessage(viewName, record) {
  if (viewName === "quotations") {
    return `Thank you ${record.client} for reviewing quotation ${record.quoteNo} for ${(record.items || [])[0]?.productName || "your print requirement"}. This quotation is valid until ${formatDate(record.validityDate)}. We appreciate the opportunity to work on your project.`;
  }

  if (viewName === "billing") {
    return `Thank you ${record.client} for your business. Invoice ${record.invoiceNo} has been prepared for ${formatCurrency(record.amount)}. We appreciate your trust in our printing service.`;
  }

  return `Thank you for choosing Soulution Print OS. Your ${viewName} record ${getRecordKey(viewName, record)} is ready.`;
}

function buildWhatsAppMessage(viewName, record) {
  if (viewName === "quotations") {
    return `Hello ${record.client}, quotation ${record.quoteNo} is ready. Total: ${formatCurrency(getQuotationTotal(record))}. Valid until: ${formatDate(record.validityDate)}. GST: ${record.gst}.`;
  }

  if (viewName === "billing") {
    return `Hello ${record.client}, invoice ${record.invoiceNo} is ready for ${formatCurrency(record.amount)}. Due date: ${record.dueDate}. Thank you for your business.`;
  }

  if (viewName === "delivery") {
    return `Hello ${record.client}, your order ${record.challanNo} for ${record.item} is currently ${record.status}. Courier: ${record.courier}.`;
  }

  return `${buildDocumentTitle(viewName, record)} is ready in Soulution Print OS.`;
}

function copyText(text, successMessage) {
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text)
      .then(() => alert(successMessage))
      .catch(() => alert(text));
    return;
  }

  alert(text);
}

function buildDigitalCreativeFromQuotation(quotation) {
  return {
    trackingId: `DC-${quotation.quoteNo}`,
    quoteNo: quotation.quoteNo,
    client: quotation.client,
    creativePackage: quotation.creativePackage || "Ads Package",
    festivalName: quotation.festivalName || "",
    adDateFrom: quotation.adDateFrom || "",
    adDateTo: quotation.adDateTo || "",
    delivered: "No",
    deliveryDate: "",
    status: "Scheduled"
  };
}

function markDigitalCreativeDelivered(trackingId) {
  const creative = appState.data.digitalCreatives.find((item) => item.trackingId === trackingId);
  if (!creative) {
    return;
  }

  creative.delivered = "Yes";
  creative.deliveryDate = new Date().toISOString().slice(0, 10);
  creative.status = "Delivered";
  persistData();
  renderApp();
}

function getFestivalDesignCount(festivalName) {
  if (!festivalName) {
    return "Festival not selected";
  }

  const match = appState.data.festivalCreativeLibrary.find(
    (item) => item.festivalName.toLowerCase() === festivalName.toLowerCase()
  );
  return match ? `${match.designCount} designs from library` : "Festival designs not uploaded yet";
}

function handleFestivalLibraryUpload(event) {
  const file = event.target.files?.[0];
  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    const text = String(reader.result || "");
    const rows = text.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
    if (rows.length < 2) {
      alert("Please upload a CSV with festival data rows.");
      return;
    }

    const parsed = rows.slice(1).map((line) => {
      const [festivalName, designCount, festivalDate] = line.split(",").map((cell) => cell.trim());
      return {
        festivalName,
        designCount: Number(designCount || 0),
        festivalDate: normalizeDateInput(festivalDate)
      };
    }).filter((item) => item.festivalName);

    appState.data.festivalCreativeLibrary = parsed;
    persistData();
    renderApp();
  };

  reader.readAsText(file);
}

function approveQuotationItem(quoteNo, itemIndex) {
  const quotation = appState.data.quotations.find((item) => item.quoteNo === quoteNo);
  if (!quotation) {
    return;
  }

  const advancePayment = Number(prompt("Enter advance payment amount", String(quotation.advancePayment || 0)) || 0);
  const paymentMethod = prompt("Enter payment method", quotation.paymentMethod || "Cash") || "Cash";

  quotation.status = "Approved";
  quotation.advancePayment = advancePayment;
  quotation.paymentMethod = paymentMethod;

  if (quotation.workType === "Digital Creative") {
    const existingCreative = appState.data.digitalCreatives.find((item) => item.quoteNo === quoteNo);
    if (!existingCreative) {
      appState.data.digitalCreatives.unshift(buildDigitalCreativeFromQuotation(quotation));
    }
  } else {
    if (!quotation.items[itemIndex]) {
      return;
    }

    const selectedItem = quotation.items[itemIndex];
    quotation.items = [selectedItem];

    const existingJob = appState.data.jobSheets.find((job) => job.quoteNo === quoteNo);
    if (!existingJob) {
      appState.data.jobSheets.unshift({
        jobNo: `JOB-${quoteNo}`,
        quoteNo,
        client: quotation.client,
        vendor: "",
        productName: selectedItem.productName,
        productSize: selectedItem.productSize,
        salePrice: selectedItem.salePrice,
        advancePayment,
        paymentMethod,
        status: "Vendor Pending"
      });
    }
  }

  persistData();
  appState.currentView = quotation.workType === "Digital Creative" ? "digitalCreatives" : "jobSheets";
  renderApp();
}

function cancelQuotation(quoteNo) {
  const quotation = appState.data.quotations.find((item) => item.quoteNo === quoteNo);
  if (!quotation) {
    return;
  }

  quotation.status = "Cancelled";
  persistData();
  renderApp();
}

function assignVendorToJob(jobNo) {
  const job = appState.data.jobSheets.find((item) => item.jobNo === jobNo);
  if (!job) {
    return;
  }

  const vendor = prompt("Assign vendor for this job", job.vendor || "Pixel Papers");
  if (!vendor) {
    return;
  }

  job.vendor = vendor;
  if (job.status === "Vendor Pending") {
    job.status = "In Printing";
  }

  persistData();
  renderApp();
}

function updateJobStatus(jobNo, nextStatus) {
  const job = appState.data.jobSheets.find((item) => item.jobNo === jobNo);
  if (!job) {
    return;
  }

  job.status = nextStatus;

  if (nextStatus === "Completed") {
    const deliveryKey = `DL-${job.jobNo}`;
    const existingDelivery = appState.data.delivery.find((item) => item.challanNo === deliveryKey);
    if (!existingDelivery) {
      appState.data.delivery.unshift({
        challanNo: deliveryKey,
        client: job.client,
        item: job.productName,
        dispatchDate: new Date().toISOString().slice(0, 10),
        courier: "Pending Assignment",
        status: "Packed"
      });
    }
  }

  persistData();
  renderApp();
}

function authenticateUser() {
  const loginId = loginIdInput.value.trim();
  const password = loginPasswordInput.value;
  const matchedUser = appState.data.users.find((user) =>
    user.loginId === loginId && user.password === password && user.status === "Active"
  );
  const isValid = Boolean(matchedUser);

  loginError.hidden = isValid;

  if (!isValid) {
    return;
  }

  appState.isLoggedIn = true;
  appState.currentUser = matchedUser;
  localStorage.setItem(LOGIN_STATE_KEY, "true");
  localStorage.setItem(LOGIN_USER_KEY, matchedUser.loginId);
  renderApp();
}

function logout() {
  appState.isLoggedIn = false;
  appState.currentUser = null;
  localStorage.removeItem(LOGIN_STATE_KEY);
  localStorage.removeItem(LOGIN_USER_KEY);
  loginError.hidden = true;
  renderApp();
}

function deleteRecord(viewName, index) {
  const records = appState.data[viewName];
  if (!records || Number.isNaN(index) || !records[index]) {
    return;
  }

  const protectedOwner =
    viewName === "users" &&
    records[index].loginId === "Degenix" &&
    records.filter((user) => user.loginId === "Degenix").length === 1;

  if (protectedOwner) {
    alert("The default owner account cannot be deleted.");
    return;
  }

  records.splice(index, 1);
  persistData();
  renderApp();
}

function loadStoredData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return normalizeStoredData(structuredClone(defaultData));
    }

    return normalizeStoredData({ ...structuredClone(defaultData), ...JSON.parse(raw) });
  } catch {
    return normalizeStoredData(structuredClone(defaultData));
  }
}

function persistData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appState.data));
  void fetch(`${API_BASE}/state`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(appState.data)
  }).catch((error) => {
    console.warn("Backend save failed. Changes remain in browser storage until the server is available again.", error);
  });
}

function normalizeStoredData(data) {
  return {
    ...data,
    users: (data.users || []).map((user) => normalizeUserRecord(user)),
    products: (data.products || []).map((product) => normalizeProductRecord(product)),
    quotations: (data.quotations || []).map((quotation) => normalizeQuotationRecord(quotation)),
    digitalCreatives: (data.digitalCreatives || []).map((creative) => normalizeDigitalCreativeRecord(creative)),
    jobSheets: (data.jobSheets || []).map((job) => normalizeJobSheetRecord(job)),
    festivalCreativeLibrary: (data.festivalCreativeLibrary || []).map((item) => ({
      festivalName: item.festivalName || "",
      designCount: Number(item.designCount || 0),
      festivalDate: normalizeDateInput(item.festivalDate)
    }))
  };
}

function normalizeUserRecord(user) {
  const departmentAccess = Array.isArray(user.departmentAccess)
    ? user.departmentAccess
    : user.role === "Owner"
      ? ["all"]
      : ["clients", "quotations"];

  return {
    fullName: user.fullName || "",
    loginId: user.loginId || "",
    password: user.password || "",
    role: user.role || "Operator",
    departmentAccess,
    status: user.status || "Active"
  };
}

function normalizeProductRecord(product) {
  return {
    productName: product.productName || product.name || "",
    productSize: product.productSize || product.size || "",
    coverPaperType: product.coverPaperType || product.category || "",
    paperGsm: Number(product.paperGsm ?? product.price ?? 0),
    innerPaperType: product.innerPaperType || product.unit || "",
    innerPaperGsm: Number(product.innerPaperGsm ?? product.stock ?? 0),
    purchasePrice: Number(product.purchasePrice ?? 0),
    salePrice: Number(product.salePrice ?? product.price ?? 0),
    laminationType: product.laminationType || product.vendor || "",
    foilingType: product.foilingType || "None"
  };
}

function normalizeQuotationRecord(quotation) {
  const items = Array.isArray(quotation.items) && quotation.items.length
    ? quotation.items.map((item) => normalizeQuotationItem(item))
    : [normalizeQuotationItem(quotation)];

  return {
    quoteNo: quotation.quoteNo || "",
    client: quotation.client || "",
    workType: quotation.workType || "Print",
    validityDate: normalizeDateInput(quotation.validityDate) || new Date(Date.now() + 7 * 86400000).toISOString().slice(0, 10),
    creativePackage: quotation.creativePackage || "",
    adDateFrom: quotation.adDateFrom || "",
    adDateTo: quotation.adDateTo || "",
    festivalName: quotation.festivalName || "",
    items,
    gst: quotation.gst || "Yes",
    advancePayment: Number(quotation.advancePayment ?? 0),
    paymentMethod: quotation.paymentMethod || "",
    status: quotation.status || "Sent"
  };
}

function normalizeQuotationItem(item) {
  return {
    productName: item.productName || item.item || "",
    productSize: item.productSize || "",
    coverPaperType: item.coverPaperType || "",
    paperGsm: Number(item.paperGsm ?? 0),
    innerPaperType: item.innerPaperType || "",
    innerPaperGsm: Number(item.innerPaperGsm ?? 0),
    laminationType: item.laminationType || "",
    foilingType: item.foilingType || "None",
    salePrice: Number(item.salePrice ?? item.amount ?? 0)
  };
}

function normalizeJobSheetRecord(job) {
  return {
    jobNo: job.jobNo || `JOB-${job.quoteNo || ""}`,
    quoteNo: job.quoteNo || "",
    client: job.client || "",
    vendor: job.vendor || "",
    productName: job.productName || "",
    productSize: job.productSize || "",
    salePrice: Number(job.salePrice ?? 0),
    advancePayment: Number(job.advancePayment ?? 0),
    paymentMethod: job.paymentMethod || "",
    status: job.status || "Vendor Pending"
  };
}

function normalizeDigitalCreativeRecord(creative) {
  return {
    trackingId: creative.trackingId || `DC-${creative.quoteNo || ""}`,
    quoteNo: creative.quoteNo || "",
    client: creative.client || "",
    creativePackage: creative.creativePackage || "Ads Package",
    festivalName: creative.festivalName || "",
    adDateFrom: creative.adDateFrom || "",
    adDateTo: creative.adDateTo || "",
    delivered: creative.delivered || "No",
    deliveryDate: creative.deliveryDate || "",
    status: creative.status || "Scheduled"
  };
}
