const express = require("express");
const cors = require("cors");
const rowRouter = require("./routes/row.routs");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", rowRouter);

app.listen(PORT, () => console.log("Server is started on port " + PORT));
