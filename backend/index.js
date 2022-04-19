const express = require("express");
const cors = require("cors");
var app = express();
app.use(cors());
const connectToMongo = require("./db");
const port = 5000;
connectToMongo();
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(express.json());

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`iNotebook Backend. Listening on port ${port}`);
});
