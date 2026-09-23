const express = require("express");

const app = express();

app.use(express.json());

const staffRoutes = require("./routes/staffRoutes");

app.use("/api/staff", staffRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});