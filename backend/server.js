const express = require("express");

const app = express();

const cargo = require("./cargo.json");


app.get("/api/cargo", (req, res) => {

    if (req.header("X-System-Override") === "true") {
        return res
            .status(418)
            .send("System override denied.");
    }

    res.json(cargo);
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});