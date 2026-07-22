const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "BellagioAir interview prep pipeline is live",
    deployedAt: new Date().toISOString(),
  });
});

app.get("/health", (req, res) => {
  res.status(200).send("healthy");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
