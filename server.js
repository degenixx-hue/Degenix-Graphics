const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.env.PORT || 3000);
const HOST = process.env.HOST || "0.0.0.0";
const PUBLIC_DIR = __dirname;
const DATA_DIR = path.join(__dirname, "data");
const STATE_PATH = path.join(DATA_DIR, "state.json");

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

const defaultState = {
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
    }
  ],
  vendors: [
    { name: "Pixel Papers", material: "Art Card & Matte", phone: "+91 99000 55443", city: "Surat", due: 24000 },
    { name: "Metro Media Supplies", material: "Flex & Ink", phone: "+91 98190 40211", city: "Mumbai", due: 11800 }
  ],
  accounts: [
    { ledger: "Cash in Hand", type: "Asset", amount: 68500, note: "Daily collections" },
    { ledger: "HDFC Current Account", type: "Bank", amount: 124300, note: "Main operating account" },
    { ledger: "GST Payable", type: "Liability", amount: 28440, note: "Current tax cycle" }
  ],
  quotations: [],
  digitalCreatives: [],
  jobSheets: [],
  billing: [],
  delivery: [],
  payroll: [],
  festivalCreativeLibrary: [
    { festivalName: "Diwali", designCount: 52, festivalDate: "2026-11-08" },
    { festivalName: "Navratri", designCount: 24, festivalDate: "2026-10-09" },
    { festivalName: "Christmas", designCount: 18, festivalDate: "2026-12-25" }
  ]
};

ensureStateFile();

const server = http.createServer(async (req, res) => {
  try {
    if (req.url === "/health") {
      return sendJson(res, 200, { status: "ok" });
    }

    if (req.url === "/api/state" && req.method === "GET") {
      return sendJson(res, 200, readState());
    }

    if (req.url === "/api/state" && req.method === "POST") {
      const payload = await readJsonBody(req);
      if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
        return sendJson(res, 400, { error: "Invalid state payload." });
      }

      writeState(payload);
      return sendJson(res, 200, { success: true });
    }

    if (req.method !== "GET" && req.method !== "HEAD") {
      return sendJson(res, 405, { error: "Method not allowed." });
    }

    return serveStatic(req, res);
  } catch (error) {
    console.error(error);
    return sendJson(res, 500, { error: "Internal server error." });
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Soulution Print OS running on http://${HOST}:${PORT}`);
});

function ensureStateFile() {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(STATE_PATH)) {
    fs.writeFileSync(STATE_PATH, JSON.stringify(defaultState, null, 2), "utf8");
  }
}

function readState() {
  try {
    return JSON.parse(fs.readFileSync(STATE_PATH, "utf8"));
  } catch {
    return defaultState;
  }
}

function writeState(state) {
  fs.writeFileSync(STATE_PATH, JSON.stringify(state, null, 2), "utf8");
}

async function readJsonBody(req) {
  let raw = "";
  for await (const chunk of req) {
    raw += chunk;
  }

  if (!raw) {
    return null;
  }

  return JSON.parse(raw);
}

function serveStatic(req, res) {
  const requestPath = req.url === "/" ? "/index.html" : req.url.split("?")[0];
  const safePath = path.normalize(requestPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(PUBLIC_DIR, safePath);

  if (!filePath.startsWith(PUBLIC_DIR)) {
    return sendJson(res, 403, { error: "Forbidden." });
  }

  fs.stat(filePath, (error, stats) => {
    if (error || !stats.isFile()) {
      return sendFile(res, path.join(PUBLIC_DIR, "index.html"));
    }

    return sendFile(res, filePath);
  });
}

function sendFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || "application/octet-stream";
  const stream = fs.createReadStream(filePath);
  res.writeHead(200, { "Content-Type": contentType });
  stream.pipe(res);
  stream.on("error", () => {
    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Unable to read file.");
  });
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(payload));
}
