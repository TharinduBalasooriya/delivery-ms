let express = require("express");
let app = express();
let mongoose = require("mongoose");
let router = require("./routes");

require("dotenv").config();

const PORT = 5000
const URI = "mongodb+srv://tharindu:tharindu@cluster0.vnll5.mongodb.net/ms-dilivery?retryWrites=true&w=majority"
app.get("/", (req, res) => {
  res.send("Dilvery Home route");
});

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true });

let db = mongoose.connection;
if (!db) {
  console.log("Connection - error");
} else console.log("DB Connected");

app.use("/api", router);
app.listen(PORT, () => {
    console.log("I am working on " + PORT);
  });