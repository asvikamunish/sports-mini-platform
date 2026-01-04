const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());          // 🔥 THIS LINE IS REQUIRED
app.use(express.json());

app.get("/test", (req, res) => {
  res.json({ message: "Backend is alive" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
