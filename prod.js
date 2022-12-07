const express = require("express");
const path = require("path");
const app = express();
app.use(express.json({ extended: false }));
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));
app.use("/static/image", express.static(path.resolve(__dirname, "frontend", "static/image")));
app.use('/scss', express.static(path.join(__dirname, '../static/css')))
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));