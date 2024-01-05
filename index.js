const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const routerProduct = require("./routes/productRoute");


const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 8080;

app.use("/product", routerProduct);



app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

//connected to database then run the server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`);
  });
});
