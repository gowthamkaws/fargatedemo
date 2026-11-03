const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Welcome to Amazon ECS Fargate!");
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy",
        platform: "AWS Fargate"
    });
});

app.get("/version", (req, res) => {
    res.json({
        version: "1.0",
        application: "ECS Fargate Demo"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
