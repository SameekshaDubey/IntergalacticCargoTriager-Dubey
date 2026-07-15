const express = require("express");

const app = express();

const cargo = require("./cargo.json");





app.listen(3000, () => {
    console.log("Server running on port 3000");
});