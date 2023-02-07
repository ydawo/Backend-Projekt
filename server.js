import express from "express";
import dotenv from "dotenv";
import router from "./router/productsRouter.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());
app.use("/api/products", router);
app.listen(port, () => {
  console.log("verbinden mit " + port);
});
