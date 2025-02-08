const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();

// Cors
app.use(cors());
app.options("*", cors());

// Routes
const phonesRoutes = require("./routes/phones");
app.use(`/products`, phonesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
   console.log(`Servidor en http://localhost:${PORT}`);
});
