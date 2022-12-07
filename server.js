const express = require("express");
const path = require("path");
const app = express();
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));
app.use("/static/image", express.static(path.resolve(__dirname, "frontend", "static/image")));
app.use('/scss', express.static(path.join(__dirname, '../static/css')))
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || 3000, () => console.log("Server running..."));
module.exports = app;