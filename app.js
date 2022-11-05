const express = require("express");
const cors = require("cors");
const vtpsRouter = require("./app/routes/vtp.route");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "Welcome to VTPdigital"});
});

app.use("/api/vtps", vtpsRouter);

module.exports = app;