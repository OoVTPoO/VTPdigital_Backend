const express = require("express");
const cors = require("cors");
const vtpsRouter = require("./app/routes/vtp.route");

const ApiError = require("./app/api-error");

const app = express();

app.use("/api/contacts", contactsRouter);

app.use((req, res, next) => {

    return next(new ApiError(404, "Resource not found"));
    });

    app.use((err, req, res, next) => {

    return res.status(error.statusCode || 500).json({
    message: error.message || "Internal Server Error",
    });
    });

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "Welcome to VTPdigital"});
});

app.use("/api/vtps", vtpsRouter);

module.exports = app;