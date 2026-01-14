const express = require("express");
const os = require("os");
const dns = require("dns");

const readFileData = require("./read");

const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  res.send("Server is running");
});

// Test route
app.get("/test", (req, res) => {
  res.send("Test route is working!");
});

// Read file route
app.get("/readfile", (req, res) => {
  try {
    const data = readFileData();
    res.send(data);
  } catch (error) {
    res.status(500).send("Error reading file");
  }
});

// System details route
app.get("/systemdetails", (req, res) => {
  const systemInfo = {
    platform: os.platform(),
    totalMemory: `${Math.round(os.totalmem() / 1024 / 1024 / 1024)} GB`,
    freeMemory: `${Math.round(os.freemem() / 1024 / 1024 / 1024)} GB`,
    cpuModel: os.cpus()[0].model,
    cpuCores: os.cpus().length 
  };

  res.json(systemInfo);
});

// Get IP route
app.get("/getip", (req, res) => {
  dns.lookup("masaischool.com", { all: true }, (err, addresses) => {
    if (err) {
      res.status(500).send("DNS lookup failed");
    } else {
      res.json({
        hostname: "masaischool.com",
        addresses
      });
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
