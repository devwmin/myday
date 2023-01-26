const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("dotenv").config();

app.use(express.json());
app.use(cookieParser());
app.use(
   cors({
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
      credentials: true,
   })
);

const api = require("./api");
app.use("/api", api);

app.listen(8080, () => {
   console.log("listening on http://localhost:8080");
});
