const express = require("express");

const router = express.Router();

// Staff Registration
router.post("/register", (req, res) => {
    res.send("Staff registration");
});

// Staff Login
router.post("/login", (req, res) => {
    res.send("Staff login");
});

// Update Staff Profile
router.put("/profile", (req, res) => {
    res.send("Update staff profile");
});

// View Students
router.get("/students", (req, res) => {
    res.send("View all students");
});

// View OD Applications
router.get("/od", (req, res) => {
    res.send("View OD applications");
});

// Approve OD
router.put("/od/:id/approve", (req, res) => {
    res.send("OD approved");
});

module.exports = router;